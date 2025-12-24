// Lista de objetos donde cada uno representa un gráfico TikZ
export const graphics = [
  {
    id: "g_physics_dynamics_001",
    title: "Force Vectors on a Sphere",
    description: "Sphere at the origin with two force vectors, F1 and F2, acting at angles of 53° and -37° respectively.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "dynamics", "vectors", "forces", "mechanics", "diagrams", "education", "newton", "statics"],
    tikz: `\\begin{tikzpicture}[scale=0.7]
            \\begin{scope}
              \\draw[->, thick, black] (0,0) -- (2,2.66)
                node[midway, right] {$\\vec{F_1}$};
              \\draw[->, thick, black] (0,0) -- (2,-1.5)
                node[midway, below left] {$\\vec{F_2}$};
              \\shade[ball color=gray] (0,0) circle (0.5cm);
              \\draw
                (0.7,0) arc[start angle=0, end angle=70, radius=0.5]
                node[pos=0.5, xshift=0.5cm, yshift=0.1cm] {$53^\\circ$};
              \\draw
                (0.7,0) arc[start angle=0, end angle=-50, radius=0.5]
                node[pos=0.5, xshift=0.5cm, yshift=-0.1cm] {$37^\\circ$};
              \\draw[dotted, line width=0.5mm] (0.5,0) -- (3,0);
            \\end{scope}
            \\end{tikzpicture}`,
    libraries: [""],
    preview: "images/g_physics_dynamics_001.svg"
  },
  {
    id: "g_physics_dynamics_002",
    title: "Force Vectors sum",
    description: "Two force vectors, A and B, acting in opposite directions along the horizontal axis.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "dynamics", "vectors", "forces", "mechanics", "diagrams", "education", "newton", "statics"],
    tikz: `
          \\begin{tikzpicture}[scale=1]
          % Vector A
          \\draw[->, thick, black] (0, 0) -- (6, 0)
            node[midway, above] {\\(12\\,N\\)}
            node[pos=0, anchor=east] {$\\vec{A}$};
          % Vector B
          \\draw[<-, thick, black] (-2, 1) -- (2, 1)
            node[midway, above left] {\\(8\\,N\\)}
            node[pos=1, anchor=west] {$\\vec{B}$};
        \\end{tikzpicture}
    `,
    libraries: [""],
    preview: "images/g_physics_dynamics_002.svg"
  },
  {
    id: "g_physics_dynamics_003",
    title: "Force Vectors sum",
    description: "Three force vectors forming a triangle, illustrating vector addition in physics.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "dynamics", "vectors", "forces", "mechanics", "diagrams", "education", "newton", "statics"],
    tikz: `\\begin{tikzpicture}[scale=1]
          % Points
          \\coordinate (A) at (0,0);
          \\coordinate (B) at (3,0);
          \\coordinate (C) at (1.5,2);
          % Vectors
          \\draw[->, thick, blue] (A) -- node[below] {$\\vec{v}_1$} (B);
          \\draw[->, thick, red] (B) -- node[right] {$\\vec{v}_2$} (C);
          \\draw[->, thick, green!70!black] (C) -- node[above left] {$\\vec{v}_3$} (A);
        \\end{tikzpicture}`,
    libraries: [""],
    preview: "images/g_physics_dynamics_003.svg"
  },
  {
    id: "g_physics_dynamics_004",
    title: "Two Moving Objects",
    description: "Two objects, A and B, moving towards each other on a straight path with given speeds and distance.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "dynamics", "motion", "velocity", "kinematics", "diagrams", "education", "mechanics"],
    tikz: `\\begin{tikzpicture}[scale=1]
            \\draw[line width=1mm] (0,0) -- (6,0);
            \\node[
              draw,
              circle,
              fill=black,
              inner sep=4.5pt,
              label=above:\\textbf{A}
            ] (A) at (0.5,0.3) {};
            \\draw[->, thick] (A) -- ++(1,0) node[above] {30 m/s};
            \\node[
              draw,
              circle,
              fill=black,
              inner sep=4.5pt,
              label=above:\\textbf{B}
            ] (B) at (5.5,0.3) {};
            \\draw[->, thick] (B) -- ++(-1,0) node[above] {20 m/s};
            \\draw[|-] (0.5,-0.4) -- (2,-0.4);
            \\draw[-|] (4,-0.4) -- (5.5,-0.4);
            \\node at (3,-0.1) [below] {5 km};
            \\end{tikzpicture}`,
    libraries: [""],
    preview: "images/g_physics_dynamics_004.svg"
  },
  {
    id: "g_physics_dynamics_005",
    title: "Two Moving Objects 2",
    description: "Two objects, A and B, moving in the same direction on a straight path with given speeds and distance.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "dynamics", "motion", "velocity", "kinematics", "diagrams", "education", "mechanics"],
    tikz: `\\begin{tikzpicture}[scale=1]
            \\draw[line width=1mm] (0,0) -- (6,0);
            \\node[
              draw,
              circle,
              fill=black,
              inner sep=4.5pt,
              label=above:\\textbf{A}
            ] (A) at (0.5,0.3) {};
            \\draw[->, thick] (A) -- ++(1,0) node[above] {26 m/s};
            \\node[
              draw,
              circle,
              fill=black,
              inner sep=4.5pt,
              label=above:\\textbf{B}
            ] (B) at (4,0.3) {};
            \\draw[->, thick] (B) -- ++(1,0) node[above] {13 m/s};
            \\draw[|-] (0.5,-0.4) -- (1.5,-0.4);
            \\draw[-|] (3,-0.4) -- (4,-0.4);
            \\node at (2.25,-0.1) [below] {169 m};
          \\end{tikzpicture}`,
    libraries: [""],
    preview: "images/g_physics_dynamics_005.svg"

  },
  {
    id: "g_physics_dynamics_006",
    title: "Projectile Motion",
    description: "An object launched at an angle θ with an initial speed of 50 m/s.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "dynamics", "motion", "projectile", "kinematics", "diagrams", "education", "mechanics"],
    tikz: `\\begin{tikzpicture}[scale=1]
            \\draw[line width=1mm] (0,0) -- (6,0);
            \\node[
              draw,
              circle,
              fill=black,
              inner sep=4.5pt
            ] (A) at (0.5,0.3) {};
            \\draw[->, thick] (A) -- ++(1.5,0.8) node[above] {50 m/s};
            \\draw (A) ++(0.5,-0.3)
              arc[start angle=0, end angle=45, radius=0.7]
              node[pos=0.5, xshift=0.2cm, yshift=0.05cm] {\\(\\theta\\)};
            \\end{tikzpicture}`,
    libraries: [""],
    preview: "images/g_physics_dynamics_006.svg"
  },
  {
    id: "g_physics_dynamics_007",
    title: "Inclined Plane with Force",
    description: "An plane with a force F acting perpendicular to the plane to execute a work.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "dynamics", "forces", "inclined plane", "work", "diagrams", "education", "mechanics"],
    tikz: `\\begin{tikzpicture}[scale=1]
            \\draw[fill=gray!60] (0,0) -- (-0.3,-0.5) -- (0.3,-0.5) -- cycle;
            \\draw[line width=1mm] (0,0) -- (5,0);
            \\draw[->, thick] (5,0) -- (5,1.5) node[right] {$\\vec{F}$};
            \\end{tikzpicture}`,
    libraries: [""],
    preview: "images/g_physics_dynamics_007.svg"
  },
  {
    id: "g_physics_dynamics_008",
    title: "Inclined Plane with Force at an Angle",
    description: "An plane with a force F acting at an angle θ to the plane to execute a work.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "dynamics", "forces", "inclined plane", "work", "diagrams", "education", "mechanics"],
    tikz: `\\begin{tikzpicture}[scale=1]
            \\draw[line width=1mm] (0,0) -- (5,0);
            \\draw[->, thick] (5,0) -- (4,1.5)
              node[right] {$\\vec{F}$};
            \\draw
              (5,0) ++(-0.7,0)
              arc[start angle=180, end angle=127, radius=0.7]
              node[pos=0.6, xshift=-0.4cm, yshift=0cm] {\\(\\theta\\)};
            \\draw[fill=gray!60] (0,0) circle (0.3);
            \\end{tikzpicture}`,
    libraries: [""],
    preview: "images/g_physics_dynamics_008.svg"
  },
  {
    id: "g_physics_dynamics_009",
    title: "Inclined Plane with Height and Angle",
    description: "An inclined plane with height h and angle of inclination 60°.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "dynamics", "forces", "inclined plane", "work", "diagrams", "education", "mechanics"],
    tikz: `\\begin{tikzpicture}[scale=0.7]
            \\coordinate (O) at (0,0);
            \\coordinate (A) at (0,4);
            \\coordinate (B) at (5,4);
            \\draw[line width=1mm] (O) -- (5,4);
            \\draw[line width=0.2mm] (O) -- (5,0);
            \\draw[fill=gray!60] (O) rectangle (-0.2,4);
            \\draw[line width=0.2mm]
              (B) node[above right] {B}
              -- (A) node[above left] {A};
            \\draw
              (O) ++(0.7,0)
              arc[start angle=0, end angle=38, radius=0.7]
              node[pos=0.6, xshift=0.35cm, yshift=0cm] {$60^\\circ$};
            \\draw[fill=gray!60] (O) circle (0.3);
            \\end{tikzpicture}`,
    libraries: [""],
    preview: "images/g_physics_dynamics_009.svg"
  },
  {
    id: "g_physics_dynamics_010",
    title: "Box on a Surface with Forces",
    description: "A box of 10 kg on a surface with two forces acting at 37° angles and magnitudes of F1 and 100N.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "dynamics", "forces", "inclined plane", "work", "diagrams", "education", "mechanics"],
    tikz: ` \\begin{tikzpicture}[scale=1]
      \\draw[line width=1mm] (0,0) -- (5,0);
      \\draw[fill=gray!30] (1.5,0.05) rectangle (3.5,1.5);
      \\node at (2.5,0.75) {10 kg};
      \\draw[->, thick] (0,1.5) -- (1.5,0.5) node[above right, xshift=-1cm, yshift=0.5cm] {$\\vec{F_1}$};
      \\draw (1.6,.4) ++(-0.5,0) arc[start angle=180, end angle=153, radius=0.6] node[pos=0.5, xshift=-0.5cm, yshift=0.1cm] {$37^\\circ$};
      \\draw[dotted, line width=0.3mm] (0,0.4) -- (1.5,0.4);
      \\draw[->, thick] (5,1.5) -- (3.5,0.5) node[above right, xshift=0.1cm, yshift=0.7cm] {$100N$};
      \\draw (4.5,.4) ++(-0.5,0) arc[start angle=0, end angle=37, radius=0.6] node[pos=0.5, xshift=0.5cm, yshift=0.1cm] {$37^\\circ$};
      \\draw[dotted, line width=0.3mm] (3.5,0.4) -- (5,0.4);
      \\end{tikzpicture} `,
    libraries: [""],
    preview: "images/g_physics_dynamics_010.svg"
  },
  {
    id: "g_physics_dynamics_011",
    title: "Pulley System with Weights",
    description: "A pulley system with three weights of 7 kg, 2 kg, and 1 kg connected by strings and a tension force T.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "dynamics", "forces", "pulleys", "mechanics", "diagrams", "education", "statics"],
    tikz: ` \\begin{tikzpicture}[scale=1]
      \\draw[line width=1mm] (0,-0.05) -- (7,-0.05);
      \\draw[fill=gray!30] (0,0) rectangle (2,1);
      \\node at (1,0.5) {7 kg};
      \\draw[fill=gray!30] (3,0) rectangle (4.5,1);
      \\node at (3.75,0.5) {2 kg};
      \\draw[fill=gray!30] (5,0) rectangle (6,1);
      \\node at (5.5,0.5) {1 kg};
      \\draw[thick] (2,0.5) -- (3,0.5);
      \\draw[thick] (4.5,0.5) -- (5,0.5);
      \\draw[thick,->] (6,0.5) -- (7.5,0.5) node[midway, above] {$100N$};
      \\node[draw, circle, fill=black, inner sep=1.5pt, label=above:{$\\vec{T}$}] at (2.5,0.5) {};
      \\end{tikzpicture} `,
    libraries: [""],
    preview: "images/g_physics_dynamics_011.svg"
  },
  {
    id: "g_physics_dynamics_012",
    title: "Box Hanging from Two Cables",
    description: "A box of 3 kg hanging from two cables forming angles with the horizontal, with gravitational force acting downwards.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "dynamics", "forces", "pulleys", "inclined planes", "mechanics", "diagrams", "education", "statics"],
    tikz: ` \\begin{tikzpicture}[scale=1]
      \\draw[line width=1mm] (-3,1.5) -- (5,1.5);
      \\foreach \\x in {-3,-2.5,...,5} { \\draw[thick] (\\x,2) -- (\\x,1.8); } \\foreach \\x in {-2.75,-2.25,...,4.75} { \\draw[thick] (\\x,1.8) -- (\\x,1.6); } \\draw[fill=gray!30] (0,0) rectangle (2,-1);
      \\node at (1,-0.5) {3 kg};
      \\draw[thick] (0,0) -- (-2,1.5);
      \\node[above] at (-2,2) {};
      \\draw[thick] (2,0) -- (4,1.5);
      \\node[above] at (4,2) {};
      \\draw[thick, ->] (3,-0.5) -- (3,-1) node[midway, right] {$\\vec{g}$};
      \\end{tikzpicture} `,
    libraries: [""],
    preview: "images/g_physics_dynamics_012.svg"
  },
  {
    id: "g_physics_dynamics_013",
    title: "Double pulley System",
    description: "A double pulley system with a tank labeled 90N, pipes, circles representing pulleys.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "thermodynamics", "systems", "diagrams", "education", "mechanics"],
    tikz: ` \\begin{tikzpicture}
      \\draw[line width=1mm] (-1.5,4.5) -- (1.5,4.5);
      \\foreach \\x in {-1.5,-1,...,1.5} { \\draw[thick] (\\x,5) -- (\\x,4.8); } \\foreach \\x in {-1.25,-0.75,...,1.25} { \\draw[thick] (\\x,4.8) -- (\\x,4.6); } \\draw[line width=0.5mm] (-0.5,3.4) circle(0.3);
      \\draw[line width=0.5mm] (0.1,2) circle(0.3);
      \\draw[thick] (-0.81,1) -- (-0.81,3.5);
      \\draw[fill=black] (-0.81,2) circle (2pt);
      \\node at (-1.2,2.25) {$T$};
      \\draw[thick] (-0.21,2) -- (-0.21,3.5);
      \\draw[thick] (0.4,2) -- (0.4,4.5);
      \\draw[thick] (-0.5,4.5) -- (-0.5,3.3);
      \\draw[thick] (0.1,2) -- (0.1,1);
      \\draw[fill=gray!30] (-1.5,0) rectangle (1.5,1);
      \\node at (0,0.5) {\\textbf{90N}};
      \\end{tikzpicture} `,
    libraries: [""],
    preview: "images/g_physics_dynamics_013.svg"
  },
  {
    id: "g_physics_dynamics_014",
    title: "Pulley System",
    description: "A pulley system with a tank labeled 10 Kg, pipes, angles.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "thermodynamics", "systems", "diagrams", "education", "mechanics"],
    tikz: ` \\begin{tikzpicture}
      \\draw[line width=1mm] (-1.5,4.5) -- (1.5,4.5);
      \\foreach \\x in {-1.5,-1,...,1.5} { \\draw[thick] (\\x,5) -- (\\x,4.8); } \\foreach \\x in {-1.25,-0.75,...,1.25} { \\draw[thick] (\\x,4.8) -- (\\x,4.6); } \\draw[line width=0.5mm] (-0.5,3.4) circle(0.3);
      \\draw[thick] (-0.81,1) -- (-0.81,3.5);
      \\node at (1.2,3) {$T$};
      \\draw[thick] (2.21,2) -- (-0.21,3.5);
      \\draw[thick] (-0.5,4.5) -- (-0.5,3.3);
      \\draw[fill=gray!30] (-1.5,0) rectangle (0,1);
      \\node at (-0.75,0.5) {\\textbf{10 Kg}};
      \\draw (0.35,3.7) arc[start angle=0, end angle=-50, radius=0.5] node[pos=0.5, xshift=0.5cm, yshift=-0.1cm] {$45^\\circ$};
      \\draw[dotted, line width=0.5mm] (-0.5,3.7) -- (2,3.7);
      \\end{tikzpicture} `,
    libraries: [""],
    preview: "images/g_physics_dynamics_014.svg"
  },
  {
    id: "g_physics_dynamics_015",
    title: "Inclined Plane with Box",
    description: "An inclined plane at 30° with a box of mass m resting on it.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "dynamics", "forces", "inclined plane", "work", "diagrams", "education", "mechanics"],
    tikz: ` \\begin{tikzpicture}[scale=1.2]
      \\draw[thick] (0,0) -- (4,0);
      \\draw[thick] (0,0) -- (4,2.31);
      \\draw[thick] (4,0) -- (4,2.31);
      \\begin{scope}[rotate around={30:(0.9,1.97)}] \\draw[fill=gray!30] (1.2,0.7) rectangle (1.8,1.3);
      \\node at (1.5,1) {$m$};
      \\end{scope} \\draw (0.7,0) arc[start angle=0, end angle=30, radius=0.7];
      \\node at (1,0.18) {$30^\\circ$};
      \\draw[thick] (-0.5,0) -- (4.5,0);
      \\end{tikzpicture} `,
    libraries: [""],
    preview: "images/g_physics_dynamics_015.svg"
  },
  {
    id: "g_physics_dynamics_016",
    title: "A traffic light hanging.",
    description: "A traffic light hanging between two poles with cables, showing red, yellow, and green lights.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "structures", "loads", "bridge", "diagrams", "education", "mechanics"],
    tikz: ` \\begin{tikzpicture}[scale=1]
      \\draw[thick] (-2,-0.5) -- (6,-0.5);
      \\draw[thick, fill=gray!40] (0,-0.5) -- (0,2.5) -- (0.2,2.5) -- (0.2,-0.5) -- cycle;
      \\draw[thick, fill=gray!40] (4,-0.5) -- (4,2.5) -- (4.2,2.5) -- (4.2,-0.5) -- cycle;
      \\draw[thick] (0.1,2.5) -- (2,2.2);
      \\draw[thick] (4.1,2.5) -- (2,2.2);
      \\draw[fill=black] (1.7,1.7) rectangle (2.3,2.2);
      \\draw[fill=red] (2,2.1) circle (0.07);
      \\draw[fill=yellow] (2,1.95) circle (0.07);
      \\draw[fill=green] (2,1.8) circle (0.07);
      \\end{tikzpicture} `,
    libraries: [""],
    preview: "images/g_physics_dynamics_016.svg"
  },
  {
    id: "g_math_functions_001",
    title: "Graph of the natural logarithm function",
    description: "A graph representing the natural logarithm function ln(x) with labeled axes and origin.",
    author: "TikzRepo",
    categories: ["math"],
    keywords: ["mathematics", "functions", "graphs", "logarithms", "education", "diagrams"],
    tikz: ` \\begin{tikzpicture}[scale=0.8]
      \\draw[->] (-0.5,0) -- (7,0) node[right] {$x$};
      \\draw[->] (0,-2.5) -- (0,2.5) node[above] {$\\ln x$}; % Origen \\node[below left] at (0,0) {0};
      \\draw[red, thick, domain=0.1:7, samples=100] plot (\\x, {ln(\\x)});
      \\end{tikzpicture} `,
    libraries: [""],
    preview: "images/g_math_functions_001.svg"
  },
  {
    id: "g_math_functions_002",
    title: "Point on the curve y = sqrt(3)x",
    description: "A graph showing the point (-3.5√3, -3.5) on the line y = √3 x with dashed lines to the axes.",
    author: "TikzRepo",
    categories: ["math"],
    keywords: ["mathematics", "functions", "graphs", "lines", "education", "diagrams"],
    tikz: ` \\begin{tikzpicture}[scale=1]
      \\draw[->] (-7,0) -- (1.2,0) node[right] {$x$};
      \\draw[->] (0,-7) -- (0,1.2) node[above] {$y$};
      \\node[below left] at (0,0) {0};
      \\draw (0.1,-3.5) -- (-0.1,-3.5) node[right] {$-3.5$};
      \\pgfmathsetmacro{\\xcoord}{-3.5*sqrt(3)} \\draw (\\xcoord,0.1) -- (\\xcoord,-0.1) node[above] {$-3.5\\sqrt{3}$};
      \\fill[red] (\\xcoord,-3.5) circle (2.5pt);
      \\draw[dashed] (\\xcoord,0) -- (\\xcoord,-3.5) -- (0,-3.5);
      \\end{tikzpicture} `,
    libraries: [""],
    preview: "images/g_math_functions_002.svg"  
  },
  {
    id: "g_math_functions_003",
    title: "Right Triangle with Side Lengths",
    description: "A right triangle with legs of length k and hypotenuse of length k√2, including angle markings.",
    author: "TikzRepo",
    categories: ["math"],
    keywords: ["mathematics", "geometry", "triangles", "diagrams", "education"],
    tikz: ` \\begin{tikzpicture}[scale=1.2]
      \\draw[thick] (0,0) -- (3,0) -- (0,3) -- cycle;
      \\node[below left] at (0,0) {A};
      \\node[below right] at (3,0) {B};
      \\node[above left] at (0,3) {C};
      \\node[below] at (1.5,0) {$k$};
      \\node[left] at (0,1.5) {$k$};
      \\node[above right] at (1.5,1.5) {$k\\sqrt{2}$};
      \\filldraw[fill=black] (0,0) rectangle +(0.2,0.2);
      \\draw (2.5,0) arc (180:135:0.5);
      \\node at (2.3,0.4) {$45^\\circ$};
      \\draw (0,2.5) arc (270:315:0.5);
      \\node at (0.4,2.3) {$45^\\circ$};
      \\end{tikzpicture} `,
    libraries: [""],
    preview: "images/g_math_functions_003.svg"
  },
  {
    id: "g_math_functions_004",
    title: "Polar Coordinates Point",
    description: "A polar coordinate system with a point located at (12, 7π/4) and angle markings.",
    author: "TikzRepo",
    categories: ["math"],
    keywords: ["mathematics", "geometry", "polar coordinates", "diagrams", "education"],
    tikz: ` \\begin{tikzpicture}[scale=0.25]
      \\foreach \\R in {1,3,...,13} { \\draw[gray!30] (0,0) circle (\\R);
      \\node[left] at (0,\\R) {$\\R$}; } \\foreach \\ang in {0,30,...,330} { \\draw[gray!30] (0,0) -- (\\ang:14); } \\draw[->, thick] (0,0) -- (14,0) node[right] {$0^\\circ$};
      \\draw[->, thick] (0,0) -- (90:14) node[above] {$90^\\circ$};
      \\draw[->, thick] (0,0) -- (180:14) node[left] {$180^\\circ$};
      \\draw[->, thick] (0,0) -- (270:14) node[below] {$270^\\circ$};
      \\draw[->, thick, red] (0:2) arc (0:315:2);
      \\node at (315:2.5) {$315^\\circ$};
      \\draw[thick, black] (0,0) -- (315:12);
      \\fill[red] (315:12) circle (4pt);
      \\node at (315:12.5) [anchor=east] {$(12,\\tfrac{7\\pi}{4})$};
      \\end{tikzpicture} `,
    libraries: [""],
    preview: "images/g_math_functions_004.svg"
  },
  {
    id: "g_math_functions_005",
    title: "Polar Curve r = 4 - 8 cos(θ)",
    description: "A polar coordinate system displaying the curve r = 4 - 8 cos(θ) with labeled points and grid lines.",
    author: "TikzRepo",
    categories: ["math"],
    keywords: ["mathematics", "geometry", "polar coordinates", "curves", "diagrams", "education"],
    tikz: ` \\begin{tikzpicture}[scale=0.25]
      \\foreach \\r in {2,4,6,8,10,12} { \\draw[gray!30] (0,0) circle (\\r);
      \\node[left] at (0,\\r) {$\\r$}; } \\foreach \\angle in {0,30,...,330} { \\draw[gray!30] (0,0) -- (\\angle:13); } \\draw[->, thick] (0,0) -- (13,0) node[right] {$0^\\circ$};
      \\draw[->, thick] (0,0) -- (90:13) node[above] {$90^\\circ$};
      \\draw[->, thick] (0,0) -- (180:13) node[left] {$180^\\circ$};
      \\draw[->, thick] (0,0) -- (270:13) node[below] {$270^\\circ$};
      \\draw[red, thick, domain=0:360, samples=200, smooth] plot (\\x:{(4 - 8*cos(\\x))});
      \\fill[blue] (0:{-4}) circle (3pt);
      \\fill[blue] (180:{12}) circle (3pt);
      \\fill[blue] (60:{4 - 8*cos(60)}) circle (3pt) node[above right] {$r=4-8\\cos\\theta$};
      \\end{tikzpicture} `,
    libraries: [""],
    preview: "images/g_math_functions_005.svg"
  },
  {
    id: "g_math_functions_006",
    title: "Tetrahedron with Vertices Labeled",
    description: "A 3D representation of a tetrahedron with vertices labeled as points in 3D space.",
    author: "TikzRepo",
    categories: ["math"],
    keywords: ["mathematics", "geometry", "3D shapes", "tetrahedron", "diagrams", "education"],
    tikz: ` \\begin{tikzpicture}[scale=0.3]
      \\coordinate (Z) at (0,20,0);
      \\coordinate (Y) at (12,0,0);
      \\coordinate (X) at (-1,0.15,22);
      \\coordinate (O) at (0,0,0);
      \\coordinate (A) at (11,0,0);
      \\coordinate (B) at (0,19,0);
      \\coordinate (C) at (-1,0,19);
      \\fill[blue!20, opacity=0.7] (O) -- (A) -- (B) -- cycle;
      \\fill[red!20, opacity=0.7] (O) -- (A) -- (C) -- cycle;
      \\fill[green!20, opacity=0.7] (O) -- (B) -- (C) -- cycle;
      \\fill[yellow!20, opacity=0.7] (A) -- (B) -- (C) -- cycle;
      \\draw[thick] (O) -- (Z) -- cycle;
      \\draw[thick] (O) -- (X) -- cycle;
      \\draw[thick] (O) -- (Y) -- cycle;
      \\draw[thick] (O) -- (A) -- (B) -- cycle;
      \\draw[thick] (O) -- (A) -- (C) -- cycle;
      \\draw[thick] (O) -- (B) -- (C) -- cycle;
      \\draw[thick] (A) -- (B) -- (C) -- cycle;
      \\node[above] at (Z) {$Z$};
      \\node[right] at (X) {$X$};
      \\node[above left] at (Y) {$Y$};
      \\node[above right] at (O) {$P(0,0,0)$};
      \\node[below right] at (A) {$P(0,11,0)$};
      \\node[left] at (B) {$P(0,0,19)$};
      \\node[above left] at (C) {$P(13,0,0)$};
      \\end{tikzpicture} `,
    libraries: [""],
    preview: "images/g_math_functions_006.svg"
  },
  {
    id: "g_math_functions_007",
    title: "Area under the curve f(x) = 14 - x^2",
    description: "A graph showing the area under the curve f(x) = 14 - x^2 from x=0 to x=√14, with the centroid marked.",
    author: "TikzRepo",
    categories: ["math"],
    keywords: ["mathematics", "functions", "graphs", "areas", "centroid", "diagrams", "education"],
    tikz: ` \\begin{tikzpicture}[scale=0.3]
      \\draw[thick] (0,0) -- (5,0) node[anchor=north west] {x};
      \\draw[thick] (0,0) -- (0,15) node[anchor=south east] {y};
      \\draw[domain=0:3.74, smooth, variable=\\x, blue, thick] plot ({\\x}, {14 - \\x*\\x});
      \\fill[blue!20, opacity=0.5] (0,0) -- plot[domain=0:3.74, smooth, variable=\\x] ({\\x}, {14 - \\x*\\x}) -- (3.74,0) -- cycle;
      \\fill[red] (1.4, 5.6) circle (0.2) node[anchor=south west] {Centroide $\\left(\\tfrac{3\\sqrt{14}}{8}, \\tfrac{28}{5}\\right)$};
      \\draw (3.74,0) -- ++(0,-0.12);
      \\draw (0,14) -- ++(-0.12,0);
      \\node[below] at (3.74,0) {$\\sqrt{14}$};
      \\node[left] at (0,14) {$14$};
      \\node[above right] at (2,10) {$f(x) = 14 - x^{2}$};
      \\end{tikzpicture} `,
    libraries: [""],
    preview: "images/g_math_functions_007.svg"
  },
  {
    id: "g_math_functions_008",
    title: "Region bounded by y = 2√x and y = x/2",
    description: "A graph showing the region bounded by the curves y = 2√x and y = x/2, with axes and labeled points.", 
    author: "TikzRepo",
    categories: ["math"],
    keywords: ["mathematics", "functions", "graphs", "areas", "diagrams", "education"],
    tikz: ` \\begin{tikzpicture}[scale=0.35]
      \\draw[thick] (-0.5,0) -- (18,0) node[right] {x};
      \\draw[thick] (0,-0.5) -- (0,10) node[above] {y};
      \\foreach \\x in {0,4,8,12,16} \\draw (\\x,0.12) -- (\\x,-0.12) node[below] {\\x};
      \\foreach \\y in {0,2,4,6,8} \\draw (0.12,\\y) -- (-0.12,\\y) node[left] {\\y};
      \\fill[green!30,opacity=0.5] plot[domain=0:16,smooth,variable=\\x] ({\\x},{2*sqrt(\\x)}) -- plot[domain=16:0,smooth,variable=\\x] ({\\x},{\\x/2}) -- cycle;
      \\draw[domain=0:16,smooth,variable=\\x,blue,thick] plot ({\\x},{2*sqrt(\\x)}) node[xshift=-100pt, yshift=-15pt] {$y=2\\sqrt{x}$};
      \\draw[domain=0:16,smooth,variable=\\x,red,thick] plot ({\\x},{\\x/2}) node[xshift=-80pt, yshift=-55pt] {$y=\\tfrac{x}{2}$};
      \\fill (0,0) circle (2pt) node[below left] {$(0,0)$};
      \\fill (16,8) circle (2pt) node[above right] {$(16,8)$};
      \\end{tikzpicture} `,
    libraries: [""],
    preview: "images/g_math_functions_008.svg"
  },
  {
    id: "g_physics_dynamics_017",
    title: "Complex Electrical Circuit",
    description: "A complex electrical circuit with multiple resistors connected in series and parallel between points A and B.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "electricity", "circuits", "resistors", "diagrams", "education", "electronics"],
    tikz: ` \\begin{tikzpicture}[baseline={(0,0)}, line width=0.8pt]
      \\coordinate (A) at (0,0);
      \\coordinate (B) at (5,0);
      \\draw (A) -- ++(0.8,0);
      \\draw (B) -- ++(-0.8,0);
      \\draw[thick] (0.8,0) -- (0.9,0.3) -- (1.0,-0.3) -- (1.1,0.3) -- (1.2,-0.3) -- (1.3,0);
      \\node[above=3pt] at (1.05,0.2) {$2\\Omega$};
      \\draw[thick] (1.3,0) -- (1.8,0);
      \\draw[thick] (1.8,1) -- (1.8,-1);
      \\draw[thick] (1.8,1) -- (2.3,1);
      \\draw[thick] (1.8,0) -- (2.3,0);
      \\draw[thick] (1.8,-1) -- (2.3,-1);
      \\draw[thick] (2.3,1) -- (2.4,1.3) -- (2.5,0.7) -- (2.6,1.3) -- (2.7,0.7) -- (2.8,1);
      \\node[above=3pt] at (2.55,1.2) {$2\\Omega$};
      \\draw[thick] (2.8,1) -- (3.3,1);
      \\draw[thick] (2.3,0) -- (2.4,0.3) -- (2.5,-0.3) -- (2.6,0.3) -- (2.7,-0.3) -- (2.8,0);
      \\node[above=3pt] at (2.55,0.2) {$4\\Omega$};
      \\draw[thick] (2.8,0) -- (3.3,0);
      \\draw[thick] (2.3,-1) -- (2.4,-0.7) -- (2.5,-1.3) -- (2.6,-0.7) -- (2.7,-1.3) -- (2.8,-1);
      \\node[above=3pt] at (2.55,-0.8) {$8\\Omega$};
      \\draw[thick] (2.8,-1) -- (3.3,-1);
      \\draw[thick] (3.3,1) -- (3.3,-1);
      \\draw[thick] (3.3,0) -- (3.8,0);
      \\draw[thick] (3.8,0) -- (3.9,0.3) -- (4.0,-0.3) -- (4.1,0.3) -- (4.2,-0.3) -- (4.3,0);
      \\node[above=3pt] at (4.05,0.2) {$2\\Omega$};
      \\fill (A) circle (1.2pt) node[below left] {A};
      \\fill (B) circle (1.2pt) node[below right] {B};
      \\end{tikzpicture} `,
    libraries: [""],
    preview: "images/g_physics_dynamics_017.svg"
  },
  {
    id: "g_physics_dynamics_018",
    title: "Electrical Circuit with Voltage Source and Resistors",
    description: "An electrical circuit featuring a 12V voltage source and multiple resistors connected in series and parallel.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "electricity", "circuits", "resistors", "voltage source", "diagrams", "education", "electronics"],
    tikz: ` \\begin{tikzpicture}[line width=1pt]
      \\draw[thick] (0,0) -- (0.8,0);
      \\draw[thick] (0.2,-0.2) -- (0.6,-0.2) node[midway, left=20pt] {$12V$};
      \\draw[thick] (0.4,0) -- (0.4,1);
      \\draw[thick] (0.4,1) -- (0.8,1);
      \\draw[thick] (0.8,1) -- (0.9,1.15) -- (1.0,0.85) -- (1.1,1.15) -- (1.2,0.85) -- (1.3,1);
      \\node[above=3pt] at (1.05,1) {$2\\Omega$};
      \\draw[thick] (1.3,1) -- (2.3,1);
      \\draw[thick] (2.3,1) -- (2.4,1.15) -- (2.5,0.85) -- (2.6,1.15) -- (2.7,0.85) -- (2.8,1);
      \\node[above=3pt] at (2.55,1) {$3\\Omega$};
      \\draw[thick] (2.8,1) -- (3.2,1);
      \\draw[thick] (3.2,1) -- (3.2,0.5);
      \\draw[thick] (3.2,0.5) -- (3.35,0.6) -- (3.25,0.7) -- (3.35,0.8) -- (3.25,0.9) -- (3.2,1.0);
      \\draw[thick] (3.2,0) -- (3.35,0.1) -- (3.25,0.2) -- (3.35,0.3) -- (3.25,0.4) -- (3.2,0.5);
      \\node[right=3pt] at (3.2,0.25) {$4\\Omega$};
      \\draw[thick] (3.2,0) -- (3.2,-0.5);
      \\draw[thick] (3.2,-0.5) -- (3.35,-0.4) -- (3.25,-0.3) -- (3.35,-0.2) -- (3.25,-0.1) -- (3.2,0);
      \\draw[thick] (3.2,-1) -- (3.35,-0.9) -- (3.25,-0.8) -- (3.35,-0.7) -- (3.25,-0.6) -- (3.2,-0.5);
      \\node[right=3pt] at (3.2,-0.75) {$6\\Omega$};
      \\draw[thick] (3.2,-1) -- (3.2,-1.5);
      \\draw[thick] (2.8,-1.5) -- (3.2,-1.5);
      \\draw[thick] (2.3,-1.5) -- (2.4,-1.35) -- (2.5,-1.65) -- (2.6,-1.35) -- (2.7,-1.65) -- (2.8,-1.5);
      \\node[above=3pt] at (2.55,-1.5) {$5\\Omega$};
      \\draw[thick] (2.3,-1.5) -- (1.3,-1.5);
      \\draw[thick] (0.8,-1.5) -- (0.9,-1.35) -- (1.0,-1.65) -- (1.1,-1.35) -- (1.2,-1.65) -- (1.3,-1.5);
      \\node[above=3pt] at (1.05,-1.5) {$4\\Omega$};
      \\draw[thick] (0.8,-1.5) -- (0.4,-1.5);
      \\draw[thick] (0.4,-1.5) -- (0.4,-0.2);
      \\end{tikzpicture} `,
    libraries: [""],
    preview: "images/g_physics_dynamics_018.svg"
  },
  {
    id: "g_physics_dynamics_019",
    title: "Magnetic Field around a Current-Carrying Wire",
    description: "A diagram showing the magnetic field lines around a current-carrying wire with a point Q and velocity vector v.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "magnetism", "magnetic fields", "current-carrying wire", "diagrams", "education", "electromagnetism"],
    tikz: ` \\begin{tikzpicture}[scale=1, every node/.style={font=\\small}]
      \\foreach \\x in {-2,-1,...,2}{ \\foreach \\y in {-2,-1,...,2}{ \\node at (\\x,\\y) {\\small $\\times$}; } } \\draw[->, thick] (0,0) -- (1,-1) node[right] {$\\vec v$};
      \\fill[white] (0,0) circle (0.4cm);
      \\draw[thick] (0,0) circle (0.4cm) node {$Q$};
      \\end{tikzpicture} `,
    libraries: [""],
    preview: "images/g_physics_dynamics_019.svg"
  },
  {
    id: "g_physics_dynamics_020",
    title: "Electromagnetic Wave Representation",
    description: "A 3D diagram illustrating an electromagnetic wave with electric and magnetic field vectors.",
    author: "TikzRepo",
    categories: ["physics"],
    keywords: ["physics", "electromagnetism", "waves", "electric field", "magnetic field", "diagrams", "education"],
    tikz: ` \\begin{tikzpicture}[scale=1, every node/.style={font=\\small}]
      \\draw[->] (0,-2,0) -- (0,2,0) node[anchor=north west] {$z$};
      \\draw[->] (0,0,-2) -- (0,0,2) node[anchor=south] {$x$};
      \\draw[->, thick] (0,0,0) -- (2.5,0,0) node[above=10pt] {$y$};
      \\draw[thick, blue, domain=0:3.5, samples=100] plot (\\x, {1.2*sin(2*\\x r)}, 0);
      \\foreach \\x in {0.5,1.0,...,3.5} { \\draw[->, thick, blue] (\\x,0,0) -- (\\x, {1.2*sin(2*\\x r)}, 0); } \\node[blue] at (3.8,1.3,0) {$\\vec{E}$};
      \\draw[thick, red, domain=0:3.5, samples=100] plot (\\x, 0, {0.8*sin(2*\\x r)});
      \\foreach \\x in {0.5,1.0,...,3.5} { \\draw[->, thick, red] (\\x,0,0) -- (\\x, 0, {0.8*sin(2*\\x r)}); } \\node[red] at (3.8,0,1.1) {$\\vec{B}$};
      \\end{tikzpicture} `,
    libraries: [""],
    preview: "images/g_physics_dynamics_020.svg"
  },
];
