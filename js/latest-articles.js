/* =========================================================
   LATEST-ARTICLES.JS
   Rendrer "Nyeste artikler" på forsiden fra data/articles.js,
   sortert etter dato (nyeste først). Skriver over den
   statiske .articles-timeline-listen i index.html ved
   sidelasting – HTML-en der er en korrekt, oppdatert
   fallback (fungerer uten JavaScript og er søkemotorvennlig),
   ikke bare en placeholder.

   Legg til flere artikler ved å utvide arrayet i
   data/articles.js – ingen endring trengs her.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector(".articles-timeline");

    if (!list || typeof articles === "undefined") return;

    const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

    list.innerHTML = sorted.map(article => `
        <li class="timeline-item">
            <span class="timeline-marker" aria-hidden="true"></span>
            <a href="${article.url}" class="timeline-link">
                <time class="timeline-date" datetime="${article.date}">${formatDate(article.date)}</time>
                <h3 class="timeline-title">${article.title}</h3>
                <p class="timeline-excerpt">${article.description}</p>
            </a>
        </li>
    `).join("");
});

function formatDate(dateString) {

    const months = [
        "januar",
        "februar",
        "mars",
        "april",
        "mai",
        "juni",
        "juli",
        "august",
        "september",
        "oktober",
        "november",
        "desember"
    ];

    // dateString er et rent datostempel (YYYY-MM-DD) uten klokkeslett, som
    // Date() tolker som midnatt UTC. getDate()/getMonth() bruker derimot
    // nettleserens lokale tidssone – i tidssoner bak UTC (f.eks. Amerika)
    // ville det gitt datoen én dag for tidlig. UTC-variantene unngår dette.
    const d = new Date(dateString);

    return `${d.getUTCDate()}. ${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}
