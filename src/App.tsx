import "./App.scss";
import SectionImage from "./assets/project-1.png";
import bgImage1 from "./assets/image-14.png";
import bgImage2 from "./assets/image-16.png";
import bgImage3 from "./assets/image-15.png";
import { Banner } from "./components/Banner/Banner";
import { Navbar } from "./components/Navbar/Navbar";
import { Section } from "./components/Section/Section";
import { Services } from "./components/Services/Services";
import { Layout } from "./components/Layout/Layout";
import { BannerFooter } from "./components/BannerFooter/BannerFooter";
import  ServicesBackground from "./assets/bg-services.png";

export const ComeToFront = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

export const comeFromLeft = {
  visible: { width: "60%", x: 0 },
  hidden: { width: "0vw", x: "-30vw" },
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Layout >
        <BannerFooter />
      </Layout>
      <Layout id="servicos" backgroundImage={ServicesBackground} title="Nossos serviços" whiteTitle darkerBgChildren>
        <Services />
      </Layout>

      <Layout backgroundImage={bgImage1} title="Projetos" id="projetos">
        {" "}
        <Section
          Area="Aprox. 350m²"
          Localizacao="Park Way"
          Detalhes="Casa térrea + Casa anexo para os pais; 3 ou 4 Suítes; Escritório;
        Cozinha com ilha; Academia; Garagem p/ 3 carros; Jardim de
        Inverno; Closets p/ todos os quartos; Piscina;Fire Place; Lavabo
        interno/esterno e Depósito."
          Descricao=" Este projeto se desenvolve a partir de um conceito aberto, que valoriza a iluminação natural e preza pela boa ventilação de todos os ambientes. Além disso, possibilita a vista para paisagem, integrando a casa ao ambiente natural."
          image={SectionImage}
          title="Casa Térrea"
        />
      </Layout>
      <Layout backgroundImage={bgImage2}>
        {" "}
        <Section
          Area="Aprox. 350m²"
          Localizacao="Park Way"
          Detalhes="Casa térrea + Casa anexo para os pais; 3 ou 4 Suítes; Escritório;
        Cozinha com ilha; Academia; Garagem p/ 3 carros; Jardim de."
          Descricao=" Este projeto se desenvolve a partir de um ventilação de todos os ambientes. Além disso, possibilita a vista para paisagem, integrando a casa ao ambiente natural."
          image={SectionImage}
          title="Casa Vicente Pires"
        />
      </Layout>
      <Layout backgroundImage={bgImage3}>
        {" "}
        <Section
          Area="Aprox. 350m²"
          Localizacao="Park Way"
          Detalhes="Casa térrea + Casa anexo para os pais; 3 ou 4 Suítes; Escritório;
        Cozinha com ilha; Academia; Garagem p/ 3 carros; Jardim de
        Inverno; Closets p/ todos os quartos; Piscina;Fire Place; Lavabo
        interno/esterno e Depósito. Academia; Garagem p/ 3 carros; Jardim de
        Inverno; Closets p/ todos os quartos; Piscina;Fire Place; Lavabo
        interno/esterno e Depósito.Academia; Garagem p/ 3 carros; Jardim de
        Inverno; Closets p/ todos os quartos; Piscina;Fire Place; Lavabo
        interno/esterno e Depósito."
          Descricao=" Este projeto se desenvolve a partir de um conceito aberto, que valoriza a iluminação natural e preza pela boa ventilação de todos os ambientes. Além disso, possibilita a vista para paisagem, integrando a casa ao ambiente natural. integrando a casa ao ambiente natural"
          image={SectionImage}
          title="Casa guará"
        />
      </Layout>
    </div>
  );
}

export default App;
