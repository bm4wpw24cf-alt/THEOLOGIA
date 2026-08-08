/* =========================================================
   ARTICLES-TIMELINE.JS
   Rendrer .articles-timeline fra den felles datakilden i
   data/articles.js, sortert etter dato (nyeste først, artikler
   uten dato sist). Brukes av både index.html ("Nyeste artikler")
   og artikler/index.html (komplett oversikt) – samme kode,
   samme data, så de to sidene aldri kan komme ut av sync.

   Skriver over den statiske .articles-timeline-listen i HTML-en
   ved sidelasting. HTML-en der er en korrekt fallback (fungerer
   uten JavaScript og er søkemotorvennlig), ikke bare en
   placeholder.

   Attributter på <ol class="articles-timeline">:
   - data-base="artikler"  Siden ligger i /artikler/-mappen, så
                            url-er i data/articles.js regnes om
                            til riktig relativ sti derfra.
                            Utelates dette, antas siden å ligge
                            i prosjektroten (f.eks. index.html).
   - data-limit="6"         Vis kun de N nyeste artiklene. Utelates
                            dette, vises alle artiklene.

   Legg til flere artikler ved å utvide arrayet i
   data/articles.js – ingen endring trengs her.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector(".articles-timeline");

    if (!list || typeof articles === "undefined") return;

    const fromArticlesFolder = list.dataset.base === "artikler";
    const limit = list.dataset.limit ? parseInt(list.dataset.limit, 10) : null;

    const sorted = [...articles].sort((a, b) => {
        if (!a.date && !b.date) return 0;
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(b.date) - new Date(a.date);
    });

    const toShow = limit ? sorted.slice(0, limit) : sorted;

    list.innerHTML = toShow.map(article => {
        const href = fromArticlesFolder
            ? (article.url.startsWith("artikler/") ? article.url.slice("artikler/".length) : "../" + article.url)
            : article.url;

        const dateMarkup = article.date
            ? `<time class="timeline-date" datetime="${article.date}">${formatDate(article.date)}</time>`
            : `<span class="timeline-date">Artikkel</span>`;

        return `
            <li class="timeline-item">
                <span class="timeline-marker" aria-hidden="true"></span>
                <a href="${href}" class="timeline-link">
                    ${dateMarkup}
                    <h3 class="timeline-title">${article.title}</h3>
                    <p class="timeline-excerpt">${article.description}</p>
                </a>
            </li>
        `;
    }).join("");
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
