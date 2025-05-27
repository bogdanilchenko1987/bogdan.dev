        document.addEventListener("DOMContentLoaded", () => {
          const form = document.querySelector('form[name="contact"]');
          if (!form) return;

          form.addEventListener("submit", function (e) {
            e.preventDefault();

            form.reset();

            setTimeout(() => {
              window.location.href = "/thanks/";
            }, 500);
          });
        });