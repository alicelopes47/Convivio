//@ts-nocheck
import "./App.scss";
import bgImage1 from "./assets/image-14.png";
import bgImage2 from "./assets/image-16.png";
import bgImage3 from "./assets/image-15.png";
import { Banner } from "./components/Banner/Banner";
import { Navbar } from "./components/Navbar/Navbar";
import {
  VideoProjetos,
  casaVicentePires2Foto1,
  casaVicentePires2Foto2,
  casaVicentePires2Foto3,
  casaVicentePires2Foto4,
  casaVicentePires2Gif1,
} from "./assets/index";
import teste from "./assets/gif-teste.gif";
import ComoFazemos2 from "./assets/projetos/comofazemos2.jpg";
import ComoFazemos3 from "./assets/projetos/comofazemos3.jpg";
import { CarouselProject } from "./ProjectSection/CarouselProject";
import { Services } from "./components/Services/Services";
import { Layout } from "./components/Layout/Layout";
import { BannerFooter } from "./components/BannerFooter/BannerFooter";
import { useEffect, useRef, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import Lightbox from "yet-another-react-lightbox";
import { ComoFunciona } from "./components/ComoFunciona/ComoFunciona";
import { WhoWeAre } from "./components/WhoWeAre/WhoWeAre";
import { FormSection } from "./FormSection/FormSection";
import { ExternalCarousel } from "./components/ExternalCarousel/ExternalCarousel";
import { ProjectSection } from "./ProjectSection/ProjectSection";
import { DropDownNavbar } from "./components/DropDownNavbar/DropDownNavbar";
export const ComeToFront = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

function App() {
  const [section, setSection] = useState(0);
  const [open, setOpen] = useState(false);
  const [indexImage, setIndexImage] = useState(0);

  const CasaVicentePires2Array = [casaVicentePires2Foto1, casaVicentePires2Foto2, casaVicentePires2Foto3, casaVicentePires2Foto4, casaVicentePires2Gif1]

  const handleClickImage = (index: number) => { 
    setIndexImage(index);
    setOpen(true);
  }

  useEffect(() => {
    setTimeout(() => {
      if (section === 0) {
        setSection(1);
      }
    }, 8000);
  });

  let isScrolling = false;
  window.onwheel = (e) => {
    // Previne o evento de rolagem padrão
    e.preventDefault();

    // Se uma rolagem já está em andamento, ignora este evento
    if (isScrolling) return;

    // Define a flag para indicar que uma rolagem está em andamento
    isScrolling = true;

    const scrollAmount = window.innerHeight;
    const currentScrollPosition = window.pageYOffset;
    const nextSectionPosition =
      e.deltaY >= 0
        ? Math.ceil((currentScrollPosition + 1) / scrollAmount) * scrollAmount
        : Math.floor((currentScrollPosition - 1) / scrollAmount) * scrollAmount;

    // Rola para a próxima seção ou para a seção anterior
    window.scrollTo({ top: nextSectionPosition, behavior: "smooth" });

    // Redefine a flag quando a rolagem termina
    setTimeout(() => {
      isScrolling = false;
    }, 1000); // Ajuste este tempo para corresponder ao tempo que leva para rolar
  };

  return (
    <div className="App">
      <Navbar />
      {open && (
        <Lightbox
          open
          close={() => setOpen(false)}
          slides={[
            { src: CasaVicentePires2Array[indexImage] },
          ]}
        />
      )}
      <DropDownNavbar />
      <Banner id="inicio" />
      <Layout isBannerFooter backgroundColor="#EDE8E1">
        <BannerFooter />
      </Layout>
      <Layout id="servicos">
        <Services />
      </Layout>
      <ExternalCarousel>
        <Layout id="projetos" projectSection backgroundImage={bgImage1}>
          <ProjectSection
            hasTitle
            name="Casa Paulista"
            Area="Aprox. 450m²"
            Localizacao="Jardim Botânico - DF"
            Descricao="Casa feita do zero, projetada para ser um espaço de convivência e lazer para família, com ambientes integrados, espaçosos e bem iluminados."
            Detalhes="Sala de estar integrada com jantar; Cozinha; Espaço Gourmet; Escritório; Sala íntima no andar superior; Fireplace; Piscina; Garagem p/ 2 carros."
          />
          <CarouselProject>
            <img
              src={casaVicentePires2Foto1}
              className="vertical"
              onClick={() => handleClickImage(0)}
              alt="casa-vicentepires-2"
            />
            <img
              className="vertical"
              src={casaVicentePires2Gif1}
              alt="casa-terrea"
              onClick={() => handleClickImage(4)}
            />
            <img
              src={casaVicentePires2Foto2}
              className="horizontal"
              alt="casa-vicentepires-2"
              onClick={() => handleClickImage(1)}
            />
            <img
              src={casaVicentePires2Foto4}
              className="vertical"
              alt="casa-vicentepires-2"
              onClick={() => handleClickImage(3)}
            />
            <img
              className="vertical"
              src={casaVicentePires2Foto3}
              alt="casa-vicentepires-2"
              onClick={() => handleClickImage(2)}
            />
            <img className="vertical" src={teste} alt="casa-terrea" />
          </CarouselProject>
        </Layout>
        <Layout projectSection backgroundImage={bgImage2}>
          <ProjectSection
            Area="Reforma de aprox. 100m²"
            Localizacao="Guará II"
            Detalhes="Reforma da cozinha, sala de TV, quarto do casal e quarto do filho. Reforma da cozinha, sala de TV, quarto do casal e quarto do filho."
            Descricao="Reforma de alguns cômodos da casa, com o objetivo de modernizar e trazer mais conforto."
            name="Casa Vivência"
          />
          <CarouselProject>
            <img
              src={casaVicentePires2Foto2}
              className="horizontal"
              alt="casa-vicentepires-2"
            />
            <img
              src={casaVicentePires2Foto1}
              className="vertical"
              alt="casa-vicentepires-2"
            />
            <img
              className="vertical"
              src={casaVicentePires2Gif1}
              alt="casa-terrea"
            />
            <img
              src={casaVicentePires2Foto4}
              className="vertical"
              alt="casa-vicentepires-2"
            />
            <img
              className="vertical"
              src={casaVicentePires2Foto3}
              alt="casa-vicentepires-2"
            />
            <img className="vertical" src={teste} alt="casa-terrea" />
          </CarouselProject>
        </Layout>
        <Layout projectSection backgroundImage={bgImage3}>
          <ProjectSection
            name="Casa Vicente Pires - 02"
            Area="Aprox. 240m²"
            Localizacao="Vicente Pires"
            Detalhes="contempla 3 suítes, piscina, gourmet integrado, sala de estar e jantar com pé direito duplo, escritório para home office, 2 lavabos sendo um interno e externo, paredes em cobogo, bancadas no cinza castelo escovado, jabuticabeira na ilha da bancada."
            Descricao=" Este projeto se desenvolve a partir de um conceito aberto, que valoriza a iluminação natural e preza pela boa ventilação de todos os ambientes. Além disso, possibilita a vista para paisagem, integrando a casa ao ambiente natural. integrando a casa ao ambiente natural"
          />
          <CarouselProject>
            <img
              src={casaVicentePires2Foto2}
              className="horizontal"
              alt="casa-vicentepires-2"
            />
            <img
              src={casaVicentePires2Foto1}
              className="vertical"
              alt="casa-vicentepires-2"
            />
            <img
              className="vertical"
              src={casaVicentePires2Gif1}
              alt="casa-terrea"
            />
            <img
              src={casaVicentePires2Foto4}
              className="vertical"
              alt="casa-vicentepires-2"
            />
            <img
              className="vertical"
              src={casaVicentePires2Foto3}
              alt="casa-vicentepires-2"
            />
            <img className="vertical" src={teste} alt="casa-terrea" />
          </CarouselProject>
        </Layout>
      </ExternalCarousel>
      <ExternalCarousel>
        <Layout id="about-us" backgroundColor="#F4F2EE">
          <ComoFunciona
            hasTitle
            StageTitle="1ª Etapa"
            subtitle="Levantamento de Dados e Informações"
            paragraph="Aqui, após o preenchimento do questionário, que nós enviaremos ao cliente, elaboramos o plano de necessidades, desenvolvendo fluxos e croquis a fim de capturar as ideias iniciais do projeto. Alem disso, serão feitas medições no local, documentadas através de fotografias. Ao londo desta fase, apresentamos imagens e projetos de referência para contribuir na tomada de decisões e na melhor compreensão dos gostos e necessidades do cliente."
          >
            <video controls>
              <source
                className="source-video"
                src={VideoProjetos}
                type="video/mp4"
              />
            </video>
          </ComoFunciona>
        </Layout>
        <Layout backgroundColor="#F4F2EE">
          <ComoFunciona
            StageTitle="2ª Etapa"
            subtitle="Estudo Preliminar"
            paragraph="Nesta fase, após o briefing inicial e a análise das referências, elaboramos uma proposta que inclui uma planta de layout, na qual detalhamos as locações das paredes e mobiliários, exibindo a disposição dos móveis, medidas e imagens de referência. Além disso, apresentamos imagens e vídeos 3D que simulam digitalmente o projeto finalizado de acordo com as ideias e informações apresentadas até aqui. Realizamos também, reuniões para ajustar a proposta de acordo com suas preferências. "
          >
            <img src={ComoFazemos2} alt="about-us" />
          </ComoFunciona>
        </Layout>
        <Layout backgroundColor="#F4F2EE">
          <ComoFunciona
            StageTitle="3ª Etapa"
            subtitle="Projeto Executivo"
            paragraph="Depois da aprovação do projeto em 3D e alinhamento de todos os pontos, avançamos para os detalhamentos e o caderno executivo. Nesta etapa, elaboramos um documento abrangente com todos os detalhes essenciais para a execução bem-sucedida do projeto. A flexibilidade continua, permitindo ajustes para garantir a plena satisfação dos clientes. Iniciamos a seleção de orçamentos e opções para revestimentos, mobiliários, texturas e adornos, proporcionando escolhas alinhadas às preferências individuais."
          >
            <img src={ComoFazemos3} alt="about-us" />
          </ComoFunciona>
        </Layout>
      </ExternalCarousel>
      <Layout id="who-we-are" backgroundColor="#86AB85">
        <WhoWeAre type={1} />
      </Layout>
      <Layout id="who-we-are" backgroundColor="#597C59">
        <WhoWeAre type={2} />
      </Layout>
      <Layout id="orcamento" backgroundColor="#E5D3AD">
        <FormSection />
      </Layout>
    </div>
  );
}

export default App;
