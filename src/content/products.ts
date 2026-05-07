import type { Product } from "./types";

// NOTE: All `description`, `features`, and `applications` text below is
// PLACEHOLDER and must be replaced with original Elvacore-authored marketing
// copy before launch. The factual feature/application bullets are kept here
// only as a starting point — DO NOT publish these word-for-word from a
// competitor's catalogue.
//
// Image paths follow the convention public/images/products/<slug>/01.<ext>.
export const products: Product[] = [
  // ---------- Industrial · Motion Control ----------
  {
    slug: "gts-pcie",
    title: "GTS-PCIe Series Motion Control Card",
    category: "motion-control",
    summary:
      "PCIe multi-axis general-purpose motion controller for stepping and servo motors.",
    description:
      "A general-purpose multi-axis motion controller using DSP and FPGA for trajectory planning, with a PCIe interface for compact industrial PCs. Supports point-to-point, continuous-path, multi-axis synchronisation, and linear / arc / helix / 3D linear interpolation modes.",
    features: [
      "Point-to-point, continuous path and multi-axis synchronised motion",
      "Linear, arc, helix and 3D linear interpolation",
      "Configurable acceleration, deceleration and S-curve smoothing",
      "Library support for VC, VB, C# and LabVIEW",
      "Pulse and analog command outputs",
    ],
    applications: [
      "PCB drilling machines",
      "Semiconductor crystal bonders",
      "SMT, dispensing, plug-in and bending machines",
      "CNC machining and laser processing",
      "Textile, packaging and assembly-line workstations",
      "AOI testing and measuring equipment",
    ],
    images: ["/images/products/gts-pcie/01.jpg"],
    featured: true,
    order: 1,
  },
  {
    slug: "gen-ethercat-card",
    title: "GEN Series EtherCAT Motion Control Card",
    category: "motion-control",
    summary:
      "Multi-axis EtherCAT motion control card supporting up to 64 synchronised axes.",
    description:
      "An EtherCAT-fieldbus motion control card that integrates the EtherCAT master, with module extension via proprietary high-speed and EtherCAT IO. Suited for high-axis-count synchronous motion across 3C manufacturing, lithium battery packaging, textile and semiconductor lines.",
    features: [
      "Up to 64-axis synchronous motion control",
      "Standard EtherCAT protocol — compatible with CoE slave stations",
      "Advanced S-curve interpolation with look-ahead planning",
      "Spatial circular arc, helix, electronic gear and electronic cam",
      "User-defined velocity planning and embedded motion programs",
      "EtherCAT and proprietary high-speed IO connection modes",
      "PCIe (x1) host interface",
    ],
    applications: [
      "3C manufacturing and assembly",
      "Lithium battery packaging",
      "Textile and printing machinery",
      "Semiconductor processing",
    ],
    images: ["/images/products/gen-ethercat-card/01.jpg"],
    featured: true,
    order: 2,
  },
  {
    slug: "gsn-motion-card",
    title: "GSN Series Motion Control Card",
    category: "motion-control",
    summary:
      "Networked, modular plug-in motion controller for distributed field control.",
    description:
      "A modular plug-in motion controller. The main card handles motion calculations and connects to drivers and motion modules over a high-speed bus, letting you compose 4-axis, 6-axis, or laser/galvanometer modules into a flexible distributed system.",
    features: [
      "Modular controller card with bus-based driver and module expansion",
      "4-axis, 6-axis, and laser / galvanometer module options",
      "Distributed field motion control architecture",
      "High-speed and high-precision motion planning",
    ],
    applications: [
      "5-axis CNC machine tools",
      "6-axis robots",
      "Microelectronic packaging",
      "High-speed laser equipment",
      "3C industry processing and testing",
      "Textile, packaging, printing and assembly-line workstations",
    ],
    images: ["/images/products/gsn-motion-card/01.png"],
    order: 3,
  },

  // ---------- Industrial · PLC ----------
  {
    slug: "ideabox-pro",
    title: "iDEABOX Pro Intelligent Controller",
    category: "plc",
    summary:
      "x86-based intelligent controller combining motion control and PLC capabilities.",
    description:
      "A high-performance x86 controller that integrates motion control with PLC technology. Includes USB, COM, LAN, digital and analog IO, EtherCAT, CAN and HDMI interfaces, plus expansion modules over the proprietary high-speed bus. Suited to data acquisition, processing and machine-vision-driven automation.",
    features: [
      "Up to 64-axis synchronous motion control",
      "Minimum control cycle of 250 µs",
      "Multi-axis interpolation, Jog, PT, PVT, electronic gear and electronic cam",
      "IEC 61131-3 compliant programming environment",
      "Remote diagnosis and debugging",
      "Optional encryption chip for software protection",
      "Optional power-failure protection",
    ],
    applications: [
      "Machine-vision-driven automation",
      "Data acquisition and processing",
      "High-axis-count synchronous motion systems",
    ],
    images: [],
    featured: true,
    order: 1,
  },

  // ---------- Industrial · Servo Drive ----------
  {
    slug: "gshd-servo-drive",
    title: "GSHD Series High-Performance Servo Drive",
    category: "servo-drive",
    summary:
      "Compact high-performance servo drive for permanent magnet motors.",
    description:
      "A high-performance servo drive with a compact form factor and quick tuning. Medium-voltage variants drive 200 W to 7,300 W motors; high-voltage variants support up to 7.5 kW. Operates in position, velocity, or current (torque) mode and accepts analog, pulse, or network commands.",
    features: [
      "Position, velocity and current (torque) control modes",
      "Mode switching at runtime",
      "Analog, pulse and network command interfaces",
      "EtherCAT and gigabit-Ethernet communication",
      "Graphical tuning software for parameter setup",
    ],
    applications: [
      "High-precision laser processing",
      "Semiconductor manufacturing",
      "Industrial robots",
      "CNC machining centres",
      "Automation production lines",
      "3C equipment",
    ],
    images: [],
    featured: true,
    order: 1,
  },

  // ---------- Educational · AI Training ----------
  {
    slug: "ai-training-box",
    title: "AI Training Box",
    category: "ai-training",
    summary:
      "AI development kit for teaching artificial intelligence concepts hands-on.",
    description:
      "A teaching kit aimed at AI-related programmes. Integrates an edge-compute terminal with 2D and depth vision, a robot arm, speech recognition, and embedded sensors — covering the main AI application scenarios from data collection through to model-based inference.",
    features: [
      "Edge-compute terminal",
      "2D and depth (3D) vision modules",
      "Robot arm",
      "Speech-recognition module",
      "Embedded sensors",
      "End-to-end workflow: data collection through inference",
    ],
    applications: [
      "Python programming courses",
      "Machine learning and deep learning",
      "Digital image processing and machine vision",
      "Depth perception and speech recognition",
      "Embedded systems courses",
      "Vision-based robotics labs",
    ],
    images: ["/images/products/ai-training-box/01.png"],
    featured: true,
    order: 1,
  },

  // ---------- Educational · Intelligent Control ----------
  {
    slug: "linear-inverted-pendulum",
    title: "Linear Inverted Pendulum",
    category: "educational-intelligent-control",
    summary:
      "Open, modular inverted-pendulum platform for teaching control theory.",
    description:
      "A nonlinear, unstable system that's an ideal teaching platform for control theory. Built on a linear motion module base, the modular design lets a single rig support over ten different teaching and experiment configurations. Useful for visualising stability, controllability and modern control concepts.",
    features: [
      "Root locus correction",
      "PID correction",
      "Frequency-domain correction",
      "State-feedback control",
      "Mechanism modelling and stability analysis",
      "Open-loop frequency response testing",
    ],
    applications: [
      "Undergraduate and postgraduate control-theory courses",
      "Modern control research and method development",
      "Stability and controllability demonstrations",
    ],
    images: ["/images/products/linear-inverted-pendulum/01.jpeg"],
    order: 1,
  },
  {
    slug: "gbb-ball-beam",
    title: "GBB Ball & Beam Control System",
    category: "educational-intelligent-control",
    summary:
      "Classic ball-and-beam experiment platform for feedback control coursework.",
    description:
      "Designed for automatic control, modern control engineering and electric motor control courses. A stainless-steel ball rolls along a v-grooved track; a DC motor and gear reducer set the beam angle. A linear sensor reads the ball's position via the bar's output voltage.",
    features: [
      "System modelling and identification",
      "Feedback controller design",
      "P, PD and PID control system design",
      "Root locus and frequency response design methods",
    ],
    applications: [
      "Automatic control coursework",
      "Modern control engineering labs",
      "Electric motor control coursework",
    ],
    images: ["/images/products/gbb-ball-beam/01.jpg"],
    order: 2,
  },
  {
    slug: "gsmt-servo-platform",
    title: "GSMT Series DC Servo Control Trainer",
    category: "educational-intelligent-control",
    summary:
      "DC servo experiment platform for elementary control and automation courses.",
    description:
      "A teaching platform for electronic, computer, and mechanical engineering courses. Variants include a single-motor system on an intelligent servo drive (GSMT2012), a twin-motor system supporting MATLAB/Simulink real-time experiments (GSMT2014), and a controller-free option (GSMT2004) that lets students integrate their own or third-party controllers.",
    features: [
      "PID influence on system performance metrics",
      "PID tuning across current, speed and position controllers",
      "Damping torque and disturbance torque effects",
      "Time-domain, root-locus and frequency-domain analysis",
      "State feedback control",
    ],
    applications: [
      "Electronic and computer engineering courses",
      "Mechanical engineering courses",
      "MATLAB/Simulink real-time control experiments",
      "Custom-controller integration projects",
    ],
    images: ["/images/products/gsmt-servo-platform/01.jpg"],
    order: 3,
  },
  {
    slug: "mls-magnetic-levitation",
    title: "Magnetic Levitation System (MLS)",
    category: "educational-intelligent-control",
    summary:
      "Compact magnetic-levitation rig for control-theory and feedback-system labs.",
    description:
      "A simple but visually compelling rig that levitates one or more steel balls using an electromagnet, optoelectronic sensing, an analogue control module and a data-acquisition card. Supports a wide range of automatic control, control theory and feedback-system experiments at undergraduate and postgraduate level.",
    features: [
      "PID correction",
      "Root locus correction",
      "Frequency-domain correction",
      "State-feedback control",
      "Mechanism modelling and stability analysis",
    ],
    applications: [
      "Undergraduate and postgraduate course design",
      "Algorithm research",
      "Feedback-system demonstrations",
    ],
    images: ["/images/products/mls-magnetic-levitation/01.png"],
    order: 4,
  },
];
