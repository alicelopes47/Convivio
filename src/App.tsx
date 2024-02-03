import { motion, useAnimation } from "framer-motion";
import "./App.scss";
import { CardGrid } from "./components/CardGrid/CardGrid";
import SectionImage from "./assets/project-1.png";
import { Banner } from "./components/Banner/Banner";
import { Navbar } from "./components/Navbar/Navbar";
import { useInView } from "react-intersection-observer";
import { Section } from "./components/Section/Section";
import { useEffect } from "react";
import { Services } from "./components/Services/Services";

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
      <h1 id="projetos" className="title-section">
        Projetos
      </h1>
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
      <div className="divider-container">
        <hr className="solid"></hr>
      </div>
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
      <div className="divider-container">
        <hr className="solid"></hr>
      </div>
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
      <Services />
    </div>
  );
}

export default App;
