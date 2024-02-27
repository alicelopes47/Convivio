import "./App.scss";
import bgImage1 from "./assets/image-14.png";
import bgImage2 from "./assets/image-16.png";
import bgImage3 from "./assets/image-15.png";
import { Banner } from "./components/Banner/Banner";
import { Navbar } from "./components/Navbar/Navbar";
import {
  VideoProjetos,
  casaParaVendaGif,
  casaParaVenda2Video,
  casaParaVenda1img1,
  casaParaVenda1Video1,
  casaParaVenda1img2,
  casaVicentePires,
  casaVivenciaAssets,
  casaPaulistaAssets,
  casaParaVenda2Assets,
  casaVicentePiresSmall,
  casaParaVenda1img1Small,
  casaParaVenda1img2Small,
} from "./assets/index";
import ComoFazemos2 from "./assets/projetos/comofazemos2.jpg";
import ComoFazemos3 from "./assets/projetos/comofazemos3.jpg";
import { CarouselProject } from "./ProjectSection/CarouselProject";
import { Services } from "./components/Services/Services";
import { Layout } from "./components/Layout/Layout";
import { BannerFooter } from "./components/BannerFooter/BannerFooter";
import { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { ComoFunciona } from "./components/ComoFunciona/ComoFunciona";
import { WhoWeAre } from "./components/WhoWeAre/WhoWeAre";
import { FormSection } from "./FormSection/FormSection";
import { ExternalCarousel } from "./components/ExternalCarousel/ExternalCarousel";
import { ProjectSection } from "./ProjectSection/ProjectSection";
import { DropDownNavbar } from "./components/DropDownNavbar/DropDownNavbar";
import { set } from "video.js/dist/types/tech/middleware";
export const ComeToFront = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

function App() {
  const [section, setSection] = useState(0);
  const [arrayToUse, setArrayToUse] = useState([] as any);
  const [open, setOpen] = useState(false);
  const [indexImage, setIndexImage] = useState(0);

  const CasaParaVenda2Array = [
    casaParaVenda2Assets.img1[0],
    casaParaVenda2Assets.img2[0],
    casaParaVenda2Assets.img3[0],
    casaParaVenda2Assets.img4[0],
    casaParaVenda2Assets.gif1,
    casaParaVendaGif,
  ];

  const CasaVivenciaArray = [
    casaVivenciaAssets.img1[0],
    casaVivenciaAssets.img2[0],
    casaVivenciaAssets.img3[0],
    casaVivenciaAssets.img4[0],
    casaVivenciaAssets.img5[0],
    casaVivenciaAssets.img6[0],
    casaVivenciaAssets.img7[0],
    casaVivenciaAssets.img8[0],
    casaVivenciaAssets.img9[0],
    casaVivenciaAssets.img10[0],
    casaVivenciaAssets.img11[0],
    casaVivenciaAssets.img12[0],
    casaVivenciaAssets.img13[0],
    casaVivenciaAssets.gif1,
  ];

  const CasaParaVenda1Array = [
    casaParaVenda1img1,
    casaParaVenda1img2,
    casaParaVenda1Video1,
  ];

  const CasaPaulistaArray = [
    casaPaulistaAssets.img1,
    casaPaulistaAssets.img2,
    casaPaulistaAssets.img3,
    casaPaulistaAssets.img4,
    casaPaulistaAssets.img5,
    casaPaulistaAssets.img6,
  ];

  const CasaVicentePiresArray = [casaVicentePires];

  const handleClickImage = (imageArray: any, index: number) => {
    setIndexImage(index);
    setArrayToUse(imageArray);
    setOpen(true);
  };

  useEffect(() => {
    setTimeout(() => {
      if (section === 0) {
        setSection(1);
      }
    }, 8000);
  });

  let isScrolling = false;
  window.addEventListener('wheel', (e) => {
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
  }, { passive: false });

  return (
    <div className="App">
      <Navbar />
      <Lightbox
        open={open}
        index={indexImage}
        close={() => setOpen(false)}
        slides={arrayToUse.map((src: any) => ({ src } as any))}
      />
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
              src={CasaPaulistaArray[0]}
              onClick={() => handleClickImage(CasaPaulistaArray, 0)}
              alt="Foto casa paulista"
            />
            <img
              src={CasaPaulistaArray[1]}
              alt="Foto casa paulista"
              onClick={() => handleClickImage(CasaPaulistaArray, 1)}
            />
            <img
              src={CasaPaulistaArray[2]}
              alt="Foto casa paulista"
              onClick={() => handleClickImage(CasaPaulistaArray, 2)}
            />
            <img
              src={CasaPaulistaArray[3]}
              alt="Foto casa paulista"
              onClick={() => handleClickImage(CasaPaulistaArray, 3)}
            />
            <img
              src={CasaPaulistaArray[4]}
              alt="Foto casa paulista"
              onClick={() => handleClickImage(CasaPaulistaArray, 4)}
            />
            <img
              src={CasaPaulistaArray[5]}
              alt="Foto casa paulista"
              onClick={() => handleClickImage(CasaPaulistaArray, 5)}
            />
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
              src={CasaVivenciaArray[13][1]}
              onClick={() => handleClickImage(CasaVivenciaArray, 13)}
              alt="Foto casa vivência"
            />
            <img
              src={casaVivenciaAssets["img1"][1]}
              onClick={() => handleClickImage(CasaVivenciaArray, 0)}
              alt="Foto casa vivência"
            />
            <img
              src={casaVivenciaAssets["img2"][1]}
              onClick={() => handleClickImage(CasaVivenciaArray, 1)}
              alt="Foto casa vivência"
            />
            <img
              onClick={() => handleClickImage(CasaVivenciaArray, 2)}
              src={casaVivenciaAssets["img3"][1]}
              alt="Foto casa vivência"
            />
            <img
              src={casaVivenciaAssets["img4"][1]}
              onClick={() => handleClickImage(CasaVivenciaArray, 3)}
              alt="Foto casa vivência"
            />
            <img
              src={casaVivenciaAssets["img5"][1]}
              onClick={() => handleClickImage(CasaVivenciaArray, 4)}
              alt="Foto casa vivência"
            />
            <img
              onClick={() => handleClickImage(CasaVivenciaArray, 5)}
              src={casaVivenciaAssets["img6"][1]}
              alt="Foto casa vivência"
            />
            <img
              onClick={() => handleClickImage(CasaVivenciaArray, 6)}
              src={casaVivenciaAssets["img7"][1]}
              alt="Foto casa vivência"
            />
            <img
              onClick={() => handleClickImage(CasaVivenciaArray, 7)}
              src={casaVivenciaAssets["img8"][1]}
              alt="Foto casa vivência"
            />
            <img
              onClick={() => handleClickImage(CasaVivenciaArray, 8)}
              src={casaVivenciaAssets["img9"][1]}
              alt="Foto casa vivência"
            />
            <img
              src={casaVivenciaAssets["img10"][1]}
              onClick={() => handleClickImage(CasaVivenciaArray, 9)}
              alt="Foto casa vivência"
            />

            <img
              onClick={() => handleClickImage(CasaVivenciaArray, 10)}
              src={casaVivenciaAssets["img11"][1]}
              alt="Foto casa vivência"
            />

            <img
              src={casaVivenciaAssets["img12"][1]}
              onClick={() => handleClickImage(CasaVivenciaArray, 11)}
              alt="Foto casa vivência"
            />
            <img
              onClick={() => handleClickImage(CasaVivenciaArray, 12)}
              src={casaVivenciaAssets["img13"][1]}
              alt="Foto casa vivência"
            />
          </CarouselProject>
        </Layout>
        <Layout projectSection backgroundImage={bgImage3}>
          {" "}
          {/* Feito, falta as imagens */}
          <ProjectSection
            name="Casa Vicente Pires"
            Area="Aprox. 240m²(const.) / 400m²(lote)  "
            Localizacao="Vicente Pires"
            Detalhes="Sala de estar e jantar; 3 suítes; Cozinha; 2 lavabos; escritório; despensa; área de serviço c/ área de secagem; piscina e garagem p/ 2 carros."
            Descricao=" Casa feita do zero. Aqui integramos o paisagismo à arquitetura. Possui sala de estar e jantar com pé direito duplo e uma janela piso teto. No gourmet temos uma integração com a cozinha através de uma porta de correr e ilha com bancada. Além disso, colocamos uma bela jabuticabeira para proporcionar uma maior sensação de aconchego."
          />
          <CarouselProject>
            <img
              src={casaVicentePiresSmall}
              onClick={() => handleClickImage(CasaVicentePiresArray, 0)}
              alt="Foto casa Vicente Pires"
            />
            <img
              src={CasaParaVenda2Array[5]}
              alt="Foto casa Vicente Pires"
              onClick={() => handleClickImage(CasaParaVenda2Array, 5)}
            />
          </CarouselProject>
        </Layout>
        <Layout projectSection backgroundImage={bgImage1}>
          {" "}
          {/* Feito, falta imagens */}
          <ProjectSection
            name="Casa para venda - 01"
            Area="Aprox. 240m²(const.) / 400m²(lote)"
            Localizacao="Vicente Pires"
            Detalhes="Sala de estar e jantar; 3 suítes; Cozinha; Espaço Gourmet; 2 lavabos (interno e externo); escritório; despensa; área de serviço c/ área de secagem; piscina e garagem p/ 2 carros."
            Descricao=" Casa feita do zero. Possui sala de estar e jantar com pé direito duplo e uma janela piso teto. No gourmet temos uma integração com a cozinha através de uma porta de correr, feita em esquadria de alumínio, extremamente funcional."
          />
          <CarouselProject>
            <img
              src={casaParaVenda1img1Small}
              onClick={() => handleClickImage(CasaParaVenda1Array, 0)}
              alt="Casa para venda 1"
            />
            <img
              src={casaParaVenda1img2Small}
              alt="Casa para venda 1"
              onClick={() => handleClickImage(CasaParaVenda1Array, 1)}
            />
            <video controls>
              <source
                className="source-video"
                src={casaParaVenda1Video1}
                type="video/mp4"
              />
            </video>
          </CarouselProject>
        </Layout>
        <Layout projectSection backgroundImage={bgImage1}>
          {" "}
          {/* Pronto */}
          <ProjectSection
            name="Casa para venda - 02"
            Area="Aprox. 240m²(const.) / 400m²(lote)"
            Localizacao="Vicente Pires"
            Detalhes="Sala de estar e jantar; 3 suítes; Cozinha; Espaço Gourmet; 2 lavabos (interno e externo); escritório; despensa; área de serviço c/ área de secagem; piscina e garagem p/ 2 carros."
            Descricao=" Casa feita do zero. Possui sala de estar e jantar com pé direito duplo e uma janela piso teto. No gourmet temos uma integração com a cozinha através de uma porta de correr, feita em esquadria de alumínio, extremamente funcional."
          />
          <CarouselProject>
            <video controls>
              <source
                className="source-video"
                src={casaParaVenda2Assets.video1}
                type="video/mp4"
              />
            </video>
            <img
              src={casaParaVenda2Assets.img1[1]}
              onClick={() => handleClickImage(CasaParaVenda2Array, 0)}
              alt="Casa para venda 2"
            />
            <img
              src={casaParaVenda2Assets.img2[1]}
              alt="Casa para venda 2"
              onClick={() => handleClickImage(CasaParaVenda2Array, 1)}
            />
            <img
              src={casaParaVenda2Assets.img3[1]}
              alt="Casa para venda 2"
              onClick={() => handleClickImage(CasaParaVenda2Array, 2)}
            />
            <img
              src={casaParaVenda2Assets.img4[1]}
              alt="Casa para venda 2"
              onClick={() => handleClickImage(CasaParaVenda2Array, 3)}
            />
            <img
              src={CasaParaVenda2Array[5]}
              alt="Casa para venda 2"
              onClick={() => handleClickImage(CasaParaVenda2Array, 5)}
            />
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
