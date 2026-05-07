import type { Product } from "./types";

// Source: Elvacore Product Brochure v1 (June 2024). Elvacore Technologies LLP
// is the authorised Indian distributor of Googol Technology (HK) Limited, so
// product names and technical descriptions below are official catalogue copy.
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
      "The GTS-PCIe Series are PCIe multiple-axis general purpose motion controllers for stepping motor and servo motor control. Implementing motion planning via DSP and FPGA, they output pulse or analog commands and are designed for compact IPCs with PCIe slots. Supporting point-to-point, continuous path, multi-axis synchronisation, and linear/arc/helix/3D linear interpolation, they are widely used in CNC, semiconductor, laser processing, SMT, and assembly automation.",
    features: [
      "DSP + FPGA architecture for real-time motion planning",
      "4 or 8 axis control on a single PCIe card",
      "Pulse and analog (±10V) output command modes",
      "Point-to-point, continuous path and multi-axis synchronisation",
      "Linear, arc, helix and 3D linear interpolation",
      "Programmable S-curve acceleration / deceleration smoothness",
      "Programming via VC, VB, C#, LabVIEW library files",
      "Compatible with stepping motors and servo motors",
    ],
    applications: [
      "PCB drilling and routing machines",
      "Semiconductor crystal bonder and bonding machines",
      "Electronic processing: winding, dispensing, SMT, plug-in",
      "Metallurgical: flying shear, straightening, leveling, rolling",
      "Glasses frame processing equipment",
      "Packaging: paste box machines, bronzing machines",
      "Printing and dyeing: bronzing and printing press machines",
      "Testing: AOI and coordinate measuring equipment",
    ],
    specifications: [
      { label: "Architecture", value: "DSP + FPGA" },
      { label: "Axes Supported", value: "4 or 8 axes per card" },
      { label: "Bus Interface", value: "PCI-Express (PCIe x1)" },
      { label: "Output Modes", value: "Pulse/Direction and Analog ±10 V" },
      {
        label: "Motion Modes",
        value: "Point-to-point, Continuous path, Multi-axis sync",
      },
      { label: "Interpolation", value: "Linear, Arc, Helix, 3D Linear" },
      {
        label: "Acceleration",
        value: "S-curve and trapezoidal (user-configurable)",
      },
      { label: "Programming", value: "VC, VB, C#, LabVIEW development libraries" },
      { label: "Compatible Motors", value: "Stepping motors and AC/DC servo motors" },
    ],
    images: ["/images/products/gts-pcie/01.jpg"],
    featured: true,
    order: 1,
  },
  {
    slug: "gus-guc-embedded",
    title: "GUS / GUC Series Embedded Motion Controllers",
    category: "motion-control",
    summary:
      "Highly integrated embedded controllers combining computer, motion controller and PLC.",
    description:
      "The GUS/GUC Series are highly integrated embedded motion controllers combining computer, motion controller, and PLC functions in a single compact unit. Available in fanless models for harsh environments, they maintain full motion functionality — S-curve, trapezoidal, jog, gear modes, linear and arc interpolation — while eliminating the need for a separate host PC. Ideal for standalone machine control, laser systems, and panel PC HMI integration.",
    features: [
      "Integrated computer + motion controller + PLC in one unit",
      "Fanless model available for harsh environment operation",
      "S-curve motion, trapezoidal-curve, jog and gear modes",
      "Linear interpolation and arc interpolation (GUS TG02)",
      "Resettable fuse at 24V terminal for over-current protection",
      "Compact footprint — optimised size for various applications",
      "No host PC required — standalone embedded operation",
      "Compatible with panel PC touch-screen HMI systems",
    ],
    applications: [
      "PCB processing: PCB drilling, PCB screw machines",
      "Packaging: paste box machines, bronzing machines",
      "Semiconductor packaging: LED crystal machines, wire bonders",
      "Testing and measuring: AOI detection, CMM machines",
      "Printing: screen printing machines",
      "Metallurgical: flying shears, straightening, leveling",
      "Electronic processing: dispensing, SMT, plug-in machines",
      "Textile: cloth machines, sewing machines",
    ],
    specifications: [
      {
        label: "Controller Type",
        value: "Embedded (computer + motion controller + PLC)",
      },
      {
        label: "Thermal Design",
        value: "Fanless model available for harsh environments",
      },
      { label: "Motion Modes", value: "S-curve, Trapezoidal, Jog, Gear" },
      { label: "Interpolation", value: "Linear, Arc (model GUS TG02)" },
      { label: "Protection", value: "Resettable fuse at 24V power terminal" },
      { label: "Host Dependency", value: "Standalone — no host PC required" },
      { label: "HMI", value: "Panel PC and touch-screen HMI compatible" },
    ],
    images: [],
    order: 2,
  },

  // ---------- Industrial · PLC ----------
  {
    slug: "ideabox-pro",
    title: "iDEABOX Pro Intelligent Controller",
    category: "plc",
    summary:
      "X86-architecture intelligent controller integrating motion control and PLC.",
    description:
      "The iDEABOX Pro is a high-performance X86-architecture intelligent controller integrating motion control technology and PLC technology in a compact unit. It provides rich interfaces (USB, COM, LAN, digital/analog IO, EtherCAT, CAN, HDMI) and supports extension via gLink-I bus modules. With up to 64-axis synchronous control, 250 µs minimum cycle, and full IEC 61131-3 programming via OtoStudio V3, it excels in data acquisition, machine vision, and precision automation.",
    features: [
      "X86 Quad-Core 2.0 GHz processor with Linux OS",
      "Up to 64-axis EtherCAT synchronous motion control",
      "Minimum control cycle: 250 µs",
      "Multi-axis interpolation, Jog, PT, PVT, electronic gear and cam",
      "IEC 61131-3 programming via OtoStudio V3 IDE",
      "Rich I/O: 20 DI, 16 DO, 4 AI, 4 AO channels",
      "Interfaces: USB, COM, LAN, EtherCAT, CAN, HDMI",
      "Optional encryption chip for user software protection",
    ],
    applications: [
      "Textile machinery with multi-axis coordination",
      "High-speed printing and packaging lines",
      "3C manufacturing and electronic assembly",
      "Metallurgical and metal processing equipment",
      "Machine vision integration with Gigabit Ethernet cameras",
      "Factory automation requiring PLC + motion combined",
      "Data acquisition and real-time processing systems",
    ],
    specifications: [
      { label: "CPU", value: "Quad-Core X86 Processor, 2.0 GHz" },
      { label: "Memory / Storage", value: "DDR3 2 GB / 16 GB (default)" },
      { label: "OS", value: "Linux" },
      { label: "Max Axes", value: "Up to 64-axis EtherCAT synchronous control" },
      {
        label: "Min Control Cycle",
        value: "250 µs (16–64 axis: 250 µs to 4 ms)",
      },
      { label: "Local I/O", value: "20 DI, 16 DO, 4 AI (V/I), 4 AO (V)" },
      {
        label: "Communication",
        value: "EtherCAT, CANopen, gLink-I, RS-232, 2× LAN",
      },
      { label: "Programming", value: "IEC 61131-3 via OtoStudio V3" },
      { label: "Power", value: "24 VDC ± 10%, 3 A minimum" },
      { label: "Dimensions", value: "210 × 114 × 70 mm, panel mounting" },
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
      "High-performance servo drive with FFD and time-domain auto-tuning algorithms.",
    description:
      "The GSHD Series is a high-performance servo drive with high-speed current loop, velocity loop, and position loop. Adopting FFD algorithm, nonlinear algorithm, and time-domain auto-tuning, it delivers fast, precise control of all mainstream permanent magnet motors. Supporting 200 W to 7.5 kW, it operates in position, velocity, and torque modes and is compatible with EtherCAT, gLink-II, analog, and pulse command inputs — widely used in laser processing, semiconductors, CNC, and industrial robots.",
    features: [
      "FFD, nonlinear and time-domain auto-tuning algorithms",
      "High-speed current loop, velocity loop and position loop",
      "Position, velocity and torque (current) control modes",
      "Full closed-loop via second encoder or linear encoder input",
      "gLink-II Gigabit Ethernet and EtherCAT protocol support",
      "Analog command input and pulse command input modes",
      "DriverStudio graphical tuning software for easy commissioning",
      "Redundant ring topology for high-reliability multi-axis networks",
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
      {
        label: "Power Range",
        value: "200 W to 7,300 W (medium voltage); up to 7.5 kW (high voltage)",
      },
      {
        label: "Control Modes",
        value: "Position, Velocity (Speed), Torque (Current)",
      },
      {
        label: "Command Input",
        value: "Analog ±10 V, Pulse/Direction, EtherCAT, gLink-II",
      },
      {
        label: "Network Protocol",
        value: "gLink-II (Gigabit Ethernet) and EtherCAT",
      },
      {
        label: "Closed-Loop",
        value: "Primary encoder + optional second encoder / linear scale",
      },
      {
        label: "Auto-Tuning",
        value: "Time-domain identification-based one-key auto-tuning",
      },
      { label: "Tuning Software", value: "DriverStudio (graphical, Windows-based)" },
      { label: "Topology", value: "Redundant ring for data and link redundancy" },
      { label: "Protection", value: "OC, OV, UV, OT, motor/drive fold-back, STO" },
    ],
    images: [],
    featured: true,
    order: 1,
  },

  // ---------- Educational · AI Training ----------
  {
    slug: "ai-training-box",
    title: "GOOGOL AI Training Box",
    category: "ai-training",
    summary:
      "AI training platform integrating CNC technology with deep learning content.",
    description:
      "The GOOGOL AI Training Box is a comprehensive educational platform designed to embrace the future of AI in engineering education. It integrates CNC technology development with AI deep learning content, offering rich program resources, demonstration scenarios, and production-level introductions. Built for engineering colleges and research centres, it bridges the gap between industrial motion control and modern AI/ML techniques through hands-on experiment modules.",
    features: [
      "Integrated AI deep learning and CNC technology content",
      "Rich pre-built program resources and experiment guides",
      "Demonstration scenarios for real-world AI applications",
      "Production introduction and industrial case studies",
      "Suitcase-style portable all-in-one enclosure with display",
      "Multi-sensor integration for vision and intelligent control",
      "MATLAB/Simulink and Python framework compatibility",
      "Designed for engineering colleges, AI labs and R&D centres",
    ],
    applications: [
      "AI/ML engineering laboratory courses",
      "Computer vision and intelligent control experiments",
      "CNC technology training and skill development",
      "Deep learning research and algorithm validation",
      "National innovation and competition project work",
      "Postgraduate research in AI-based automation",
      "Industry 4.0 and smart manufacturing education",
    ],
    specifications: [
      {
        label: "Platform Type",
        value: "All-in-one AI training and CNC education system",
      },
      {
        label: "Content",
        value: "AI deep learning, CNC technology, program resources",
      },
      {
        label: "Demonstrations",
        value: "Scenario-based production introduction modules",
      },
      { label: "Enclosure", value: "Portable suitcase-style with integrated display" },
      { label: "Compatibility", value: "MATLAB/Simulink, Python, AI frameworks" },
      { label: "Target Users", value: "Engineering colleges, AI/ML labs, R&D centres" },
      { label: "Supplier", value: "Googol Technology (HK) Limited" },
    ],
    images: ["/images/products/ai-training-box/01.png"],
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
      "The GSMT Series DC Servo Control Experiment Platform provides a comprehensive training environment for understanding and applying PID control to DC servo systems. The GSMT2012 uses a single intelligent servo drive; GSMT2014 adds twin motors with a Googoltech GT-400 motion controller for real-time MATLAB/Simulink experiments. The controller-free GSMT2004 allows integration of self-developed or third-party controllers, covering system modeling, stability analysis, root locus, frequency-domain correction, and state feedback.",
    features: [
      "GSMT2012: intelligent servo drive-based single motor system",
      "GSMT2014: twin-motor system with GT-400 motion controller",
      "Real-time control experiments under MATLAB/Simulink (GSMT2014)",
      "GSMT2004: controller-free for custom or third-party controllers",
      "Sensors: DC servo motor, encoder, speed measurement",
      "PID current, speed and position controller parameter tuning",
      "Damping torque and disturbance torque analysis experiments",
      "Covers modeling, stability, root locus and frequency-domain analysis",
    ],
    applications: [
      "Undergraduate control theory laboratory courses",
      "PID calibration and root locus design experiments",
      "Frequency domain correction experiment exercises",
      "State feedback and observer design exercises",
      "MATLAB/Simulink real-time hardware-in-the-loop control",
      "Mechatronics and servo system identification courses",
      "Research on adaptive and optimal control algorithms",
    ],
    specifications: [
      {
        label: "Models",
        value:
          "GSMT2012 (single motor), GSMT2014 (twin motor), GSMT2004 (controller-free)",
      },
      { label: "Motor", value: "DC servo motor with encoder and speed sensor" },
      {
        label: "Controller (2014)",
        value: "Googoltech GT-400 high-performance motion controller",
      },
      {
        label: "Control Interface",
        value: "MATLAB/Simulink real-time (GSMT2014); custom (GSMT2004)",
      },
      {
        label: "Control Modes",
        value: "PC COM port velocity/position; analog circuit PID (optional)",
      },
      {
        label: "Experiments",
        value: "Modeling, stability, root locus, frequency-domain, state feedback",
      },
      {
        label: "Teaching Package",
        value: "Experiment guide, lecture slides, solution manual",
      },
    ],
    images: ["/images/products/gsmt-servo-platform/01.jpg"],
    order: 1,
  },
  {
    slug: "mls-magnetic-levitation",
    title: "Magnetic Levitation System (MLS)",
    category: "educational-intelligent-control",
    summary:
      "LED-and-optoelectronic-sensor magnetic levitation trainer for control courses.",
    description:
      "The Magnetic Levitation System (MLS) consists of an LED light source, electromagnet, optoelectronic sensor, amplifier module, analogue control module, data acquisition card, and a steel ball. Structurally simple yet visually compelling, it allows one or more steel balls to be levitated in a steady-state position. The system covers main experimental content in automatic control, control theory, and feedback systems, making it suitable for both undergraduate and postgraduate course design and algorithm research.",
    features: [
      "LED light source and optoelectronic position sensor feedback",
      "Electromagnet-based non-contact levitation of steel balls",
      "Analogue control module and data acquisition card included",
      "Levitate one or more steel balls in steady-state position",
      "Covers automatic control, control theory and feedback systems",
      "Supports PID, root locus, frequency domain and state feedback",
      "Suitable for UG and PG course design and algorithm research",
      "Simple structure with intuitive, visually striking control effect",
    ],
    applications: [
      "Automatic control principle laboratory courses",
      "PID correction and root locus correction experiments",
      "Frequency domain correction and state feedback design",
      "Mechanism modelling and stability analysis",
      "Postgraduate algorithm research and thesis projects",
      "Control engineering demonstrations and competitions",
      "Feedback system identification and observer design",
    ],
    specifications: [
      {
        label: "Components",
        value:
          "LED source, electromagnet, optoelectronic sensor, amplifier, DAQ card",
      },
      {
        label: "Control Object",
        value: "Steel ball (one or more simultaneous levitation)",
      },
      {
        label: "Levitation Type",
        value: "Electromagnetic non-contact (LED + optoelectronic)",
      },
      {
        label: "Supported Methods",
        value: "PID, Root Locus, Frequency Domain, State Feedback",
      },
      { label: "Analogue Control", value: "Built-in analogue control module" },
      { label: "Data Acquisition", value: "DAQ card included" },
      { label: "Target Level", value: "Undergraduate and postgraduate courses" },
    ],
    images: ["/images/products/mls-magnetic-levitation/01.png"],
    order: 2,
  },
  {
    slug: "linear-inverted-pendulum",
    title: "Linear Inverted Pendulum",
    category: "educational-intelligent-control",
    summary:
      "GLIP series linear inverted pendulum platform — 1-stage to 4-stage configurations.",
    description:
      "The Inverted Pendulum System is a nonlinear unstable system and an ideal experiment platform for teaching control theories and conducting various control experiments. Abstract concepts such as system stability and controllability are visualised through the pendulum. Beyond education, it is a research platform for modern control theory — findings applied to aeronautical engineering and robotics. Googol Technology's linear series adopts an open control solution and modularised platform supporting over 10 teaching and experiment configurations.",
    features: [
      "Nonlinear unstable system — ideal for control theory teaching",
      "Visualises stability, controllability and feedback concepts",
      "Open control solution and modularised experiment platform",
      "Linear motion module base — supports 10+ experiment configurations",
      "Available as 1-stage, 2-stage, 3-stage or 4-stage pendulum",
      "Flexible-joint variants available (GLIP2011/2012)",
      "High-resolution: 10,000 pulse/pitch (linear), 2,400 pulse/r (rotary)",
      "Fast control refresh rate of 200 µs",
    ],
    applications: [
      "Root locus correction experiment courses",
      "PID correction and frequency domain correction",
      "State feedback control design experiments",
      "Mechanism modelling and stability analysis",
      "Open loop frequency response testing",
      "Modern control theory research projects",
      "Aeronautical engineering and robotics control research",
    ],
    specifications: [
      { label: "Swinging Rod Length", value: "400 mm" },
      { label: "Swinging Rod Mass", value: "0.105 kg" },
      { label: "Max Acceleration", value: "10 m/s²" },
      { label: "Max Speed", value: "1.5 m/s" },
      { label: "Pitch", value: "10 mm" },
      { label: "Linear Encoder", value: "10,000 pulse/pitch" },
      { label: "Rotary Encoder", value: "2,400 pulse/r" },
      { label: "Control Refresh Rate", value: "200 µs" },
      { label: "Gliding Block Mass", value: "1.7 kg" },
      { label: "Dimensions", value: "620 × 95 × 415 mm" },
    ],
    images: ["/images/products/linear-inverted-pendulum/01.jpeg"],
    order: 3,
  },
];
