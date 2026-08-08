/* =========================================================
   STUDY-OVERVIEW.JS
   Gjør kapitteloversikten på studiers index.html datadrevet i
   stedet for hardkodet, slik at malen tåler et vilkårlig antall
   kapitler og at forfattere kan flytte hvilket kapittel som er
   aktivt ved kun å flytte klassen "active-chapter" i .book-toc.

   HTML er allerede skrevet med korrekte, statiske verdier (for
   at siden skal se riktig ut uten JavaScript og for søkemotorer/
   skjermlesere) – denne filen leser .book-toc som fasit og
   overskriver fremdrift, "Kapittel X av Y", Fortsett-knappen og
   forrige/nåværende/neste-navigasjonen deretter, slik at disse
   aldri kan komme i utakt med kapittellisten.

   Avhengighetsfri vanilla JS, samme stil som study.js.
   ========================================================= */

(function () {
    "use strict";

    function chapterTitle(chapterLink) {
        var strong = chapterLink.querySelector("strong");
        return strong ? strong.textContent.trim() : "";
    }

    function setText(selector, text) {
        document.querySelectorAll(selector).forEach(function (el) {
            el.textContent = text;
        });
    }

    function setPaginationCard(card, chapterLink, label) {
        if (!card) {
            return;
        }

        if (!chapterLink) {
            card.style.display = "none";
            return;
        }

        card.style.display = "";
        card.setAttribute("href", chapterLink.getAttribute("href"));
        card.innerHTML = "<span>" + label + "</span><strong>" + chapterTitle(chapterLink) + "</strong>";

        var isUnpublished = chapterLink.classList.contains("disabled");
        card.classList.toggle("disabled", isUnpublished);
        if (isUnpublished) {
            card.setAttribute("aria-disabled", "true");
            card.setAttribute("tabindex", "-1");
        } else {
            card.removeAttribute("aria-disabled");
            card.removeAttribute("tabindex");
        }
    }

    function init() {
        var chapters = Array.prototype.slice.call(document.querySelectorAll(".book-toc a"));
        if (!chapters.length) {
            return;
        }

        var activeIndex = chapters.findIndex(function (chapterLink) {
            return chapterLink.classList.contains("active-chapter");
        });
        if (activeIndex === -1) {
            return;
        }

        var total = chapters.length;
        var position = activeIndex + 1;
        var activeChapter = chapters[activeIndex];

        setText("[data-chapter-count]", total + " kapitler");
        setText("[data-chapter-position]", "Kapittel " + position + " av " + total);

        var bar = document.querySelector(".book-status-bar");
        if (bar) {
            var fill = bar.querySelector(".book-status-bar-fill");
            var percent = Math.round((position / total) * 100);
            if (fill) {
                fill.style.width = percent + "%";
            }
            bar.setAttribute("aria-valuenow", String(position));
            bar.setAttribute("aria-valuemax", String(total));
        }

        document.querySelectorAll("[data-continue-link]").forEach(function (link) {
            link.setAttribute("href", activeChapter.getAttribute("href"));
        });

        setPaginationCard(document.querySelector('[data-pagination="previous"]'), chapters[activeIndex - 1], "← Forrige");
        setPaginationCard(document.querySelector('[data-pagination="current"]'), activeChapter, "Nåværende kapittel");
        setPaginationCard(document.querySelector('[data-pagination="next"]'), chapters[activeIndex + 1], "Neste →");
    }

    document.addEventListener("DOMContentLoaded", init);
})();
