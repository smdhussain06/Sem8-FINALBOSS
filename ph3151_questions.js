const ph3151_data = {
  base_concepts: [
    { title: "Center of Mass", image: "center_of_mass_cosmic_1777134490308.png", description: "The balance point of a system." },
    { title: "Gyroscopes", image: "gyroscope_hoverbike_1777134523711.png", description: "Stability through rotation." },
    { title: "Quantum Tunneling", image: "quantum_tunneling_1777137970759.png", description: "Particles passing through barriers." },
    { title: "Maxwell's Equations", image: "maxwell_equations_visual_1777135821053.png", description: "The laws of electromagnetism." }
  ],
  part_a: [
    {
      question: "Define quantum tunneling. (4x Repeated: 2024, 23ND, 23AM, 22ND)",
      au_answer: "Quantum tunneling is a quantum mechanical phenomenon where a particle passes through a potential barrier that it could not surmount according to classical mechanics. It occurs because the wave function $\\psi$ of the particle has a finite value within and on the other side of the barrier.",
      easy_explanation: "Like a ghost walking through a wall. In the quantum world, particles have a small chance of appearing on the other side of a solid barrier even if they don't have enough energy to jump over it.",
      image: "quantum_tunneling_1777137970759.png"
    },
    {
      question: "What is meant by harmonic oscillator? (3x Repeated: 2024, 23ND, 22ND)",
      au_answer: "A system that, when displaced from equilibrium, experiences a restoring force proportional to the displacement $F = -kx$. The potential energy is given by $V = \\frac{1}{2}kx^2$.",
      easy_explanation: "A classic example is a weight on a spring bouncing up and down. It always tries to return to the middle with a force that gets stronger the further you pull it.",
      image: "harmonic_oscillator_1777137986485.png"
    },
    {
      question: "State Doppler effect. (2x Repeated: 2024, 23ND)",
      au_answer: "The change in frequency or wavelength of a wave in relation to an observer who is moving relative to the wave source. Apparent frequency $n' = n \\left( \\frac{v \\pm v_o}{v \\mp v_s} \\right)$.",
      easy_explanation: "The high-to-low pitch change of an ambulance siren as it passes you. The sound waves get squashed as it approaches and stretched as it leaves.",
      image: "doppler_effect_1777138002786.png"
    },
    {
      question: "Define torque. (3x Repeated: 2024, 23ND, 23AM)",
      au_answer: "Torque is the rotational equivalent of linear force. It is defined as the cross product of the position vector and the force vector: $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$. Magnitude $\\tau = rF\\sin\\theta$.",
      easy_explanation: "The 'twist' you apply to a wrench to turn a bolt. It depends on how hard you push and how long the wrench is.",
      image: "torque_concept_1777138019292.png"
    },
    {
      question: "State Compton effect. (3x Repeated: 2024, 23ND, 23AM)",
      au_answer: "The increase in wavelength of X-rays or other energetic electromagnetic radiations when they are scattered by electrons. The shift in wavelength is $\\Delta\\lambda = \\frac{h}{m_0c}(1 - \\cos\\theta)$.",
      easy_explanation: "When light hits an electron, it 'loses' energy and changes color (wavelength), like a billiard ball losing speed and changing direction after hitting another ball.",
      image: "compton_effect_1777138204069.png"
    },
    {
      question: "What are matter waves? (3x Repeated: 23AM, 22ND, 2024)",
      au_answer: "Waves associated with moving particles of matter, also known as de Broglie waves. The wavelength is given by $\\lambda = \\frac{h}{p} = \\frac{h}{mv}$.",
      easy_explanation: "Everything moving, even you, has a wave attached to it. For tiny things like electrons, this wave behavior is very easy to see and very important.",
      image: "matter_waves_1777138221760.png"
    },
    {
      question: "Differentiate between laser and ordinary light. (3x Repeated: 2024, 23ND, 22ND)",
      au_answer: "Laser light is coherent, monochromatic, highly directional, and intense. Ordinary light is incoherent, polychromatic, divergent, and less intense.",
      easy_explanation: "A laser is like a perfectly synchronized army marching in one line; a bulb is like a crowd of people walking in all directions at different speeds.",
      image: "laser_vs_light_1777138238375.png"
    },
    {
      question: "What is polarization? (2x Repeated: 2024, 22ND)",
      au_answer: "The process of restricting the vibrations of light or other electromagnetic radiation to a single plane perpendicular to the direction of propagation.",
      easy_explanation: "Filtering light so it only vibrates in one direction, like vertical blinds only letting thin vertical objects through.",
      image: "polarization_1777138252800.png"
    },
    {
      question: "Define total internal reflection. (2022ND)",
      au_answer: "The complete reflection of a ray of light within a medium from the surrounding surfaces back into the medium. It occurs when light travels from denser to rarer medium and the angle of incidence $i >$ critical angle $c$.",
      easy_explanation: "When light hits the surface of water from below at a very sharp angle and bounces back down like it hit a mirror instead of going out into the air.",
      image: "total_internal_reflection_1777138388724.png"
    },
    {
      question: "What is a torsional pendulum? (2x Repeated: 2024, 22ND)",
      au_answer: "A heavy disc suspended by a wire which oscillates by twisting and untwisting the wire. The time period is $T = 2\\pi\\sqrt{\\frac{I}{C}}$, where $I$ is moment of inertia and $C$ is torsional rigidity.",
      easy_explanation: "A heavy object hanging from a wire that spins back and forth when you twist it, like a tire swing twisting around its rope.",
      image: "torsional_pendulum_1777138405499.png"
    },
    {
      question: "Define Center of Mass. (2x Repeated: 2023AM, 22ND)",
      au_answer: "The point in a system at which the entire mass of the system may be considered to be concentrated for describing its motion: $\\vec{R}_{cm} = \\frac{\\sum m_i\\vec{r}_i}{\\sum m_i}$.",
      easy_explanation: "The 'perfect balance point' of an object. If you push exactly at this point, the object moves straight without spinning.",
      image: "center_of_mass_cosmic_1777134490308.png"
    },
    {
      question: "State the principle of resonant diode. (2x Repeated: 2023AM, 22ND)",
      au_answer: "It works on the principle of resonant tunneling, where electron transmission through a double potential barrier is significantly enhanced when the incident energy matches the quantized energy level within the well.",
      easy_explanation: "A quantum gate that only lets electrons through when their energy 'key' perfectly matches the 'lock' of the gate.",
      image: "bloch_function_diagram_1777194471966.png"
    },
    {
      question: "Write the general electromagnetic wave equation in terms of magnetic field vector in free space. (2024AM)",
      au_answer: "The wave equation for magnetic field $\\vec{B}$ is $\\nabla^2\\vec{B} = \\mu_0\\epsilon_0 \\frac{\\partial^2\\vec{B}}{\\partial t^2}$ or $\\nabla^2\\vec{B} = \\frac{1}{c^2} \\frac{\\partial^2\\vec{B}}{\\partial t^2}$.",
      easy_explanation: "A formula that describes how magnetic ripples travel through empty space at the speed of light.",
      image: "maxwell_equations_visual_1777135821053.png"
    },
    {
      question: "What are Eigen values and Eigen function? (2024AM)",
      au_answer: "When an operator $\\hat{A}$ acts on a function $\\psi$ and results in the same function multiplied by a constant $a$ ($\\hat{A}\\psi = a\\psi$), then $a$ is the Eigen value and $\\psi$ is the Eigen function.",
      easy_explanation: "In quantum math, some operations don't change the shape of a wave, just its size. The shape is the Eigen function, and the multiplier is the Eigen value.",
      image: "schrodinger_wave_concept_1777135330100.png"
    },
    {
      question: "Why does quantum tunnelling occur? (2024AM)",
      au_answer: "It occurs because particles behave like waves. The wave function $\\psi$ does not drop to zero immediately at a potential barrier but decays exponentially, allowing a finite probability of finding the particle on the other side.",
      easy_explanation: "Because small particles are 'fuzzy' like waves, they can leak through narrow walls even if they shouldn't be able to climb over them.",
      image: "quantum_tunneling_1777137970759.png"
    },
    {
      question: "What is meant by nonlinear oscillations? (2023ND)",
      au_answer: "Oscillations where the restoring force is not directly proportional to the displacement (e.g., $F = -kx - bx^2$). The superposition principle does not apply.",
      easy_explanation: "A messy vibration where the 'spring' doesn't follow simple rules—it might get much stiffer the more you pull it.",
      image: "harmonic_oscillator_1777137986485.png"
    },
    {
      question: "What is meant by radiation pressure? (2x Repeated: 2023ND, 23AM)",
      au_answer: "The pressure exerted by electromagnetic radiation upon any surface it exposes. For a perfectly reflecting surface, $P = \\frac{2I}{c}$, and for a perfectly absorbing surface, $P = \\frac{I}{c}$.",
      easy_explanation: "Light actually pushes on things! It's a tiny force, but in space, it's enough to move large solar sails.",
      image: "maxwell_equations_visual_1777135821053.png"
    },
    {
      question: "What is normalization of wave function? (2023ND)",
      au_answer: "The process of adjusting the wave function so that the total probability of finding the particle in all space is exactly 1: $\\int_{-\\infty}^{\\infty} |\\psi|^2 d\\tau = 1$.",
      easy_explanation: "A math step to make sure the chance of a particle being *somewhere* is 100%.",
      image: "schrodinger_wave_concept_1777135330100.png"
    },
    {
      question: "Differentiate travelling and standing wave with respect to energy. (2023AM)",
      au_answer: "In a travelling wave, energy is transported from one region to another. In a standing wave, energy is confined within the nodes and is not transported.",
      easy_explanation: "A travelling wave is like a package being delivered; a standing wave is like a person running on a treadmill—lots of energy, but staying in one spot.",
      image: "doppler_effect_1777138002786.png"
    },
    {
      question: "Identify any two properties of laser useful for communication. (2023AM)",
      au_answer: "1. High Directionality (allows long-distance transmission with low loss). 2. High Bandwidth/Monochromaticity (allows high-speed data encoding).",
      easy_explanation: "Lasers stay in a tight beam for miles and can carry huge amounts of internet data through fiber optic cables.",
      image: "laser_vs_light_1777138238375.png"
    },
    {
      question: "State law of conservation of angular momentum. (2022ND)",
      au_answer: "If the external torque acting on a system is zero, the total angular momentum of the system remains constant ($\\vec{L} = I\\vec{\\omega} = \\text{constant}$).",
      easy_explanation: "Spinning things keep spinning unless something twists them. An ice skater spins faster when they pull their arms in because of this.",
      image: "gyroscope_hoverbike_1777134523711.png"
    },
    {
      question: "What is the physical significance of a wave function? (2022ND)",
      au_answer: "The wave function $\\psi$ itself has no physical meaning, but its square $|\\psi|^2$ represents the probability density of finding a particle at a given point in space and time.",
      easy_explanation: "$\\psi$ is the 'recipe' for a particle; $|\\psi|^2$ tells you the 'hotspots' where the particle is most likely to be found.",
      image: "schrodinger_wave_concept_1777135330100.png"
    },
    {
      question: "Give the expression for Bloch function. (2023AM)",
      au_answer: "$\\psi(r) = u(r) e^{i\\mathbf{k} \\cdot \\mathbf{r}}$, where $u(r)$ has the periodicity of the crystal lattice.",
      easy_explanation: "A wave that describes an electron moving through a repeating grid of atoms (a crystal).",
      image: "bloch_function_diagram_1777194471966.png"
    },
    {
      question: "What is quantum harmonic oscillator? (2022ND)",
      au_answer: "The quantum mechanical analog of the classical harmonic oscillator. Its energy levels are quantized as $E_n = (n + \\frac{1}{2})\\hbar\\omega$, where $n = 0, 1, 2...$",
      easy_explanation: "A tiny quantum spring. Unlike a big spring, it can only vibrate at specific energy 'steps' and never truly stops moving (Zero Point Energy).",
      image: "harmonic_oscillator_1777137986485.png"
    }
  ],
  part_b: [
    {
      title: "Schrodinger's Wave Equation (4x Repeated)",
      question: "Derive Schrodinger's time-dependent and independent wave equations. (2024, 23ND, 23AM, 22ND)",
      au_answer: `<h3>Introduction</h3>
<p>Schrodinger's wave equation is the fundamental equation in non-relativistic quantum mechanics. It describes how the quantum state of a physical system changes over time. Unlike classical mechanics where F=ma is the base, quantum mechanics relies on wave functions ($\\Psi$).</p>

<h3>Diagram & Basis</h3>
<p>Consider a particle of mass 'm' moving with velocity 'v'. According to de Broglie, a wave is associated with this particle with wavelength $\\lambda = h/mv$. The wave function is represented as $\\Psi(x,t) = A e^{i(kx - \\omega t)}$.</p>

<h3>Derivation (Time Dependent)</h3>
<ol>
<li>General wave function: $\\Psi = A e^{i(kx - \\omega t)}$</li>
<li>Energy and Momentum operators:
   <ul>
   <li>$E = \\hbar\\omega \\Rightarrow \\omega = E/\\hbar$</li>
   <li>$p = \\hbar k \\Rightarrow k = p/\\hbar$</li>
   </ul>
</li>
<li>Differentiating $\\Psi$ w.r.t 't': $\\frac{\\partial\\Psi}{\\partial t} = -i\\omega\\Psi = -i(E/\\hbar)\\Psi$.
   <br>Rearranging: $E\\Psi = i\\hbar \\frac{\\partial\\Psi}{\\partial t}$ (Energy Operator).</li>
<li>Differentiating $\\Psi$ w.r.t 'x' twice: $\\frac{\\partial^2\\Psi}{\\partial x^2} = -k^2\\Psi = -(p^2/\\hbar^2)\\Psi$.
   <br>Rearranging: $p^2\\Psi = -\\hbar^2 \\frac{\\partial^2\\Psi}{\\partial x^2}$ (Momentum Operator).</li>
<li>Substituting in Total Energy $E = \\frac{p^2}{2m} + V$:
   <br><strong>$i\\hbar \\frac{\\partial\\Psi}{\\partial t} = -\\frac{\\hbar^2}{2m}\\nabla^2\\Psi + V\\Psi$</strong></li>
</ol>

<h3>Derivation (Time Independent)</h3>
<p>If the potential V is independent of time, we use separation of variables $\\Psi(x,t) = \\psi(x) \\phi(t)$. This leads to:
<br><strong>$\\nabla^2\\psi + \\frac{2m}{\\hbar^2}(E - V)\\psi = 0$</strong></p>

<h3>Comparison: Dependent vs Independent</h3>
<table class="comparison-table">
  <tr><th>Feature</th><th>Time Dependent</th><th>Time Independent</th></tr>
  <tr><td>Nature</td><td>Describes dynamic systems</td><td>Describes stationary states</td></tr>
  <tr><td>Operator</td><td>Includes $i\\hbar \\partial/\\partial t$</td><td>Includes Total Energy E</td></tr>
  <tr><td>Usage</td><td>Wave propagation</td><td>Energy level calculation</td></tr>
</table>

<h3>Pros and Cons</h3>
<ul>
  <li><strong>Pros:</strong> Accurately predicts atomic spectra; basis for all modern quantum tech.</li>
  <li><strong>Cons:</strong> Cannot describe particles moving at speeds close to light (requires Dirac equation).</li>
</ul>

<h3>Applications</h3>
<ul>
  <li>Predicting energy levels in atoms and molecules.</li>
  <li>Understanding semiconductor behavior in transistors.</li>
  <li>Designing quantum computers and tunneling diodes.</li>
</ul>

<h3>Conclusion</h3>
<p>Schrodinger's equation replaced the Bohr model by treating electrons as waves rather than particles in fixed orbits, revolutionizing our understanding of the microscopic world.</p>`,
      easy_explanation: "<strong>Think of it as:</strong> The master GPS for an electron. It doesn't tell you exactly where the electron is, but it tells you exactly where the electron 'ripples' are strongest and how they change over time.",
      image: "schrodinger_wave_concept_1777135330100.png",
      marks: 16
    },
    {
      title: "Maxwell's Equations (4x Repeated)",
      question: "Derive Maxwell's equations in integral and differential forms and explain their significance. (2024, 23ND, 23AM, 22ND)",
      au_answer: `<h3>Introduction</h3>
<p>Maxwell's equations are a set of four partial differential equations that form the foundation of classical electromagnetism, optics, and electric circuits. They describe how electric and magnetic fields are generated and altered by each other and by charges and currents.</p>

<h3>The Four Pillars</h3>

<h3>1. Gauss's Law for Electricity</h3>
<p><strong>Integral:</strong> $\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q}{\\epsilon_0}$
<br><strong>Differential:</strong> $\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\epsilon_0}$
<br><em>Significance:</em> Electric charges act as sources or sinks for electric fields.</p>

<h3>2. Gauss's Law for Magnetism</h3>
<p><strong>Integral:</strong> $\\oint \\vec{B} \\cdot d\\vec{A} = 0$
<br><strong>Differential:</strong> $\\nabla \\cdot \\vec{B} = 0$
<br><em>Significance:</em> Magnetic monopoles do not exist; magnetic field lines are always closed loops.</p>

<h3>3. Faraday's Law of Induction</h3>
<p><strong>Integral:</strong> $\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$
<br><strong>Differential:</strong> $\\nabla \\times \\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t}$
<br><em>Significance:</em> A changing magnetic field creates an electric field (Basis for generators).</p>

<h3>4. Ampere-Maxwell Law</h3>
<p><strong>Integral:</strong> $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 (I + \\epsilon_0 \\frac{d\\Phi_E}{dt})$
<br><strong>Differential:</strong> $\\nabla \\times \\vec{B} = \\mu_0\\vec{J} + \\mu_0\\epsilon_0 \\frac{\\partial\\vec{E}}{\\partial t}$
<br><em>Significance:</em> Magnetic fields are created by electric currents and by changing electric fields (Displacement current).</p>

<h3>Comparison: Integral vs Differential</h3>
<table class="comparison-table">
  <tr><th>Form</th><th>Mathematical Tool</th><th>Physical Focus</th></tr>
  <tr><td>Integral Form</td><td>Uses Gauss/Stokes Theorems</td><td>Focus on global boundaries/surfaces</td></tr>
  <tr><td>Differential Form</td><td>Uses Div/Curl Operators</td><td>Focus on point-by-point behavior</td></tr>
</table>

<h3>Applications</h3>
<ul>
  <li>Wireless communication (Radio, TV, Wi-Fi).</li>
  <li>Design of antennas and waveguides.</li>
  <li>Electric motors, generators, and transformers.</li>
</ul>

<h3>Conclusion</h3>
<p>Maxwell unified electricity, magnetism, and light into one consistent theory, predicting that light itself is an electromagnetic wave.</p>`,
      easy_explanation: "<strong>Think of it as:</strong> The four rules of the universe's 'Force'. They explain why a magnet sticks to a fridge, why your phone charges, and how signals travel through the air.",
      image: "maxwell_equations_visual_1777135821053.png",
      marks: 16
    },
    {
      title: "CO2 Laser Construction & Working (3x Repeated)",
      question: "Describe the construction and working of CO2 laser with vibrational modes and energy level diagram. (2024, 23AM, 22ND)",
      au_answer: `<h3>Introduction</h3>
<p>The $CO_2$ laser is a molecular gas laser that operates in the far-infrared region at a wavelength of $10.6\\mu m$. It is one of the most powerful and efficient lasers currently available.</p>

<h3>Construction</h3>
<ul>
  <li><strong>Active Medium:</strong> A mixture of $CO_2, N_2$, and Helium gas in the ratio 1:2:8.</li>
  <li><strong>Pumping Source:</strong> Electric discharge (high voltage DC).</li>
  <li><strong>Optical Resonator:</strong> A pair of mirrors (one fully reflecting, one partially reflecting) at the ends of the discharge tube.</li>
  <li><strong>Cooling:</strong> Water cooling jacket to dissipate heat.</li>
</ul>

<h3>Vibrational Modes of $CO_2$</h3>
<p>The carbon dioxide molecule is linear. It has three modes of vibration:</p>
<ol>
  <li><strong>Symmetric Stretching:</strong> Atoms vibrate along the axis (Non-lasing).</li>
  <li><strong>Bending Mode:</strong> Atoms vibrate perpendicular to the axis (Lower energy).</li>
  <li><strong>Asymmetric Stretching:</strong> Atoms vibrate along the axis in opposite directions (High energy - Lasing source).</li>
</ol>

<h3>Working Mechanism</h3>
<ol>
  <li>Electric discharge excites $N_2$ molecules to a metastable state.</li>
  <li>Excited $N_2$ molecules collide with ground-state $CO_2$ molecules, transferring energy (Resonant transfer).</li>
  <li>This creates a <strong>Population Inversion</strong> in $CO_2$ at the asymmetric stretching level.</li>
  <li>Transitions to symmetric or bending levels produce laser light at $10.6\\mu m$ and $9.6\\mu m$.</li>
  <li>Helium helps in cooling the gas and depopulating the lower levels.</li>
</ol>

<h3>Pros and Cons</h3>
<table class="comparison-table">
  <tr><th>Advantages</th><th>Disadvantages</th></tr>
  <tr><td>Very high efficiency (up to 30%)</td><td>Requires complex cooling systems</td></tr>
  <tr><td>Extreme power (continuous wave)</td><td>Large size compared to diode lasers</td></tr>
</table>

<h3>Applications</h3>
<ul>
  <li>Industrial: Laser cutting, welding, and engraving of metals/plastics.</li>
  <li>Medical: Laser surgery (bloodless surgery) and skin resurfacing.</li>
  <li>Military: Range finding and target designation.</li>
</ul>

<h3>Conclusion</h3>
<p>Due to its high power output, the $CO_2$ laser remains the gold standard for industrial heavy-duty material processing.</p>`,
      easy_explanation: "<strong>Think of it as:</strong> A super-powerful invisible heat beam. It works by making gas molecules 'dance' (vibrate) really fast until they shoot out a beam of pure heat energy.",
      image: "co2_laser_diagram_1777135870727.png",
      marks: 16
    },
    {
      title: "Scanning Tunneling Microscope [STM] (3x Repeated)",
      question: "Explain the principle, construction and working of STM with a neat sketch. (2023ND, 23AM, 22ND)",
      au_answer: `<h3>Introduction</h3>
<p>Scanning Tunneling Microscopy (STM) is a powerful technique for viewing surfaces at the atomic level. Invented by Gerd Binnig and Heinrich Rohrer, it won the Nobel Prize in 1986.</p>

<h3>Principle: Quantum Tunneling</h3>
<p>When a sharp metallic tip is brought very close (within 1 nm) to a conducting surface and a small voltage is applied, electrons 'tunnel' through the vacuum gap. The tunneling current ($I$) is exponentially sensitive to the distance ($d$):
<br><strong>$I \\propto e^{-2\\kappa d}$</strong>
<br>Even a 0.1 nm change in distance can change the current by a factor of 10.</p>

<h3>Construction</h3>
<ul>
  <li><strong>Tip:</strong> An extremely sharp tungsten or platinum-iridium tip (ends in a single atom).</li>
  <li><strong>Piezoelectric Scanner:</strong> Controls the tip movement in X, Y, and Z directions with sub-atomic precision.</li>
  <li><strong>Feedback Loop:</strong> Maintains a constant tunneling current or height.</li>
  <li><strong>Vibration Isolation:</strong> Prevents external noise from affecting the atomic-scale measurements.</li>
</ul>

<h3>Working Modes</h3>
<ol>
  <li><strong>Constant Current Mode:</strong> The feedback loop moves the tip up/down to keep current constant. The Z-movement maps the surface topography.</li>
  <li><strong>Constant Height Mode:</strong> The tip moves at a fixed height, and the varying current is recorded (Faster but riskier for rough surfaces).</li>
</ol>

<h3>Applications</h3>
<ul>
  <li>Imaging individual atoms on a crystal surface.</li>
  <li>Manipulating single atoms to build nano-structures.</li>
  <li>Studying electronic properties of materials at the nano-scale.</li>
</ul>

<h3>Conclusion</h3>
<p>STM opened the door to Nanotechnology by allowing us to see and touch individual atoms for the first time.</p>`,
      easy_explanation: "<strong>Think of it as:</strong> A finger so sensitive it can feel the 'bumps' of individual atoms. It doesn't actually 'see' with light; it 'feels' with a tiny quantum electric current.",
      image: "scanning_tunneling_microscope_1777138424581.png",
      marks: 16
    }
  ],
  part_c: [
    {
      title: "Kronig-Penney Model & Energy Bands (Huge Answer)",
      question: "Explain the Kronig-Penney model and how it leads to the formation of energy bands in solids. (2023ND, 22ND)",
      au_answer: `<h3>Introduction</h3>
<p>The Kronig-Penney model is an idealized mathematical model that explains how electrons behave in a periodic potential (like a crystal lattice). It provides the theoretical basis for <strong>Band Theory</strong>, explaining why materials are conductors, insulators, or semiconductors.</p>

<h3>The Model Assumption</h3>
<p>In a real crystal, the potential $V(x)$ is periodic. Kronig and Penney simplified this complex potential into a series of <strong>rectangular potential barriers</strong> of height $V_0$ and width 'b', separated by wells of width 'a'.
<br>Period $T = a + b$.</p>

<h3>Schrodinger Equation Application</h3>
<p>We apply the Schrodinger equation to two regions:</p>
<ol>
  <li><strong>Well Region ($0 < x < a$):</strong> $V = 0$. The wave function is oscillating.</li>
  <li><strong>Barrier Region ($-b < x < 0$):</strong> $V = V_0$. The wave function is exponentially decaying.</li>
</ol>

<h3>The Transcendental Equation</h3>
<p>Using Bloch's theorem and boundary conditions, we arrive at the famous Kronig-Penney equation:
<br><strong>$P \\frac{\\sin\\alpha a}{\\alpha a} + \\cos\\alpha a = \\cos ka$</strong>
<br>Where $P$ is the 'scattering power' of the barrier.</p>

<h3>Formation of Energy Bands</h3>
<ol>
  <li>The right side $\\cos ka$ can only take values between <strong>-1 and +1</strong>.</li>
  <li>Therefore, the left side is also restricted to these values.</li>
  <li><strong>Allowed Bands:</strong> Regions of energy where the left side is between -1 and 1.</li>
  <li><strong>Forbidden Gaps:</strong> Regions where the left side is outside this range.</li>
</ol>

<h3>Comparison: Metal vs Insulator</h3>
<table class="comparison-table">
  <tr><th>Material</th><th>Band Structure</th><th>Conductivity</th></tr>
  <tr><td>Conductor</td><td>Overlapping or partially filled bands</td><td>Very High</td></tr>
  <tr><td>Insulator</td><td>Wide forbidden gap ($E_g > 3eV$)</td><td>Very Low</td></tr>
  <tr><td>Semiconductor</td><td>Small forbidden gap ($E_g \\approx 1eV$)</td><td>Medium/Temperature dependent</td></tr>
</table>

<h3>Applications</h3>
<ul>
  <li>Understanding holes and electrons in semiconductors.</li>
  <li>Designing LEDs and Photovoltaic cells.</li>
  <li>Development of modern solid-state electronics.</li>
</ul>

<h3>Conclusion</h3>
<p>The Kronig-Penney model proves that the periodic nature of crystals naturally leads to the splitting of energy levels into bands, which dictates all electrical properties of matter.</p>`,
      easy_explanation: "<strong>Think of it as:</strong> A highway for electrons. In some materials, the highway is smooth (Conductors); in others, there are huge 'forbidden' gaps where electrons simply cannot exist (Insulators).",
      image: "kronig_penney_model_diagram_1777194543288.png"
    },
    {
      title: "Compton Scattering & Energy Transfer (Problem & Theory)",
      question: "Derive the expression for Compton shift and discuss its significance with a problem. (2023AM)",
      au_answer: `<h3>Introduction</h3>
<p>The Compton effect is the scattering of high-energy photons (X-rays/Gamma rays) by free electrons, resulting in an increase in wavelength. This experiment provided definitive proof of the <strong>particle nature of light</strong>.</p>

<h3>Diagram Description</h3>
<p>A photon of wavelength $\\lambda$ hits a stationary electron. After collision, the photon is scattered at an angle $\\theta$ with wavelength $\\lambda'$, and the electron recoils at an angle $\\phi$.</p>

<h3>Derivation Summary</h3>
<ol>
  <li>Apply Conservation of Energy: $h\\nu + m_0c^2 = h\\nu' + mc^2$</li>
  <li>Apply Conservation of Momentum in X and Y directions.</li>
  <li>Combining these using Relativity ($E^2 = p^2c^2 + m_0^2c^4$), we get:
  <br><strong>$\\Delta\\lambda = \\lambda' - \\lambda = \\frac{h}{m_0c}(1 - \\cos\\theta)$</strong></li>
</ol>

<h3>Significance</h3>
<ul>
  <li><strong>Compton Wavelength:</strong> The constant $\\frac{h}{m_0c} = 0.0243$ \\AA.</li>
  <li><strong>Angle Dependency:</strong> The shift is zero at $\\theta=0^\\circ$ and maximum at $\\theta=180^\\circ$.</li>
  <li><strong>Independence:</strong> The shift does not depend on the incident wavelength or the target material.</li>
</ul>

<h3>Problem Case (2023AM)</h3>
<p><em>Q: Scattered photon energy = 120 keV, Recoil electron = 40 keV. Find angle.</em>
<br>1. Incident $E = 120 + 40 = 160$ keV.
<br>2. $\\lambda = 12.4/160 = 0.0775$ \\AA; $\\lambda' = 12.4/120 = 0.1033$ \\AA.
<br>3. $\\Delta\\lambda = 0.0258$ \\AA.
<br>4. $0.0258 = 0.0243(1-\\cos\\theta) \\Rightarrow \\cos\\theta \\approx -0.06$.
<br>5. $\\theta \\approx 93^\\circ$.</p>

<h3>Conclusion</h3>
<p>Compton scattering proves that photons carry momentum and behave like particles in collisions, a key tenet of Quantum Theory.</p>`,
      easy_explanation: "<strong>Think of it as:</strong> Atomic billiards. Light hits an electron like a cue ball hitting another ball. The light 'loses speed' (changes color) and the electron 'gets pushed' (recoils).",
      image: "compton_scattering_diagram_1777194588479.png"
    }
  ]
};
