 const terminal = document.getElementById("terminal");

      const lines = [
        "> show name",
        "Bogdan Ilchenko",
        "",
        "> show info",
        "Graduated from KPI, worked in SEO, transitioned to development.",
        "Currently working as Front-end Developer.",
        "",
        "> show skills",
        "HTML5/CSS3/SASS  JavaScript  React  Redux  Zustand  Git  Vite",
        "TypeScript  Next.js  REST API  Node.js  Express  MongoDB  WordPress",
        "",
        "> show languages",
        "English - Upper-Intermediate",
        "Ukrainian - Native",
        "",
        "> _",
      ];

      let lineIndex = 0;
      let charIndex = 0;
      let currentLine = "";
      const typingSpeed = 25;

      function typeLine() {
        if (lineIndex >= lines.length) return;

        const fullLine = lines[lineIndex];
        currentLine += fullLine[charIndex] || "";

        terminal.innerHTML = terminal.innerHTML
          .replace(/<span class="blinking-cursor"><\/span>/, "")
          .replace(/_$/, "");

        terminal.innerHTML += fullLine[charIndex] || "";
        terminal.innerHTML += '<span class="blinking-cursor"></span>';

        charIndex++;

        if (charIndex < fullLine.length) {
          setTimeout(typeLine, typingSpeed);
        } else {
          terminal.innerHTML =
            terminal.innerHTML.replace(
              '<span class="blinking-cursor"></span>',
              ""
            ) + "\n";
          currentLine = "";
          charIndex = 0;
          lineIndex++;
          setTimeout(typeLine, 400);
        }
      }

      typeLine();