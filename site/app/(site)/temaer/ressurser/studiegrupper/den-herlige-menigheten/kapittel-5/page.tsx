import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Icon } from "@/components/icons/Icon";
import { AccordionSection } from "../kapittel-4/AccordionSection";
import { SubAccordion } from "../kapittel-4/SubAccordion";
import { ZoomGroupModal } from "../kapittel-4/ZoomGroupModal";
import { InfographicGallery } from "./InfographicGallery";

export const metadata: Metadata = {
  title: "Kapittel 5 – Den hellige stad: Det nye Jerusalem | THEOLOGIA",
  description:
    "Kapittel 5 i studiet Den herlige menigheten: Det nye Jerusalem som fullendelsen av Guds hensikt med menigheten – staden som er Kristi brud.",
};

const OVERVIEW_HREF = "/temaer/ressurser/studiegrupper/den-herlige-menigheten";

/** Styling for brødtekst inne i SubAccordion (som ellers rendrer barna uten avsnitts-marg). */
function SubBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="leading-[1.8] [&_h4:first-child]:mt-0 [&_h4]:mt-5 [&_h4]:mb-2 [&_h4]:font-sans [&_h4]:text-[.72rem] [&_h4]:font-bold [&_h4]:tracking-[.5px] [&_h4]:text-gold-dark [&_h4]:uppercase [&_p]:mb-3.5 [&_p:last-child]:mb-0 [&_ul]:mb-3.5 [&_ul]:list-disc [&_ul]:pl-[20px] [&_li]:mb-1">
      {children}
    </div>
  );
}

