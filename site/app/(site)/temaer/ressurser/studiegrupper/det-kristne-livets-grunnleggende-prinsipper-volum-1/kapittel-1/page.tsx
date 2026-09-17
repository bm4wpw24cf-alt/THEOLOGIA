import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Kapittel1Infographic } from "./Kapittel1Infographic";
import { CommentarySection } from "./CommentarySection";
import { SubAccordion } from "./SubAccordion";

export const metadata: Metadata = {
  title: "Kapittel 1 – Menneskelivets mysterium | THEOLOGIA",
  description: "Kapittel 1 i Det kristne livets grunnleggende prinsipper – Volum 1 om menneskelivets mysterium og Guds frelsesplan.",
};

const OVERVIEW_HREF = "/temaer/ressurser/studiegrupper/det-kristne-livets-grunnleggende-prinsipper-volum-1";
const PREV_HREF = OVERVIEW_HREF;
const NEXT_HREF = "/temaer/ressurser/studiegrupper/det-kristne-livets-grunnleggende-prinsipper-volum-1/kapittel-2";

function Section({
  title,
  children,
  eyebrow,
  variant = "default",
}: {
  title: string;
  children: React.ReactNode;
  eyebrow?: string;
  variant?: "default" | "alternative";
}) {
  const isAlternative = variant === "alternative";
  return (
    <section
      className={`mx-auto w-full max-w-[780px] rounded-radius border p-6 shadow-sm ${
        isAlternative ? "border-gold/40 bg-parchment-dark" : "border-border bg-white"
      }`}
    >
      {eyebrow && (
        <span className="mb-3 inline-block font-sans text-[.76rem] font-bold tracking-[2.4px] text-gold uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="mb-4 font-serif text-[1.8rem] text-ink">{title}</h2>
      <div className="space-y-4 text-[1.02rem] leading-[1.9] text-text">{children}</div>
    </section>
  );
}

export default function Kapittel1Page() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Ressurser", href: "/temaer/ressurser" },
          { label: "Studiegrupper", href: "/temaer/ressurser/studiegrupper" },
          { label: "Volum 1", href: OVERVIEW_HREF },
          { label: "Kapittel 1" },
        ]}
      />

      <section className="pb-6">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="grid grid-cols-[1fr_240px] items-start gap-12 max-[1100px]:grid-cols-[1fr_200px] max-[720px]:grid-cols-1">
            <section>
              <Link href={OVERVIEW_HREF} className="mb-5 flex items-center gap-1.5 font-sans text-[.88rem] font-semibold text-gold hover:text-gold-dark">
                <span aria-hidden="true">←</span> Tilbake til studieoversikt
              </Link>

              <span className="mb-3.5 inline-block font-sans text-[.76rem] font-bold tracking-[2.4px] text-gold uppercase">★ KAPITTEL 1</span>
              <h1 className="mb-4 text-[clamp(1.9rem,3vw,2.5rem)]">Menneskelivets mysterium</h1>
              <p className="mb-4.5 max-w-[60ch] text-[1.02rem] leading-[1.8] text-text">
                I dette første kapitlet ser vi på Guds plan for mennesket, menneskets fall, Kristi frelsesverk og det mål Gud har med mennesket: å gjenopprette mennesket til å leve i Guds liv og til å få del i hans fullendelse.
              </p>
              <div className="flex flex-wrap gap-7 border-y border-border py-5.5 max-[720px]:gap-5">
                {[
                  { label: "Presentasjon" },
                  { label: "Bibelens grunnlag" },
                  { label: "Undervisning" },
                  { label: "Kommentar" },
                ].map((item) => (
                  <div key={item.label} className="font-sans text-[.92rem] text-text">
                    {item.label}
                  </div>
                ))}
              </div>
            </section>

            <aside className="max-[720px]:mx-auto max-[720px]:max-w-[180px]">
              <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
                <div className="mb-2 font-sans text-[.72rem] font-bold tracking-[1.8px] text-gold-dark uppercase">Volum 1</div>
                <div className="font-serif text-[1.7rem] leading-[1.2] text-ink">Kapittel 1</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-[70px]">
        <div className="mx-auto w-[min(1180px,92%)]">
          <div className="mx-auto flex w-full max-w-[900px] flex-col gap-5">
            <Section title="Presentasjon">
              <p>
                Menneskelivets mysterium kan bare forstås når vi ser det i lys av Guds hensikt. Gud skapte mennesket ikke som et vilkårlig vesen, men som det sted der han kunne uttrykke seg, leve ut sin kjærlighet og gjøre sin egen livserfaring kjent i et menneske. Derfor er mennesket ikke bare et enkelt individ, men et mysterium som bærer Guds plan i seg.
              </p>
              <p>
                Når mennesket faller i synd, blir det skilt fra Gud. Men Guds plan er ikke oppgitt. Han kom i Kristus for å gjenopprette det som var gått tapt. Det er dette som danner grunnlaget for hele det kristne liv: Gud ønsker å utfolde sitt liv i mennesket, og han gjør det gjennom Kristus og i den troende.
              </p>
            </Section>

            <Section title="Bibelens grunnlag">
              <p>
                Guds plan med mennesket går tilbake til skapelsen: «La oss gjøre mennesket i vårt bilde...» <strong>1 Mos 1:26</strong>. Mennesket er skapt til å være Guds bilde og å bære hans hensikt. Men da mennesket falt, ble det skilt fra Gud; «alle har syndet» <strong>Rom 3:23</strong>, og det var dette som førte til død og fremmedgjøring fra Gud. Her begynner frelsens historie: Gud kom i Kristus for å gjenløse mennesket.
              </p>
              <p>
                «Og ordet ble kjøtt og bodde iblandt oss…» <strong>Joh 1:14</strong>. Kristus ble menneske for å fullføre Guds frelsesverk. Han gikk inn i menneskenes historie, levde et menneskelig liv, døde på korset, ble gravlagt, oppstod og drog opp til himmelen. Alt dette var for menneskets gjenløsning og for at Gud kunne gi mennesket sitt liv.
              </p>
            </Section>

            <Section title="Undervisningen">
              <div className="mx-auto w-full max-w-[900px]">
                <Kapittel1Infographic />
              </div>
              <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">1. Guds plan</h3>
              <p>
                Gud vil uttrykke seg gjennom mennesket. Han vil ikke bare gjøre noe for mennesket, men gjøre noe i mennesket. Dette er ikke først og fremst en moralsk eller intellektuell bekjennelse, men et livets mysterium. Gud ønsker å være i mennesket, og mennesket skal leve i ham.
              </p>

              <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">2. Mennesket</h3>
              <p>
                Mennesket er mer enn en kropp. Det er et levende vesen som består av kropp, sjel og ånd. Vi finner dette i Bibelen i ulike sammenhenger. Den menneskelige virkelighet er ikke delt i to uforbindelige områder, men en enhet som er skapt av Gud. Likevel blir det ofte praktisk hjelpsomt å skille mellom de ulike nivåene i mennesket.
              </p>

              <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">3. Menneskets fall</h3>
              <p>
                I synden brøt mennesket forholdet til Gud. Det mistet sin opprinnelige tilstand og ble fremmed for ham. Synden påvirket hele mennesket – det indre, det følelsesmessige og det praktiske. Derfor trenger mennesket ikke bare undervisning, men gjenløsning. Frelsen er ikke oppdragelse av et sett av regler, men gjenopprettelse av et forhold til Gud.
              </p>

              <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">4. Kristi gjenløsning for Guds utdeling</h3>
              <p>
                Kristus kom i inkarnasjon, levde som menneske, døde på korset, ble gravlagt, oppstod og gikk opp til himmelen. Hensikten var ikke bare at mennesket skulle bli frelst fra dom, men at Gud kunne dele sitt liv, sin natur og sin vilje med mennesket. Gjenløsningen er derfor ikke bare en rettferdiggjøring, men en inntakelse av Gud i mennesket.
              </p>

              <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">5. Menneskets gjenfødelse</h3>
              <p>
                Mennesket kan få Guds liv gjennom Kristus. Gjenfødelsen er ikke bare en formell tilslutning til kristendommen, men at det åndelige livsområde i mennesket blir vekket til liv. «Den som blir født av Gud, synder ikke» <strong>1 Joh 3:9</strong>. Guds liv er ikke bare en idé, men en ny livsvirkelighet i mennesket.
              </p>

              <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">6. Guds fulle frelse</h3>
              <p>
                Guds frelse er ikke begrenset til sjelen alene. Han vil vinne hele mennesket – ånd, sjel og kropp – og fullende det i Kristus. «Han vil fylle deg med kjærlighet og glede og fred» <strong>Rom 15:13</strong>. Det er ikke en del av mennesket som skal frelses, men mennesket som en helhet i forhold til Gud. Dette er selve målet for den kristne livserfaring: at Guds liv får virke i hele mennesket.
              </p>
            </Section>

            <CommentarySection title="Kommentar" defaultOpen>
              <SubAccordion title="Kommentar til kapittel 1" description="Trikotomi og dikotomi">
                <p>
                  Det er viktig å skille mellom det Bibelen uttrykkelig sier, og den teologiske modellen som oppstår når vi drøfter menneskets natur. En velkjent modell er <strong>trikotomi</strong>: mennesket består av kropp, sjel og ånd. En annen er <strong>dikotomi</strong>: mennesket består av kropp og sjel/ånd som et mer samlet hele. Begge modellene forsøker å håndtere det samme mysterium, men de gjør det på forskjellige måter.
                </p>
                <p>
                  Den teologiske modellen er nyttig, men den må brukes med forsiktighet. Bibelen lærer klart at mennesket er et helt, men at det også har forskjellige dimensjoner. Det er derfor korrekt å si at mennesket er en helhetlig enhet, uten å være blind for at det også kan beskrives i komponenter. Det er ikke så mye et spørsmål om «enten» eller «eller», som et spørsmål om hvordan vi taler om det samme mennesket fra forskjellige synsvinkler.
                </p>
                <p>
                  Det er derfor også nyttig å merke seg <strong>1 Tess 5:23</strong>: «Måtte hele deres ånd, sjel og kropp bevares feilfrie til vår Herre Jesu Kristi komme.» Her ser vi en helhetlig betraktning av mennesket, hvor ånd, sjel og kropp inngår i samme liv. <strong>Hebr 4:12</strong> viser at Guds ord er levende og skarpt, og det skiller sjel og ånd fra hverandre. <strong>1 Mos 2:7</strong> beskriver hvordan mennesket ble gjort levende da Gud blåste liv i det. Her er det også naturlig å se på det hebraiske <em>nephesh</em> («sjel»), det greske <em>psychē</em> og <em>pneuma</em> («ånd»).
                </p>
                <p>
                  Dette betyr ikke at den teologiske modellen er feil, men at vi bør være tydelige på når vi beveger oss fra <strong>bibelsk tekst</strong> til <strong>teologisk tolkning</strong>. Det Bibelen uttrykkelig sier, er at mennesket er skapt av Gud og er et levende vesen. Den teologiske modellen er en påfølgende formulering som forsøker å gi systematisk klarhet. Det er derfor riktig å respektere teksten først, og deretter bruke modellen som en hjelperedskap, ikke som et løft over Skriften.
                </p>
              </SubAccordion>

              <SubAccordion title="Alternativ kommentar – Guds fulle frelse og forholdet mellom ånd, sjel og kropp" description="Alternativ kommentar til punkt 6">
                <p>
                  Her bør det gjøres en viktig teologisk presisering. Teksten beskriver frelsen etter gjenfødelsen som en bestemt bevegelse: Guds liv mottas først i menneskets ånd, deretter «sprer» Gud seg fra ånden til sjelen, og til slutt blir kroppen gjennomsyret av dette livet ved herliggjørelsen. Dette følger naturlig av bokens tredelte antropologi, der mennesket fremstilles som «kropp, sjel og ånd», og ånden beskrives som menneskets innerste område, spesielt skapt for å kontakte og motta Gud. I punkt 5 sies derfor at mennesket ved gjenfødelsen «mottar Guds liv inn i sin ånd», før punkt 6 utvikler dette til en frelsesprosess fra ånd → sjel → kropp.
                </p>
                <p>
                  Min innvending gjelder ikke at Bibelen lærer gjenfødelse, helliggjørelse og herliggjørelse. Disse er tydelig bibelske realiteter. Innvendingen gjelder den mer spesifikke påstanden om at Skriften lærer en bestemt progresjon hvor Guds liv først kommer inn i menneskets ånd, deretter sprer seg fra ånden til sjelen og til slutt gjennomtrenger kroppen. Jeg finner ikke denne bestemte rekkefølgen uttrykkelig lært i Skriften.
                </p>
                <p>
                  <strong>Efeserne 3:17</strong> sier at Kristus skal bo i de troendes hjerter ved troen. Paulus sier i sammenhengen at de skal styrkes med kraft ved Guds Ånd i «det indre menneske» (<strong>Ef 3:16</strong>), men han beskriver ikke dette som en prosess hvor Kristus beveger seg fra menneskets ånd til sjelen. Å bruke Efeserne 3:17 som direkte bevis for en slik «ånd → sjel»-prosess går derfor lenger enn selve teksten.
                </p>
                <p>
                  Det samme gjelder <strong>Romerne 12:2</strong>. Paulus lærer virkelig om forvandling: «Bli forvandlet ved fornyelsen av deres sinn.» Dette handler om en virkelig og pågående forvandling av den troende. Men Paulus sier ikke at denne forvandlingen skjer fordi Guds liv sprer seg fra ånden til sjelen. Romerne 12:2 gir derfor godt grunnlag for helliggjørelse og fornyelse, men ikke nødvendigvis for den bestemte antropologiske mekanismen som presenteres i boken.
                </p>
                <p>
                  <strong>Filipperne 2:12–13</strong> gir også et tydelig grunnlag for menneskets samarbeid med Gud:
                </p>
                <p className="italic">
                  «Arbeid på deres frelse med frykt og beven. For det er Gud som virker i dere både å ville og å virke etter hans gode vilje.»
                </p>
                <p>
                  Her ser vi både Guds virke og menneskets ansvar. Men heller ikke dette avsnittet beskriver en bevegelse fra ånd til sjel.
                </p>
                <p>
                  Det er også grunn til å være forsiktig med å gjøre ånd, sjel og kropp til tre nærmest separate beholdere i mennesket. Bibelen kan skjelne mellom ånd, sjel og kropp, men den gir ikke nødvendigvis et detaljert antropologisk system hvor Guds liv må bevege seg gjennom disse delene i en bestemt rekkefølge. Bibelen bruker også begrepet «hjerte» svært omfattende om menneskets indre liv. Kristus skal bo i hjertet ved troen (<strong>Ef 3:17</strong>), Guds kjærlighet er utøst i våre hjerter ved Den hellige ånd (<strong>Rom 5:5</strong>), og mennesket tror med hjertet (<strong>Rom 10:10</strong>).
                </p>
                <p>
                  <strong>1 Tessaloniker 5:23</strong> sier:
                </p>
                <p className="italic">
                  «Må deres ånd og sjel og kropp bli bevart fullkomment, ulastelig ved vår Herre Jesu Kristi komme.»
                </p>
                <p>
                  Dette viser at Paulus kan skjelne mellom ånd, sjel og kropp. Men verset sier ikke at frelsen beveger seg gjennom disse tre delene i rekkefølgen ånd → sjel → kropp. Poenget synes snarere å være at Gud vil bevare og helliggjøre hele mennesket.
                </p>
                <p>Det bibelske mønsteret kan derfor uttrykkes sikrere som:</p>
                <p className="text-center font-serif italic text-ink">
                  Gjenfødelse → helliggjørelse/forvandling → herliggjørelse
                </p>
                <p>
                  Ved gjenfødelsen gjør Gud mennesket levende ved sin Ånd og gir den troende nytt liv i Kristus (<strong>Joh 3:3–8</strong>; <strong>Ef 2:4–5</strong>; <strong>Tit 3:5</strong>).
                </p>
                <p>
                  Deretter følger den pågående helliggjørelsen og forvandlingen. Gud virker i den troende, sinnet fornyes, synden bekjempes, og menneskets liv formes stadig mer etter Kristi bilde (<strong>Rom 12:2</strong>; <strong>2 Kor 3:18</strong>; <strong>Gal 5:16–25</strong>; <strong>Fil 2:12–13</strong>; <strong>Kol 3:1–17</strong>). Dette gjelder mennesket som helhet og trenger ikke forklares som en bevegelse fra én del av mennesket til en annen.
                </p>
                <p>
                  Til slutt kommer herliggjørelsen. <strong>Filipperne 3:21</strong> lærer at Kristus ved sin gjenkomst skal forvandle vårt forgjengelige legeme så det blir likt hans herlighetslegeme. <strong>1 Korinterbrev 15:42–53</strong> beskriver den samme framtidige oppstandelsen og forvandlingen av kroppen.
                </p>
                <p>
                  Det er derfor godt bibelsk grunnlag for å tale om Guds fulle frelse som et verk som omfatter hele mennesket. Men det er et viktig skille mellom denne bibelske sannheten og den mer spesifikke modellen om at Guds liv «sprer seg» fra ånden til sjelen og deretter til kroppen. Den siste modellen finner jeg ikke uttrykkelig formulert i Skriften.
                </p>
                <p>En mer bibelnær formulering kan derfor være:</p>
                <p className="border-l-2 border-gold/40 pl-4 not-italic text-text">
                  «Guds frelsesverk omfatter hele mennesket. Ved gjenfødelsen gjør Gud den troende levende ved Den hellige ånd og gir ham nytt liv i Kristus. Deretter virker Gud kontinuerlig i den troende gjennom helliggjørelse og forvandling, hvor sinnet fornyes og menneskets liv stadig mer formes etter Kristi bilde. Denne forvandlingen innebærer også den troendes aktive respons i tro og lydighet. Ved Kristi gjenkomst fullføres frelsesverket når også vårt dødelige legeme blir oppreist og forvandlet til likhet med Kristi herlighetslegeme.»
                </p>
                <p>
                  Hovedinnvendingen er altså ikke mot læren om gjenfødelse, helliggjørelse eller herliggjørelse. Innvendingen gjelder den spesifikke mekanismen «ånd → sjel → kropp». Bibelen lærer tydelig at Gud frelser og forvandler hele mennesket, men de tekstene som brukes i punkt 6, gir ikke et tydelig grunnlag for å si at Guds liv må forstås som en prosess hvor det først befinner seg i ånden og deretter gradvis sprer seg til sjelen og kroppen.
                </p>
              </SubAccordion>

              <SubAccordion title="Menneskelivets mysterium" description="Alternativ kommentar til kapittel 1">
                <p className="italic text-text">
                  Dette er en alternativ, supplerende gjennomgang av hele kapittel 1. Den erstatter ikke originalteksten ovenfor, men belyser de samme seks punktene fra en annen innfallsvinkel.
                </p>

                <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">Innledning</h3>
                <p>
                  Hvorfor lever mennesket? Hvorfor ble vi skapt? Hva er mennesket egentlig, og hva har Gud til hensikt å gjøre med mennesket?
                </p>
                <p>
                  Bibelen viser at mennesket ikke bare ble skapt for å eksistere i verden. Mennesket ble skapt av Gud og for Gud – for å kjenne Ham, leve i fellesskap med Ham, tjene Ham og uttrykke Hans vilje i skaperverket.
                </p>
                <p>
                  Dette gir oss en nøkkel til å forstå menneskelivet. Gud har en plan for mennesket. Mennesket falt i synd og kom under syndens og dødens makt. Gud sendte sin Sønn Jesus Kristus for å gjenløse mennesket. Gjennom tro, omvendelse og dåp blir mennesket født av vann og Ånd og begynner å leve det nye livet i Kristus. Deretter fortsetter Guds verk i mennesket gjennom et liv i tro, lydighet og forvandling.
                </p>
                <p>Menneskelivets mysterium kan derfor beskrives slik:</p>
                <p className="text-center font-serif italic text-ink">
                  Guds plan → menneskets skapelse → menneskets fall → Kristi gjenløsning → gjenfødelsen → vekst og forvandling → Guds fulle frelse
                </p>

                <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">1. Guds plan</h3>
                <p>Guds hensikt med mennesket begynner med Gud selv.</p>
                <p>
                  <em>«Dem som han på forhånd har vedkjent seg, har han også på forhånd bestemt til å bli formet etter sin Sønns bilde, så han skal være den førstefødte blant mange søsken.»</em>{" "}
                  <strong>Romerne 8:29</strong>
                </p>
                <p>
                  Målet er altså at mennesket skal formes etter Kristi bilde. Gud ønsker ikke bare at mennesket skal eksistere, men at det skal bli formet slik at Kristus kan komme til uttrykk gjennom det.
                </p>
                <p>Dette henger sammen med menneskets skapelse:</p>
                <p>
                  <em>«Gud sa: «La oss lage mennesker i vårt bilde, så de ligner oss! De skal råde over fiskene i havet og fuglene under himmelen, over feet og alle ville dyr og alt krypet som det kryr av på jorden.»»</em>{" "}
                  <strong>1. Mosebok 1:26</strong>
                </p>
                <p>
                  Mennesket ble skapt i Guds bilde og fikk en oppgave i skaperverket. Det skulle representere Gud og ha herredømme over det Gud hadde skapt.
                </p>
                <p>Paulus bruker også bildet av et kar:</p>
                <p>
                  <em>«Men vi har denne skatten i leirkrukker, for at den veldige kraften skal være fra Gud og ikke fra oss selv.»</em>{" "}
                  <strong>2. Korinter 4:7</strong>
                </p>
                <p>
                  Bildet av leirkrukken viser menneskets avhengighet av Gud. Skatten er ikke mennesket selv, men det Gud legger i mennesket. Den veldige kraften kommer fra Gud og ikke fra mennesket.
                </p>
                <p>
                  Menneskets store mysterium ligger derfor ikke først og fremst i hva mennesket kan gjøre på egen hånd. Det ligger i hva Gud ønsker å gjøre gjennom mennesket.
                </p>
                <p>Mennesket ble skapt i Guds bilde for å leve for Gud og uttrykke Hans hensikt.</p>

                <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">2. Mennesket</h3>
                <p>
                  Bibelen bruker forskjellige uttrykk når den beskriver mennesket. Den taler blant annet om ånd, sjel og kropp, men dette behøver ikke forstås som at mennesket består av tre separate deler.
                </p>
                <p>Paulus skriver:</p>
                <p>
                  <em>«Må han, fredens Gud, hellige dere helt igjennom, og må deres ånd, sjel og kropp bli bevart uskadet, så dere ikke kan klandres for noe når vår Herre Jesus Kristus kommer.»</em>{" "}
                  <strong>1. Tessaloniker 5:23</strong>
                </p>
                <p>
                  Dette verset viser at Gud ønsker å hellige hele mennesket. Det bør derfor ikke brukes som grunnlag for å konstruere en modell der mennesket nødvendigvis består av tre adskilte bestanddeler.
                </p>
                <p>Allerede skapelsesberetningen beskriver mennesket som en levende helhet:</p>
                <p>
                  <em>«Da formet Herren Gud mennesket av støv fra jorden. Han blåste livspust i nesen på det, og mennesket ble en levende skapning.»</em>{" "}
                  <strong>1. Mosebok 2:7</strong>
                </p>
                <p>Mennesket er altså skapt av jordens støv, Gud ga det liv, og mennesket ble en levende skapning.</p>
                <p>
                  Bibelen bruker også ordet «sjel» om mennesket som levende person. «Ånd» kan brukes om menneskets indre liv og dets forhold til Gud, mens kroppen betegner mennesket i dets fysiske eksistens. Men disse begrepene trenger ikke bety at mennesket er sammensatt av tre separate «deler».
                </p>
                <p>Det avgjørende er at mennesket er skapt for Gud.</p>
                <p>Jesus sier:</p>
                <p>
                  <em>«Gud er ånd, og den som tilber ham, må tilbe i ånd og sannhet.»</em> <strong>Johannes 4:24</strong>
                </p>
                <p>
                  Mennesket kan derfor ha fellesskap med Gud. Det er skapt med evnen til å kjenne sin Skaper og leve i forhold til Ham.
                </p>
                <p>
                  <strong>Mennesket er en helhet, skapt i Guds bilde og skapt for Gud.</strong>
                </p>

                <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">3. Menneskets fall</h3>
                <p>
                  Mennesket levde ikke videre i den lydigheten Gud hadde skapt det til. Synden kom inn i verden gjennom menneskets ulydighet.
                </p>
                <p>
                  <em>«Synden kom inn i verden på grunn av ett menneske, og med synden kom døden. Og slik rammet døden alle mennesker fordi alle syndet.»</em>{" "}
                  <strong>Romerne 5:12</strong>
                </p>
                <p>Fallet førte mennesket bort fra Gud og inn under syndens og dødens makt.</p>
                <p>Paulus beskriver menneskets tilstand slik:</p>
                <p>
                  <em>«Dere var en gang døde på grunn av misgjerningene og syndene deres.»</em> <strong>Efeserne 2:1</strong>
                </p>
                <p>
                  Dette betyr ikke at mennesket sluttet å eksistere. Det betyr at mennesket var åndelig dødt i forholdet til Gud og fremmedgjort fra Ham.
                </p>
                <p>
                  Synden påvirket hele menneskelivet – våre tanker, ønsker, følelser, valg og handlinger. Mennesket kunne ikke selv løse syndens problem eller gjenopprette sitt forhold til Gud.
                </p>
                <p>Men menneskets fall fikk ikke Gud til å oppgi sin hensikt.</p>
                <p>Gud tok selv initiativet til å gjenløse mennesket.</p>

                <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">4. Kristi gjenløsning for Guds utdeling</h3>
                <p>Gud kom til mennesket i Jesus Kristus.</p>
                <p>
                  <em>«Og Ordet ble kjøtt og tok bolig iblant oss, og vi så hans herlighet, en herlighet som den enbårne har fra sin Far, full av nåde og sannhet.»</em>{" "}
                  <strong>Johannes 1:14</strong>
                </p>
                <p>Jesus Kristus ble virkelig menneske. Han levde uten synd og ga sitt liv på korset for menneskets synd.</p>
                <p>Gjennom Kristus har mennesket fått mulighet til å bli frigjort fra syndens skyld:</p>
                <p>
                  <em>«I ham har vi friheten, kjøpt med hans blod, tilgivelse for syndene. Så rik er Guds nåde.»</em>{" "}
                  <strong>Efeserne 1:7</strong>
                </p>
                <p>
                  Kristi død var derfor ikke bare et eksempel på kjærlighet. Hans blod ble gitt for menneskets synd, slik at mennesket kunne få tilgivelse og bli ført tilbake til Gud.
                </p>
                <p>Men evangeliet stopper ikke ved korset.</p>
                <p>
                  <em>«Men nå er jo Kristus reist opp fra de døde, som førstegrøden av dem som er sovnet inn.»</em>{" "}
                  <strong>1. Korinter 15:20</strong>
                </p>
                <p>
                  Kristus er oppstanden. Derfor handler frelsen ikke bare om at det gamle blir tilgitt. Gud tilbyr mennesket et nytt liv.
                </p>
                <p>Paulus uttrykker dette slik:</p>
                <p>
                  <em>«Nei, den som er i Kristus, er en ny skapning. Det gamle er borte, se, det nye er blitt til!»</em>{" "}
                  <strong>2. Korinter 5:17</strong>
                </p>
                <p>Kristi gjenløsning åpner dermed veien til det livet Gud opprinnelig hadde til hensikt for mennesket.</p>

                <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">5. Menneskets gjenfødelse</h3>
                <p>Jesus beskriver inngangen til det nye livet som å bli født på ny.</p>
                <p>
                  <em>«Jesus svarte: «Sannelig, sannelig, jeg sier deg: Den som ikke blir født av vann og Ånd, kan ikke komme inn i Guds rike.»»</em>{" "}
                  <strong>Johannes 3:5</strong>
                </p>
                <p>Gjenfødelsen må derfor forstås i sammenheng med vann og Ånd.</p>
                <p>
                  Dette blir særlig tydelig på pinsedagen. Etter Peters forkynnelse om Jesus Kristus ble tilhørerne grepet av budskapet og spurte hva de skulle gjøre.
                </p>
                <p>
                  <em>«Da de hørte dette, stakk det dem i hjertet, og de sa til Peter og de andre apostlene: «Hva skal vi gjøre, brødre?»»</em>{" "}
                  <strong>Apostlenes gjerninger 2:37</strong>
                </p>
                <p>Peter svarte:</p>
                <p>
                  <em>«Vend om og la dere døpe i Jesu Kristi navn, hver og en av dere, så dere kan få tilgivelse for syndene, og dere skal få Den hellige ånds gave.»</em>{" "}
                  <strong>Apostlenes gjerninger 2:38</strong>
                </p>
                <p>Her finner vi den apostoliske forkynnelsen: Vend om og bli døpt i Jesu Kristi navn.</p>
                <p>
                  Gjenfødelsen skal derfor ikke reduseres til at et menneske ber en bestemt bønn eller har en bestemt følelsesmessig opplevelse. Bibelens forkynnelse knytter inngangen til det nye livet til tro, omvendelse, vanndåp og Den hellige ånds gave.
                </p>
                <p>
                  Dåpen har en sentral plass i overgangen til det nye livet. Mennesket vender seg bort fra sitt gamle liv og begynner å følge Kristus.
                </p>
                <p>En person som vender seg til Kristus, kan naturligvis bekjenne sin tro og omvendelse med egne ord:</p>
                <p className="border-l-2 border-gold/40 pl-4 not-italic text-text">
                  Herre Jesus, jeg tror på Deg. Jeg bekjenner mine synder og vender meg til Deg. Jeg tror at Du døde for mine synder og sto opp fra de døde. Jeg vil følge Deg og leve for Deg. Jeg lar meg døpe i Jesu Kristi navn og ønsker å leve i det nye livet Du gir. Fyll meg med Din Hellige Ånd og led meg videre i Deg.
                </p>
                <p>
                  Bønnen er ikke en magisk formel og er ikke i seg selv gjenfødelsen. Det avgjørende er menneskets tro på Kristus, omvendelse og lydighet mot evangeliet.
                </p>
                <p>Gjenfødelsen markerer begynnelsen på det nye livet med Gud.</p>
                <p className="text-center font-serif italic text-ink">
                  Det gamle livet → tro → omvendelse → vanndåp → Den hellige ånds gave → det nye livet
                </p>

                <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">6. Guds fulle frelse</h3>
                <p>Gjenfødelsen er begynnelsen på Guds verk i mennesket. Det nye livet skal få prege hele menneskets liv.</p>
                <p>Paulus skriver:</p>
                <p>
                  <em>«Innrett dere ikke etter den nåværende verden, men la dere forvandle ved at sinnet fornyes, så dere kan dømme om hva som er Guds vilje: det gode, det som er til glede for Gud, det fullkomne.»</em>{" "}
                  <strong>Romerne 12:2</strong>
                </p>
                <p>
                  Det kristne livet innebærer derfor en stadig forvandling. Gud ønsker å fornye menneskets sinn, forme dets tanker og holdninger og føre menneskets liv inn under Hans gode vilje.
                </p>
                <p>Dette skjer gjennom et liv i tro og lydighet.</p>
                <p>Paulus skriver:</p>
                <p>
                  <em>«Mine kjære, dere har jo alltid vært lydige mens jeg var hos dere. Så vær det enda mer nå når jeg er borte, og arbeid på deres egen frelse med respekt og ærefrykt. For det er Gud som er virksom i dere, så dere både vil og gjør det som er etter Guds gode vilje.»</em>{" "}
                  <strong>Filipperne 2:12–13</strong>
                </p>
                <p>
                  Her ser vi både menneskets ansvar og Guds virksomhet. Vi skal arbeide på vår frelse, samtidig som det er Gud som virker i oss.
                </p>
                <p>Det kristne livet er derfor ikke passivt. Etter gjenfødelsen kalles mennesket til å leve i tro, lydighet og helliggjørelse.</p>
                <p>
                  Guds frelse omfatter hele mennesket. Den handler om vårt forhold til Gud, vårt indre liv, våre tanker, våre valg, våre handlinger og hele vår eksistens.
                </p>
                <p>Frelsen skal til slutt fullendes.</p>
                <p>
                  <em>«Men etter hans løfte venter vi på en ny himmel og en ny jord, hvor rettferdighet bor.»</em> <strong>2. Peter 3:13</strong>
                </p>
                <p>
                  Guds frelsesplan ender derfor ikke bare med at det enkelte mennesket blir frelst fra synd. Gud skal til slutt gjøre alle ting nye.
                </p>

                <h3 className="font-sans text-[1.1rem] font-semibold uppercase tracking-[.1em] text-gold-dark">Menneskelivets mysterium</h3>
                <p>Når vi ser hele bildet, får vi en sammenhengende forståelse av menneskelivet:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Gud har en plan.</strong> Mennesket ble skapt i Guds bilde og satt til å råde over skaperverket.
                  </li>
                  <li>
                    <strong>Mennesket falt.</strong> Synden kom inn i verden, og døden fulgte med synden.
                  </li>
                  <li>
                    <strong>Kristus kom.</strong> Han ble menneske, døde for våre synder og sto opp fra de døde.
                  </li>
                  <li>
                    <strong>Mennesket blir kalt tilbake til Gud.</strong> Det skal tro, vende om og la seg døpe i Jesu Kristi navn.
                  </li>
                  <li>
                    <strong>Mennesket blir født på ny.</strong> Det fødes av vann og Ånd og begynner det nye livet med Gud.
                  </li>
                  <li>
                    <strong>Guds verk fortsetter.</strong> Sinnet fornyes, livet forvandles, og mennesket lærer å leve i lydighet mot Gud.
                  </li>
                  <li>
                    <strong>Guds frelsesplan fullføres.</strong> Gud skal skape en ny himmel og en ny jord hvor rettferdighet bor.
                  </li>
                </ul>

                <h4 className="font-sans text-[.95rem] font-semibold uppercase tracking-[.1em] text-gold-dark">Hovedtanken</h4>
                <p>
                  Mennesket ble skapt av Gud og for Gud. Synden førte mennesket bort fra Gud, men Kristus kom for å gjenløse det. Gjennom tro, omvendelse og dåp i Jesu Kristi navn blir mennesket født av vann og Ånd og begynner det nye livet. Deretter virker Gud videre i mennesket gjennom tro, lydighet og forvandling, inntil Hans frelsesplan blir fullført.
                </p>
              </SubAccordion>
            </CommentarySection>

            <Section title="Viktige bibeltekster">
              <ul className="list-disc pl-6">
                <li>1 Mos 1:26–27 – Mennesket skapes i Guds bilde.</li>
                <li>1 Mos 2:7 – Gud blåser liv i mennesket.</li>
                <li>Rom 5:12–19 – Synd og frelse som følge av Adams fall og Kristi seier.</li>
                <li>Joh 1:14 – Kristus blir kjøtt og bor iblandt oss.</li>
                <li>1 Tess 5:23 – Ånd, sjel og kropp.</li>
                <li>Hebr 4:12 – Guds ord skiller sjel og ånd.</li>
              </ul>
            </Section>

            <Section title="Til ettertanke">
              <ul className="list-disc pl-6">
                <li>Hva viser det om mennesket at Gud ønsket å uttrykke seg gjennom det?</li>
                <li>Hvordan ser du sammenhengen mellom det mennesket er skapt til, og det det blir i synden?</li>
                <li>Hva betyr det for deg at Kristus kom for å gjenopprette mennesket og give Gud sitt liv?</li>
                <li>Hvordan skiller den bibelske beskrivelsen av mennesket seg fra den teologiske modellen?</li>
              </ul>
            </Section>

            <Section title="Ressurser">
              <p>
                Bruk dette kapittelet sammen med Bibelen, spesielt de utvalgte skriftstedene, og bruk eventuelle visuelle oversikter som hjelper til å se sammenhengen mellom skapelse, fall, gjenløsning og full frelse.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </main>
  );
}
