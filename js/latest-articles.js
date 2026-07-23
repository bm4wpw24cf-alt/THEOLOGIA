document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".articles-grid");

    if (!container || typeof articles === "undefined") return;

    // Sorter nyeste først
    const latest = [...articles].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    // Vis maks 5 artikler
    container.innerHTML = latest.slice(0, 5).map(article => `
        <article class="article-card">
            <a href="${article.url}" class="article-link">
                <div class="article-body">

                <div class="article-body">
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>

                    <span class="article-meta">
                        ${formatDate(article.date)} · Artikkel
                    </span>
                </div>
            </a>
        </article>
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

    const d = new Date(dateString);

    return `${d.getDate()}. ${months[d.getMonth()]} ${d.getFullYear()}`;
}