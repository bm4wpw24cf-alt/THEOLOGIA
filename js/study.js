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

    function createControl(label, className, text) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = className;
        button.setAttribute("aria-label", label);
        button.textContent = text;
        return button;
    }

    function initInfographicViewers() {
        var slideGroups = document.querySelectorAll(".infographic-slides");

        if (!slideGroups.length) {
            return;
        }

        var modal = document.createElement("dialog");
        modal.className = "infographic-modal";
        modal.innerHTML =
            '<div class="infographic-modal-inner">' +
                '<button class="infographic-modal-close" type="button" aria-label="Lukk stor visning">×</button>' +
                '<button class="infographic-modal-prev" type="button" aria-label="Forrige lysbilde">‹</button>' +
                '<figure class="infographic-modal-figure"><img alt=""><figcaption></figcaption></figure>' +
                '<button class="infographic-modal-next" type="button" aria-label="Neste lysbilde">›</button>' +
            '</div>';
        document.body.appendChild(modal);

        var modalImage = modal.querySelector("img");
        var modalCaption = modal.querySelector("figcaption");
        var modalClose = modal.querySelector(".infographic-modal-close");
        var modalPrevious = modal.querySelector(".infographic-modal-prev");
        var modalNext = modal.querySelector(".infographic-modal-next");
        var modalSlides = [];
        var modalIndex = 0;
        var lastTrigger = null;

        function updateModal() {
            var slide = modalSlides[modalIndex];
            var image = slide.querySelector("img");
            var caption = slide.querySelector("figcaption");

            modalImage.src = image.currentSrc || image.src;
            modalImage.alt = image.alt;
            modalCaption.textContent = caption ? caption.textContent : image.alt;
            modalPrevious.disabled = modalIndex === 0;
            modalNext.disabled = modalIndex === modalSlides.length - 1;
        }

        function closeModal() {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
            if (modal.open) {
                modal.close();
            }
            if (lastTrigger) {
                lastTrigger.focus();
            }
        }

        modalClose.addEventListener("click", closeModal);
        modalPrevious.addEventListener("click", function () {
            if (modalIndex > 0) {
                modalIndex -= 1;
                updateModal();
            }
        });
        modalNext.addEventListener("click", function () {
            if (modalIndex < modalSlides.length - 1) {
                modalIndex += 1;
                updateModal();
            }
        });
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });
        modal.addEventListener("cancel", function (event) {
            event.preventDefault();
            closeModal();
        });
        document.addEventListener("fullscreenchange", function () {
            if (!document.fullscreenElement && modal.open) {
                closeModal();
            }
        });

        slideGroups.forEach(function (group) {
            var slides = Array.prototype.slice.call(group.querySelectorAll(".infographic-slide"));
            var currentIndex = 0;
            var previous = createControl("Forrige lysbilde", "infographic-control infographic-previous", "‹");
            var next = createControl("Neste lysbilde", "infographic-control infographic-next", "›");
            var counter = document.createElement("p");
            var controls = document.createElement("div");

            controls.className = "infographic-controls";
            counter.className = "infographic-counter";
            counter.setAttribute("aria-live", "polite");
            controls.appendChild(previous);
            controls.appendChild(counter);
            controls.appendChild(next);
            group.appendChild(controls);

            function showSlide(index) {
                currentIndex = index;
                slides.forEach(function (slide, slideIndex) {
                    slide.hidden = slideIndex !== currentIndex;
                });
                previous.disabled = currentIndex === 0;
                next.disabled = currentIndex === slides.length - 1;
                counter.textContent = "Lysbilde " + (currentIndex + 1) + " av " + slides.length;
            }

            function openCurrentSlide() {
                modalSlides = slides;
                modalIndex = currentIndex;
                lastTrigger = slides[currentIndex];
                updateModal();
                modal.showModal();
                if (modalImage.requestFullscreen) {
                    modalImage.requestFullscreen().catch(function () {
                        // Dialogen er fortsatt en tilgjengelig stor visning
                        // hvis nettleseren avviser fullskjermmodus.
                    });
                }
            }

            previous.addEventListener("click", function () {
                if (currentIndex > 0) {
                    showSlide(currentIndex - 1);
                }
            });
            next.addEventListener("click", function () {
                if (currentIndex < slides.length - 1) {
                    showSlide(currentIndex + 1);
                }
            });
            slides.forEach(function (slide, slideIndex) {
                slide.setAttribute("tabindex", "0");
                slide.setAttribute("role", "button");
                slide.setAttribute("aria-label", "Åpne lysbilde " + (slideIndex + 1) + " i stor visning");
                slide.addEventListener("click", openCurrentSlide);
                slide.addEventListener("keydown", function (event) {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openCurrentSlide();
                    }
                });
            });

            showSlide(0);
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        initAccordionGroup(".accordion-header");
        initAccordionGroup(".sub-header");
        initInfographicViewers();
    });
})();
