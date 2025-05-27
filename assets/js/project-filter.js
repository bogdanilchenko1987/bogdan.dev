      const buttons = document.querySelectorAll(".filter-btn");
      const cards = document.querySelectorAll(".card");

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const selectedCategory = button.getAttribute("data-category");

          // Зміна стилю активної кнопки
          buttons.forEach((btn) => {
            btn.classList.remove(
              "text-green-600",
              "border-b-2",
              "border-green-600"
            );
            btn.classList.add("text-gray-600");
          });
          button.classList.remove("text-gray-600");
          button.classList.add(
            "text-green-600",
            "border-b-2",
            "border-green-600"
          );

          // Фільтрація карток
          cards.forEach((card) => {
            const cardCategory = card.getAttribute("data-category");
            if (
              selectedCategory === "all" ||
              cardCategory === selectedCategory
            ) {
              card.classList.remove("hidden");
            } else {
              card.classList.add("hidden");
            }
          });
        });
      });