const subjects = [
  {
    id: "MA3151",
    name: "Matrices and Calculus",
    semester: 1,
    category: "Math",
    description: "Fundamental calculus and matrix algebra for engineers.",
    units: [
      {
        id: 1,
        title: "Matrices",
        important: [
          "Reduction of quadratic form to canonical form (Orthogonal transformation)",
          "Cayley-Hamilton Theorem (Inverse and Powers)",
          "Eigenvalues and Eigenvectors of real matrices",
          "Diagonalization by orthogonal transformation"
        ],
        description: "Focus on orthogonal transformations; they are highly repeated in Part B."
      },
      {
        id: 2,
        title: "Differential Calculus",
        important: [
          "Maxima and Minima of functions of one variable",
          "Logarithmic and Implicit differentiation",
          "Differentiation rules (Chain, Product, Quotient)"
        ],
        description: "Master the chain rule and its applications in optimization."
      },
      {
        id: 3,
        title: "Functions of Several Variables",
        important: [
          "Method of Lagrange Multipliers (Extremely Important)",
          "Jacobians and Total Derivatives",
          "Taylor's Series for functions of two variables",
          "Euler's Theorem for homogeneous functions"
        ],
        description: "Lagrange Multipliers is a guaranteed question in most papers."
      },
      {
        id: 4,
        title: "Integral Calculus",
        important: [
          "Integration by parts and Partial fractions",
          "Improper integrals",
          "Hydrostatic force and centres of mass"
        ],
        description: "Focus on integration techniques as they form the base for Multiple Integrals."
      },
      {
        id: 5,
        title: "Multiple Integrals",
        important: [
          "Changing the order of integration (Highly Repeated)",
          "Double integrals in polar coordinates",
          "Triple integrals for volume calculation"
        ],
        description: "Unit V is high weightage. Always practice changing the order of integration."
      }
    ],
    textbookLinks: [
      { name: "B.S. Grewal - Higher Engineering Mathematics", url: "https://archive.org/details/higherengineeringmathematicsbsgrewal_202003" },
      { name: "MA3151 Lecture Notes (Padeepz)", url: "https://www.padeepz.net/ma3151-notes-matrices-and-calculus/" }
    ]
  },
  {
    id: "PH3151",
    name: "Engineering Physics",
    semester: 1,
    category: "Science",
    description: "Mechanics, EM waves, and Quantum physics foundations.",
    units: [
      {
        id: 1,
        title: "Mechanics",
        important: [
          "Parallel and Perpendicular axis theorems",
          "Torsional and Double Pendulums",
          "Gyroscope working principle"
        ],
        description: "Derivations are key here. Practice the Parallel axis theorem proof."
      },
      {
        id: 2,
        title: "Electromagnetic Waves",
        important: [
          "Maxwell's Equations (Differential & Integral forms)",
          "EM wave equation derivation",
          "Poynting Vector significance"
        ],
        description: "Maxwell's equations are the heart of this unit."
      },
      {
        id: 3,
        title: "Oscillations, Optics, and Lasers",
        important: [
          "Air Wedge experiment (Thickness of wire)",
          "Einstein's Coefficients for Laser action",
          "Nd-YAG and CO2 Laser construction"
        ],
        description: "Air wedge and Einstein's coefficients are frequent 13-mark questions."
      },
      {
        id: 4,
        title: "Basic Quantum Mechanics",
        important: [
          "Schrödinger Wave Equation (Time-dependent & Independent)",
          "Compton Shift derivation",
          "Particle in a 1D potential box"
        ],
        description: "Quantum mechanics is abstract but the derivations are predictable."
      },
      {
        id: 5,
        title: "Applied Quantum Mechanics",
        important: [
          "Scanning Tunneling Microscope (STM)",
          "Kronig-Penney Model (Energy bands)",
          "Quantum Tunneling concept"
        ],
        description: "Focus on the Kronig-Penney model to understand band theory."
      }
    ],
    textbookLinks: [
      { name: "Arthur Beiser - Concepts of Modern Physics", url: "https://archive.org/details/conceptsofmodern0000beis" },
      { name: "PH3151 Study Material (BrainKart)", url: "https://www.brainkart.com/subject/Engineering-Physics-PH3151/" }
    ]
  },
  {
    id: "MA3354",
    name: "Discrete Mathematics",
    semester: 3,
    category: "Math",
    description: "Logic, combinatorics, and algebraic structures.",
    units: [
      {
        id: 1,
        title: "Logic and Proofs",
        important: [
          "Mathematical Induction (Strong & Weak)",
          "Rules of Inference (Modus Ponens/Tollens)",
          "Logical Equivalences using Truth Tables"
        ],
        description: "Induction is a staple. Practice both weak and strong induction."
      },
      {
        id: 2,
        title: "Combinatorics",
        important: [
          "Solving Recurrence Relations (Homogeneous & Non-homogeneous)",
          "Pigeonhole Principle applications",
          "Principle of Inclusion and Exclusion"
        ],
        description: "Recurrence relations are high-scoring if you know the characteristics equations."
      },
      {
        id: 3,
        title: "Graphs",
        important: [
          "Euler and Hamilton paths/circuits",
          "Graph Isomorphism",
          "Adjacency and Incidence matrices"
        ],
        description: "Focus on the theorems related to Euler and Hamilton circuits."
      },
      {
        id: 4,
        title: "Algebraic Structures",
        important: [
          "Lagrange's Theorem on Groups",
          "Group Homomorphism properties",
          "Semi-groups and Monoids"
        ],
        description: "Lagrange's theorem is the most important proof in this unit."
      },
      {
        id: 5,
        title: "Lattices and Boolean Algebra",
        important: [
          "Hasse Diagrams for Posets",
          "Properties of Lattices",
          "Boolean Homomorphism"
        ],
        description: "Drawing Hasse diagrams correctly is half the battle."
      }
    ],
    textbookLinks: [
      { name: "Kenneth Rosen - Discrete Mathematics", url: "https://archive.org/details/discretemathemat0000rose" },
      { name: "MA3354 Important Questions (EnggTree)", url: "https://www.enggtree.com/2022/07/ma3354-discrete-mathematics-notes.html" }
    ]
  },
  {
    id: "GE3751",
    name: "Principles of Management",
    semester: 7,
    category: "Management",
    description: "Core functions and theories of modern management.",
    units: [
      {
        id: 1,
        title: "Introduction to Management",
        important: [
          "Fayol's 14 Principles of Management",
          "Evolution of Management (Taylor's Scientific Management)",
          "Mintzberg's Managerial Roles"
        ],
        description: "Fayol's 14 principles is a must-learn for any management paper."
      },
      {
        id: 2,
        title: "Planning",
        important: [
          "Steps in Planning Process",
          "Decision Making Process",
          "Management by Objectives (MBO)"
        ],
        description: "Focus on the sequential steps in the planning and decision-making processes."
      },
      {
        id: 3,
        title: "Organizing",
        important: [
          "Formal vs Informal Organization",
          "Departmentalization bases",
          "HR Selection and Recruitment process"
        ],
        description: "Organization structure diagrams are very helpful for marks."
      },
      {
        id: 4,
        title: "Directing",
        important: [
          "Maslow's Hierarchy of Needs",
          "Herzberg's Two-Factor Theory",
          "Leadership Styles and Communication Barriers"
        ],
        description: "Motivation theories are frequently asked in long-form questions."
      },
      {
        id: 5,
        title: "Controlling",
        important: [
          "Steps in Controlling Process",
          "Budgetary Control Techniques",
          "Role of IT in Management Control"
        ],
        description: "Understand how control loops work in an organizational context."
      }
    ],
    textbookLinks: [
      { name: "Harold Koontz - Essentials of Management", url: "https://archive.org/details/essentialsofmana0000koon" },
      { name: "GE3751 Lecture Notes (BrainKart)", url: "https://www.brainkart.com/subject/Principles-of-Management-GE3751/" }
    ]
  }
];
