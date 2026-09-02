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
              <AccordionSection icon="document" title="Presentasjon" description="Introduksjon til kapittel 5" defaultOpen>
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

              <AccordionSection id="commentary" icon="comment" title="Kommentarer" description="Åtte utfyllende, teologiske kommentarer" count={8}>
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
              </AccordionSection>

              <AccordionSection iconText="?" title="Studiespørsmål" description="Seks spørsmål for refleksjon og gruppesamtale" count={6}>
                <ol className="m-0 flex list-decimal flex-col gap-4 pl-[22px] font-sans text-[.98rem] leading-[1.8] text-text marker:font-semibold marker:text-gold-dark">
                  <li>
                    Bibelen begynner i en hage og ender i en by. Hva sier det om Guds hensikt at endepunktet er et
                    helt folk som bor sammen med Gud, og ikke bare enkeltmennesker som er reddet? Les 1. Mosebok 2–3
                    og Åpenbaringen 21–22 ved siden av hverandre.
                  </li>
                  <li>
                    Engelen kaller den hellige stad for «bruden, Lammets hustru» (Åp 21,9–10). Hva forandrer det for
                    din forståelse av menigheten at staden og bruden er samme virkelighet? På hvilke måter kan et
                    fellesskap leve som «bosted» uten å leve som «brud»?
                  </li>
                  <li>
                    Efeserne 5,25–27 sier at Kristus renser menigheten «ved vannbadet i Ordet» for å stille den fram
                    «uten flekk eller rynke». Hvordan ser denne renselsen ut i praksis i et fellesskap i dag? Hva er
                    vår del, og hva er Kristi del?
                  </li>
                  <li>
                    Hebreerne 12,22 sier at de troende allerede «er kommet til … det himmelske Jerusalem». Hvordan
                    kan denne nåværende virkeligheten prege måten vi møtes, tilber og bærer motgang på – uten at vi
                    mister lengselen etter den fullendte staden?
                  </li>
                  <li>
                    Babylon «opphøyer seg selv» (Åp 18,7); Det nye Jerusalem «kommer ned fra Gud» og bærer hans
                    herlighet (Åp 21,2.11). Hvor kjenner du igjen «Babylons mønster» – jaget etter synlighet, tall
                    eller innflytelse – i eget liv eller i kristent arbeid? Hvordan ser det motsatte ut?
                  </li>
                  <li>
                    Jesus lovet at det fra den troendes indre skal «renne strømmer av levende vann» om Ånden (Joh
                    7,38–39), og i staden renner elven fra tronen (Åp 22,1). Hva kan i praksis demme opp for dette
                    livet i et fellesskap, og hva kan åpne for at det får strømme fritt?
                  </li>
                </ol>
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