export default function Kapittel5Page() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Ressurser", href: "/temaer/ressurser" },
          { label: "Den herlige menigheten", href: OVERVIEW_HREF },
          { label: "Kapittel 5" },
        ]}
      />

      {/* HERO */}
      <section className="pb-6">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="grid grid-cols-[1fr_240px] items-start gap-12 max-[1100px]:grid-cols-[1fr_200px] max-[720px]:grid-cols-1">
            <section>
              <Link href={OVERVIEW_HREF} className="mb-5 flex items-center gap-1.5 font-sans text-[.88rem] font-semibold text-gold hover:text-gold-dark">
                <span aria-hidden="true">←</span> Tilbake til studieoversikt
              </Link>

              <span className="mb-3.5 inline-block font-sans text-[.76rem] font-bold tracking-[2.4px] text-gold uppercase">★ AKTUELT STUDIE</span>
              <h1 className="mb-4 text-[clamp(1.9rem,3vw,2.5rem)]">Den herlige menigheten</h1>
              <p className="mb-4.5 max-w-[60ch] font-serif text-[1.15rem] text-text">
                En kapittel-for-kapittel studie av <strong>Den herlige menigheten</strong> av Watchman Nee.
              </p>

              <p className="mb-4.5 font-sans text-[.82rem] font-semibold tracking-[.4px] text-gold-dark uppercase">
                Kapittel 5
                <strong className="mt-1.5 block font-serif text-[1.15rem] font-semibold text-ink normal-case">
                  Den hellige stad: Det nye Jerusalem
                </strong>
              </p>

              <div className="flex flex-wrap gap-7 border-y border-border py-5.5 max-[720px]:gap-5">
                {[
                  { icon: "video" as const, label: "Zoom-gruppe" },
                  { icon: "document" as const, label: "Presentasjoner" },
                  { icon: "comment" as const, label: "Kommentarer" },
                  { icon: "book" as const, label: "Bibelhenvisninger" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-2.5 font-sans text-[.92rem] text-text">
                    <Icon name={f.icon} aria-hidden="true" className="h-[18px] w-[18px] flex-none text-gold" />
                    {f.label}
                  </div>
                ))}
              </div>
            </section>

            <aside className="max-[720px]:mx-auto max-[720px]:max-w-[180px]">
              <Image
                src="/images/resources/den-herlige-menigheten-3d.png"
                alt="Bokomslag: Den herlige menigheten"
                width={1024}
                height={1536}
                className="block w-full rounded-xl shadow-[0_12px_30px_rgba(0,0,0,.15)]"
              />
            </aside>
          </div>
        </div>
      </section>

      {/* STUDIEINNHOLD */}
      <section className="pt-6 pb-[70px]">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="grid grid-cols-[1fr_340px] items-start gap-10 max-[1100px]:grid-cols-1">
            {/* Hovedspalte */}
            <div className="flex flex-col gap-5">
              <AccordionSection icon="document" title="Presentasjon" description="Introduksjon til kapittel 5">
                <h3>Introduksjon til kapittel 5</h3>
                <p>
                  Kapittel 5 fører studiet fram til målet. Etter å ha fulgt menigheten fra Guds plan i begynnelsen,
                  gjennom Eva som forbilde, Kristi kropp og brud, og det trofaste folket i den åndelige kampen, står
                  vi nå ved fullendelsen: <strong>Det nye Jerusalem</strong>, den hellige stad som stiger ned fra
                  Gud.
                </p>
                <p>
                  Dette er ikke et vedheng til frelseshistorien, men dens høydepunkt. Bibelen begynner i en hage der
                  Gud vandrer med mennesket, og den ender i en by der Gud bor hos sitt folk for alltid. Mellom hagen
                  og byen ligger hele Skriftens fortelling om hvordan Gud skaper seg et hellig folk som fullt ut
                  tilhører Kristus.
                </p>
                <p>
                  I dette kapittelet løfter vi blikket fra den enkeltes frelse – som er sann og dyrebar – til det
                  Gud har hatt for øye hele tiden: et folk, en brud, en stad, der hans liv, hellighet og herlighet
                  får bo synlig og uhindret.
                </p>

                <hr />

                <p>
                  Åpenbaringens to siste kapitler er blant de mest trøsterike i hele Bibelen, men de er også dypt
                  symbolske. Johannes ser en by med murer, porter og gater, men han beskriver den med et språk som
                  stadig peker utover det arkitektoniske. Byen har <em>«Guds herlighet»</em>{" "}
                  <strong>(Åp 21,11)</strong>; den har ingen tempelbygning, <em>«for Herren Gud, Den allmektige, og
                  Lammet er dens tempel»</em> <strong>(Åp 21,22)</strong>; den trenger verken sol eller måne,{" "}
                  <em>«for Guds herlighet lyste over den, og Lammet var dens lys»</em> <strong>(Åp 21,23)</strong>.
                  Dette er ikke en beskrivelse vi kan tegne opp presist. Det er et bilde som skal åpne hjertet for
                  en virkelighet større enn bildet selv.
                </p>
                <p>
                  Derfor leser vi disse kapitlene med varsomhet. Vi skal ikke bruke dem til å spekulere i tidspunkter
                  eller lage detaljerte kart over framtiden. Vi skal la dem gjøre det de er gitt for: å vise oss hvor
                  Guds frelsesplan bærer hen, og hva slags folk Gud arbeider fram.
                </p>
                <p>
                  Det første vi legger merke til, er at staden og bruden er ett. En engel sier til Johannes:{" "}
                  <em>«Kom, jeg skal vise deg bruden, Lammets hustru»</em> – og så viser han ham{" "}
                  <em>«den hellige byen Jerusalem»</em> <strong>(Åp 21,9–10)</strong>. Byen er ikke bare et sted der
                  bruden skal bo; byen <em>er</em> bruden. Det Paulus sier om menigheten i Efeserne 5 – at Kristus
                  elsket den og ga seg selv for den for å gjøre den hellig, så han kunne stille den fram for seg{" "}
                  <em>«uten flekk eller rynke»</em> <strong>(Ef 5,25–27)</strong> – er den samme virkeligheten
                  Johannes ser fullført.
                </p>
                <p>
                  Det andre er kontrasten. Rett før Johannes ser den hellige stad, har han sett en annen by falle:
                  Babylon, <em>«den store byen»</em> <strong>(Åp 18)</strong>. Babylon står for menneskelig storhet
                  uten Gud – rikdom, makt, prakt og selvhevdelse bygget på egne premisser. Det nye Jerusalem er dens
                  motsetning: en by som ikke stiger opp fra jorden ved menneskelig anstrengelse, men{" "}
                  <em>«kommer ned fra himmelen, fra Gud»</em> <strong>(Åp 21,2)</strong>. Studiet inviterer oss til
                  å spørre hvilken av de to byene vårt eget liv og våre egne fellesskap ligner mest.
                </p>
                <p>
                  Det tredje er nærværet. Den store forkynnelsen fra tronen er enkel: <em>«Se, Guds bolig er hos
                  menneskene. Han skal bo hos dem, og de skal være hans folk»</em> <strong>(Åp 21,3)</strong>. Alt
                  annet i kapittelet – lyset, vannet, treet, fraværet av gråt og død – springer ut av dette ene: Gud
                  er der. Det som gikk tapt i Første Mosebok 3, da mennesket ble drevet bort fra Guds nærvær og veien
                  til livets tre ble stengt <strong>(1 Mos 3,23–24)</strong>, er nå gjenopprettet og mer enn det.
                  Livets tre står igjen midt i byen, <em>«og bladene på treet er til legedom for folkene»</em>{" "}
                  <strong>(Åp 22,2)</strong>.
                </p>
                <p>I dette studiet skal vi særlig undersøke:</p>
                <ul>
                  <li>hvordan Det nye Jerusalem er fullendelsen av det Gud har villet med menigheten fra begynnelsen</li>
                  <li>hva det betyr at staden er Kristi brud, og ikke bare de frelstes bosted</li>
                  <li>hvordan Babylon og den hellige stad står mot hverandre som menneskelig storhet mot Guds hellighet</li>
                  <li>hva det innebærer at Gud og Lammet er byens tempel og lys</li>
                  <li>hvordan livets vann og livets tre binder sammen skapelsen, Kristi verk og fullendelsen</li>
                  <li>hvordan menigheten allerede nå er kalt til å være et synlig uttrykk for Guds liv, hellighet og herlighet</li>
                  <li>hvilket håp disse tekstene gir om Guds nærvær, gjenopprettelse og endelige seier</li>
                </ul>
                <p>
                  Som i de foregående kapitlene er dette ikke en vers-for-vers-kommentar. Tekstene får tolke
                  hverandre: skapelsen i Første Mosebok, Kristi kjærlighet til menigheten i Efeserne, det himmelske
                  Sion i Hebreerne, løftet om Ånden i Johannes-evangeliet, og synet av staden i Åpenbaringen. Les
                  dem gjerne i sammenheng, med Bibelen oppslått, og legg merke til hvordan de samme trådene går
                  igjen.
                </p>
                <p>
                  Målet er å se at frelsen er større enn den enkeltes redning – selv om den alltid inkluderer den.
                  Gud vil ha et helt folk, renset og herliggjort, som bærer hans navn og gjenspeiler hans vesen for
                  evig. Det nye Jerusalem er navnet på det folket når det er blitt alt det er ment å være.
                </p>
              </AccordionSection>

              <AccordionSection icon="book" title="Bibeltekster" description="Fire sentrale tekster med kontekst, forklaring og relevans" count={4}>
                <SubAccordion title="Åpenbaringen 21–22" description="Den hellige stad stiger ned – bruden og Guds bolig hos menneskene">
                  <SubBody>
                    <h4>Kontekst</h4>
                    <p>
                      Åpenbaringen er skrevet til menigheter under press, og hele boken beveger seg mot dette synet.
                      Etter dommen over Babylon, bryllupet mellom Lammet og bruden, og det siste oppgjøret med det
                      onde, viser Gud Johannes <em>«en ny himmel og en ny jord»</em> <strong>(Åp 21,1)</strong>. De
                      to siste kapitlene er bokens mål – og hele Bibelens mål: Gud som bor hos sitt folk.
                    </p>
                    <h4>Forklaring</h4>
                    <p>
                      Synet er tett vevd av gammeltestamentlige bilder. Byen har <em>«tolv porter»</em> med Israels
                      stammer og <em>«tolv grunnsteiner»</em> med apostlenes navn <strong>(Åp 21,12–14)</strong> –
                      hele Guds folk fra begge pakter er bygget sammen. Byen er formet som en kube, slik Det aller
                      helligste var det <strong>(1 Kong 6,20)</strong>, som for å si: nå er alt blitt Guds nærværs
                      sted. Det er ingen tempelbygning, for Gud og Lammet er tempelet; ingen sol, for Guds herlighet
                      er lyset. Fra tronen renner <em>«en elv med livets vann»</em> <strong>(Åp 22,1)</strong>, og
                      livets tre står på begge sider <strong>(Åp 22,2)</strong>. Vi skal ikke presse detaljene til å
                      gi arkitektoniske opplysninger; bildene forkynner at Guds folk til slutt skal være fullkomment
                      hellig, fullkomment opplyst og fullkomment levende i Guds nærvær.
                    </p>
                    <h4>Relevans for studiet</h4>
                    <p>
                      Dette er kapittelets grunntekst. Den viser at menigheten ikke er en midlertidig ordning, men
                      Guds evige mål, og at bruden og staden er samme virkelighet sett fra to sider:
                      kjærlighetsforholdet til Kristus og fellesskapets synlige form. Når vi ser hva menigheten skal
                      bli, forstår vi bedre hva den er kalt til å være nå.
                    </p>
                  </SubBody>
                </SubAccordion>

                <SubAccordion title="Efeserne 5,25–27" description="Kristus renser sin menighet og gjør bruden hellig og herlig">
                  <SubBody>
                    <h4>Bibeltekst</h4>
                    <p>
                      <strong>Ef 5:25–27:</strong>{" "}
                      <em>
                        Dere menn, elsk konene deres, slik Kristus elsket kirken og ga seg selv for den, for å gjøre
                        den hellig gjennom å rense den med badet i vann, i kraft av et ord. Slik ville han selv føre
                        kirken fram for seg i herlighet, uten den minste flekk eller rynke. Hellig og uten feil skulle
                        den være.
                      </em>
                    </p>
                    <h4>Kontekst</h4>
                    <p>
                      Paulus underviser om livet i menigheten og hjemmet og bruker ekteskapet som bilde på forholdet
                      mellom Kristus og menigheten <strong>(Ef 5,22–33)</strong>. Midt i formaningen til ektemenn
                      løfter han blikket til Kristi kjærlighet som mønster og kilde.
                    </p>
                    <h4>Forklaring</h4>
                    <p>
                      Tre bevegelser står sammen: Kristus <em>«elsket menigheten og ga seg selv for den»</em> – en
                      ofrende kjærlighet, fullbrakt på korset. Han gjør den <em>«hellig og renset ved vannbadet i
                      Ordet»</em> – en pågående virkelighet i menighetens liv. Og målet er at han skal{" "}
                      <em>«stille menigheten fram for seg i herlighet, uten flekk eller rynke»</em> – en fullendt
                      brud. Legg merke til at Paulus ikke sier at Kristus elsker enkeltmennesker isolert; han elsker
                      menigheten – et folk, en brud.
                    </p>
                    <h4>Relevans for studiet</h4>
                    <p>
                      Denne teksten er broen mellom nåtid og fullendelse. Det Johannes ser ferdig i Åpenbaringen 21,
                      er det Paulus sier Kristus arbeider med nå. Studiet minner oss om at helliggjørelsen ikke bare
                      er personlig fromhet, men Kristi verk med hele sitt folk.
                    </p>
                  </SubBody>
                </SubAccordion>

                <SubAccordion title="Hebreerne 12,22–24" description="Den himmelske staden som allerede er en virkelighet for de troende">
                  <SubBody>
                    <h4>Bibeltekst</h4>
                    <p>
                      <strong>Hebr 12:22–24:</strong>{" "}
                      <em>
                        Nei, dere er kommet til fjellet Sion, til den levende Guds by, det himmelske Jerusalem, til ti
                        tusener av engler, til en høytidsfeiring, til forsamlingen av de førstefødte som er oppskrevet i
                        himmelen. Dere er kommet til en dommer som er alles Gud, til åndene av de rettferdige som har
                        nådd fullendelsen, til Jesus, mellommannen for en ny pakt, og til det rensende blodet som taler
                        sterkere enn Abels blod.
                      </em>
                    </p>
                    <h4>Kontekst</h4>
                    <p>
                      Hebreerbrevet er skrevet til kristne som fristes til å gi opp. Forfatteren stiller Sinai –
                      loven, frykten, avstanden – opp mot Sion – nåden, festen, nærheten – i{" "}
                      <strong>12,18–24</strong> for å vise hvor mye større den nye pakt er.
                    </p>
                    <h4>Forklaring</h4>
                    <p>
                      <em>«Dere er kommet til Sions berg, til den levende Guds by, det himmelske Jerusalem»</em>{" "}
                      <strong>(Heb 12,22)</strong>. Verbet står i perfektum: dette er ikke bare framtid, det er noe de
                      troende allerede er kommet til. Der er en høytidsskare av engler, <em>«menigheten av de
                      førstefødte som er innskrevet i himmelen»</em>, Gud som dommer, de rettferdiges fullendte
                      ånder, <em>«Jesus, mellommannen for en ny pakt»</em>, og <em>«det rensende blodet som taler
                      sterkere enn Abels blod»</em> <strong>(Heb 12,23–24)</strong>. Den himmelske staden er
                      allerede befolket og virkelig.
                    </p>
                    <h4>Relevans for studiet</h4>
                    <p>
                      Hebreerne holder to sannheter sammen: Det nye Jerusalem er både framtidig fullendelse
                      (Åpenbaringen 21) og nåværende virkelighet (Hebreerne 12). Menigheten på jorden er ikke atskilt
                      fra den himmelske staden; den er dens forpost. Vi venter på byen, og vi tilhører den allerede.
                    </p>
                  </SubBody>
                </SubAccordion>

                <SubAccordion title="Johannes 7,37–39" description="Ånden som gir byens elv dens kilde – levende vann allerede nå">
                  <SubBody>
                    <h4>Bibeltekst</h4>
                    <p>
                      <strong>Joh 7:37–39:</strong>{" "}
                      <em>
                        På den siste dagen i høytiden, den store festdagen, sto Jesus fram og ropte: «Den som tørster,
                        skal komme til meg og drikke! Den som tror på meg, fra hans indre skal det, som skriftordet
                        sier, renne elver av levende vann.» Dette sa han om Ånden de skulle få, de som trodde på ham.
                        Ånden var ennå ikke kommet, for Jesus var ennå ikke blitt herliggjort.
                      </em>
                    </p>
                    <h4>Kontekst</h4>
                    <p>
                      Jesus står fram <em>«på den siste og store dagen i høytiden»</em>, løvhyttefesten, da man bar
                      vann fra Siloadammen til tempelet som et bilde på Guds framtidige velsignelse. Der roper han ut
                      sitt tilbud.
                    </p>
                    <h4>Forklaring</h4>
                    <p>
                      <em>«Den som tørster, la ham komme til meg og drikke! Den som tror på meg, fra hans indre skal
                      det, som Skriften har sagt, renne strømmer av levende vann»</em>{" "}
                      <strong>(Joh 7,37–38)</strong>. Johannes forklarer selv: <em>«Dette sa han om Ånden»</em>{" "}
                      <strong>(Joh 7,39)</strong>. Det livgivende vannet er Den hellige ånd, gitt gjennom den
                      oppstandne og opphøyde Kristus. Det som i Åpenbaringen 22 er en elv fra tronen, er allerede
                      begynt å renne.
                    </p>
                    <h4>Relevans for studiet</h4>
                    <p>
                      Denne teksten forbinder fullendelsen med nåtiden. Byens elv <strong>(Åp 22,1)</strong> er ikke
                      en helt ny virkelighet; den er den samme Ånden Jesus lovet. Menigheten er allerede et sted der
                      livets vann renner. Studiet oppfordrer oss til å spørre om det livet får strømme fritt gjennom
                      våre fellesskap, eller om noe demmer det opp.
                    </p>
                  </SubBody>
                </SubAccordion>

                <p className="mt-1 text-[.88rem] text-text-light">
                  <strong className="font-semibold text-gold-dark">Bakgrunnstekst:</strong> Første Mosebok 2–3 leses
                  som bakteppe for hele kapittelet – livets tre, elven fra Eden og Guds vandring med mennesket – og
                  trekkes inn i introduksjonen og kommentarene nedenfor. Slå den gjerne opp først.
                </p>
              </AccordionSection>

              <AccordionSection icon="column" title="Infografikk" description="Kapittelet oppsummert i elleve visuelle oversikter">
                <InfographicGallery />
              </AccordionSection>

              <AccordionSection id="commentary" icon="comment" title="Kommentarer" description="Elleve utfyllende, teologiske kommentarer" count={11}>
                <SubAccordion title="Kommentar 1 – Bibelen som en bue fra hage til by">
                  <SubBody>
                    <p>
                      Skriften har en form. Den åpner i en hage der Gud vandrer med mennesket i kveldsbrisen{" "}
                      <strong>(1 Mos 3,8)</strong>, og den lukker i en by der <em>«Guds bolig er hos menneskene»</em>{" "}
                      <strong>(Åp 21,3)</strong>. Mellom disse to punktene ligger fortellingen om hvordan nærværet
                      som gikk tapt, blir vunnet tilbake – ikke ved at vi klatrer opp til Gud, men ved at Gud stiger
                      ned til oss.
                    </p>
                    <p>
                      Det er verdt å merke seg at endepunktet ikke er en ren tilbakevending til Eden, men noe mer.
                      Hagen var en begynnelse med muligheter; byen er en fullendelse med et folk. Gud ville aldri
                      bare ha et par mennesker i en hage. Han ville ha en stad, en brud, et helt folk som bærer hans
                      navn. Kapittel 5 handler om at dette målet nås.
                    </p>
                  </SubBody>
                </SubAccordion>

                <SubAccordion title="Kommentar 2 – Livets tre: stengt, så åpnet">
                  <SubBody>
                    <p>
                      Etter fallet ble mennesket drevet ut, og Gud satte <em>«kjerubene med det flammende sverd til
                      å vokte veien til livets tre»</em> <strong>(1 Mos 3,24)</strong>. Veien var ikke borte, men
                      stengt. Store deler av Bibelen kan leses som spørsmålet om hvordan den veien igjen skal åpnes.
                    </p>
                    <p>
                      I <strong>Åp 22,2</strong> står treet der igjen, midt i byen, og nå er det ingen kjerub med
                      sverd. Kristus har gått veien gjennom sin død og oppstandelse: <em>«jeg var død, men se, jeg
                      lever i all evighet»</em> <strong>(Åp 1,18)</strong>. Løftet til menigheten i Efesos var
                      allerede: <em>«Den som seirer, vil jeg gi å spise av livets tre»</em>{" "}
                      <strong>(Åp 2,7)</strong>. Det som var utilgjengelig, er blitt menighetens arv.
                    </p>
                  </SubBody>
                </SubAccordion>

                <SubAccordion title="Kommentar 3 – Staden som er en brud">
                  <SubBody>
                    <p>
                      Det er lett å tenke på Det nye Jerusalem som et sted de frelste skal bo. Men engelen sier noe
                      mer presist: <em>«Kom, jeg skal vise deg bruden, Lammets hustru»</em> – og viser Johannes byen{" "}
                      <strong>(Åp 21,9–10)</strong>. Staden er ikke bare bostedet; den er bruden selv. Menigheten er
                      ikke innbyggerne i en by Gud har bygget ved siden av; menigheten <em>er</em> byen.
                    </p>
                    <p>
                      Dette forandrer hvordan vi leser tekstene. Murer, porter og grunnsteiner er da ikke
                      arkitektur, men fellesskap: et folk som er føyd sammen, med Israel og apostlene som bærende
                      ledd, og med Kristus som <em>«hjørnestein»</em> <strong>(Ef 2,20)</strong>. Å høre til staden
                      er å høre til bruden – å tilhøre Kristus i kjærlighet, ikke bare å ha adressen i orden.
                    </p>
                  </SubBody>
                </SubAccordion>

                <SubAccordion title="Kommentar 4 – Ingen tempelbygning, fordi Gud selv er der">
                  <SubBody>
                    <p>
                      I den gamle pakt var tempelet stedet der Gud møtte sitt folk, atskilt av forheng og
                      forgårder. I Det nye Jerusalem er det ingen tempelbygning, <em>«for Herren Gud, Den allmektige,
                      og Lammet er dens tempel»</em> <strong>(Åp 21,22)</strong>. Avstanden er borte. Det tempelet
                      pekte fram mot – Guds nærvær midt iblant folket – er blitt fullt virkelighet.
                    </p>
                    <p>
                      Dette er allerede begynt. Paulus sier at menigheten <em>«vokser til et hellig tempel i
                      Herren»</em> og <em>«bygges opp til en bolig for Gud i Ånden»</em>{" "}
                      <strong>(Ef 2,21–22)</strong>. Menigheten er ikke på vei til å skaffe seg et tempel; den er i
                      ferd med å bli det. Kapittel 5 viser hva den blir når verket er ferdig.
                    </p>
                  </SubBody>
                </SubAccordion>

                <SubAccordion title="Kommentar 5 – Lyset som ikke kommer utenfra">
                  <SubBody>
                    <p>
                      Byen <em>«trenger ikke sol eller måne som lyskilde, for Guds herlighet lyste over den, og
                      Lammet var dens lys»</em> <strong>(Åp 21,23)</strong>. Lyset er ikke noe byen mottar fra
                      himmellegemer; det stråler fra Gud selv, midt i den. Folkeslagene <em>«skal vandre i lyset fra
                      byen»</em> <strong>(Åp 21,24)</strong>.
                    </p>
                    <p>
                      For menigheten nå betyr dette at oppgaven ikke er å produsere sitt eget lys ved dyktighet
                      eller storslåtthet, men å slippe Guds herlighet til så den kan skinne. Jesus sa: <em>«Dere er
                      verdens lys. En by som ligger på et fjell, kan ikke skjules»</em>{" "}
                      <strong>(Matt 5,14)</strong>. Bildet er det samme – en lysende by – og kilden er den samme:
                      Gud som bor i folket.
                    </p>
                  </SubBody>
                </SubAccordion>

                <SubAccordion title="Kommentar 6 – Babylon og Jerusalem: to måter å bygge på">
                  <SubBody>
                    <p>
                      Rett før synet av den hellige stad ser Johannes Babylon falle <strong>(Åp 18)</strong>.
                      Babylon er ikke først og fremst en bestemt nasjon, men et mønster: menneskelig storhet som
                      samler ære, rikdom og makt til seg selv, uavhengig av Gud. Den <em>«opphøyer seg selv»</em>{" "}
                      <strong>(Åp 18,7)</strong> og faller brått.
                    </p>
                    <p>
                      Det nye Jerusalem er dens motsetning på hvert punkt. Den bygges ikke opp fra jorden, men{" "}
                      <em>«kommer ned fra himmelen, fra Gud»</em> <strong>(Åp 21,2)</strong>. Den har ingen egen
                      herlighet å vise fram; den bærer Guds. Studiet stiller et ærlig spørsmål: bygger vi menighet –
                      og liv – etter Babylons mønster, med tanke på synlighet, tall og innflytelse? Eller etter
                      stadens mønster, som mottakere av noe vi ikke selv har frembrakt?
                    </p>
                  </SubBody>
                </SubAccordion>

                <SubAccordion title="Kommentar 7 – Elven som allerede renner">
                  <SubBody>
                    <p>
                      I Eden gikk det ut en elv <em>«som vannet hagen»</em> <strong>(1 Mos 2,10)</strong>. I Det nye
                      Jerusalem renner <em>«en elv med livets vann, klar som krystall, ut fra Guds og Lammets
                      trone»</em> <strong>(Åp 22,1)</strong>. Mellom disse to elvene står Jesu ord på
                      løvhyttefesten: <em>«fra hans indre skal det renne strømmer av levende vann»</em> – <em>«dette
                      sa han om Ånden»</em> <strong>(Joh 7,38–39)</strong>.
                    </p>
                    <p>
                      Elven i den fullendte staden er altså ikke en fremmed virkelighet vi bare kan vente på. Den
                      samme Ånden bor allerede i menigheten. Spørsmålet studiet reiser, er ikke om vannet finnes, men
                      om det får strømme – gjennom tilbedelse, tjeneste, tilgivelse og omsorg – eller om det stanses
                      av strid og selvopptatthet.
                    </p>
                  </SubBody>
                </SubAccordion>

                <SubAccordion title="Kommentar 8 – Fra «jeg er frelst» til «vi er hans folk»">
                  <SubBody>
                    <p>
                      Den enkeltes frelse er sann og uendelig verdifull; ingenting i dette kapittelet svekker den.
                      Men <strong>Åp 21,3</strong> setter frelsen inn i sin største sammenheng: <em>«de skal være
                      hans folk, og Gud selv skal være hos dem»</em>. Målet er ikke bare mange reddede
                      enkeltmennesker, men ett helliggjort folk.
                    </p>
                    <p>
                      Watchman Nees anliggende – og Bibelens – er at vi ikke skal stanse ved vår egen redning, men
                      løfte blikket til det Gud har hatt for øye hele tiden: en brud for sin Sønn, en stad for sitt
                      nærvær, et folk som gjenspeiler hans vesen for evig. Å se dette forandrer hvordan vi lever i
                      menigheten nå: ikke som løsrevne troende som tilfeldigvis møtes, men som stener i en bygning
                      Gud selv reiser.
                    </p>
                  </SubBody>
                </SubAccordion>

                <SubAccordion title="Kommentar 9 – Hva er kontroversielt i kapittel 5?">
                  <SubBody>
                    <p>Kapittel 5 i Den herlige menigheten inneholder flere teologiske påstander som går lenger enn en enkel gjennomgang av Åpenbaringen 21–22. Det gjelder særlig forståelsen av Det nye Jerusalem, Lammets hustru, menigheten, overvinnerne, Guds rike, tusenårsriket og Guds evige hensikt.</p>
                    <p>Dette betyr ikke at påstandene automatisk er feil. Men de bør undersøkes nøye mot selve bibeltekstene. En viktig oppgave for et bibelsk studiearbeid er derfor å skille mellom det Bibelen uttrykkelig sier, teologiske slutninger som trekkes fra flere tekster, og tolkninger som tilhører en bestemt teologisk tradisjon.</p>
                    <p>I en senere gjennomgang av kapittel 5 skal THEOLOGIA derfor undersøke følgende hovedspørsmål:</p>
                    <h4>1. Overvinnerne</h4>
                    <p>Hvordan skal «overvinnerne» i Åpenbaringen forstås? Er de en særskilt gruppe innenfor menigheten, slik Nee argumenterer, eller gjelder betegnelsen alle troende som seirer ved troen? Hvordan henger Åpenbaringen 2–3 sammen med de senere tekstene om overvinnerne?</p>
                    <h4>2. Tusenårsriket</h4>
                    <p>Hvordan skal forholdet mellom rikets tidsalder og den nye himmel og den nye jord forstås? Hvilke tekster taler om Kristi rike, og hvilke tekster beskriver den endelige tilstanden? Er Nees tidsmessige plassering av begivenhetene den mest naturlige lesningen av Åpenbaringen 19–22?</p>
                    <h4>3. Israel og menigheten</h4>
                    <p>Hvordan skal de tolv stammene i Israels navn og de tolv apostlene i Det nye Jerusalems porter og grunnsteiner forstås? Representerer dette én samlet Guds menighet, Israel og menigheten i en bestemt kontinuitet, eller finnes det fortsatt et skille mellom Israel og menigheten?</p>
                    <h4>4. Menigheten og Lammets hustru</h4>
                    <p>Åpenbaringen 21,9–10 kobler uttrykkene «bruden, Lammets hustru» og «den hellige byen Jerusalem». Hva betyr dette? Er Det nye Jerusalem identisk med den herliggjorte menigheten, slik Nee hevder, eller kan bildet forstås på andre måter?</p>
                    <h4>5. Det nye Jerusalem</h4>
                    <p>Er byen et symbol på Guds folk, en faktisk fremtidig by, eller begge deler? Hvordan skal byens porter, grunnsteiner, mur, gull, perler, kostelige steiner, elv og livets tre forstås? Hvor langt kan vi gå i symbolsk tolkning uten å legge mer inn i teksten enn den selv sier?</p>
                    <h4>6. De fire kvinnene</h4>
                    <p>Nee identifiserer Eva, menigheten i Efeserne 5, kvinnen i Åpenbaringen 12 og Lammets hustru i Åpenbaringen 21 som fire stadier av én og samme kvinne. Er dette en tekstlig konklusjon som følger av Bibelen, eller er det en typologisk teologisk modell?</p>
                    <h4>7. Guds hensikt med mennesket</h4>
                    <p>Nee legger stor vekt på at Gud skapte mennesket for å regjere, og at gjenløsningen løser problemet som oppstod gjennom fallet. Hvordan skal dette forstås i lys av 1. Mosebok 1, Salme 8, Hebreerne 2 og resten av Det nye testamentet?</p>
                    <h4>8. Mennesket, Guds rike og Satan</h4>
                    <p>Nee knytter menneskets oppgave til å beseire Satans makt og bringe Guds rike. Hvordan beskriver Det nye testamentet egentlig forholdet mellom Kristus, menigheten, Guds rike og Satans nederlag?</p>
                    <h4>9. Gjenløsningen og Guds evige plan</h4>
                    <p>Nee skiller mellom Guds opprinnelige hensikt med skapelsen og gjenløsningen som løsning på fallet. Hvordan skal dette vurderes i lys av tekster som Efeserne 1, 1. Petersbrev 1 og Åpenbaringen?</p>
                    <h4>10. Åpenbaringen 19–22</h4>
                    <p>Hvordan skal tidsrekkefølgen forstås mellom Lammets bryllup, Kristi rike, dommen, den nye himmel og den nye jord og Det nye Jerusalem? Her bør teksten undersøkes nøye før man trekker teologiske konklusjoner.</p>
                    <p>Denne gjennomgangen skal senere gjøres punkt for punkt under overskriften:</p>
                    <p>
                      <strong>«Hva sier Nee – hva sier teksten faktisk – hva er omstridt?»</strong>
                    </p>
                    <p>Målet er ikke å angripe Watchman Nee, men å undersøke hans tolkning kritisk og rettferdig ved å gå tilbake til de relevante bibeltekstene og la tekstens sammenheng være avgjørende.</p>
                    <p>«Denne kritiske gjennomgangen kommer senere og skal behandles som et eget bibelsk-teologisk studiearbeid.»</p>
                  </SubBody>
                </SubAccordion>

                <SubAccordion title="Kommentar 10 – Alternative tolkninger av «overvinnerne»">
                  <SubBody>
                    <p><strong>THEOLOGIA-kommentar.</strong> Teksten under er utarbeidet av THEOLOGIA ved hjelp av kunstig intelligens og er ikke skrevet av Watchman Nee. Den gir en oversikt over ulike måter «overvinnerne» i Åpenbaringen kan forstås på, som bakgrunn for en senere bibelsk-teologisk gjennomgang.</p>
                    <p>Uttrykket «overvinnerne» er et av de punktene i kapittel 5 som bør undersøkes nærmere. Watchman Nee knytter «overvinnerne» til en bestemt gruppe troende og til deres rolle i Guds plan. Det finnes imidlertid andre måter å forstå disse tekstene på. Derfor er det viktig å skille mellom det teksten faktisk sier, og den teologiske modellen som bygges på tekstene.</p>
                    <h4>1. Overvinnerne = alle sanne troende</h4>
                    <p>En mulig tolkning er at «å overvinne» først og fremst beskriver det å <strong>komme til tro på Kristus og høre ham til</strong>. Her er <strong>1 Joh 5:4–5</strong> særlig relevant, hvor Johannes sier at den som er født av Gud, har overvunnet verden.</p>
                    <p>I denne forståelsen er ikke «overvinner» en særskilt gruppe eller en åndelig elite innenfor menigheten. Betegnelsen beskriver den troende som tilhører Kristus og dermed har del i seieren over verden.</p>
                    <p>Dette kan også knyttes til <strong>Åp 21:7</strong>, hvor det står at <em>«den som seirer, skal arve dette»</em>. Det som følger, er en beskrivelse av den nye skapelsen og Guds nærvær hos menneskene. Vers 8 setter samtidig den som seirer opp mot dem som lever i vantro og opprør.</p>
                    <p><strong>Konsekvensen av denne tolkningen</strong> er at man ikke trenger å skille mellom en liten gruppe «overvinnere» og resten av de frelste når man kommer til Det nye Jerusalem. «Overvinneren» kan ganske enkelt være et uttrykk for den som virkelig tilhører Kristus.</p>
                    <h4>2. Overvinnerne = troende som holder fast i troen</h4>
                    <p>En annen tolkning er mer nyansert. Alle overvinnerne er troende, men uttrykket brukes i <strong>Åp 2–3</strong> om dem som <strong>forblir trofaste under prøvelser, motstår falsk lære og lever i lydighet mot Kristus</strong>.</p>
                    <p>Her blir overvinnelsen ikke nødvendigvis et vilkår for selve frelsen, men knyttes til <strong>trofasthet, belønning og særlige privilegier</strong>.</p>
                    <p>Jesus gjentar uttrykket <em>«Den som seirer …»</em> i brevene til de syv menighetene. Løftene gis til den enkelte, samtidig som brevene er skrevet til menighetene som helhet. Dette kan tyde på at Jesus kaller hver enkelt troende til å holde fast ved troen og overvinne det som truer menigheten.</p>
                    <p><strong>Konsekvensen av denne tolkningen</strong> er at man kan skille mellom <strong>frelse og belønning</strong> uten nødvendigvis å konkludere med at overvinnerne utgjør en egen gruppe som representerer hele den fremtidige bruden.</p>
                    <h4>3. «Overvinneren» beskriver menigheten som helhet, men brukes om den enkelte</h4>
                    <p>En tredje mulighet ligger mellom de to foregående. <strong>Åp 2–3</strong> er skrevet til menighetene, men Jesus formulerer løftene til <em>«den som seirer»</em>. Dette kan forstås som en oppfordring til den enkelte troende om å være trofast, uten at teksten dermed lærer at bare en bestemt gruppe kristne til slutt utgjør bruden.</p>
                    <p>Med andre ord: <strong>menigheten er det kollektive subjektet, mens den enkelte troende kalles til å overvinne.</strong> Denne forståelsen tar både menighetens kollektive identitet og Jesu personlige formaninger på alvor. Den trenger derfor ikke å gjøre «overvinnerne» til en egen gruppe innenfor Guds folk.</p>
                    <h4>4. Overvinnerne = de som seirer gjennom lidelse og troskap, særlig i endetiden</h4>
                    <p>En mer eskatologisk tolkning legger vekt på at Åpenbaringen beskriver en omfattende konflikt mellom <strong>Kristus og hans folk på den ene siden og Satan, dyret og Babylon på den andre</strong>. I denne forståelsen handler det å overvinne om å <strong>stå fast på Kristus gjennom prøvelser, forfølgelse og den eskatologiske konflikten</strong>.</p>
                    <p>Dette kan blant annet knyttes til <strong>Åp 12:11</strong>, hvor Guds folk seirer over anklageren ved Lammets blod og ved sitt vitnesbyrd. Overvinneren blir da ikke nødvendigvis en permanent undergruppe av menigheten, men betegnelsen på dem som faktisk holder fast ved Kristus når troen blir satt på prøve.</p>
                    <h4>Hvor skiller Nee seg tydeligere ut?</h4>
                    <p>Det interessante er at Nee går lenger enn bare å si at noen kristne er mer trofaste enn andre. Hos Nee blir overvinnerne knyttet til en <strong>bestemt rolle i Guds frelseshusholdning</strong>. De representerer bruden på et bestemt stadium, mens hele menigheten først når sin endelige tilstand i Det nye Jerusalem. I hans forståelse blir derfor forholdet mellom <strong>overvinnerne, bruden, menigheten og Det nye Jerusalem</strong> en del av en større utvikling fra menighetens nåværende tilstand til dens endelige herlighet.</p>
                    <p>Det er derfor et sentralt spørsmål:</p>
                    <p>
                      <strong>Sier Åpenbaringen faktisk at «overvinnerne» er en særskilt gruppe innenfor de frelste som representerer bruden før hele menigheten blir bruden?</strong>
                    </p>
                    <p>Dette er et langt mer spesifikt utsagn enn:</p>
                    <p>
                      <strong>«Kristne skal være trofaste og overvinne.»</strong>
                    </p>
                    <p>Det er nettopp her en senere bibelsk-teologisk analyse blir viktig. Vi må undersøke tekstene vers for vers og spørre hva som faktisk står, hva Nee utleder av tekstene, og hvor tolkningen går utover det teksten uttrykkelig sier. Særlig relevante tekster er <strong>Åp 2–3, 12:11, 19:7–9, 20:4–6 og 21:7–9</strong>.</p>
                    <h4>Et viktig tolkningsspørsmål i Åp 21:7</h4>
                    <p><strong>Åp 21:7</strong> sier ikke uttrykkelig «overvinnerne fra Åp 2–3». Teksten bruker uttrykket <em>«den som seirer»</em>. Samtidig er det en tydelig språklig forbindelse til brevene til de syv menighetene, hvor det samme uttrykket gjentas. Spørsmålet er derfor ikke om forbindelsen finnes, men <strong>hva denne forbindelsen betyr</strong>.</p>
                    <p>Betegner «den som seirer» en særskilt gruppe innenfor de frelste? Betegner det alle sanne troende? Eller beskriver det den troendes troskap og utholdenhet uten at det etableres en egen gruppe? Dette er et reelt tolkningsspørsmål som bør undersøkes nærmere.</p>
                    <h4>Sammenligning av hovedsynene</h4>
                    <div className="my-4 overflow-x-auto rounded-radius-sm border border-border">
                      <table className="w-full min-w-[560px] border-collapse text-left text-[.88rem] leading-[1.55]">
                        <thead>
                          <tr className="bg-parchment">
                            <th scope="col" className="border-b border-border p-[9px_13px] font-sans text-[.68rem] font-bold tracking-[.4px] text-gold-dark uppercase">Spørsmål</th>
                            <th scope="col" className="border-b border-border p-[9px_13px] font-sans text-[.68rem] font-bold tracking-[.4px] text-gold-dark uppercase">Nee</th>
                            <th scope="col" className="border-b border-border p-[9px_13px] font-sans text-[.68rem] font-bold tracking-[.4px] text-gold-dark uppercase">Alternative tolkninger</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border last:border-b-0 align-top">
                            <th scope="row" className="p-[9px_13px] text-left align-top font-semibold text-ink">Hvem er overvinnerne?</th>
                            <td className="p-[9px_13px] align-top">En særskilt gruppe troende</td>
                            <td className="p-[9px_13px] align-top">Alle troende, eller troende som holder fast ved Kristus</td>
                          </tr>
                          <tr className="border-b border-border last:border-b-0 align-top">
                            <th scope="row" className="p-[9px_13px] text-left align-top font-semibold text-ink">Er alle kristne overvinnerne?</th>
                            <td className="p-[9px_13px] align-top">Ikke nødvendigvis</td>
                            <td className="p-[9px_13px] align-top">Noen fortolkninger mener ja</td>
                          </tr>
                          <tr className="border-b border-border last:border-b-0 align-top">
                            <th scope="row" className="p-[9px_13px] text-left align-top font-semibold text-ink">Er overvinnelse nødvendig for frelse?</th>
                            <td className="p-[9px_13px] align-top">Nei, men overvinnelse har betydning for riket og bruderollen</td>
                            <td className="p-[9px_13px] align-top">Varierer etter tolkning</td>
                          </tr>
                          <tr className="border-b border-border last:border-b-0 align-top">
                            <th scope="row" className="p-[9px_13px] text-left align-top font-semibold text-ink">Er overvinnerne en egen gruppe?</th>
                            <td className="p-[9px_13px] align-top">Ja, i hans forståelse på bestemte stadier</td>
                            <td className="p-[9px_13px] align-top">Ikke nødvendigvis</td>
                          </tr>
                          <tr className="border-b border-border last:border-b-0 align-top">
                            <th scope="row" className="p-[9px_13px] text-left align-top font-semibold text-ink">Hva betyr Åp 21:7?</th>
                            <td className="p-[9px_13px] align-top">Hele menigheten har nådd den endelige overvinnelsen</td>
                            <td className="p-[9px_13px] align-top">Kan forstås som en generell beskrivelse av den troende</td>
                          </tr>
                          <tr className="border-b border-border last:border-b-0 align-top">
                            <th scope="row" className="p-[9px_13px] text-left align-top font-semibold text-ink">Er bruden en særskilt gruppe?</th>
                            <td className="p-[9px_13px] align-top">Ja, i en bestemt fase før hele menigheten når sin endelige tilstand</td>
                            <td className="p-[9px_13px] align-top">Dette er omstridt</td>
                          </tr>
                          <tr className="border-b border-border last:border-b-0 align-top">
                            <th scope="row" className="p-[9px_13px] text-left align-top font-semibold text-ink">Er Det nye Jerusalem identisk med bruden?</th>
                            <td className="p-[9px_13px] align-top">Ja</td>
                            <td className="p-[9px_13px] align-top">Mange er enige i identifikasjonen, men ikke nødvendigvis i Nee&#39;s forståelse av hvem som utgjør bruden og når</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h4>Videre bibelsk-teologisk analyse</h4>
                    <p>Dette punktet bør senere undersøkes grundig i en egen <strong>«Hva sier Nee – hva sier teksten faktisk – hva er omstridt?»</strong>-analyse. Da bør vi ikke bare spørre om Nee har en sammenhengende teologisk modell, men undersøke hvert ledd i argumentasjonen: <strong>Hva sier Åp 2–3 om overvinnerne? Hva betyr «å overvinne» i Johannes&#39; skrifter? Hvem er det som får løftene? Hvordan skal Åp 19 forstås? Hvem er bruden? Hvem er med i det første oppstandelseslivet i Åp 20? Og hvem er «den som seirer» i Åp 21:7?</strong></p>
                    <p>Først når disse tekstene er undersøkt i sin sammenheng, kan vi vurdere hvor godt Nee&#39;s forståelse faktisk følger av teksten, og hvor mye som skyldes en bestemt teologisk tolkning.</p>
                    <p>
                      <strong>Dette er særlig viktig fordi spørsmålet om overvinnerne får konsekvenser for forståelsen av tusenårsriket, menigheten, Israel, bruden og Det nye Jerusalem.</strong>
                    </p>
                  </SubBody>
                </SubAccordion>

                <SubAccordion title="Kommentar 11 – Er Det nye Jerusalem identisk med bruden?">
                  <SubBody>
                    <p><strong>THEOLOGIA-kommentar.</strong> Dette er en teologisk analyse fra THEOLOGIA, utarbeidet ved hjelp av kunstig intelligens. Den er ikke Watchman Nees egen tekst, men undersøker hvordan forbindelsen mellom Det nye Jerusalem og bruden kan forstås.</p>
                    <p>Åpenbaringen fremstiller Det nye Jerusalem som bruden, Lammets hustru. Men det er viktig å formulere dette presist, fordi spørsmålet om <em>hva denne identifikasjonen betyr</em> er mer omstridt enn selve forbindelsen.</p>
                    <h4>Hva sier teksten?</h4>
                    <p>I <strong>Åp 21:2</strong> ser Johannes <em>den hellige byen, Det nye Jerusalem</em>, komme ned fra Gud, og byen beskrives som gjort i stand <em>som en brud</em> for sin mann. Den mest direkte forbindelsen finner vi i <strong>Åp 21:9–10</strong>. Engelen sier: <em>«Kom, jeg vil vise deg bruden, Lammets hustru.»</em> Deretter viser engelen Johannes <strong>«den hellige byen Jerusalem»</strong> som kommer ned fra himmelen.</p>
                    <p>Det er derfor svært vanskelig å lese <strong>Åp 21:9–10</strong> som om bruden og Det nye Jerusalem skulle være to helt forskjellige ting. Fortellingen presenterer byen som det engelen lovet å vise Johannes: <strong>bruden, Lammets hustru</strong>.</p>
                    <h4>Men betyr det at byen bokstavelig talt er en person?</h4>
                    <p>Nei. Her kommer det symbolske språket i Åpenbaringen inn. Johannes ser en <strong>by</strong>, men byen får samtidig identiteten <strong>brud</strong>. Åpenbaringen bruker altså to bilder på den samme eskatologiske virkeligheten: byen og bruden. Det avgjørende spørsmålet blir derfor: <strong>Hva representerer byen?</strong> Her finnes det forskjellige svar.</p>
                    <h4>Tre hovedmuligheter</h4>
                    <p><strong>1. Det nye Jerusalem er den herliggjorte Guds menighet.</strong> I denne forståelsen er byen et bilde på Guds fullendte folk, og derfor kan den kalles Kristi brud. Dette er en vanlig kristen forståelse av teksten.</p>
                    <p><strong>2. Det nye Jerusalem er den fullendte byen og samtidig et bilde på Guds folk.</strong> Her trenger man ikke redusere byen til «bare» et symbol på menigheten. Byen er virkelig beskrevet som en by, men den har samtidig symbolsk betydning som Guds fullendte bolig og hans folk.</p>
                    <p><strong>3. Nee&#39;s mer spesifikke forståelse.</strong> Nee går videre og knytter bruden til <strong>overvinnerne på et tidligere stadium</strong>, mens hele menigheten først når sin endelige brudetilstand i Det nye Jerusalem. Da blir spørsmålet ikke om Det nye Jerusalem kalles bruden – det gjør teksten – men <strong>hvordan dette skal forenes med Nee&#39;s skille mellom overvinnerne og hele menigheten</strong>. Og akkurat her ligger den interessante diskusjonen.</p>
                    <h4>Et viktig skille for analysen av Nee</h4>
                    <p>Vi bør derfor ikke først og fremst stille spørsmålet: <strong>«Er Det nye Jerusalem bruden?»</strong> For <strong>Åp 21:9–10</strong> gir et meget sterkt grunnlag for å svare ja. Det riktigere spørsmålet er: <strong>«Hvem består bruden av, og hvordan skal identifikasjonen av bruden med Det nye Jerusalem forstås?»</strong> Det er her vi må undersøke <strong>Åp 19:7–9, Åp 20:4–6 og Åp 21:2, 9–10</strong> og sammenligne dette med Nee&#39;s argument.</p>
                    <p>Dette kan innebære at vi må skille mellom tre forskjellige spørsmål: <strong>Bruden = Det nye Jerusalem?</strong> Teksten sier dette svært tydelig. <strong>Bruden = menigheten?</strong> Dette må argumenteres ut fra flere tekster og ikke bare tas for gitt. <strong>Bruden = bare overvinnerne før tusenårsriket, mens hele menigheten blir bruden senere?</strong> Dette er den langt mer spesifikke Nee-tolkningen og må undersøkes særskilt.</p>
                    <h4>Hvor ligger den egentlige uenigheten?</h4>
                    <p>Den viktigste uenigheten handler derfor ikke nødvendigvis om <strong>identifikasjonen mellom byen og bruden</strong>, men om <strong>hvem bruden representerer og når denne identiteten gjelder</strong>. Dette er viktig for forståelsen av forholdet mellom:</p>
                    <ul>
                      <li>overvinnerne</li>
                      <li>menigheten</li>
                      <li>bruden</li>
                      <li>Israel</li>
                      <li>tusenårsriket</li>
                      <li>Det nye Jerusalem</li>
                    </ul>
                    <p>Derfor bør dette senere behandles i en egen <strong>«Hva sier Nee – hva sier teksten faktisk – hva er omstridt?»</strong>-analyse. I den analysen bør vi undersøke teksten trinn for trinn og ikke på forhånd anta at Nee&#39;s modell eller en alternativ modell er riktig.</p>
                  </SubBody>
                </SubAccordion>
              </AccordionSection>

              <AccordionSection iconText="?" title="Studiespørsmål" description="Velg sideområde · refleksjon og gruppesamtale" count={10}>
                <SubAccordion title="Side 102–103 · Den hellige stad, Det nye Jerusalem">

                <h3>1. Det nye Jerusalem og begynnelsen i 1. Mosebok</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>
                    Hvilke likheter finner teksten mellom <strong>1. Mosebok 1–3</strong> og{" "}
                    <strong>Åpenbaringen 21–22</strong>?
                  </li>
                  <li>Hva finner vi både i Eden og i Det nye Jerusalem når det gjelder livets tre og elven?</li>
                  <li>Hvilke likheter nevnes når det gjelder gull, perle og kostelige steiner?</li>
                  <li>
                    Hva er forskjellen mellom menneskets tilstand etter fallet i <strong>1. Mosebok 3</strong> og
                    tilstanden i Det nye Jerusalem?
                  </li>
                </ol>

                <h3>2. Lammets hustru</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvem er Lammets hustru ifølge teksten?</li>
                  <li>
                    Hvorfor sier teksten at <strong>Det nye Jerusalem</strong> er Lammets hustru?
                  </li>
                  <li>Hva betyr det at Guds evige hensikt blir oppfylt i denne kvinnen?</li>
                  <li>Hva forteller bildet av Lammets hustru oss om Guds mål med sitt folk?</li>
                </ol>

                <h3>3. De fire kvinnene</h3>
                <p>Teksten presenterer fire kvinner:</p>
                <ol className="m-0 mb-4 flex list-decimal flex-col gap-1.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>
                    <strong>Eva</strong> – 1. Mosebok 2
                  </li>
                  <li>
                    <strong>Hustruen/menigheten</strong> – Efeserne 5
                  </li>
                  <li>
                    <strong>Kvinnen i visjonen</strong> – Åpenbaringen 12
                  </li>
                  <li>
                    <strong>Lammets hustru</strong> – Åpenbaringen 21
                  </li>
                </ol>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvordan beskriver teksten forholdet mellom disse fire kvinnene?</li>
                  <li>
                    Hvorfor sier den at de egentlig er <strong>én kvinne</strong>?
                  </li>
                  <li>
                    Hva menes med at historien hennes kan deles inn i <strong>fire stadier</strong>?
                  </li>
                  <li>Hvilket stadium representerer hver av de fire kvinnene?</li>
                </ol>

                <h3>4. Fra evighet til evighet</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>
                    Hvilket stadium beskrives som den <strong>evige fortid</strong>?
                  </li>
                  <li>Hvilke to stadier finner sted mellom de to evighetene?</li>
                  <li>
                    Hvilket stadium beskrives som den <strong>evige fremtid</strong>?
                  </li>
                  <li>Hva viser disse fire stadiene om Guds gjerning fra evighet til evighet?</li>
                </ol>

                <h3>5. Menigheten og Kristus</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>
                    Hvorfor knytter teksten <strong>Efeserne 5</strong> sammen med Lammets hustru i Åpenbaringen 21?
                  </li>
                  <li>Hva betyr det at menigheten blir «gjort i stand av Gud for Kristus»?</li>
                  <li>Hvordan fremstilles forholdet mellom Kristus og menigheten i dette bildet?</li>
                </ol>

                <h3>6. Kvinnen i Åpenbaringen 12</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva skjer med kvinnen når hun blir forfulgt av den store dragen?</li>
                  <li>Hvilken rolle har overvinnerne ifølge teksten?</li>
                  <li>Hvordan skal kvinnen i Åpenbaringen 12 «introdusere» kvinnen i Åpenbaringen 21?</li>
                  <li>
                    Hva sier dette om sammenhengen mellom menighetens historie og dens endelige herliggjørelse?
                  </li>
                </ol>

                <h3>7. Guds hensikt</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva er ifølge teksten Guds hensikt med kvinnen?</li>
                  <li>
                    Hva menes med at hun skal være en <strong>«rådende kvinne»</strong>?
                  </li>
                  <li>Hvilken rolle har Satans endelige nederlag i denne hensikten?</li>
                  <li>Hva betyr det at Gud til slutt vil ha en hustru for Lammet?</li>
                </ol>

                <h3>8. Helheten</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>
                    Hvorfor er det viktig å se de fire kvinnene som én helhet i stedet for bare å studere dem hver for
                    seg?
                  </li>
                  <li>
                    Hvordan beveger teksten seg fra{" "}
                    <strong>Eva → menigheten → kvinnen i Åpenbaringen 12 → Lammets hustru</strong>?
                  </li>
                  <li>Hva viser denne utviklingen om Guds plan for mennesket og menigheten?</li>
                  <li>
                    Hva er hovedbudskapet i dette avsnittet om hvordan Guds hensikt til slutt blir fullbyrdet?
                  </li>
                </ol>

                <h3>Fordypningsspørsmål</h3>
                <ol
                  start={9}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>
                    Les <strong>1. Mosebok 2–3, Efeserne 5:25–32 og Åpenbaringen 21:1–10</strong>. Hvilke forbindelser
                    mellom disse tekstene finner du?
                  </li>
                  <li>
                    Teksten sier at de fire kvinnene «tilsynelatende er forskjellige når vi taler om dem atskilt», men
                    at de er «den samme kvinnen når vi ser på dem som en helhet». Hvordan forstår du dette utsagnet?
                  </li>
                  <li>
                    Hva kan vi lære av kontrasten mellom begynnelsen i <strong>Eden</strong> og avslutningen i{" "}
                    <strong>Det nye Jerusalem</strong> om Guds evne til å fullføre sin hensikt til tross for menneskets
                    fall?
                  </li>
                  <li>
                    Hvis Åpenbaringen 21 viser kvinnen i hennes endelige tilstand, hva sier det om målet Gud har for
                    menigheten?
                  </li>
                </ol>

                <h3>Hovedspørsmål til samtale</h3>
                <ol
                  start={13}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>
                    Når du ser hele utviklingen fra Eva til Lammets hustru:{" "}
                    <strong>Hva mener du er det viktigste bildet teksten gir av Guds evige hensikt?</strong>
                  </li>
                </ol>
                </SubAccordion>

                <SubAccordion title="Side 103–117 · Babylons fall">

                <h3>1. Babylon og den store skjøgen</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvilke to kvinner blir satt opp mot hverandre i Åpenbaringen 17 og 21?</li>
                  <li>Hvilke forskjeller finner teksten mellom den store skjøgen og bruden?</li>
                  <li>Hvorfor mener teksten at denne parallelle oppbygningen i Åpenbaringen hjelper oss til å forstå Guds hensikt?</li>
                </ol>

                <h3>2. Babels prinsipp</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva er forbindelsen mellom Babylon og Babels tårn?</li>
                  <li>Hva er forskjellen mellom <strong>stein</strong>, som er laget av Gud, og <strong>murstein</strong>, som er laget av mennesker?</li>
                  <li>Hva representerer mursteinen i tekstens forståelse av Babylon?</li>
                  <li>Hva menes med menneskets forsøk på å bygge noe «fra jorden» som skal nå «til himmelen»?</li>
                </ol>

                <h3>3. Menneskelig kraft og Guds verk</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvordan beskriver teksten faren ved å bruke menneskelige evner i åndelige ting?</li>
                  <li>Hvilke eksempler gir teksten på menneskelig dyktighet som kan bli «murstein»?</li>
                  <li>Hvorfor sier teksten at himmelske ting bare kan komme fra himmelen?</li>
                  <li>Hva lærer Babels tårn oss om menneskets begrensninger i åndelige spørsmål?</li>
                </ol>

                <h3>4. Den babylonske klesdrakten</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva skjedde med Akan da han så den babylonske klesdrakten?</li>
                  <li>Hva mener teksten at den vakre klesdrakten symboliserer?</li>
                  <li>Hvordan forbindes Akans synd med Ananias og Saffira?</li>
                  <li>Hva betyr det å bruke en «klesdrakt» som ikke samsvarer med vår virkelige åndelige tilstand?</li>
                </ol>

                <h3>5. Hykleri og falsk åndelighet</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva beskrives som Babylons prinsipp?</li>
                  <li>Hvorfor er ønsket om menneskers ære en fare for Guds barn?</li>
                  <li>Hvordan kan falsk åndelighet komme til uttrykk i bønn, tjeneste eller menighetsliv?</li>
                  <li>Hva betyr det å være en ekte person overfor Gud og mennesker?</li>
                  <li>Hvordan står dette i kontrast til brudens holdning?</li>
                </ol>

                <h3>6. «Jeg sitter som dronning»</h3>
                <p>Les <strong>Åpenbaringen 18:7</strong>.</p>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva uttrykker Babylons utsagn: «Jeg sitter som dronning, jeg er ingen enke»?</li>
                  <li>Hva sier teksten om forholdet mellom Babylon og trofastheten mot Herren Jesus?</li>
                  <li>Hvorfor beskrives dette som en fordervet kristenhet?</li>
                </ol>

                <h3>7. Luksus og menneskelige lyster</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvilket skille gjør teksten mellom å bruke materielle ting og å leve i luksus?</li>
                  <li>Hva mener teksten med å leve etter <strong>behovets prinsipp</strong>?</li>
                  <li>Hvordan skiller dette seg fra å leve etter sine lyster?</li>
                  <li>Hvordan kan vi undersøke våre egne holdninger til materielle ting i lys av dette?</li>
                </ol>

                <h3>8. En blandet kristenhet</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva betyr det å blande det som er av mennesket med Guds Ord?</li>
                  <li>Hva betyr det å blande det som er av kjødet med det som er av Ånden?</li>
                  <li>Hvorfor beskrives Babylon som en «blandet og fordervet kristenhet»?</li>
                  <li>Hvordan kan Guds folk skille mellom det som er fra Gud og det som bare ser åndelig ut?</li>
                </ol>

                <h3>9. «Kom ut fra henne»</h3>
                <p>Les <strong>Åpenbaringen 18:4</strong> og <strong>2. Korinterbrev 6:17–18</strong>.</p>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva befaler Gud sitt folk å gjøre i møte med Babylon?</li>
                  <li>Hva betyr det å komme ut fra noe som har Babylons karakter?</li>
                  <li>Hvilke tre ting nevnes som kan bli blandet med Guds gjerning: menneskets kraft, menneskets evner og menneskets meninger?</li>
                  <li>Hvorfor er det nødvendig å skille seg fra det som er urent?</li>
                </ol>

                <h3>10. Babylons dom</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva forteller Åpenbaringen 19:1–4 om Babylons endelige dom?</li>
                  <li>Hvorfor beskrives det som en grunn til å rope «Halleluja»?</li>
                  <li>Hva er forskjellen mellom den endelige dommen Gud skal utføre i fremtiden og den åndelige dommen Guds barn skal gjøre i dag?</li>
                  <li>Hvorfor mener teksten at Guds folk må lære å hate Babylons prinsipp?</li>
                </ol>

                <h3>11. Babylon i oss</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva betyr det at ethvert område av vårt liv som ikke er fullstendig for Gud, kan beskrives som «Babylon»?</li>
                  <li>Hvorfor trenger vi at Gud opplyser oss om slike områder?</li>
                  <li>Hva innebærer det å dømme oss selv i Guds lys?</li>
                  <li>Hvordan kan vi unngå å søke herlighet eller ære utenfor Kristus?</li>
                </ol>

                <h3>12. Lovprisningen i himmelen</h3>
                <p>Les <strong>Åpenbaringen 19:5–6</strong>.</p>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva kunngjøres fra tronen?</li>
                  <li>Hvordan beskrives responsen fra den store skaren?</li>
                  <li>Hvorfor er det ikke først og fremst vår egen belønning eller vår egen regjering som er grunnen til lovprisningen?</li>
                  <li>Hva betyr det at Herren vår Gud, Den Allmektige, hersker som konge?</li>
                </ol>

                <h3>13. Gud regjerer – Kristus regjerer</h3>
                <p>Les <strong>Åpenbaringen 11:15</strong> og <strong>19:6</strong>.</p>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvordan forklarer teksten forholdet mellom Guds rike og Kristi rike?</li>
                  <li>Hva betyr det at når Gud regjerer, så regjerer Kristus?</li>
                  <li>Hvorfor er Guds herredømme selve grunnen til glede og lovprisning?</li>
                </ol>

                <h3>14. Lammets bryllup</h3>
                <p>Les <strong>Åpenbaringen 19:7–9</strong>.</p>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvilke to grunner til lovprisning fremhever teksten?</li>
                  <li>Hva betyr det at «Lammets bryllup er kommet»?</li>
                  <li>Hva betyr det at «Hans hustru har gjort seg rede»?</li>
                  <li>Hvorfor uttrykker teksten tillit til at Gud til slutt vil oppnå det Han har bestemt?</li>
                </ol>

                <h3>15. Hustruen og bruden</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvilken forskjell gjør teksten mellom begivenhetene i Åpenbaringen 19 og Åpenbaringen 21?</li>
                  <li>Når sier teksten at Lammets hustru har gjort seg rede?</li>
                  <li>Når beskrives Det nye Jerusalem som bruden?</li>
                  <li>Hvilken betydning har de tusen årene mellom disse begivenhetene i tekstens fremstilling?</li>
                </ol>

                <h3>16. Overvinnerne</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvem er det som ifølge teksten er rede når kunngjøringen i Åpenbaringen 19 blir gitt?</li>
                  <li>Hvorfor kan overvinnernes beredskap omtales som at hele hustruen er rede?</li>
                  <li>Hva betyr det at overvinnerne kjemper mot Satan på vegne av hele Kristi kropp?</li>
                  <li>Hvordan påvirker dette ditt syn på personlig åndelig vekst?</li>
                </ol>

                <h3>17. Kroppen og de enkelte lemmene</h3>
                <p>Les <strong>1. Korinterbrev 12:26</strong>.</p>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvorfor er det enkelte lem mottar fra Gud ikke bare til dets eget beste?</li>
                  <li>Hvordan bruker teksten bildet av øret og munnen for å forklare dette?</li>
                  <li>Hvordan henger overvinnernes seier sammen med hele menigheten?</li>
                  <li>Hva betyr det praktisk at vi er medlemmer av én kropp?</li>
                </ol>

                <h3>18. De to klesplaggene</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvilke to klesplagg beskriver teksten for den kristne?</li>
                  <li>Hva representerer Herren Jesus som vårt klesplagg?</li>
                  <li>Hva representerer det fine linet i Åpenbaringen 19:8?</li>
                  <li>Hva er forskjellen mellom Guds rettferdighet som vi mottar gjennom Kristus og de helliges rettferdige gjerninger?</li>
                </ol>

                <h3>19. Det broderte klesplagget</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvorfor sammenlignes de helliges rettferdige gjerninger med brodering?</li>
                  <li>Hvordan beskriver teksten Den Hellige Ånds arbeid i den troende?</li>
                  <li>Hvorfor skjer denne «broderingen» dag for dag?</li>
                  <li>Hvilke eksempler gir teksten på rettferdige gjerninger som springer ut av kjærlighet til Herren?</li>
                </ol>

                <h3>20. Hvitt og skinnende</h3>
                <p>Les <strong>Åpenbaringen 7:9, 14 og 19:8</strong>.</p>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvorfor må de helliges klær vaskes og gjøres hvite i Lammets blod?</li>
                  <li>Hvorfor sier teksten at også våre gode gjerninger trenger renselse?</li>
                  <li>Hva er forskjellen mellom å være <strong>hvit</strong> og å være <strong>skinnende</strong>?</li>
                  <li>Hvorfor mener teksten at prøvelser og lidelser kan bidra til at en kristen blir «skinnende»?</li>
                  <li>Hvordan kan vanskeligheter forme en kristens karakter?</li>
                </ol>

                <h3>21. Fint lin og Den Hellige Ånds verk</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva representerer ull og hva representerer fint lin i tekstens forklaring?</li>
                  <li>Hvorfor knyttes ull til Kristi gjenløsende verk?</li>
                  <li>Hvorfor knyttes det fine linet til Den Hellige Ånds verk i mennesket?</li>
                  <li>Hvordan viser dette at de rettferdige gjerningene ikke er produsert av menneskets naturlige kraft?</li>
                </ol>

                <h3>22. Nåde og våre gjerninger</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva betyr uttrykket «det ble gitt henne» i Åpenbaringen 19:8 slik teksten forklarer det?</li>
                  <li>Hvordan kan noe være våre gjerninger og samtidig være gitt oss av Gud?</li>
                  <li>Hvorfor oppfordrer teksten oss til å be: «Herre, gi det til meg»?</li>
                  <li>Hvordan bør dette påvirke vår holdning til tjeneste, lydighet og gode gjerninger?</li>
                </ol>

                <h3>23. Byrder og åndelig vekst</h3>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvordan reagerer vi ofte når en byrde blir for tung?</li>
                  <li>Hvilken annen bønn foreslår teksten?</li>
                  <li>Hva kan forskjellen mellom «Herre, utfri meg» og «Herre, gjør det mulig for meg å bære byrden» lære oss om åndelig vekst?</li>
                </ol>

                <h3>24. Bryllupsmåltidet</h3>
                <p>Les <strong>Åpenbaringen 19:9</strong>.</p>
                <ol className="m-0 flex list-[lower-alpha] flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvem beskrives som salige?</li>
                  <li>Hva betyr det å være innbudt til Lammets bryllupsmåltid?</li>
                  <li>Hvilken forskjell gjør teksten mellom de innbudte til bryllupsmåltidet og Lammets brud?</li>
                  <li>Hvilken tidsperiode knytter teksten bryllupsmåltidet til?</li>
                  <li>Hva slags fellesskap med Herren beskrives for dem som er innbudt?</li>
                </ol>

                <h3>Fordypningsspørsmål</h3>
                <ol
                  start={25}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Les <strong>Åpenbaringen 17–19</strong> og sammenlign Babylon med Lammets hustru. Hvilke kontraster finner du når det gjelder deres natur, gjerninger, forhold til Gud, klær og endelige skjebne?</li>
                  <li>Hva er forskjellen mellom <strong>menneskelig anstrengelse</strong> og <strong>Den Hellige Ånds verk</strong> slik dette kapittelet fremstiller det?</li>
                  <li>Hvordan kan vi i praksis avsløre «Babylons prinsipp» i våre egne holdninger, handlinger og menighetsliv?</li>
                  <li>Hvordan henger <strong>Kristus som vårt klesplagg</strong>, <strong>de helliges rettferdige gjerninger</strong> og <strong>Den Hellige Ånds verk</strong> sammen?</li>
                  <li>Hva betyr det for deg personlig at det Gud gjør i én troende, ifølge teksten, også kan være til gagn for hele Kristi kropp?</li>
                </ol>

                <h3>Hovedspørsmål til samtale</h3>
                <ol
                  start={30}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva mener du er den viktigste forskjellen mellom <strong>Babylons prinsipp</strong> og <strong>brudens prinsipp</strong>, og hvordan bør denne forskjellen påvirke vårt kristne liv?</li>
                </ol>
                </SubAccordion>

                <SubAccordion title="Side 123–127 · Den hellige staden som stiger ned fra himmelen">
                <h3>1. Bruden, Lammets hustru og den hellige Stad</h3>
                <p>Les <strong>Åpenbaringen 21:9–10</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva sier engelen at han vil vise Johannes?</li>
                  <li>Hva var det Johannes faktisk fikk se da engelen viste ham Lammets hustru?</li>
                  <li>Hvorfor viser dette at <strong>Lammets hustru og Det nye Jerusalem</strong> er nært knyttet sammen?</li>
                  <li>Hva betyr det at den hellige Staden beskriver karaktertrekkene og den åndelige tilstanden til den korporative Kroppen?</li>
                </ol>

                <h3>2. Ødemarken og det høye fjellet</h3>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvor førte engelen Johannes da han skulle vise ham den store skjøgen i <strong>Åpenbaringen 17:1–3</strong>?</li>
                  <li>Hvor førte engelen Johannes da han skulle vise ham Lammets hustru i <strong>Åpenbaringen 21:9–10</strong>?</li>
                  <li>Hva er forskjellen mellom ødemarken og det store og høye fjellet i disse to synene?</li>
                  <li>Hva mener teksten at ødemarken viser om det som har sitt opphav i Babylon?</li>
                  <li>Hva mener teksten at det høye fjellet viser om Guds evige visjon?</li>
                </ol>

                <h3>3. Det åndelige fjellet</h3>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvorfor sier teksten at vi må opp på et «stort og høyt fjell» for å se Guds evige visjon?</li>
                  <li>Hva gjorde Moses på Pisga-fjellet, og hva kan dette lære oss om å motta visjon og åpenbaring?</li>
                  <li>Hva kan skje dersom Guds evige hensikt bare blir læresetninger og kunnskap for oss?</li>
                  <li>Hva mener teksten med «åndelig fjellklatring»?</li>
                  <li>Hvorfor innebærer det vanskeligheter og anstrengelse å bestige et fjell?</li>
                  <li>Hva betyr det praktisk å gå fra «bakkenivå» til åndelig høyde?</li>
                </ol>

                <h3>4. Kunnskap og åpenbaring</h3>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva er forskjellen mellom <strong>kunnskap</strong> og <strong>åpenbaring</strong> slik teksten fremstiller det?</li>
                  <li>Hvorfor sier teksten at kunnskap alene aldri kan produsere frukt?</li>
                  <li>Hvorfor er åpenbaring nødvendig for å være en overvinner?</li>
                  <li>Hva kan være faren ved å være tilfreds med bare å være frelst uten å ønske åndelig fremgang?</li>
                  <li>Hva mener teksten med at vi må ønske å se Guds hjertes ønske?</li>
                </ol>

                <h3>5. Overvinnerne og Guds hensikt</h3>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva sier teksten om det Gud har bestemt seg for å gjøre i den evige fortid?</li>
                  <li>Hva skal overvinnerne gjøre i forbindelse med riket?</li>
                  <li>Hva skal overvinnerne gjøre i forbindelse med den nye himmel og den nye jord?</li>
                  <li>Hvorfor er spørsmålet «hvem kommer til å være disse overvinnerne?» viktig i tekstens fremstilling?</li>
                  <li>Hvilken sammenheng ser teksten mellom åpenbaring, åndelig fremgang og det å være en overvinner?</li>
                </ol>

                <h3>6. Johannes&#39; reaksjon på synet</h3>
                <p>Les <strong>Åpenbaringen 19:10 og 22:8–9</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva gjorde Johannes etter at han hadde sett det himmelske synet?</li>
                  <li>Hvorfor var handlingen hans feil?</li>
                  <li>Hvorfor mener teksten likevel at Johannes&#39; handling viser noe positivt om hans hjerte?</li>
                  <li>Hva viser Johannes&#39; reaksjon om hvor høyt han verdsatte Guds plan og Guds arbeid?</li>
                  <li>Hva kan vi lære av Johannes&#39; helhjertede holdning når vi får se Guds visjon?</li>
                  <li>Hvordan bør en klarere forståelse av Guds evige hensikt påvirke vårt eget liv?</li>
                </ol>

                <h3>7. Lammets hustru kommer fra himmelen</h3>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva er betydningen av at Lammets hustru «stiger ned fra himmelen fra Gud»?</li>
                  <li>Hvorfor er Gud ikke bare opptatt av bestemmelsesstedet til det korporative mennesket, men også av dets <strong>kilde</strong>?</li>
                  <li>Hva betyr det at Det nye Jerusalem er «av himmelen, ikke av jorden»?</li>
                  <li>Hvordan skiller dette seg fra menneskets syndige fortid og behovet for frelse?</li>
                  <li>Hvilken del av menigheten ønsker teksten å vise når den beskriver det som kommer fra Gud?</li>
                </ol>

                <h3>8. Rebekka som bilde på menigheten</h3>
                <p>Les <strong>1. Mosebok 24:3–4</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvorfor ønsket Abraham at Isak skulle få en hustru fra sitt eget land og sin egen slekt?</li>
                  <li>Hvorfor brukes Rebekka som et bilde på menigheten som skal gis til Kristus?</li>
                  <li>Hva mener teksten med at menigheten skal være et korporativt menneske «fra Kristi ætt»?</li>
                  <li>Hvordan knytter teksten Rebekka sammen med tanken om at Lammets hustru kommer fra himmelen?</li>
                </ol>

                <h3>9. Født av Gud</h3>
                <p>Les <strong>Hebreerbrevet 2:11</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva betyr det at «Han som helliggjør og de som blir helliggjort, er alle av Én»?</li>
                  <li>Hvordan forklarer teksten uttrykket «brødre»?</li>
                  <li>Hvilke to aspekter ved den kristnes fortid fremheves?</li>
                  <li>Hva betyr det at vi på den ene siden er <strong>kjøpt av Herrens blod</strong>, og på den andre siden <strong>født av Gud</strong>?</li>
                  <li>Hvorfor er det viktig å skille mellom vår syndige fortid og det som er født av Gud?</li>
                </ol>

                <h3>10. Det som er av Gud</h3>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva mener teksten med at det finnes en del i oss som er «fra Gud» og fullt og helt «av Gud»?</li>
                  <li>Hva betyr det at Det nye Jerusalem kommer ned fra Gud?</li>
                  <li>Hvorfor understreker teksten at det finnes noe i menigheten som ikke har sitt opphav i jorden?</li>
                  <li>Hva betyr utsagnet: «Ingenting av det som ikke er av himmelen kan vende tilbake til himmelen»?</li>
                  <li>Hva sier dette om nødvendigheten av å legge bort det som ikke er av Kristus?</li>
                </ol>

                <h3>11. Den store byen og den hellige byen</h3>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva kalles byen i <strong>Åpenbaringen 17</strong>?</li>
                  <li>Hva kalles byen i <strong>Åpenbaringen 21</strong>?</li>
                  <li>Hva mener teksten er det karakteristiske ved Babylon?</li>
                  <li>Hva mener teksten er det karakteristiske ved Det nye Jerusalem?</li>
                  <li>Hvordan skiller <strong>storhet</strong> seg fra <strong>hellighet</strong> i tekstens fremstilling?</li>
                  <li>Hvordan kan disse to prinsippene komme til uttrykk blant kristne?</li>
                </ol>

                <h3>12. Hva betyr hellighet?</h3>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvorfor sier teksten at Gud alene er hellig?</li>
                  <li>Hvorfor må det som utgår fra Gud også være hellig?</li>
                  <li>Hvordan forklarer teksten at Kristus er hellig?</li>
                  <li>Hvordan kan de troende være hellige ifølge dette perspektivet?</li>
                  <li>Hva betyr utsagnet: <strong>«Kun det som utgår fra Gud er av verdi»</strong>?</li>
                  <li>Hva bør vi gjøre med det som har sitt opphav i mennesket og ikke i Gud?</li>
                </ol>

                <h3>Fordypningsspørsmål</h3>
                <ol
                  start={13}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Sammenlign <strong>Åpenbaringen 17:1–3</strong> med <strong>Åpenbaringen 21:9–10</strong>. Hva lærer kontrasten mellom ødemarken og det store og høye fjellet deg om Babylon og Det nye Jerusalem?</li>
                  <li>Hva mener teksten med at vi må «klatre opp på et høyt fjell» for å motta åpenbaring? Hvordan kan dette forstås i vårt åndelige liv?</li>
                  <li>Hvordan kan kunnskap om Guds plan bli værende som læresetninger uten at den fører til frukt? Hva mener teksten må til for at kunnskapen skal bli fruktbærende?</li>
                  <li>Hvordan henger <strong>åpenbaring → åndelig fremgang → overvinnerliv → Guds hensikt</strong> sammen i teksten?</li>
                  <li>Sammenlign Rebekka som Isaks brud med menigheten som Lammets hustru. Hvilke paralleller finner du?</li>
                  <li>Hva mener teksten med at menigheten har både en fortid der vi ble <strong>kjøpt av blodet</strong> og en fortid der vi <strong>ble født av Gud</strong>?</li>
                  <li>Hvordan kan vi i praksis skjelne mellom det som er <strong>av Gud</strong> og det som bare er <strong>av mennesket</strong>?</li>
                </ol>

                <h3>Hovedspørsmål til samtale</h3>
                <ol
                  start={20}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li><strong>Hva mener du er hovedbudskapet i dette avsnittet om hvor menigheten kommer fra, hva den er, og hva vi må se for å kunne forstå Guds evige hensikt?</strong></li>
                </ol>
                </SubAccordion>

                <SubAccordion title="Side 127–128 · Den hellige stadens lys">
                <h3>1. Guds herlighet og stadens lys</h3>
                <p>Les <strong>Åpenbaringen 21:11</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvordan beskriver Åpenbaringen den hellige Staden og dens lys?</li>
                  <li>Hva betyr det at staden «har Guds herlighet»?</li>
                  <li>Hvordan beskrives lyset i staden?</li>
                  <li>Hvorfor sammenlignes lyset med en kostbar jaspis-stein som funkler som krystall?</li>
                </ol>

                <h3>2. Jaspis og synet av Gud</h3>
                <p>Les <strong>Åpenbaringen 4:2–3</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvordan beskrives Han som sitter på tronen?</li>
                  <li>Hvilken forbindelse trekker teksten mellom <strong>jaspis</strong> og det å se Gud?</li>
                  <li>Hva betyr uttrykket «Gud synliggjort» slik teksten forklarer jaspis?</li>
                  <li>Hvorfor er dette noe vi ikke fullt ut kan oppleve mens vi fortsatt er her?</li>
                </ol>

                <h3>3. Å se og kjenne Gud</h3>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvordan beskriver teksten vår forståelse av Gud i dag?</li>
                  <li>Hva betyr det at det vi forstår i dag på mange måter er «veldig utydelig»?</li>
                  <li>Hva skal være annerledes når Det nye Jerusalem stiger ned til jorden?</li>
                  <li>Hva betyr det at vi da skal kunne <strong>se Gud Selv</strong>?</li>
                  <li>Hvorfor skal vi ikke lenger misforstå Gud eller måtte spørre Ham om årsaken til noe?</li>
                </ol>

                <h3>4. Lyset som er klart som krystall</h3>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva betyr det at lyset i Det nye Jerusalem er «klart som krystall»?</li>
                  <li>Hva betyr det at lyset ikke er «mikset med noe annet»?</li>
                  <li>Hva sier dette om hvor tydelig alt vil være i Det nye Jerusalem?</li>
                  <li>Hvordan vil vår forståelse av Gud være annerledes på den dagen?</li>
                </ol>

                <h3>Fordypningsspørsmål</h3>
                <ol
                  start={5}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Sammenlign beskrivelsen av Han som sitter på tronen i <strong>Åpenbaringen 4:2–3</strong> med beskrivelsen av Det nye Jerusalem i <strong>Åpenbaringen 21:11</strong>. Hva legger du merke til?</li>
                  <li>Hva mener teksten med at Guds herlighet gjør Gud synlig? Hvordan hjelper dette oss til å forstå betydningen av stadens lys?</li>
                  <li>Hva kan forskjellen mellom vår nåværende, utydelige forståelse og den fremtidige klarheten lære oss om Guds herlighet?</li>
                  <li>Hvorfor er det betydningsfullt at lyset er klart og ikke blandet med noe annet?</li>
                </ol>

                <h3>Hovedspørsmål til samtale</h3>
                <ol
                  start={9}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li><strong>Hva mener du er hovedbudskapet i dette avsnittet om Guds herlighet, stadens lys og det å se og kjenne Gud klart?</strong></li>
                </ol>
                </SubAccordion>

                <SubAccordion title="Side 128–130 · Den hellige stads innbyggere">
                <h3>1. Israels stammer og Lammets apostler</h3>
                <p>Les <strong>Åpenbaringen 21:12–14</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva står skrevet på de tolv portene i Det nye Jerusalem?</li>
                  <li>Hva står skrevet på de tolv grunnsteinene?</li>
                  <li>Hvilke to grupper av Guds folk representeres av Israels tolv stammer og Lammets tolv apostler?</li>
                  <li>Hva viser dette om hvem som er inkludert i det korporative mennesket?</li>
                  <li>Hvorfor er både Det gamle testamentets og Det nye testamentets hellige inkludert i Det nye Jerusalem?</li>
                </ol>

                <h3>2. Abraham, Isak og Jakob i Guds rike</h3>
                <p>Les <strong>Lukas 13:28–29</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvilke personer fra Det gamle testamentet nevnes som værende i Guds rike?</li>
                  <li>Hva representerer Abraham, Isak og Jakob i tekstens fremstilling?</li>
                  <li>Hvem er de som kommer fra øst, vest, nord og sør?</li>
                  <li>Hva viser dette om de gammeltestamentlige og nytestamentlige helliges del i Guds rike?</li>
                  <li>Hvordan knytter teksten dette til Det nye Jerusalem?</li>
                </ol>

                <h3>3. Abraham ventet på staden</h3>
                <p>Les <strong>Hebreerbrevet 11:9–10</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvordan bodde Abraham i landet som Gud hadde lovet ham?</li>
                  <li>Hva ventet Abraham på?</li>
                  <li>Hvem er bygningsmann og skaper av staden Abraham ventet på?</li>
                  <li>Hvilken stad mener teksten at dette er?</li>
                  <li>Hva kan Abrahams forventning lære oss om de gammeltestamentlige helliges håp?</li>
                </ol>

                <h3>4. De hellige i Det gamle testamentet</h3>
                <p>Les <strong>Hebreerbrevet 11:13 og 16</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvem er inkludert i uttrykket «alle disse» i Hebreerbrevet 11:13?</li>
                  <li>Hva betyr det at de «døde i tro»?</li>
                  <li>Hva lengtet de etter?</li>
                  <li>Hva betyr det at Gud «har gjort staden i stand for dem»?</li>
                  <li>Hva viser dette om de gammeltestamentlige helliges arvedel i Det nye Jerusalem?</li>
                </ol>

                <h3>5. De gammeltestamentlige hellige venter på oss</h3>
                <p>Les <strong>Hebreerbrevet 11:39–40</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva fikk de gammeltestamentlige hellige godt vitnesbyrd om?</li>
                  <li>Hvorfor fikk de ikke se oppfyllelsen av løftet?</li>
                  <li>Hva hadde Gud på forhånd utsett for «vår skyld»?</li>
                  <li>Hva betyr det at de ikke skulle bli «fullendt uten oss»?</li>
                  <li>Hva viser dette om forholdet mellom de gammeltestamentlige og nytestamentlige hellige?</li>
                </ol>

                <h3>6. Kristus gjør de to til ett</h3>
                <p>Les <strong>Efeserne 2:11–16</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvem var tidligere langt borte?</li>
                  <li>Hva har ført dem som var langt borte, nær?</li>
                  <li>Hva betyr det at Kristus «har gjort dem begge til ett»?</li>
                  <li>Hvilken skillevegg har Kristus brutt ned?</li>
                  <li>Hva betyr det at Kristus i Seg Selv skapte «ett nytt menneske av de to»?</li>
                  <li>Hvem er «de to» i tekstens fremstilling?</li>
                </ol>

                <h3>7. «Dere» og «vår»</h3>
                <p>Les <strong>Efeserne 2:11–14</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvem viser pronomenet «dere» til i versene 11–13?</li>
                  <li>Hvem omfatter «vår» i vers 14?</li>
                  <li>Hvorfor er denne overgangen viktig for forståelsen av teksten?</li>
                  <li>Hvordan viser dette at Kristus er fred mellom de jødiske og hedenske hellige?</li>
                  <li>Hvordan knytter dette seg til alle de gammeltestamentlige og nytestamentlige hellige?</li>
                </ol>

                <h3>8. Ett legeme og Guds husfolk</h3>
                <p>Les <strong>Efeserne 2:17–19</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvem forkynte Kristus evangeliet om fred til?</li>
                  <li>Hva betyr det at både de som var langt borte og de som var nær, har adgang til Faderen?</li>
                  <li>Hva er de troende ikke lenger?</li>
                  <li>Hva betyr det å være «medborgere med de hellige»?</li>
                  <li>Hva betyr det å høre til «Guds husfolk»?</li>
                </ol>

                <h3>9. Apostlenes og profetenes grunnvoll</h3>
                <p>Les <strong>Efeserne 2:20–22</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva er Guds husfolk bygd opp på?</li>
                  <li>Hvem er hovedhjørnestenen?</li>
                  <li>Hva skjer med hele bygningen i Kristus?</li>
                  <li>Hva vokser bygningen til?</li>
                  <li>Hva betyr det at de troende blir bygget sammen til en bolig for Gud i Ånden?</li>
                  <li>Hvordan viser dette at Guds bolig inkluderer både gammeltestamentlige og nytestamentlige hellige?</li>
                </ol>

                <h3>10. Det korporative mennesket</h3>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva mener teksten med uttrykket <strong>«det korporative mennesket»</strong>?</li>
                  <li>Hvilke grupper inkluderes i dette mennesket?</li>
                  <li>Hvorfor kan Abraham, Isak og Jakob regnes med blant innbyggerne i Det nye Jerusalem?</li>
                  <li>Hvorfor kan de nytestamentlige hellige også regnes med?</li>
                  <li>Hvordan viser Åpenbaringen 21:12–14 dette gjennom portene og grunnsteinene?</li>
                </ol>

                <h3>Fordypningsspørsmål</h3>
                <ol
                  start={11}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Sammenlign <strong>Åpenbaringen 21:12–14</strong>, <strong>Lukas 13:28–29</strong> og <strong>Hebreerbrevet 11:9–16</strong>. Hvordan beskriver disse tekstene de gammeltestamentlige helliges forhold til Guds rike og den kommende staden?</li>
                  <li>Hvordan viser <strong>Hebreerbrevet 11:39–40</strong> at Guds plan ikke bare gjelder de gammeltestamentlige hellige eller de nytestamentlige hellige hver for seg, men at de skal fullendes sammen?</li>
                  <li>Les <strong>Efeserne 2:11–22</strong>. Hvordan beskriver Paulus at Kristus bryter ned skillet mellom jødiske og hedenske hellige?</li>
                  <li>Hva mener teksten med at Kristus skapte «ett nytt menneske av de to»? Hvilke «to» er det snakk om?</li>
                  <li>Hvordan henger uttrykkene <strong>«ett nytt menneske»</strong>, <strong>«ett legeme»</strong>, <strong>«Guds husfolk»</strong> og <strong>«en bolig for Gud i Ånden»</strong> sammen?</li>
                  <li>Hvordan viser portene med Israels tolv stammers navn og grunnsteinene med Lammets tolv apostlers navn at Guds folk fra Det gamle og Det nye testamentet har en felles del i Det nye Jerusalem?</li>
                </ol>

                <h3>Hovedspørsmål til samtale</h3>
                <ol
                  start={17}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li><strong>Hva mener du er hovedbudskapet i dette avsnittet om hvem som skal være innbyggere i Det nye Jerusalem, og hva betyr det at Guds folk fra både Det gamle og Det nye testamentet blir gjort til ett i Kristus?</strong></li>
                </ol>
                </SubAccordion>

                <SubAccordion title="Side 130–134 · Staden, portene og muren">
                <h3>1. Den store og høye muren</h3>
                <p>Les <strong>Åpenbaringen 21:12, 15 og 17</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvordan beskrives muren rundt Det nye Jerusalem?</li>
                  <li>Hva er hensikten med en mur slik teksten fremstiller det?</li>
                  <li>Hvordan inkluderer og beskytter muren det som er innenfor?</li>
                  <li>Hvordan ekskluderer og avviser muren det som er utenfor?</li>
                  <li>Hva betyr det at Det nye Jerusalem har en klar grense mellom det som er innenfor og det som er utenfor?</li>
                </ol>

                <h3>2. Eden og Det nye Jerusalem</h3>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva skjedde med slangen i Edens hage?</li>
                  <li>Hva skulle Adam egentlig ha gjort i forhold til hagen?</li>
                  <li>Hva mener teksten med at Adam skulle ha vært «hagens mur»?</li>
                  <li>Hva er forskjellen mellom Edens hage og Det nye Jerusalem når det gjelder beskyttelsen mot slangen?</li>
                  <li>Hva viser muren i Det nye Jerusalem om Guds endelige hensikt?</li>
                </ol>

                <h3>3. Atskillese og det kristne livet</h3>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvorfor beskriver teksten atskillelse som et viktig prinsipp i en kristens livsførsel?</li>
                  <li>Hva må det finnes en grenselinje mellom ifølge teksten?</li>
                  <li>Hva betyr det å skille mellom det som er <strong>åndelig</strong> og det som er <strong>kjødelig</strong>?</li>
                  <li>Hva skal gjøres med det som er av Babylon?</li>
                  <li>Hva skal gjøres med det som er av Gud?</li>
                  <li>Hvordan kan prinsippet om atskillelse få praktisk betydning i vårt kristne liv?</li>
                </ol>

                <h3>4. Å bygge muren</h3>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvorfor sier teksten at det ikke er enkelt å bygge opp en bymur?</li>
                  <li>Hvorfor hater Satan en slik mur?</li>
                  <li>Hva gjorde Nehemja da Sanballat og Tobia forsøkte å stanse byggingen av Jerusalems mur?</li>
                  <li>Hva kan Nehemjas eksempel lære oss om å bygge opp og bevare åndelig atskillelse?</li>
                  <li>Hvilke åndelige våpen trenger vi ifølge teksten for å kunne stå imot den åndelige ondskapen?</li>
                </ol>

                <h3>5. De tolv grunnsteinene</h3>
                <p>Les <strong>Åpenbaringen 21:14</strong> og <strong>Efeserne 2:20</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva står skrevet på de tolv grunnsteinene?</li>
                  <li>Hva representerer Lammets tolv apostler i beskrivelsen av staden?</li>
                  <li>Hva betyr det at staden er bygget på apostlenes og profetenes grunnvoll?</li>
                  <li>Hva mener teksten med at apostlenes åpenbaring er Det nye Jerusalems grunnsteiner?</li>
                  <li>Hvorfor er Guds rikes prinsipper, slik de ble forkynt av apostlene, grunnleggende for staden?</li>
                </ol>

                <h3>6. De tolv portene og Israels stammer</h3>
                <p>Les <strong>Åpenbaringen 21:12</strong> og <strong>Johannes 4:22</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva er skrevet på de tolv portene?</li>
                  <li>Hvorfor mener teksten at Israels tolv stammer er skrevet på portene?</li>
                  <li>Hva betyr Jesu ord: «Frelsen kommer fra jødene»?</li>
                  <li>Hvilke ting som har med Gud å gjøre, sier teksten at vi har mottatt gjennom Israel?</li>
                  <li>Hvordan henger Israels rolle sammen med portene inn til Det nye Jerusalem?</li>
                </ol>

                <h3>7. Staden som sentrum</h3>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvor mange porter er det på hver side av staden?</li>
                  <li>Hvorfor er det porter mot øst, nord, sør og vest?</li>
                  <li>Hva kan plasseringen av portene fortelle om stadens betydning og plassering?</li>
                  <li>Hva mener teksten med at Det nye Jerusalem er «mesterverket i sentrum av Guds hjerte»?</li>
                </ol>

                <h3>8. Englene ved portene</h3>
                <p>Les <strong>Åpenbaringen 21:12</strong> og <strong>Hebreerbrevet 1:14</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvor mange engler vokter portene?</li>
                  <li>Hva er englenes oppgave ved portene?</li>
                  <li>Hvilken oppgave hadde kjerubene tidligere i forbindelse med veien til livets tre?</li>
                  <li>Hva betyr det at englene er «tjenende ånder»?</li>
                  <li>Hva sier teksten om englenes fremtidige forhold til menigheten?</li>
                </ol>

                <h3>9. Gullrøret og Guds standard</h3>
                <p>Les <strong>Åpenbaringen 21:15</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva brukte engelen til å måle staden, portene og muren?</li>
                  <li>Hva representerer gull i Bibelens bilder ifølge teksten?</li>
                  <li>Hva betyr det at staden blir målt med gull?</li>
                  <li>Hva betyr det at staden stemmer overens med Guds standard?</li>
                  <li>Hva bør ønsket om å bli målt etter Guds standard bety for vårt liv?</li>
                </ol>

                <h3>10. Staden som en kube</h3>
                <p>Les <strong>Åpenbaringen 21:16</strong> og <strong>1. Kongebok 6:20</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvordan beskrives formen på Det nye Jerusalem?</li>
                  <li>Hva er likt mellom lengden, bredden og høyden på staden?</li>
                  <li>Hvilket annet sted i Bibelen har samme mål i lengde, bredde og høyde?</li>
                  <li>Hva viser sammenligningen med Det Aller Helligste i templet?</li>
                  <li>Hvorfor mener teksten at Det nye Jerusalem i den nye himmel og den nye jord blir Det Aller Helligste for Gud?</li>
                </ol>

                <h3>11. Guds åpenbaring og templet</h3>
                <p>Les <strong>1. Krønikebok 28:19</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvordan ble templet bygget ifølge teksten?</li>
                  <li>Hva betyr det at alt i templet ble bygd etter guddommelig åpenbaring?</li>
                  <li>Hvordan henger dette sammen med Det nye Jerusalem?</li>
                  <li>Hvorfor beskriver teksten Det nye Jerusalem som Guds sanne tempel?</li>
                  <li>Hva betyr det at alt staden består av er «noe i Gud»?</li>
                </ol>

                <h3>12. Muren på 144 alen</h3>
                <p>Les <strong>Åpenbaringen 21:17</strong>.</p>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvor høy er muren rundt staden ifølge verset?</li>
                  <li>Hvilke to målestokker nevnes?</li>
                  <li>Hvorfor kan menneskemål og englemål ikke sies å være det samme i dag?</li>
                  <li>Når sier teksten at menneskemål skal være likt englemål?</li>
                  <li>Hva sier <strong>Lukas 20:36</strong> om menneskene i oppstandelsen?</li>
                </ol>

                <h3>13. Oppstandelse og det som er av Gud</h3>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva mener teksten med at alt i staden er i oppstandelse?</li>
                  <li>Hva betyr det at oppstandelse er «det som er av Gud»?</li>
                  <li>Hva skjer med det som bare stammer fra mennesket når det går gjennom døden?</li>
                  <li>Hva skjer med det som er av Gud, selv om det går gjennom døden?</li>
                  <li>Hva mener teksten med at det som ikke kan bindes eller holdes igjen av døden, kalles oppstandelse?</li>
                  <li>Hva betyr det at det som stammer fra oss, når det passerer gjennom korset, blir gjort til intet?</li>
                </ol>

                <h3>14. Tallet tolv</h3>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hvilket tall går igjen i beskrivelsen av Det nye Jerusalem?</li>
                  <li>Hvilke eksempler på tolvtall nevner teksten?</li>
                  <li>Hva er forholdet mellom tallet 144 og tallet tolv?</li>
                  <li>Hvorfor beskrives tolv som et særlig betydningsfullt tall i Bibelen?</li>
                  <li>Hvordan skiller den siste delen av Åpenbaringsboken seg fra den første delen når det gjelder bruken av tallet syv og tallet tolv?</li>
                </ol>

                <h3>15. Syv og tolv</h3>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva betyr tallet syv ifølge teksten?</li>
                  <li>Hva betyr tallet tolv?</li>
                  <li>Hvordan kan tallet tre knyttes til Gud?</li>
                  <li>Hvordan kan tallet fire knyttes til skapelsen?</li>
                  <li>Hva betyr <strong>tre pluss fire</strong> i tekstens symbolske fremstilling?</li>
                  <li>Hvorfor er denne formen for fullkommenhet ikke nødvendigvis varig?</li>
                </ol>

                <h3>16. Tre ganger fire</h3>
                <ol className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>Hva betyr <strong>tre ganger fire</strong> i tekstens fremstilling?</li>
                  <li>Hvorfor beskrives multiplikasjon som en mer fullkommen forbindelse enn addisjon?</li>
                  <li>Hva betyr det at Gud og mennesket i Det nye Jerusalem er forent på en måte som aldri kan skilles?</li>
                  <li>Hvordan skiller dette seg fra bildet av tre pluss fire?</li>
                  <li>Hva mener teksten med at Gud og mennesket i den nye himmel og den nye jord aldri lenger kan skilles?</li>
                </ol>

                <h3>Fordypningsspørsmål</h3>
                <ol
                  start={17}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Sammenlign <strong>Edens hage</strong> med <strong>Det nye Jerusalem</strong> når det gjelder slangen, beskyttelse og Guds hensikt. Hva viser forskjellen mellom begynnelsen og avslutningen?</li>
                  <li>Hvordan henger <strong>muren</strong>, <strong>atskillelsen</strong>, <strong>Guds standard</strong> og <strong>det som er av Gud</strong> sammen i dette avsnittet?</li>
                  <li>Les <strong>Efeserne 2:20–22</strong> og <strong>Åpenbaringen 21:12–17</strong>. Hvordan utfyller disse tekstene hverandre når det gjelder grunnvoll, oppbyggelse og Guds bolig?</li>
                  <li>Hva lærer kontrasten mellom <strong>Babylon</strong> og <strong>Det nye Jerusalem</strong> oss om forskjellen mellom det som har sitt opphav i mennesket og det som har sitt opphav i Gud?</li>
                  <li>Hvordan henger tallene <strong>3, 4, 7 og 12</strong> sammen i tekstens fremstilling av Guds og menneskets forening?</li>
                  <li>Hva mener teksten med at den endelige foreningen mellom Gud og mennesket ikke lenger kan gå tapt?</li>
                </ol>

                <h3>Hovedspørsmål til samtale</h3>
                <ol
                  start={23}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li><strong>Hva mener du er hovedbudskapet i dette avsnittet om muren, atskillelsen, Guds standard og den endelige foreningen mellom Gud og mennesket i Det nye Jerusalem?</strong></li>
                </ol>
                </SubAccordion>

                <SubAccordion title="Side 134–143 · Gull, kostelige steiner og perle">
                <h3>1. Muren av jaspis og Guds sanne lys</h3>
                <ol
                  start={1}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva sier Åpenbaringen 21:18 om hva muren i Det nye Jerusalem er bygget av?</li>
                  <li>Hva har vi tidligere sett om sammenhengen mellom jaspis og stadens lys?</li>
                  <li>Hva betyr det ifølge teksten at stadens herlighet viser Guds virkelige bilde?</li>
                  <li>Hvorfor er muren av jaspis et bilde på atskillelse?</li>
                  <li>Hva må et menneske være klar over for at det skal kunne finnes en virkelig atskillelse mellom det som er innenfor og utenfor?</li>
                </ol>

                <h3>2. Det rene gullet – det som er av Gud</h3>
                <ol
                  start={6}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva betyr gullet i Det nye Jerusalem ifølge teksten?</li>
                  <li>Hva er forskjellen mellom det Gud planter inn i mennesket og det som kommer fra mennesket selv?</li>
                  <li>Hva beskriver teksten som «gullet» Gud har gitt oss?</li>
                  <li>Hvorfor beskrives gullet i oss som blandet med andre ting?</li>
                  <li>Hva menes med at Guds største verk med Sine barn er å «redusere dem, ikke å legge noe til»?</li>
                  <li>Hvordan beskrives korsets verk i denne sammenhengen?</li>
                  <li>Hvorfor ønsker Gud å fjerne det som ikke er av Ham?</li>
                </ol>

                <h3>3. Fra blanding til rent gull</h3>
                <ol
                  start={13}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hvorfor kan selv vår godhet og brennende iver bli uren ifølge teksten?</li>
                  <li>Hva betyr utsagnet: «Alt som ikke er av Gud, er urenheter»?</li>
                  <li>Hva krever Gud når det gjelder gullet i Det nye Jerusalem?</li>
                  <li>Hva skal til for at det som Gud har plantet inn i oss, ikke lenger skal være blandet med urenheter?</li>
                  <li>Hva sier teksten om Guds endelige hensikt med dette arbeidet?</li>
                </ol>

                <h3>4. Kostelige steiner – Den Hellige Ånds verk</h3>
                <ol
                  start={18}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva er forskjellen mellom gull og kostelige steiner slik teksten forklarer det?</li>
                  <li>Hvorfor blir gull brukt som bilde på noe som er gitt direkte av Gud?</li>
                  <li>Hva representerer de kostelige steinene?</li>
                  <li>Hvordan beskrives Den Hellige Ånds arbeid med å forme kostelige steiner i mennesket?</li>
                  <li>Hvorfor forbindes prøvelser, erfaringer og lidelser med dannelsen av kostelige steiner?</li>
                </ol>

                <h3>5. Isak og Jakob som bilder</h3>
                <ol
                  start={23}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva symboliserer Isaks fødsel?</li>
                  <li>Hva symboliserer Jakobs erfaringer?</li>
                  <li>Hvorfor blir Jakobs mange prøvelser brukt som et bilde på dannelsen av kostelige steiner?</li>
                  <li>Hva er forskjellen mellom livet Gud gir oss og det livet Gud former i oss?</li>
                  <li>Hvordan virker Gud dag etter dag for å danne Kristi bilde i mennesket?</li>
                </ol>

                <h3>6. Ilden og forvandlingen</h3>
                <ol
                  start={28}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hvorfor bør en kristen ifølge teksten ikke bli overrasket når Gud stadig setter ham i «ilden»?</li>
                  <li>Hvordan kan vanskelige omstendigheter bli brukt av Den Hellige Ånd?</li>
                  <li>Hva betyr det at Gud ønsker å danne mer av Kristi liv inne i oss?</li>
                  <li>Hvorfor finnes det mange forskjellige kostelige steiner i Det nye Jerusalem?</li>
                  <li>Hva illustrerer de forskjellige typene kostelige steiner om Guds arbeid i forskjellige mennesker?</li>
                </ol>

                <h3>7. Åndens frukt som blir dannet</h3>
                <ol
                  start={33}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva fikk mennesket da Gud plantet Sitt liv inn i det?</li>
                  <li>Hva er forskjellen mellom å ha Guds natur og å bære Åndens frukt?</li>
                  <li>Hvilke eksempler på Åndens frukt nevnes i teksten?</li>
                  <li>Hvorfor må Den Hellige Ånd virke i oss over tid for at denne frukten skal komme frem?</li>
                  <li>Hvordan henger Åndens frukt sammen med bildet av kostelige steiner?</li>
                </ol>

                <h3>8. En særegen karakter</h3>
                <ol
                  start={38}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hvorfor sier teksten at alle kristne har fått Guds natur, men likevel kan bli forskjellige typer kostelige steiner?</li>
                  <li>Hvordan kan forskjellige prøvelser og erfaringer forme forskjellige egenskaper i en kristen?</li>
                  <li>Hva betyr det at det Den Hellige Ånd danner i oss gjennom omgivelsene består til evig tid?</li>
                  <li>Hvordan kan mange års vandring med Herren forme et menneskes karakter?</li>
                  <li>Hva er forskjellen mellom bare å ha mottatt Guds liv og å ha et liv som Den Hellige Ånd har formet?</li>
                </ol>

                <h3>9. Kunnskap og det som er brent inn i oss</h3>
                <ol
                  start={43}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hvorfor advarer teksten mot å legge for stor vekt på læresetninger og teologisk kunnskap alene?</li>
                  <li>Betyr dette at teksten mener at vi ikke bør lese Bibelen? Begrunn svaret ut fra teksten.</li>
                  <li>Hva er forskjellen mellom kunnskap fra bøker og det som Den Hellige Ånd har «brent inn» i oss?</li>
                  <li>Hvorfor sammenlignes det som ikke er brent inn i oss med noe som lett kan fjernes?</li>
                  <li>Hva mener teksten med at bare det som er brent inn i oss, har åndelig verdi?</li>
                  <li>Hvorfor er prøvelser nødvendige ifølge dette bildet?</li>
                </ol>

                <h3>10. Et liv som har gått gjennom ilden</h3>
                <ol
                  start={49}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hvordan beskrives en eldre kristen som har vandret lenge med Herren?</li>
                  <li>Hva kan mennesker merke hos en person som Den Hellige Ånd har fått virke dypt i?</li>
                  <li>Hvorfor sier teksten at det ikke først og fremst er ord som inspirerer mennesker, men det som har gått gjennom ilden?</li>
                  <li>Hva betyr det at Gud trenger mennesker som «manifesterer kvaliteten til kostbare steiner»?</li>
                  <li>Hvordan utfordrer dette tanken om at stor tjeneste eller mye kunnskap nødvendigvis betyr stor åndelig modenhet?</li>
                </ol>

                <h3>11. Perlen – liv som utgår fra døden</h3>
                <ol
                  start={54}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva beskriver Åpenbaringen 21:21 som materialet i de tolv portene?</li>
                  <li>Hvordan blir en perle dannet ifølge teksten?</li>
                  <li>Hvorfor blir perlen et bilde på «liv som utgår fra døden»?</li>
                  <li>Hvordan knyttes perlen til Kristi død?</li>
                  <li>Hva betyr det at menigheten er fremstilt som perlen i Matteus 13?</li>
                  <li>Hvorfor viser perlen hvor kostbart livet som helt og fullt utgår fra Kristus er?</li>
                  <li>Hva betyr det at Kristus var villig til å selge alt Han eide for å kjøpe denne perlen?</li>
                </ol>

                <h3>12. Portene av perle og livets opphav</h3>
                <ol
                  start={61}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hvorfor fungerer perlene som porter i Det nye Jerusalem?</li>
                  <li>Hva sier dette om opphavet til det livet som mennesket får fremfor Gud?</li>
                  <li>Hvorfor kan dette livet ikke ha sitt opphav i mennesket selv?</li>
                  <li>Hvordan knyttes dette til Kristi død?</li>
                </ol>

                <h3>13. Gull, kostelige steiner og perler – fra Eden til Det nye Jerusalem</h3>
                <ol
                  start={65}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hvilke materialer finner vi både i Edens hage og i Det nye Jerusalem?</li>
                  <li>Hva er forskjellen på materialene som nevnes i 1 Korinterbrev 3 og i 1 Mosebok 2 og Åpenbaringen 21?</li>
                  <li>Hvorfor mener teksten at gull, kostelige steiner og perler eksisterer «fra evighet til evighet»?</li>
                  <li>Hva representerer sølv i denne fremstillingen?</li>
                  <li>Hvorfor er gjenløsningen nødvendig i den nåværende situasjonen, selv om den ikke fremstilles som en del av Guds evige hensikt?</li>
                  <li>Hvordan skiller teksten mellom Guds hensikt og det Gud gjør som løsning på fallet?</li>
                </ol>

                <h3>14. Fallet, gjenløsningen og riket</h3>
                <ol
                  start={71}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hvorfor sier teksten at fallet ikke var en del av Guds hensikt?</li>
                  <li>Hvorfor beskrives gjenløsningen som en løsning på fallet?</li>
                  <li>Hvorfor beskrives også riket som et botemiddel i forhold til fallet?</li>
                  <li>Hvorfor må vi likevel aldri ta lett på gjenløsningen og riket?</li>
                  <li>Hva sier teksten om hvorfor Gud opprinnelig skapte mennesket?</li>
                  <li>Hva menes med at «denne linjen, som altså er en himmelsk linje, er rak»?</li>
                </ol>

                <h3>15. Gaten av rent gull og gjennomsiktig glass</h3>
                <ol
                  start={77}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva sier Åpenbaringen 21:21 om gaten i Det nye Jerusalem?</li>
                  <li>Hvorfor knyttes gaten til kommunikasjon og fellesskap?</li>
                  <li>Hva er forskjellen mellom å vandre på verdens gate i dag og å vandre på gaten i Det nye Jerusalem?</li>
                  <li>Hvorfor trenger kristne i dag å få «føttene vasket» selv om de allerede er rene?</li>
                  <li>Hva sier bildet av gaten av rent gull om vårt fremtidige fellesskap med Gud?</li>
                </ol>

                <h3>16. Å være gjennomsiktig for Gud</h3>
                <ol
                  start={82}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva betyr det at gaten er «som gjennomsiktig glass»?</li>
                  <li>Hva beskriver teksten som ugjennomsiktig i menneskers liv i dag?</li>
                  <li>Hvordan kan hykleri og skuespill gjøre et menneske «ugjennomsiktig»?</li>
                  <li>Hvorfor regnes etterligning og det å kopiere andre som en form for ugjennomsiktighet?</li>
                  <li>Hva betyr det å være et ekte og gjennomsiktig menneske fremfor Gud?</li>
                  <li>Hvordan knyttes det å bære korset til ekte åndelighet?</li>
                  <li>Hvorfor bør vi ikke forsøke å fremstille oss som mer gudelige enn vi egentlig er?</li>
                </ol>

                <h3>Fordypningsspørsmål</h3>
                <ol
                  start={89}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Teksten skiller mellom <strong>gullet Gud planter inn i oss</strong> og <strong>de kostelige steinene Den Hellige Ånd former i oss</strong>. Hvordan kan denne forskjellen hjelpe oss til å forstå forskjellen mellom å ha mottatt Guds liv og å bli formet i Kristi bilde?</li>
                  <li>Hva kan være faren ved å søke «mer» av Gud uten samtidig å være villig til at Gud fjerner det som ikke er av Ham?</li>
                  <li>Hvordan kan vi skjelne mellom bibelsk kunnskap som bare finnes i hodet, og sannheter som faktisk er blitt «brent inn» i livet?</li>
                  <li>Hvordan kan prøvelser, begrensninger og vanskelige omstendigheter bli brukt av Gud uten at vi dermed trenger å kalle selve lidelsen god?</li>
                  <li>Hva lærer bildet av de mange forskjellige kostelige steinene oss om at Gud former mennesker forskjellig?</li>
                  <li>Hvordan kan bildet av perlen som liv som utgår fra døden, hjelpe oss til å forstå menighetens opphav i Kristus?</li>
                  <li>Hva kan vi lære av kontrasten mellom sølv og gull, kostelige steiner og perler, når det gjelder forskjellen mellom Guds evige hensikt og det som kom inn på grunn av fallet?</li>
                </ol>

                <h3>Hovedspørsmål til samtale</h3>
                <ol
                  start={96}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li><strong>Hva mener teksten er det viktigste Gud ønsker å gjøre i oss: å legge mer til, eller å fjerne det som ikke er av Ham – og hvordan bør dette påvirke vårt kristne liv?</strong></li>
                </ol>
                </SubAccordion>

                <SubAccordion title="Side 143–146 · Templet og stadens lys">
                <h3>1. Gud og Lammet er stadens tempel</h3>
                <ol
                  start={1}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva sier Åpenbaringen 21:22 om templet i Det nye Jerusalem?</li>
                  <li>Hvordan var templet i Jerusalem et sted for fellesskap mellom Gud og mennesket i Det gamle testamentet?</li>
                  <li>Hva er forskjellen mellom fellesskapet med Gud gjennom templet i Det gamle testamentet og fellesskapet i Det nye Jerusalem?</li>
                  <li>Hva betyr det at Gud og Lammet selv er stadens tempel?</li>
                  <li>Hvordan beskrives forholdet mellom Gud og mennesket i Det nye Jerusalem som mer intimt og direkte?</li>
                  <li>Hva betyr det at mennesket ikke lenger trenger å gå til et bestemt sted for å ha fellesskap med Gud?</li>
                </ol>

                <h3>2. Forhenget og Det Aller Helligste</h3>
                <ol
                  start={7}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva var betydningen av forhenget i templet i Det gamle testamentet?</li>
                  <li>Hvem kunne gå forbi forhenget og inn i Guds nærvær, og hvor ofte kunne han gjøre det?</li>
                  <li>Hva har skjedd med forhenget i menigheten i dag?</li>
                  <li>Hva betyr det at vi nå kan komme inn i Guds nærvær for å tilbe Gud i ånd og sannhet?</li>
                  <li>Hvorfor sier teksten at vi ikke bør bli værende «på utsiden»?</li>
                  <li>Hva mener teksten med at det er uforstandig ikke å lære å leve i Det Aller Helligste i dag?</li>
                </ol>

                <h3>3. Stadens lys og Guds herlighet</h3>
                <ol
                  start={13}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva sier Åpenbaringen 21:23 om solen og månen i Det nye Jerusalem?</li>
                  <li>Hvorfor trenger staden ikke solen eller månen for å skinne i den?</li>
                  <li>Hvordan var forgården, Det Hellige og Det Aller Helligste opplyst i Det gamle testamentets tempel?</li>
                  <li>Hvorfor var det ikke noe vindu eller noen lampe i Det Aller Helligste?</li>
                  <li>Hva viser det om Det nye Jerusalem at Guds herlighet skal være dets lys?</li>
                  <li>Hva betyr det at hele staden vil være Det Aller Helligste?</li>
                  <li>Hvordan knytter teksten menigheten i fremtiden til Det Aller Helligste?</li>
                </ol>

                <h3>4. Lammet er stadens lampe</h3>
                <ol
                  start={20}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva betyr uttrykket «Lammet er dens lampe»?</li>
                  <li>Hvordan skiller teksten mellom Gud som lyset og Lammet som lampen?</li>
                  <li>Hva betyr det at Gud skal skinne gjennom Lammet som lampen?</li>
                  <li>Hvorfor kan mennesket ikke kjenne Gud direkte?</li>
                  <li>Hvorfor må mennesket kjenne Gud gjennom Lammet?</li>
                  <li>Hva betyr det at «kun gjennom Kristus kan mennesket kjenne Gud»?</li>
                  <li>Hvordan viser bildet av lampen behovet for Kristus dersom vi skal se Guds lys?</li>
                  <li>Hva betyr det at Gud fortsatt bor i et lys som ingen kan nærme seg, og at vi bare kan se Ham når vi er i Kristus?</li>
                </ol>

                <h3>5. Folkeslagene og kongene på den nye jorden</h3>
                <ol
                  start={28}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva sier Åpenbaringen 21:24 om folkeslagene og kongene på jorden?</li>
                  <li>Hvem beskriver teksten som bruden som skal fremstilles for Kristus?</li>
                  <li>Hvem er folkeslagene som skal leve på den nye jorden?</li>
                  <li>Hvilken forskjell beskrives mellom dem som lever i staden og dem som lever på den nye jorden?</li>
                  <li>Hvilken type kropp skal de som lever i staden ha?</li>
                  <li>Hvilken type kropp skal menneskene på den nye jorden fortsatt ha?</li>
                  <li>Hva er forskjellen mellom sønnene og kongene i staden og menneskene og folkeslagene på jorden?</li>
                  <li>Hvilken oppgave har kongene på jorden overfor folkeslagene?</li>
                </ol>

                <h3>6. Tabernaklet og stadens plassering</h3>
                <ol
                  start={36}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hvordan var tabernaklet plassert i israelittenes leir i Det gamle testamentet?</li>
                  <li>Hvordan var Israels tolv stammer fordelt rundt tabernaklet?</li>
                  <li>Hvordan sammenlignes Det nye Jerusalems plassering med Guds tabernakel?</li>
                  <li>Hvor mange porter har stadens mur i hver retning?</li>
                  <li>Hva er forbindelsen mellom de tolv portene og Israels tolv stammer?</li>
                  <li>Hvordan bruker teksten plasseringen av folkeslagene rundt Det nye Jerusalem som et bilde på plasseringen rundt tabernaklet?</li>
                </ol>

                <h3>7. Folkeslagene vandrer i stadens lys</h3>
                <ol
                  start={42}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva betyr det at folkeslagene skal «vandre» i stadens lys?</li>
                  <li>Hvorfor vil folkeslagene komme til Det nye Jerusalem?</li>
                  <li>Hvordan skal stadens lys ledsage folkeslagenes vandring?</li>
                  <li>Hva betyr «herligheten» som kongene skal føre inn i staden?</li>
                  <li>Hvordan forklares forbindelsen mellom «herlighet» og «rikdommen» i 1 Mosebok 31:1?</li>
                  <li>Hva skal kongene på den nye jorden bringe fra sine landområder inn i den hellige stad?</li>
                </ol>

                <h3>8. Portene som aldri stenges</h3>
                <ol
                  start={48}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva sier Åpenbaringen 21:25 om stadens porter?</li>
                  <li>Hva viser det at portene ikke skal være stengt om dagen?</li>
                  <li>Hva betyr uttrykket «Natt skal det ikke være der»?</li>
                  <li>Hvordan skiller dag og natt seg mellom den nye himmelen og den nye jorden og selve staden?</li>
                  <li>Hvorfor vil de som lever i staden ikke bli slitne?</li>
                  <li>Hva betyr det at de kan tjene Gud dag og natt?</li>
                </ol>

                <h3>9. Folkeslagenes herlighet og ære</h3>
                <ol
                  start={54}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva sier Åpenbaringen 21:26 om det som skal føres inn i staden?</li>
                  <li>Hvem er det som fører folkeslagenes herlighet og ære inn i staden?</li>
                  <li>Hva er forskjellen mellom kongenes egen herlighet og folkeslagenes herlighet og ære?</li>
                  <li>Hva forteller dette om forholdet mellom kongene på jorden og Det nye Jerusalem?</li>
                </ol>

                <h3>10. Ingenting urent skal komme inn</h3>
                <ol
                  start={58}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva sier Åpenbaringen 21:27 om hvem som ikke får komme inn i staden?</li>
                  <li>Hvilke ting beskrives som noe som gjør staden uren?</li>
                  <li>Hva mener teksten med at det som tilhører mennesket og kjødet ikke kan komme inn i staden?</li>
                  <li>Hva er det ifølge teksten som kan komme inn i staden?</li>
                  <li>Hvordan knyttes «styggedom» spesielt til avgudsdyrkelse?</li>
                  <li>Hvordan knyttes «løgn» til Satan?</li>
                  <li>Hvorfor kan de som står i forbindelse med avguder eller synd ikke komme inn i staden?</li>
                  <li>Hvem er det som kan komme inn i staden ifølge Åpenbaringen 21:27?</li>
                </ol>

                <h3>11. De to typene innbyggere</h3>
                <ol
                  start={66}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hvilke to typer innbyggere beskriver teksten i den nye himmel og den nye jord?</li>
                  <li>Hvem er de som er frelst ved blodet?</li>
                  <li>Hvor skal de som er frelst ved blodet leve?</li>
                  <li>Hva kjennetegner dem som blir flyttet over fra tusenårsriket?</li>
                  <li>Hvor skal disse menneskene leve?</li>
                  <li>Hva er forskjellen mellom deres adgang til Det nye Jerusalem og livet til dem som bor i staden?</li>
                  <li>Hva sier teksten om navnene til begge gruppene i forhold til Livets Bok?</li>
                </ol>

                <h3>Fordypningsspørsmål</h3>
                <ol
                  start={73}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva lærer forskjellen mellom templet i Det gamle testamentet og Gud og Lammet som tempel i Det nye Jerusalem om utviklingen i fellesskapet mellom Gud og mennesket?</li>
                  <li>Hvordan bør kunnskapen om at forhenget er revet i menigheten påvirke vår forståelse av adgangen til Guds nærvær?</li>
                  <li>Hva kan det bety i praksis å «leve i Det Aller Helligste» allerede i dag?</li>
                  <li>Hvordan hjelper bildet av Gud som lyset og Lammet som lampen oss til å forstå Kristi betydning for vårt forhold til Gud?</li>
                  <li>Hvordan henger templet, lyset og Det Aller Helligste sammen i teksten?</li>
                  <li>Hva lærer kontrasten mellom dem som bor i Det nye Jerusalem og folkeslagene på den nye jorden oss ifølge teksten?</li>
                  <li>Hvordan henger de tolv portene i Det nye Jerusalem sammen med Israels tolv stammer og tabernaklets plassering?</li>
                  <li>Hva kan vi lære av at stadens porter aldri skal være stengt om dagen, samtidig som natt ikke skal være der?</li>
                  <li>Hva betyr det for vårt nåværende liv at ingenting urent, avgudsdyrkelse eller løgn skal kunne komme inn i staden?</li>
                </ol>

                <h3>Hovedspørsmål til samtale</h3>
                <ol
                  start={82}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li><strong>Hva betyr det for vårt forhold til Gud at Han ikke bare skal være den vi går til for å ha fellesskap med Ham, men at Gud og Lammet selv skal være templet – og hvordan bør dette påvirke hvordan vi lever i Guds nærvær allerede i dag?</strong></li>
                </ol>
                </SubAccordion>

                <SubAccordion title="Side 146–149 · Elven med livets vann og livets tre">
                <h3>1. Det nye Jerusalem som Guds Paradis</h3>
                <ol
                  start={1}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva viser Åpenbaringen 22:1–2 om det som Gud ønsker å vise oss på slutten?</li>
                  <li>Hva sier Åpenbaringen 22:1 om elven med livets vann?</li>
                  <li>Hvordan knyttes livets tre i Åpenbaringen 22 til livets tre i Åpenbaringen 2:7?</li>
                  <li>Hvorfor viser det at livets tre finnes i Det nye Jerusalem at staden er Guds Paradis?</li>
                  <li>Hvordan beskrives sammenhengen mellom Adam, Eva og Edens hage i 1 Mosebok?</li>
                  <li>Hvordan fremstilles Lammet, Lammets hustru og Det nye Jerusalem som oppfyllelsen av dette bildet?</li>
                  <li>Hva er forskjellen mellom de tre tingene i 1 Mosebok 2 og de to tingene i Åpenbaringen 21–22?</li>
                  <li>Hva betyr det at staden både er Lammets hustru og Guds Paradis?</li>
                  <li>Hva betyr det at «kvinnen og Paradiset er blitt ett»?</li>
                </ol>

                <h3>2. Fallet og den evige tryggheten</h3>
                <ol
                  start={10}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva skjedde med Adam og Eva da slangen kom inn i Edens hage?</li>
                  <li>Hvorfor kunne slangen og synden komme inn i Edens hage?</li>
                  <li>Hva er forskjellen mellom Edens hage og Det nye Jerusalem når det gjelder beskyttelse?</li>
                  <li>Hvorfor kan ikke Det nye Jerusalem igjen bli involvert i et fall ifølge teksten?</li>
                  <li>Hva betyr det at Gud selv skal bo i den hellige staden?</li>
                  <li>Hvorfor kan Lammets hustru ikke lenger drives ut av Paradiset?</li>
                  <li>Hva betyr det at kvinnen og Paradiset er så sammenføyd at ingenting kan skille dem?</li>
                </ol>

                <h3>3. Elven med livets vann</h3>
                <ol
                  start={17}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hvor kommer elven med livets vann fra ifølge Åpenbaringen 22:1?</li>
                  <li>Hvordan beskrives vannet i elven?</li>
                  <li>Hva er forskjellen mellom elvene som nevnes i 1 Mosebok og elven med livets vann i Det nye Jerusalem?</li>
                  <li>Hvilke to elver knyttes i teksten til Babylon og Ninive?</li>
                  <li>Hva representerer elven med livets vann for mennesket?</li>
                  <li>Hva sier Salme 46:5 om elven som bringer glede til Guds stad?</li>
                  <li>Hvorfor sies det at denne elven skaper glede spesielt for Gud?</li>
                  <li>Hva betyr det at elven strømmer ut fra Guds og Lammets trone?</li>
                  <li>Hvorfor står ordet «trone» i entall når både Gud og Lammet nevnes?</li>
                  <li>Hva betyr dette for forståelsen av forholdet mellom Gud og Kristus når Kristus regjerer?</li>
                </ol>

                <h3>4. Livets tre og de tolv fruktene</h3>
                <ol
                  start={27}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hvor vokser livets tre ifølge Åpenbaringen 22:2?</li>
                  <li>Hvor mange frukter bærer livets tre?</li>
                  <li>Hvor ofte gir treet sin frukt?</li>
                  <li>Hva betyr tallet tolv i denne sammenhengen ifølge teksten?</li>
                  <li>Hva betyr det at treet gir frukt hver måned?</li>
                  <li>Hvordan beskriver teksten den tilfredsstillelsen som livets tre gir?</li>
                  <li>Hvorfor vil det ikke være noen tilbakegang i evigheten?</li>
                  <li>Hvordan sammenlignes dette med den tilbakegangen som beskrives i 3 Mosebok 27?</li>
                  <li>Hva betyr det at det vil være «nytt liv og nye frukter hver måned»?</li>
                </ol>

                <h3>5. Behovet for frisk erfaring av livet</h3>
                <ol
                  start={36}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hvorfor bør vi søke en ny erfaring av liv hver måned allerede i dag?</li>
                  <li>Hvorfor kan ikke en erfaring vi hadde for tjue år siden nødvendigvis hjelpe oss i dag?</li>
                  <li>Hvorfor kan heller ikke en fem år gammel erfaring være frisk eller til nytte?</li>
                  <li>Hva betyr det at vi ikke kan leve av frukt fra livets tre fra tidligere måneder?</li>
                  <li>Hva innebærer det å kontinuerlig motta liv fra Herren?</li>
                  <li>Hvorfor trenger vi ikke bare frukt hver måned, men også forskjellige slags frukter?</li>
                  <li>Hva betyr det å lære å kjenne Herren i mange aspekter?</li>
                  <li>Hvorfor er det ikke nok å være tilfreds med bare en liten porsjon av Kristus?</li>
                </ol>

                <h3>6. Bladene til legedom for folkeslagene</h3>
                <ol
                  start={44}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva sier Åpenbaringen 22:2 om bladene på livets tre?</li>
                  <li>Hva representerer frukten, og hva representerer bladene ifølge teksten?</li>
                  <li>Hvorfor forbindes bladene med treets ytre klesplagg?</li>
                  <li>Hva skjedde med fikentreet som Herren Jesus forbannet?</li>
                  <li>Hva illustrerer fikentreet med blader, men uten frukt?</li>
                  <li>Hva er forskjellen mellom det indre livet og den ytre oppførselen?</li>
                  <li>Hvem er folkeslagene som skal få legedom gjennom bladene?</li>
                  <li>Hva betyr det at folkeslagene skal få Herren Jesu gjerninger som eksempel til etterfølgelse?</li>
                  <li>Hvordan skiller folkeslagenes del i livets tre seg fra vår del i frukten?</li>
                  <li>Hva skal ifølge teksten gjøre det mulig for folkeslagene å leve videre i velvære, fred og velsignelse?</li>
                </ol>

                <h3>7. Gaten, elven og livets tre</h3>
                <ol
                  start={54}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hvordan er gaten, elven med livets vann og livets tre sammenkoblet?</li>
                  <li>Hva betyr det at der vi finner gaten, finner vi også elven og livets tre?</li>
                  <li>Hva symboliserer gaten i denne fremstillingen?</li>
                  <li>Hva bør hele vår atferd ifølge teksten innbefatte når vi lærer å følge Herren?</li>
                  <li>Hvorfor må vår bevegelse være basert på livets tre og ikke kunnskapens tre om godt og ondt?</li>
                  <li>Hva skjer når det indre livet får fremkalle det vi gjør?</li>
                  <li>Hvordan beskrives forholdet mellom livets tre og utstrømningen av elven med livets vann i Ånden?</li>
                  <li>Hva betyr utsagnet: «Utstrømningen av liv er vår gate, vår vei»?</li>
                  <li>Hva skjer dersom Herrens liv ikke får bevege seg i oss?</li>
                  <li>Hvorfor kan vi ikke bevege oss åndelig dersom vi bare handler etter vår egen visdom?</li>
                </ol>

                <h3>8. Livets tre eller kunnskapens tre</h3>
                <ol
                  start={64}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva skjer ifølge teksten når vi bruker vår egen visdom til å bedømme om noe er godt eller dårlig?</li>
                  <li>Hvorfor sammenlignes dette med å plante kunnskapens tre om godt og ondt?</li>
                  <li>Hva er forskjellen mellom å handle ut fra egen vurdering og å handle etter livets strøm innvendig?</li>
                  <li>Hva blir resultatet når vi handler etter livets strøm?</li>
                  <li>Hvordan kan livets tre som er i oss, strømme ut til andre?</li>
                  <li>Hvordan henger livets tre, elven med livets vann og vår «gate» sammen?</li>
                  <li>Hva betyr det at hele Guds verk er basert på livets tre og resulterer i elven med livets vann?</li>
                </ol>

                <h3>Fordypningsspørsmål</h3>
                <ol
                  start={71}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hvordan viser sammenhengen mellom Eden og Det nye Jerusalem at Guds hensikt ikke bare er å gjenopprette det som gikk tapt, men å føre mennesket frem til en endelig og sikker tilstand?</li>
                  <li>Hva lærer kontrasten mellom Edens hage uten mur og Det nye Jerusalem med mur om Guds endelige beskyttelse?</li>
                  <li>Hva kan det bety i praksis å ikke leve av gamle erfaringer, men stadig søke frisk frukt fra livets tre?</li>
                  <li>Hvordan kan vi skjelne mellom en ytre kristen oppførsel og et liv som faktisk kommer innenfra?</li>
                  <li>Hvordan henger vår indre livskilde sammen med våre handlinger og vår vandring?</li>
                  <li>Hva er forskjellen mellom å avgjøre hva som er rett ut fra egen visdom og å handle ut fra «livets strøm»?</li>
                  <li>Hvordan kan livets tre og elven med livets vann bli et bilde på sammenhengen mellom Kristus, Den Hellige Ånd og vårt praktiske kristenliv?</li>
                </ol>

                <h3>Hovedspørsmål til samtale</h3>
                <ol
                  start={78}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li><strong>Hva betyr det for vårt kristenliv at livets tre, elven med livets vann og gaten er sammenkoblet – og hvordan kan vi lære å la Kristi liv innenfra bli grunnlaget for vår vandring og våre handlinger?</strong></li>
                </ol>
                </SubAccordion>

                <SubAccordion title="Side 149–152 · For evig og alltid">
                <h3>1. Ingen forbannelse og ingen død</h3>
                <ol
                  start={1}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva sier <strong>Åpenbaringen 22:3</strong> om forbannelsen?</li>
                  <li>Hvorfor kan alt som blir introdusert i <strong>1. Mosebok 3</strong> oppsummeres med ordet «forbannelse»?</li>
                  <li>Hvordan beskrives forholdet mellom døden og forbannelsen?</li>
                  <li>Hva betyr det at 1. Mosebok 3 «helt og fullt skal bli historie»?</li>
                  <li>Hva kjennetegner den nye himmel og den nye jord når det gjelder synd, forbannelse og død?</li>
                  <li>Hva innebærer det at mennesket da skal herliggjøre Gud på en ordentlig måte?</li>
                </ol>

                <h3>2. Guds og Lammets trone</h3>
                <ol
                  start={7}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva sier <strong>Åpenbaringen 22:3</strong> om Guds og Lammets trone?</li>
                  <li>Hvilken forskjell beskrives mellom Guds nærvær i <strong>1. Mosebok 3</strong> og Guds nærvær i Staden?</li>
                  <li>Hva betyr bildet av at hagen nå har blitt Staden, stedet hvor Gud sitter på tronen?</li>
                  <li>Hva sier teksten om hva Guds tjenere skal gjøre i evigheten?</li>
                  <li>Hvorfor bør vi ikke tenke at vi ikke kommer til å ha noe å gjøre i evigheten?</li>
                  <li>Hva innebærer det å være Guds tjener «for evig»?</li>
                </ol>

                <h3>3. Å se Hans ansikt og bære Hans navn</h3>
                <ol
                  start={13}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva sier <strong>Åpenbaringen 22:4</strong> om Guds tjenere?</li>
                  <li>Hva betyr det at de skal «se Hans ansikt»?</li>
                  <li>Hvorfor sier teksten at alt arbeid vi gjør for Herren må være ledet av fellesskap?</li>
                  <li>Hvorfor er det ikke tilstrekkelig bare å tjene Herren?</li>
                  <li>Hva er forskjellen mellom å gjøre Guds arbeid og å gjøre Guds arbeid gjennom fellesskap med Ham?</li>
                  <li>Hvorfor advarer teksten mot stolthet, selvtilfredshet og selvgodhet etter fullført arbeid?</li>
                  <li>Hva betyr det at tjenesten skal være et resultat av fellesskap med Gud?</li>
                  <li>Hva innebærer det at Guds tjenere skal kunne forbli i fellesskap med Ham også etter at arbeidet er fullført?</li>
                  <li>Hva betyr det at «Hans navn skal være på deres panne»?</li>
                  <li>Hvordan blir Guds folks vitnesbyrd synlig for dem som ser dem?</li>
                </ol>

                <h3>4. Ingen natt – intet menneskelig eller naturlig lys</h3>
                <ol
                  start={23}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva sier <strong>Åpenbaringen 22:5</strong> om natten i Staden?</li>
                  <li>Hva representerer lampen og solen i tekstens forklaring?</li>
                  <li>Hvorfor skal det ikke lenger være behov for menneskelagde eller naturlige fremgangsmåter?</li>
                  <li>Hva betyr det at «alt kommer til å være synlig»?</li>
                  <li>Hvordan beskriver teksten vår nåværende situasjon sammenlignet med den kommende evigheten?</li>
                  <li>Hva kan det bety at vi i dag kan være forvirret selv etter at vi har utført tjeneste?</li>
                  <li>Hvordan vil denne situasjonen være annerledes i Staden?</li>
                </ol>

                <h3>5. Mennesket skal herske i all evighet</h3>
                <ol
                  start={30}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva er den siste og viktigste delen av <strong>Åpenbaringen 22:5</strong> ifølge teksten?</li>
                  <li>Hva var Guds hensikt med mennesket allerede i skapelsen?</li>
                  <li>Hvorfor mener teksten at Guds hensikt med mennesket nå er oppnådd?</li>
                  <li>Hvorfor hevdes det at mennesket skal regjere i evigheten, og ikke bare i tusenårsriket?</li>
                  <li>Hva sier teksten om forholdet mellom menneskets herredømme og Satans endelige nederlag?</li>
                  <li>Hvordan knyttes Guds opprinnelige hensikt med mennesket sammen med <strong>1. Mosebok</strong>?</li>
                  <li>Hva betyr det at Gud ville at mennesket skulle være «som Ham Selv» og samtidig regjere?</li>
                  <li>Hvordan beskrives den herlige menigheten i lys av <strong>Efeserbrevet 5</strong>?</li>
                  <li>Hva er det menigheten skal gjøre i all evighet?</li>
                </ol>

                <h3>6. Guds plan kan forstyrres, men ikke stoppes</h3>
                <ol
                  start={39}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva mener teksten med at Guds plan kan forstyrres, men aldri stoppes?</li>
                  <li>Hvordan har Guds arbeid blitt forstyrret siden skapelsen?</li>
                  <li>Hvorfor kan det noen ganger se ut som om Guds arbeid er ødelagt og Hans plan ikke vil lykkes?</li>
                  <li>Hva viser Åpenbaringsboken om Guds evne til å nå sitt mål?</li>
                  <li>Hva symboliserer det rene gullet i beskrivelsen av menneskene i Staden?</li>
                  <li>Hva symboliserer perlen?</li>
                  <li>Hva symboliserer de kostelige steinene?</li>
                  <li>Hvordan viser disse tre bildene Guds verk i mennesket?</li>
                  <li>Hva er det endelige resultatet av Guds arbeid med sitt folk?</li>
                </ol>

                <h3>7. Visjonen om Guds hensikt</h3>
                <ol
                  start={48}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hvilke spørsmål stiller teksten om hva vi skal gjøre etter at vi har sett Guds hensikt?</li>
                  <li>Hvorfor sammenlignes vårt arbeid med Guds arbeid?</li>
                  <li>Hva kan vi føle når vi sammenligner vårt eget arbeid med det Gud gjør?</li>
                  <li>Hva ber teksten om at Gud skal gjøre med oss etter at vi har sett denne visjonen?</li>
                  <li>Hvorfor vil et menneske ikke lenger være det samme etter å ha sett en slik visjon?</li>
                  <li>Hva ønsker teksten at Gud skal vise oss om menneskene Han ønsker å vinne?</li>
                  <li>Hva kan en slik visjon gjøre med vårt syn på oss selv?</li>
                  <li>Hva betyr utsagnet: «Hvis Gud ikke virker i meg med Sin mektige kraft, er det umulig for meg å utføre Hans arbeid»?</li>
                  <li>Hvorfor må denne store visjonen «beseire oss»?</li>
                  <li>Hva betyr det at vår nåværende tilstand aldri kan tilfredsstille Guds hjerte?</li>
                </ol>

                <h3>8. Overvinneren, bønnen og full innvielse</h3>
                <ol
                  start={58}
                  className="m-0 flex list-decimal flex-col gap-2.5 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hvilke to alternativer sier teksten at vi står mellom?</li>
                  <li>Hva betyr det å være en «overvinner» i sammenhengen teksten gir?</li>
                  <li>Hvorfor kan vi ifølge teksten ikke ha råd til å være late når det gjelder å be?</li>
                  <li>Hvilken sammenheng ser teksten mellom bønn og det å bli en overvinner?</li>
                  <li>Hva ber teksten om at Herren Jesus skal gjøre som «fårenes store Hyrde»?</li>
                  <li>Hva innebærer det å tilhøre Herren «heretter og for alltid»?</li>
                  <li>Hva innebærer det å «for alltid innvie» seg til Ham?</li>
                  <li>Hva betyr det å «for alltid tjene Ham»?</li>
                  <li>Hva betyr det å «for alltid gå Hans vei»?</li>
                </ol>

                <h3>Fordypningsspørsmål</h3>
                <ol
                  start={67}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hvordan står <strong>1. Mosebok 3</strong> og <strong>Åpenbaringen 21–22</strong> som to ytterpunkter i Bibelens fortelling?</li>
                  <li>Hva forteller fraværet av forbannelse og død om Guds endelige mål med mennesket?</li>
                  <li>Hvordan henger fellesskap med Gud sammen med sann tjeneste?</li>
                  <li>Hva kan det bety i praksis å først «se Gud» og deretter gjøre Hans arbeid?</li>
                  <li>Hvordan kan ønsket om å gjøre mye for Gud bli en fare dersom fellesskapet med Ham blir borte?</li>
                  <li>Hvordan viser gull, perle og kostelige steiner forskjellige sider av Guds verk i menigheten?</li>
                  <li>Hva betyr det for vår tro at Guds plan kan forstyrres, men aldri stoppes?</li>
                  <li>Hvordan kan visjonen om Guds endelige mål påvirke vår bønn, tjeneste og innvielse?</li>
                  <li>Hva kan det bety å leve allerede nå i lys av at Guds folk skal «herske som konger i all evighet»?</li>
                </ol>

                <h3>Hovedspørsmål til samtale</h3>
                <ol
                  start={76}
                  className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark"
                >
                  <li>Hva er det sterkeste du sitter igjen med etter denne delen om «for evig og alltid»?</li>
                  <li>Hvordan bør vissheten om at Guds hensikt til slutt blir oppfylt påvirke måten vi lever og tjener Gud på?</li>
                  <li>Hva trenger vi å lære om forskjellen mellom <strong>å arbeide for Gud</strong> og <strong>å arbeide i fellesskap med Gud</strong>?</li>
                  <li>Hvordan kan vi vokse i bønn og innvielse slik at vi ikke blir passive eller late i vår vandring med Herren?</li>
                  <li>Hva betyr det for deg personlig at Guds mål ikke bare er at mennesket skal bli frelst, men at mennesket skal nå Guds hensikt og regjere med Ham i evighet?</li>
                </ol>
                </SubAccordion>
              </AccordionSection>
            </div>

            {/* Sidebar */}
            <aside className="sticky top-[116px] flex flex-col gap-5 max-[1100px]:static">
              <ZoomGroupModal />
            </aside>
          </div>
        </div>
      </section>

    </main>
  );
}
