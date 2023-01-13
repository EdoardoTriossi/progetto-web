import { getImage } from "src/utilities/getImage";
import NavBar from "./NavBar";
import "./ReactInfo.css";

const angularLogo = "angular-logo.png";
const googleTrends = "google-trends.png";
const reactLogo = "react-logo.png";
const stackoverflowTrends = "reactjs-angular-vue.js.svg";
const vuejsLogo = "vue-js-logo.png";

const imageName = "reactInfoBackgroundImage.jpg";
const reactInfoInfo = {
  title: "React framework",
  subTitle: "How it works",
  image: getImage(imageName),
};

function ReactInfo() {
  return (
    <>
      <NavBar info={reactInfoInfo} />

      {/* Why use a framework */}
      <section className="React">
        <h1>Storia</h1>
        <p>
          <ul>
            <li>2011: Creata da Facebook.</li>
            <li>2012: Utilizzata da Instagram.</li>
            <li>2013: Facebook la rende open source.</li>
            <li>2014: inizia l'adozione da parte di grandi compagnie.</li>
            <li>
              2015: Facebook rende open source React Native, per Android e iOS.
            </li>
            <li>
              2016: uso di Semantic Versioning nel rilascio dei componenti che
              permette di rilasciare o upgradare I package senza rilasciare
              nuove versioni dei pachetti dipendenti. Al giorno d'oggi molte
              delle aziende Fortune 500 lo utilizzano. Facebook ha un team per
              lo sviluppo e manutenzione.
            </li>
          </ul>
        </p>

        <div className="row">
          <div className="col">
            <h3>Perchè utilizzare React </h3>
            <p>
              <ul>
                <li>È flesibile.</li>
                <li>È amato dagli sviluppatori.</li>
                <li>È supportato da Facebook.</li>
                <li>È supportato da una vasta comunità.</li>
                <li>Ottime prestazioni.</li>
                <li>Facile da testare.</li>
              </ul>
            </p>
          </div>
          <div className="col">
            <h3>React è flesibile</h3>
            <p>
              <ul>
                <li>
                  Una volta imparato lo si può utilizzare in una grande quantità
                  di piattaforme.
                </li>
                <li>
                  React crea componenti per applicazioni web come bottoni e
                  griglie, ma è evoluto in un eco sistema che copre i casi più
                  diversi.
                </li>
                <li>Si può utilizzare per:</li>
                <ul>
                  <li>creare siti web.</li>
                  <li>applicazioni per cellulari (React Native).</li>
                  <li>applicazioni Desktop (Electron).</li>
                  <li>Applicazioni di reatà virutale (React VR).</li>
                </ul>
                <li> Può essere innestato in altre applicazioni.</li>
              </ul>
            </p>
          </div>
          <div className="col">
            <h3>React è amato</h3>
            <p>
              <ul>
                <li>
                  Permettendo uno svluppo rapido aiutato da un piccolo numero di
                  API crea un ambiente ottimo per il programmatore.
                </li>
                <li>È facile da imparare, ha pochi concetti.</li>
                <li>
                  React integra HTML, CSS e JavaScript in un unico ambiente.
                </li>
                <li>
                  La CLI di react permette di creare uno scheletro applicativo
                  in pochi istanti ed iniziare a programmare subito.
                </li>
              </ul>
            </p>
          </div>
          <div className="col">
            <h3>React è supportato</h3>
            <p>
              <ul>
                <li>
                  È usato da Facebook molto intensamente nelle sue app, sito web
                  ed anche in Istagram, quindi Facebook investe molto in React.
                </li>
                <li>
                  Utilizzano oltre 50K componenti nelle loro applicazioni.
                </li>
                <li>
                  I dipendenti Facebool sono fra i maggiori contributori al
                  repository GitHub.
                </li>
                <li>
                  Il team di Facebook cha lavora su React ha un Blog sulle
                  versioni.
                </li>
                <li>
                  Anche la comunità è enorme ed il Repository GitHub ha più di
                  164K stelle ed è uno dei repository nella Top 5 di GitHub.
                </li>
                <li>Ci sono milioni di download di package al giorno.</li>
                <li>Companies Using React.</li>
                <li>
                  Reactiflux è una comunità di sviluppatori React di oltre 100K
                  persone.
                </li>
                <li>
                  StackOverflow afferma che ci sono oltre 250K domande su React.
                </li>
                <li>
                  Alcune librerie: Fluent UI, Material-UI, React-Bootstrap, ...
                </li>
              </ul>
            </p>
          </div>
          <div className="col">
            <h3>React ha ottime prestazioni</h3>
            <p>
              <ul>
                <li>
                  Aggiornamento efficente del DOM attraverso l'introduzione del
                  Virtual DOM.
                </li>
                <li>
                  Quando lo stato di un componente cambia stato interno viene
                  aggiornato nel modo più efficente.
                </li>
                <li> Tutto è gestito dietro alle scene da React.</li>
                <li>
                  Questo è ancora più importante nei dispositivi mobili il
                  consumo di energia è importante.
                </li>
                <li>
                  L'aggiornamento è effettuato in memoria cosa che favorisce la
                  velocità.
                </li>
                <li>
                  La dimensione della librearia di React è di soli 6Kb, molto
                  meno dei concorrenti.
                </li>
              </ul>
            </p>
          </div>
          <div className="col">
            <h3>React è facile da testare</h3>
            <p>
              <ul>
                <li>
                  Si può testare una applicazione da linea di comandi con
                  Node.js.
                </li>
                <li> Utilizzando Node.js i test sono rapidi.</li>
                <li> Esistono tool per creare velocemente i test.</li>
              </ul>
            </p>
          </div>

          <h3>Conclusioni</h3>
          <p>
            <ul>
              <li>
                React è eccellente per creare applicazioni su qualunque
                piattaforma.
              </li>
              <li>È utilizzato nella stragrande maggioranza delle app.</li>
              <li> E' ottimamente supportato.</li>
            </ul>
          </p>
        </div>
      </section>
      {/* mostUsedFramework */}
      <section className="mostUsedFramework">
        <div className="row">
          <a href="https://github.com/facebook/react" className="col">
            <img src={getImage(reactLogo)} alt="React" />
            <div className="layer">
              <h3>React</h3>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default ReactInfo;
