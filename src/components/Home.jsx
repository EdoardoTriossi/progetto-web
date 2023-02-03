import { getImage } from "src/utilities/getImage";
import "./Home.css";
import NavBar from "./NavBar";

const angularLogo = "angular-logo.png";
const googleTrends = "google-trends.png";
const reactLogo = "react-logo.png";
const stackoverflowTrends = "reactjs-angular-vue.js.svg";
const vuejsLogo = "vue-js-logo.png";

const imageName = "homeBackgroundImage.jpg";
const headerInfo = {
  title: "Web developing using a framework",
  subTitle: "Why use a framework and what to use",
  image: getImage(imageName),
  button: "To know more",
};

function Home() {
  return (
    <>
      <NavBar info={headerInfo} />

      {/* Why use a framework */}
      <section className="whyUseFramework">
        <h1>Perche' usare i Framework?</h1>
        <p>
          I Framework sono strumenti potenti che rendono il lavoro degli
          sviluppatori più semplice. Forniscono un insieme di convenzioni di
          progettazione e sviluppo che forniscono una infrastruttura di base da
          cui partire. I siti web prodotti con questi Framework possono essere
          pesantemente modificati nel loro aspetto e comportamento per venire
          incontro alle esigenze specifiche dell'applicazione. L'infrastruttura
          rimane invariata.
        </p>

        <div className="row">
          <div className="col">
            <h3>Non reinventare la ruota</h3>
            <p>
              Molti siti hanno strutture molto simili. L'obbiettivo dei
              framework è quello di fornire una struttura comune così che gli
              sviluppatori non debbano rifare tutto dall'inizio ma possano
              riusare il codice fornito. Ci permettono di risparmiare tempo. I
              Framework sono strumenti che aiutano il progettista a non
              reinventare la ruota ogni volta che vogliono creare un nuovo sito
              web.
            </p>
          </div>
          <div className="col">
            <h3>Perchè i Web Framework sono utili</h3>
            <p>
              Principalmente permettono far progredire I progetti ad una
              velocità superiore con meno lavoro iniziale Permettono di
              riutilizzare esperienza e manufatti sviluppati in precendenza Si
              occupano di: Struttura dei file Layout delle pagine del sito e
              configurazione dei browser. Questo genera un design omogeneo per
              gli elementi delle pagine.
            </p>
          </div>
          <div className="col">
            <h3>Tipi di Web Framework</h3>
            <p>
              Backend: gestiscono le interazioni con i database che contengono
              le informazioni gestite dal sito web Spring MC, Django, Ruby on
              Rails, Express Frontend: gestiscono la presentazione delle
              informazioni e l'interazione con gli utenti. Le principali
              categorie sono: Applicazione: Angular Libreria: React.js, Vue.js e
              jQuery User interface: Bootstrap, Material UI, Foundation,
              Semantic UI.
            </p>
          </div>
          <div className="col">
            <h3>Uso dei Web Framework</h3>
            <p>
              I Web Framwork favoriscono la collaborazione fra sviluppatori.
              Essi possono accedere a librerie che forniscono standard di:
              Programmazione Interazione Aspetto Evitano decisioni
              individualistiche da parte dei progettisti che diminuiscono
              l'uniformità dei progetti. I Web Framework sono gestiti da una
              vasta comunità che fornisce molto materiale didattico e tutorial
              di varia natura e complessità La facilità di implementazione e
              l'efficenza li rende indispensabili nello sviluppo di applicazioni
              web. Quando un progetto ricorre sempre più allo sviluppo di parti
              custom probabilmente dovrebbe considerare l'adozione di un Web
              Framework per ripulire il codice, l'interazione e l'aspetto del
              progetto stesso.
            </p>
          </div>
          <div className="col">
            <h3>Creazione di temi</h3>
            <p>
              I Web Framework permettono di creare temi grafici che permetto di
              modificare in maniera anche sostanziale l'aspetto del sito web pur
              mantenendo la struttura sottostante invariata. Questo permette sia
              di “svecchiare” facilmente l'esistente sia di riutilizzare la
              stessa struttura software in casi diversi senza dover reinventare
              nulla se non il nuovo tema.
            </p>
          </div>
          <div className="col">
            <h3>Che cos'è un Web Framework “responsive”</h3>
            <p>
              Una delle caratteristiche migliori di questi Framework è quella di
              creare siti web in grado di essere facilmente accessibili su
              dispositivi molto diversi. Il layout delle pagine web può cambiare
              a seconda delle dimensioni e caratteristiche del dispositivo su
              cui è visualizzato. Questo è molto importante perchè ora più che
              mai i siti web sono consultati tramite dispositivi mobili che
              hanno caratteristiche molto diverse da quelli dei computer
              utilizzati classicamente per navigare nel web.
            </p>
          </div>
          <div className="col">
            <h3>Svantaggi dei Web Framework</h3>
            <p>
              Sicuramente essi richiedono di essere imparati e questo costa
              tempo e fatica. La struttura precostituita dei moduli che li
              compongono forniscono una certa rigidità all'architettura che può
              essere anche uno svantaggio.
            </p>
          </div>
          <div className="col">
            <h3>Critiche</h3>
            <p>
              I critici sostengono che questo approccio appiattisce la varietà
              dei siti che appaiono simili sia graficamente che
              interattivamente. Francamente non vedo il problema, se la metafora
              è valida utilizziamola pure il più possibile.
            </p>
          </div>
        </div>
      </section>
      {/* mostUsedFramework */}
      <section className="mostUsedFramework">
        <h1>Most popular frameworks</h1>
        <div className="row">
          <a href="https://github.com/facebook/react" className="col">
            <img src={getImage(reactLogo)} alt="React" />
            <div className="layer">
              <h3>React</h3>
            </div>
          </a>
          <a href="https://github.com/angular/angular" className="col">
            <img src={getImage(angularLogo)} alt="Angular" />
            <div className="layer">
              <h3>Angular</h3>
            </div>
          </a>
          <a href="https://github.com/vuejs/vue" className="col">
            <img src={getImage(vuejsLogo)} alt="Vue" />
            <div className="layer">
              <h3>Vue</h3>
            </div>
          </a>
        </div>
      </section>
      {/* frameworkPopularity */}
      <section className="frameworkPopularity">
        <h1>Frameworks popularity</h1>
        <div className="row">
          <h2>Google trends</h2>
          <p>
            cosa cè nel grafico, e che aggiornato
          </p>
          <a href="https://trends.google.it/trends/explore?date=today%2012-m,today%2012-m,today%2012-m&geo=,,&q=%2Fm%2F012l1vxv,%2Fg%2F11c6w0ddw9,%2Fg%2F11c0vmgx5d">
            <img src={getImage(googleTrends)} alt="" />
          </a>
        </div>

        <div className="row">
          <h2>Stack Overflow Trends</h2>
          <p>
            numero di ricerche fatte per ciascun framework con stack Overflow
          </p>
          <a href="https://insights.stackoverflow.com/trends?tags=reactjs%2Cangular%2Cvue.js">
            <img src={getImage(stackoverflowTrends)} alt="" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
