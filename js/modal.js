/* =========================================================
   MODAL.JS
   Generisk, gjenbrukbar modal-styring for hele THEOLOGIA.

   Bruk:
     Ethvert element med data-modal-open="modal-id" åpner
     elementet med id="modal-id" (må ha class="modal-overlay").
     Flere elementer kan dele samme data-modal-open – f.eks. et
     helt kort OG en knapp inni kortet kan begge åpne samme
     modal; delegering via closest() nedenfor sørger for at kun
     ÉN åpning skjer per klikk, uansett hvor mange nivåer med
     data-modal-open-elementer klikket trigger går gjennom.
     Ethvert element inni modalen med data-modal-close lukker den.

   Funksjonalitet (uavhengig av hvor mange modaler siden har):
   - Fade + scale-animasjon styres av .is-open-klassen i modal.css
   - Esc lukker åpen modal
   - Klikk på overlay (utenfor selve modal-boksen) lukker den
   - Fokus flyttes inn i modalen ved åpning og fanges der
     (Tab/Shift+Tab kan ikke forlate modalen mens den er åpen)
   - Fokus gis tilbake til elementet som åpnet modalen ved lukking

   Ingen avhengigheter. Vanilla JavaScript.
   ========================================================= */

(function () {
    "use strict";

    var OPEN_CLASS = "is-open";
    var TRANSITION_MS = 250; // må matche transition-varigheten i modal.css

    var FOCUSABLE_SELECTOR =
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    var activeModal = null;
    var previouslyFocused = null;

    function getFocusableElements(modal) {
        return Array.prototype.slice.call(modal.querySelectorAll(FOCUSABLE_SELECTOR));
    }

    function openModal(overlay, trigger) {
        if (!overlay) return;

        previouslyFocused = trigger || document.activeElement;
        activeModal = overlay;

        overlay.removeAttribute("hidden");

        // Vent én frame slik at [hidden] rekker å fjernes før
        // .is-open legges til – ellers spilles ikke transitionen.
        requestAnimationFrame(function () {
            overlay.classList.add(OPEN_CLASS);
        });

        var modal = overlay.querySelector(".modal");
        var focusable = getFocusableElements(modal);
        var target = modal.querySelector(".modal-close") || focusable[0] || modal;
        target.focus();

        document.addEventListener("keydown", handleKeydown);
    }

    function closeModal(overlay) {
        if (!overlay) return;

        overlay.classList.remove(OPEN_CLASS);

        // [hidden] settes tilbake etter at fade-ut-animasjonen er ferdig,
        // slik at modalen faktisk rekker å animere ut i stedet for å
        // forsvinne brått.
        window.setTimeout(function () {
            overlay.setAttribute("hidden", "");
        }, TRANSITION_MS);

        document.removeEventListener("keydown", handleKeydown);

        if (previouslyFocused && typeof previouslyFocused.focus === "function") {
            previouslyFocused.focus();
        }

        activeModal = null;
        previouslyFocused = null;
    }

    function handleKeydown(event) {
        if (!activeModal) return;

        if (event.key === "Escape") {
            closeModal(activeModal);
            return;
        }

        if (event.key === "Tab") {
            trapFocus(event);
        }
    }

    // Holder Tab/Shift+Tab inni modalen så lenge den er åpen.
    function trapFocus(event) {
        var modal = activeModal.querySelector(".modal");
        var focusable = getFocusableElements(modal);

        if (focusable.length === 0) return;

        var first = focusable[0];
        var last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }

    document.addEventListener("DOMContentLoaded", function () {

        // Åpne: ÉN delegert lytter på hele dokumentet i stedet for én
        // per element. closest() finner det nærmeste data-modal-open-
        // elementet fra klikkpunktet og oppover – klikker man på en
        // knapp som ligger inni et kort som OGSÅ har data-modal-open,
        // brukes knappen (nærmest), ikke kortet, men uansett hvor i
        // treet klikket skjer åpnes riktig modal nøyaktig én gang.
        document.addEventListener("click", function (event) {
            var trigger = event.target.closest("[data-modal-open]");
            if (!trigger) return;

            event.preventDefault();
            var overlay = document.getElementById(trigger.getAttribute("data-modal-open"));
            openModal(overlay, trigger);
        });

        // Lukke: samme delegeringsmønster for data-modal-close.
        document.addEventListener("click", function (event) {
            var closeTrigger = event.target.closest("[data-modal-close]");
            if (!closeTrigger) return;

            event.preventDefault();
            closeModal(closeTrigger.closest(".modal-overlay"));
        });

        // Klikk direkte på overlayet (utenfor .modal-boksen) lukker.
        document.querySelectorAll(".modal-overlay").forEach(function (overlay) {
            overlay.addEventListener("click", function (event) {
                if (event.target === overlay) {
                    closeModal(overlay);
                }
            });
        });
    });

})();