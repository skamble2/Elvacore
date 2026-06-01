import type { Solution } from "./types";

export const solutions: Solution[] = [
  {
    slug: "smart-city",
    title: "Smart City",
    type: "smart-city",
    summary:
      "Connected infrastructure for urban environments, sensing, water management, waste, and indoor farming automation.",
    body: "Elvacore supplies motion control and intelligent controller products that power smart city applications, including autonomous cleaning robots, environmental monitoring systems, smart water management, automated waste handling, and controlled-environment agriculture. These systems integrate precision motion controllers with IoT sensors and AI platforms for real-time urban infrastructure management.",
    keyApplications: [
      "Autonomous street-cleaning robots",
      "Smart irrigation and water management",
      "Automated waste sorting",
      "Indoor vertical farming",
      "Environmental monitoring stations",
    ],
    relatedProducts: ["ideabox-pro", "gus-guc-embedded"],
  },
  {
    slug: "smart-industry",
    title: "Smart Industry",
    type: "smart-industry",
    summary:
      "Motion control, robotics, and automation systems for high-throughput precision manufacturing.",
    body: "Elvacore serves Indian industrial machine builders with a complete range of precision automation products, GTS-PCIe motion cards, GUS/GUC embedded controllers, GSHD servo drives, and iDEABOX Pro PLCs. Our end-to-end support covers product supply, system integration, commissioning, and AMC for manufacturing sectors including semiconductors, electronics, CNC machining, packaging, and robotics.",
    keyApplications: [
      "CNC machine tools and machining centres",
      "Semiconductor and electronics assembly",
      "Robotic welding and pick-and-place",
      "Laser cutting and marking",
      "Packaging, printing, and textile machines",
      "AGV and conveyor systems",
    ],
    relatedProducts: [
      "gts-pcie",
      "gus-guc-embedded",
      "gshd-servo-drive",
      "ideabox-pro",
    ],
  },
  {
    slug: "education-training",
    title: "Education & Training",
    type: "education-training",
    summary:
      "Hands-on engineering training kits and complete curricula for universities and industry partners.",
    body: "Elvacore works directly with engineering colleges, universities, and corporate training centres to supply a complete educational automation product range, DC servo experiment platforms, magnetic levitation systems, linear inverted pendulum trainers, and the AI Training Box. We provide complete lab setup, course curriculum support, and faculty training. MOUs with engineering institutions available, contact us to discuss institutional partnerships.",
    keyApplications: [
      "Control engineering labs (PID, LQR, state-space)",
      "AI and machine learning labs",
      "Motion control and robotics labs",
      "Industry 4.0 and IIoT training",
      "Corporate upskilling programmes",
    ],
    relatedProducts: [
      "ai-training-box",
      "gsmt-servo-platform",
      "mls-magnetic-levitation",
      "linear-inverted-pendulum",
    ],
  },
];
