"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./dap-i-vann.module.css";

/**
 * Mekanisk port av temaer/fundament/artikler/dap-i-vann.html sitt inline
 * <script>: samme IntersectionObserver-oppsett (threshold/rootMargin) og
 * samme .chapter/.lede-seleksjon, kun omskrevet til useEffect siden dette
 * er en klientkomponent i stedet for en <script>-tag på siden.
 */
function useFadeInOnScroll(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.inView);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    container.querySelectorAll(`.${styles.chapter}, .${styles.lede}`).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [containerRef]);
}

export default function DapIVannPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useFadeInOnScroll(rootRef);

  return (
    <div className={styles.page} ref={rootRef}>
      <header className={styles.siteNav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.navBrand}>
            THEOLOGIA
          </Link>
          <Link href="/temaer/fundament" className={styles.navBack}>
            ← Fundament
          </Link>
        </div>
      </header>

      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Dåp i vann – identifikasjon med Kristi død og oppstandelse</h1>
        <p className={styles.heroSubtitle}>Et gudgitt tegn der den troende trer inn i Kristi frelsesverk</p>
        <div className={styles.heroDivider} />
      </div>

      <article className={styles.article}>
        <p className={styles.lede}>
          Dåpen i vann står sentralt i Det nye testamentes forståelse av frelse og disippelskap. Den er ikke
          fremstilt som en perifer eller rent symbolsk handling, men som en gudgitt handling der den troende trer
          inn i Kristi frelsesverk og identifiserer seg med hans død, begravelse og oppstandelse. Dette
          perspektivet er særlig tydelig i apostolisk undervisning og danner et teologisk fundament for dåpens
          betydning.
        </p>

        <div className={styles.divider}>
          <span className={styles.dividerSpan}>✦</span>
        </div>

        <section className={styles.chapter}>
          <span className={styles.chapterNumber}>01</span>
          <h2 className={styles.chapterHeading}>Dåp som forening med Kristus</h2>
          <p className={styles.paragraph}>
            Paulus beskriver dåpen som en handling der den troende blir forenet med Kristus selv:
          </p>
          <blockquote className={styles.blockquote}>
            «Eller vet dere ikke at alle vi som ble døpt til Kristus Jesus, ble døpt til hans død?»
            {" "}<cite className={styles.blockquoteCite}>Rom 6,3</cite>
          </blockquote>
          <p className={styles.paragraph}>
            Å bli «døpt til Kristus» innebærer mer enn å bekjenne tro på ham; det uttrykker en overgang fra ett
            livssfære til en annen. Dåpen markerer at den troende ikke lenger står utenfor Kristus, men er
            innlemmet i ham.
          </p>
          <p className={styles.emphasis}>Denne foreningen er både juridisk, relasjonell og eksistensiell.</p>
        </section>

        <section className={styles.chapter}>
          <span className={styles.chapterNumber}>02</span>
          <h2 className={styles.chapterHeading}>Død med Kristus – brudd med det gamle mennesket</h2>
          <p className={styles.paragraph}>Identifikasjonen med Kristi død betyr et reelt brudd med det gamle livet. Paulus skriver:</p>
          <blockquote className={styles.blockquote}>
            «Vi vet at vårt gamle menneske ble korsfestet med ham, for at syndelegemet skulle bli fratatt sin makt.»
            {" "}<cite className={styles.blockquoteCite}>Rom 6,6</cite>
          </blockquote>
          <p className={styles.paragraph}>
            Dåpen uttrykker at den troende regner sitt gamle liv – preget av syndens herredømme – som avsluttet.
            Dette er ikke først og fremst en subjektiv følelse, men en objektiv åndelig realitet: det gamle
            mennesket har mistet sin rettmessige autoritet.
          </p>
          <p className={styles.paragraph}>
            Å gå ned i vannet er derfor et vitnesbyrd om at syndens krav er brutt, ikke ved egen kraft, men ved
            deltakelse i Kristi kors.
          </p>
        </section>

        <section className={styles.chapter}>
          <span className={styles.chapterNumber}>03</span>
          <h2 className={styles.chapterHeading}>Begravelse med Kristus – det gamle er lagt bak</h2>
          <p className={styles.paragraph}>Paulus fortsetter:</p>
          <blockquote className={styles.blockquote}>
            «Vi ble altså begravet med ham ved dåpen til døden.»
            {" "}<cite className={styles.blockquoteCite}>Rom 6,4</cite>
          </blockquote>
          <p className={styles.paragraph}>
            Begravelse innebærer endelighet. Det som begraves, hører fortiden til. Dåpen forkynner derfor at det
            gamle livet ikke bare er forbedret eller reformert, men avsluttet. Denne tanken understrekes også i:
          </p>
          <blockquote className={styles.blockquote}>
            «Da dere ble begravet med ham i dåpen…»
            {" "}<cite className={styles.blockquoteCite}>Kol 2,12</cite>
          </blockquote>
          <p className={styles.paragraph}>
            Den fysiske handlingen – å bli senket ned i vannet – forkynner en dyp åndelig sannhet: det gamle
            mennesket har ikke lenger definisjonsmakt over den troendes identitet.
          </p>
        </section>

        <div className={styles.divider}>
          <span className={styles.dividerSpan}>✦</span>
        </div>

        <section className={styles.chapter}>
          <span className={styles.chapterNumber}>04</span>
          <h2 className={styles.chapterHeading}>Oppreist med Kristus – et nytt liv begynner</h2>
          <p className={styles.paragraph}>Dåpen stopper ikke ved døden. Den peker alltid videre mot oppstandelsen:</p>
          <blockquote className={styles.blockquote}>
            «…for at også vi skal vandre i et nytt liv, slik som Kristus ble reist opp fra de døde.»
            {" "}<cite className={styles.blockquoteCite}>Rom 6,4</cite>
          </blockquote>
          <p className={styles.paragraph}>
            Å reises opp av vannet er et kraftfullt bilde på oppstandelsen. Den troende trer frem i et nytt liv,
            ikke bare med nye idealer, men med en ny eksistens i Kristus. Dette livet er kjennetegnet av Åndens
            nærvær, et forvandlet sinn og en ny retning.
          </p>
          <blockquote className={styles.blockquote}>
            «I dåpen ble dere også reist opp med ham ved troen på Guds kraft.»
            {" "}<cite className={styles.blockquoteCite}>Kol 2,12</cite>
          </blockquote>
          <p className={styles.emphasis}>
            Oppstandelsen er ikke bare et fremtidshåp, men en nåværende virkelighet som setter den troende i stand
            til å leve for Gud.
          </p>
        </section>

        <section className={styles.chapter}>
          <span className={styles.chapterNumber}>05</span>
          <h2 className={styles.chapterHeading}>En ny identitet og et nytt herredømme</h2>
          <p className={styles.paragraph}>Gjennom identifikasjonen med Kristi død og oppstandelse skjer det et herredømmeskifte:</p>
          <blockquote className={styles.blockquote}>
            «Slik skal også dere regne dere som døde for synden, men levende for Gud i Kristus Jesus.»
            {" "}<cite className={styles.blockquoteCite}>Rom 6,11</cite>
          </blockquote>
          <p className={styles.paragraph}>
            Dåpen proklamerer at den troende nå tilhører et nytt rike. Synden har ikke lenger legitim autoritet, og
            Kristus er nå Herre. Dette gir både trygghet og kall: trygghet i en ny identitet, og kall til å leve i
            samsvar med denne virkeligheten.
          </p>
        </section>

        <section className={styles.chapter}>
          <span className={styles.chapterNumber}>06</span>
          <h2 className={styles.chapterHeading}>Dåpen og oppstandelseshåpet</h2>
          <p className={styles.paragraph}>Til slutt peker dåpen fremover mot den endelige oppstandelsen:</p>
          <blockquote className={styles.blockquote}>
            «Han som reiste Kristus opp fra de døde, skal også gi deres dødelige kropper liv.»
            {" "}<cite className={styles.blockquoteCite}>Rom 8,11</cite>
          </blockquote>
          <p className={styles.paragraph}>
            Dåpen er dermed en profetisk handling – et tegn på at den som har del i Kristi død og oppstandelse her
            og nå, også skal få del i den kommende herligheten.
          </p>
        </section>

        <div className={styles.divider}>
          <span className={styles.dividerSpan}>✦</span>
        </div>

        <section className={styles.chapter}>
          <h2 className={styles.chapterHeading}>Avslutning</h2>
          <p className={styles.paragraph}>
            Dåpen i vann er en dypt teologisk handling der den troende identifiserer seg fullt ut med Kristi død,
            begravelse og oppstandelse. Den forkynner:
          </p>

          <div className={styles.summaryBox}>
            <h3 className={styles.summaryHeading}>Dåpen forkynner</h3>
            <ul className={styles.forkynnerList}>
              <li>Et reelt brudd med det gamle livet</li>
              <li>En ny identitet i Kristus</li>
              <li>Et liv under et nytt herredømme</li>
              <li>Et håp om fremtidig oppstandelse</li>
            </ul>
          </div>

          <p className={styles.paragraph}>
            Derfor kan dåpen ikke reduseres til en symbolsk gest alene. Den er en gudgitt handling som legemliggjør
            evangeliets kjerne og markerer overgangen fra død til liv – i Kristus.
          </p>
        </section>

        <div className={styles.closing}>
          <p className={styles.closingParagraph}>
            «Vi ble altså begravet med ham ved dåpen til døden, for at, likesom Kristus ble reist opp fra de døde
            ved sin Fars herlighet, vi også skal vandre i et nytt liv.»
          </p>
        </div>
      </article>

      <footer className={styles.siteFooter}>
        <p className={styles.footerParagraph}>
          THEOLOGIA — en bibelsk-teologisk ressurs ·{" "}
          <Link href="/" className={styles.footerLink}>
            Til forsiden
          </Link>{" "}
          ·{" "}
          <Link href="/temaer/fundament" className={styles.footerLink}>
            Fundament
          </Link>
        </p>
      </footer>
    </div>
  );
}
