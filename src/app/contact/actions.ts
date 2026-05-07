"use server";

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot — bots fill hidden fields, real users don't.
  if ((formData.get("company_website") as string)?.length) {
    return { status: "success" }; // pretend success, silently drop
  }

  const name = (formData.get("name") as string)?.trim() ?? "";
  const email = (formData.get("email") as string)?.trim() ?? "";
  const phone = (formData.get("phone") as string)?.trim() ?? "";
  const organization =
    (formData.get("organization") as string)?.trim() ?? "";
  const topic = (formData.get("topic") as string)?.trim() ?? "General enquiry";
  const message = (formData.get("message") as string)?.trim() ?? "";

  const fieldErrors: Record<string, string> = {};
  if (!name) fieldErrors.name = "Please enter your name.";
  if (!email) fieldErrors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email))
    fieldErrors.email = "Please enter a valid email.";
  if (!message) fieldErrors.message = "Please enter a message.";
  else if (message.length < 10)
    fieldErrors.message = "Please write at least 10 characters.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors,
    };
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("WEB3FORMS_ACCESS_KEY is not set");
    return {
      status: "error",
      message:
        "Contact form is temporarily unavailable. Please email us directly at elvacoretechnologies@gmail.com.",
    };
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `[Elvacore site] ${topic}`,
        from_name: "Elvacore website",
        replyto: email,
        // Fields below show up in the email
        Name: name,
        Email: email,
        Phone: phone || "—",
        Organization: organization || "—",
        Topic: topic,
        Message: message,
      }),
    });

    const data = (await res.json().catch(() => ({}))) as {
      success?: boolean;
      message?: string;
    };

    if (!res.ok || !data.success) {
      return {
        status: "error",
        message:
          data.message ||
          "Something went wrong sending your message. Please try again or email us directly.",
      };
    }
    return { status: "success" };
  } catch (err) {
    console.error("contact form submit failed", err);
    return {
      status: "error",
      message:
        "We couldn't reach our mail service. Please try again in a few minutes.",
    };
  }
}
