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
                  <p>
                    <em>Studiespørsmål for dette sideområdet er ikke publisert ennå.</em>
                  </p>
                </SubAccordion>

                <SubAccordion title="Side 127–128 · Den hellige stadens lys">
                  <p>
                    <em>Studiespørsmål for dette sideområdet er ikke publisert ennå.</em>
                  </p>
                </SubAccordion>

                <SubAccordion title="Side 128–130 · Den hellige stads innbyggere">
                  <p>
                    <em>Studiespørsmål for dette sideområdet er ikke publisert ennå.</em>
                  </p>
                </SubAccordion>

                <SubAccordion title="Side 130–134 · Staden, portene og muren">
                  <p>
                    <em>Studiespørsmål for dette sideområdet er ikke publisert ennå.</em>
                  </p>
                </SubAccordion>

                <SubAccordion title="Side 134–143 · Det nye Jerusalems herlighet og dybde">
                  <p>
                    <em>Studiespørsmål for dette sideområdet er ikke publisert ennå.</em>
                  </p>
                </SubAccordion>

                <SubAccordion title="Side 143–146 · Templet og stadens lys">
                  <p>
                    <em>Studiespørsmål for dette sideområdet er ikke publisert ennå.</em>
                  </p>
                </SubAccordion>

                <SubAccordion title="Side 146–149 · Elven med livets vann og livets tre">
                  <p>
                    <em>Studiespørsmål for dette sideområdet er ikke publisert ennå.</em>
                  </p>
                </SubAccordion>

                <SubAccordion title="Side 149–152 · For evig og alltid">
                  <p>
                    <em>Studiespørsmål for dette sideområdet er ikke publisert ennå.</em>
                  </p>
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
