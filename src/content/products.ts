import type { Product } from "./types";
import { r2 } from "./r2";

// Source: Elvacore Website Content Specification v1.0 (May 2026). Elvacore
// Technologies LLP is the authorised Indian distributor and the copy below is
// the verified text approved by the business owner.
//
// Image paths follow the convention public/images/products/<slug>/01.<ext>.
// Datasheets live in R2 under the `datasheets/` prefix, see r2() helper.
export const products: Product[] = [
  // ---------- Industrial · Motion Control ----------
  {
    slug: "gts-pcie",
    title: "GTS-PCIe Series Motion Control Card",
    category: "motion-control",
    summary:
      "PCIe multi-axis general-purpose motion controller for stepping and servo motors. DSP + FPGA architecture, 4 or 8 axes per card.",
    description:
      "The GTS-PCIe Series are PCIe multiple-axis general-purpose motion controllers for stepping motor and servo motor control. Implementing motion planning via DSP and FPGA, they output pulse or analog commands and are designed for compact industrial PCs with PCIe slots. Supporting point-to-point, continuous path, multi-axis synchronisation, and linear / arc / helix / 3D linear interpolation, they are widely used in CNC, semiconductor, laser processing, SMT, and assembly automation.",
    features: [
      "DSP + FPGA architecture for real-time motion planning",
      "4-axis (GTS-400) or 8-axis (GTS-800) control on a single PCIe card",
      "Pulse/Direction and Analog (±10V) output command modes",
      "Point-to-point, continuous path, and multi-axis synchronisation",
      "Linear, arc, helix, and 3D linear interpolation",
      "Programmable S-curve acceleration / deceleration",
      "Programming via VC, VB, C#, LabVIEW library files",
      "Compatible with stepping motors and AC/DC servo motors",
    ],
    applications: [
      "PCB drilling and routing machines",
      "Semiconductor crystal bonder and bonding machines",
      "Electronic processing: winding, dispensing, SMT, plug-in machines",
      "Metallurgical: flying shear, straightening, levelling, rolling",
      "Glasses frame and precision optics processing equipment",
      "Packaging: paste box machines, bronzing machines",
      "Printing and dyeing: bronzing and printing press machines",
      "Testing: AOI and coordinate measuring equipment",
    ],
    specifications: [
      { label: "Architecture", value: "DSP + FPGA" },
      {
        label: "Axes Supported",
        value:
          "4 axes (GTS-400-PG-PCIE-00) or 8 axes (GTS-800-PG-PCI-G) per card",
      },
      { label: "Bus Interface", value: "PCI-Express (PCIe x1)" },
      { label: "Output Modes", value: "Pulse/Direction and Analog ±10 V" },
      {
        label: "Motion Modes",
        value: "Point-to-point, Continuous path, Multi-axis synchronisation",
      },
      { label: "Interpolation", value: "Linear, Arc, Helix, 3D Linear" },
      {
        label: "Acceleration Profile",
        value: "S-curve and trapezoidal (user-configurable)",
      },
      { label: "Programming", value: "VC, VB, C#, LabVIEW development libraries" },
      { label: "Compatible Motors", value: "Stepping motors and AC/DC servo motors" },
    ],
    images: ["/images/products/gts-pcie/01.jpeg"],
    datasheet: r2("datasheets/GTS_PCIe-Datasheet.pdf"),
    featured: true,
    order: 1,
  },
  {
    slug: "gus-guc-embedded",
    title: "GUS / GUC Series Embedded Motion Controllers",
    category: "motion-control",
    summary:
      "Highly integrated embedded controllers combining computer, motion controller, and PLC.",
    description:
      "The GUS and GUC Series are all-in-one embedded motion controllers that integrate an industrial computer, multi-axis motion controller, and PLC functions into one device. GUS units are standalone box-type controllers; GUC units are compact cabinet-mount variants. Both series support gLink EtherCAT and pulse-type servo/stepper drives and are widely used in semiconductor, electronics, and precision machining OEM machines where space and reliability are critical.",
    features: [
      "All-in-one: IPC + motion controller + PLC in one device",
      "Supports 4, 8, or 16 axes (model-dependent)",
      "EtherCAT (gLink) and pulse output drive interfaces",
      "GUS: standalone box-type | GUC: compact cabinet-mount",
      "Windows CE / Windows Embedded real-time OS",
      "Compatible with PMAC software and C/C++ API",
      "Built-in digital I/O, high-speed counters, and serial communications",
    ],
    applications: [
      "Standalone OEM machine control without a host PC",
      "Semiconductor and electronics assembly machines",
      "Precision machining and laser systems",
      "Panel PC / touch-screen HMI integration",
    ],
    specifications: [
      {
        label: "Models",
        value: "GUS Series (standalone IPC-based) | GUC Series (compact cabinet-mount)",
      },
      { label: "Axes", value: "4, 8, or 16 axes (model-dependent)" },
      { label: "Drive Interfaces", value: "EtherCAT (gLink) and pulse output" },
      { label: "OS", value: "Windows CE / Windows Embedded real-time" },
      { label: "Programming", value: "PMAC software with C/C++ API" },
      {
        label: "I/O & Comms",
        value: "Digital I/O, high-speed counters, serial communications",
      },
    ],
    images: ["/images/products/gus-guc-embedded/01.jpeg"],
    datasheet: r2(
      "datasheets/Datasheet - GUC-T Series Embedded Motion Controller.pdf",
    ),
    order: 2,
  },

  // ---------- Industrial · PLC ----------
  {
    slug: "ideabox-pro",
    title: "iDEABOX Pro Intelligent Controller",
    category: "plc",
    summary:
      "X86-architecture intelligent controller integrating motion control and PLC functionality in one compact industrial unit.",
    description:
      "The iDEABOX Pro is an X86-architecture intelligent controller that integrates an industrial computer, motion controller, and PLC in a single compact unit. Running Windows-based real-time control software, it eliminates the need for a separate host PC, making it ideal for space-constrained machine cabinets. Designed for OEM machine builders requiring an integrated motion + logic controller solution.",
    features: [
      "X86 processor architecture, runs Windows-based control software",
      "Integrated motion controller + PLC in one unit",
      "Eliminates separate host PC requirement",
      "Compact industrial cabinet-mount design",
      "Digital I/O, analog I/O, and fieldbus communication interfaces",
      "Supports GTS and gLink motion control libraries",
      "Compatible with standard HMI panels and SCADA systems",
    ],
    applications: [
      "Space-constrained machine cabinets",
      "OEM machines combining motion and PLC logic",
      "Factory automation with HMI / SCADA integration",
      "Data acquisition and real-time processing",
    ],
    images: ["/images/products/ideabox-pro/01.jpeg"],
    datasheet: r2("datasheets/Datasheet - iDEABOX Pro.pdf"),
    featured: true,
    order: 1,
  },

  // ---------- Industrial · Servo Drive ----------
  {
    slug: "gshd-servo-drive",
    title: "GSHD Series High-Performance Servo Drive",
    category: "servo-drive",
    summary:
      "High-performance servo drive with FFD algorithm and time-domain auto-tuning. Supports 26-bit encoder resolution and anti-vibration control.",
    description:
      "The GSHD Series is a high-performance AC servo drive designed for precision motion applications. It features an advanced Feed-Forward Derivative (FFD) algorithm and time-domain auto-tuning to achieve fast dynamic response and high positional accuracy. With 26-bit absolute encoder resolution, anti-vibration control, and support for EtherCAT bus communication, the GSHD is suitable for demanding semiconductor, CNC, robotics, and automated assembly applications.",
    features: [
      "FFD (Feed-Forward Derivative) control algorithm for superior tracking accuracy",
      "Time-domain automatic servo tuning, minimal manual parameterisation",
      "26-bit absolute encoder interface for ultra-high-resolution position feedback",
      "Anti-vibration suppression algorithm for stable high-speed motion",
      "EtherCAT, CANopen, and RS-485 communication interfaces",
      "Regenerative braking with built-in resistor",
      "Single-phase and three-phase input variants available",
      "Compatible with GTS-PCIe and GUS/GUC motion controllers",
    ],
    applications: [
      "High-precision PCB drilling machines",
      "Coordinate measuring machines (CMM)",
      "Semiconductor wafer processing and bonding",
      "High-speed laser cutting and engraving",
      "CNC machining centres and grinding machines",
      "Industrial robot joint drives",
      "Automated production lines and 3C equipment",
    ],
    specifications: [
      { label: "Example Model", value: "GSHD-4D52AAP1-LT (400W, single-phase)" },
      { label: "Power Rating", value: "200W to 7.5kW (multiple variants)" },
      {
        label: "Input Voltage",
        value: "Single-phase 220V AC or Three-phase 220V/380V AC",
      },
      { label: "Encoder Resolution", value: "26-bit absolute encoder" },
      {
        label: "Communication",
        value: "EtherCAT, CANopen, RS-485, Pulse/Direction",
      },
      { label: "Control Algorithm", value: "FFD + time-domain auto-tuning" },
      {
        label: "Protection",
        value: "Overvoltage, overcurrent, overtemperature, encoder fault",
      },
      { label: "Operating Temperature", value: "0°C to 55°C" },
    ],
    images: ["/images/products/gshd-servo-drive/01.jpeg"],
    datasheet: r2("datasheets/GHSD-Servo.pdf"),
    featured: true,
    order: 1,
  },

  // ---------- Educational · AI Training ----------
  {
    slug: "ai-training-box",
    title: "AI Training Box",
    category: "ai-training",
    summary:
      "AI training platform integrating CNC motion technology with deep learning, ideal for engineering labs and university courses.",
    description:
      "The AI Training Box is a comprehensive hands-on platform designed for engineering colleges and corporate training centres. It combines industrial-grade motion control hardware with AI and deep learning software frameworks, enabling students and engineers to learn industrial AI, from basic machine learning to computer vision and motion-integrated AI quality control, using real CNC-grade motion hardware.",
    features: [
      "Combines industrial motion control hardware with AI/deep learning software",
      "Suitable for engineering undergraduate and postgraduate AI courses",
      "Covers: machine learning fundamentals, computer vision, motion + AI integration",
      "Python and MATLAB compatible programming environments",
      "Includes structured course content and experiment guides",
      "Plug-and-play setup, ready for lab deployment",
    ],
    applications: [
      "AI/ML engineering laboratory courses",
      "Computer vision and intelligent control experiments",
      "CNC technology training and skill development",
      "Industry 4.0 and smart manufacturing education",
      "Corporate upskilling programmes",
    ],
    images: ["/images/products/ai-training-box/01.png"],
    datasheet: r2("datasheets/AI-training-box.pdf"),
    featured: true,
    order: 1,
  },

  // ---------- Educational · Intelligent Control ----------
  {
    slug: "gsmt-servo-platform",
    title: "GSMT Series DC Servo Experiment Platform",
    category: "educational-intelligent-control",
    summary:
      "DC servo PID training platform with three model variants for control coursework.",
    description:
      "The GSMT Series is a DC servo PID experiment platform designed for undergraduate and postgraduate control engineering coursework. Available in three model configurations, it allows students to design, implement, and analyse PID controllers on a real servo system, observing step response, frequency response, and disturbance rejection in real time.",
    features: [
      "Real DC servo motor with encoder feedback for closed-loop PID experiments",
      "Three GSMT model variants with different load and inertia configurations",
      "MATLAB / Simulink compatible data acquisition interface",
      "Real-time display of position, velocity, and current waveforms",
      "Ideal for undergraduate control engineering lab coursework",
    ],
    applications: [
      "Undergraduate and postgraduate control engineering labs",
      "PID tuning and frequency-response analysis exercises",
      "MATLAB/Simulink hardware-in-the-loop experiments",
      "Mechatronics and servo system identification courses",
    ],
    images: ["/images/products/gsmt-servo-platform/01.jpg"],
    datasheet: r2("datasheets/GSMT-series-datasheet.pdf"),
    order: 1,
  },
  {
    slug: "mls-magnetic-levitation",
    title: "Magnetic Levitation System (MLS)",
    category: "educational-intelligent-control",
    summary:
      "LED and opto-electronic sensor magnetic levitation trainer for control courses.",
    description:
      "The Magnetic Levitation System (MLS) is an advanced control experiment platform that uses an electromagnetic coil to levitate a steel ball at a controlled height, measured by an LED and opto-electronic sensor. The highly nonlinear open-loop-unstable nature of the plant makes it an excellent real-world test bench for PID, state-space, H-infinity, and other advanced control strategies.",
    features: [
      "Electromagnetic levitation of a steel ball, open-loop unstable plant",
      "LED and opto-electronic gap sensor for real-time position measurement",
      "Ideal for PID, LQR, state-space, and advanced control experiments",
      "MATLAB / Simulink data acquisition and control interface",
      "Compact benchtop design for engineering laboratory use",
    ],
    applications: [
      "Advanced control theory coursework (PID, LQR, H-infinity)",
      "Postgraduate algorithm research and thesis projects",
      "Control engineering demonstrations and competitions",
      "Feedback-system identification and observer design",
    ],
    images: ["/images/products/mls-magnetic-levitation/01.png"],
    datasheet: r2("datasheets/MLS-Datasheet.pdf"),
    order: 2,
  },
  {
    slug: "linear-inverted-pendulum",
    title: "Linear Inverted Pendulum (GLIP Series)",
    category: "educational-intelligent-control",
    summary:
      "GLIP series linear inverted pendulum platform, 1-stage to 4-stage configurations.",
    description:
      "The GLIP Series Linear Inverted Pendulum is a classical benchmark platform for control system design, testing, and education. A cart driven by a linear servo motor must balance one or more pendulum stages in the upright position, a challenging nonlinear, multi-variable control problem. Available in single-stage to four-stage configurations for increasing complexity.",
    features: [
      "Linear servo-driven cart with 1-stage to 4-stage pendulum configurations",
      "Classic benchmark for nonlinear control, LQR, and swingup experiments",
      "High-resolution encoders on cart and all pendulum joints",
      "MATLAB / Simulink compatible, full model and experiment guides included",
      "Used in universities worldwide for control engineering research and teaching",
    ],
    applications: [
      "Undergraduate and postgraduate control-theory courses",
      "Nonlinear control and LQR research",
      "Swingup and stabilisation experiments",
      "Robotics and aerospace control research",
    ],
    images: ["/images/products/linear-inverted-pendulum/01.jpeg"],
    datasheet: r2("datasheets/LinearInvertedPendulum-datasheet.pdf"),
    order: 3,
  },
];
