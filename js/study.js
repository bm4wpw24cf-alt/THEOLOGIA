/* =========================================================
   STUDY.JS
   Styrer accordion-oppførsel på kapittelsider
   (.accordion-header og .sub-header i study.css).

   Denne filen var lenket i kapittel-4.html fra før, men
   fantes ikke i prosjektet – uten den fungerte ikke
   accordion-knappene i det hele tatt.

   Enkel, avhengighetsfri vanilla JS. Hvert element åpnes/
   lukkes uavhengig av de andre (ikke "kun én åpen om gangen"),
   i tråd med at hver seksjon har egen count-badge og kan leses
   frittstående.
   ========================================================= */

(function () {
    "use strict";

    function toggle(button) {
        var isOpen = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!isOpen));
    }

    function initAccordionGroup(selector) {
        var buttons = document.querySelectorAll(selector);

        buttons.forEach(function (button) {
            // Sikrer at aria-expanded finnes selv der det mangler i HTML
            // (f.eks. .sub-header-knappene i dagens kapittel-4.html)
            if (!button.hasAttribute("aria-expanded")) {
                button.setAttribute("aria-expanded", "false");
            }

            button.addEventListener("click", function () {
                toggle(button);
            });
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        initAccordionGroup(".accordion-header");
        initAccordionGroup(".sub-header");
    });
})();