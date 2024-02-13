import "./App.scss";
import bgImage1 from "./assets/image-14.png";
import bgImage2 from "./assets/image-16.png";
import bgImage3 from "./assets/image-15.png";
import { Banner } from "./components/Banner/Banner";
import { Carousel } from "react-responsive-carousel";
import { Navbar } from "./components/Navbar/Navbar";
import {
  casaPaulistaFoto1,
  casaPaulistaFoto2,
  casaPaulistaFoto3,
  casaPaulistaFoto4,
  casaPaulistaFoto5,
  casaPaulistaFoto6,
  VideoProjetos,
} from "./assets/index";
import ComoFazemos2 from "./assets/projetos/comofazemos2.jpg";
import ComoFazemos3 from "./assets/projetos/comofazemos3.jpg";
import { CarouselProject } from "./ProjectSection/CarouselProject";
import { Services } from "./components/Services/Services";
import { Layout } from "./components/Layout/Layout";
import { BannerFooter } from "./components/BannerFooter/BannerFooter";
import ServicesBackground from "./assets/bg-services.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, EffectCreative } from "swiper/modules";
import { useEffect, useState } from "react";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { WhoWeAre } from "./components/WhoWeAre/WhoWeAre";
import { FormSection } from "./FormSection/FormSection";
import { ExternalCarousel } from "./components/ExternalCarousel/ExternalCarousel";
import { ProjectSection } from "./ProjectSection/ProjectSection";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export const ComeToFront = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

function App() {
  const [section, setSection] = useState(0);
  const [swiper, setSwiper] = useState<any | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);	

  useEffect(() => {
    setTimeout(() => {
      if (section === 0) {
        setSection(1);
      }
    }, 8000);
  });

  return (
    <div className="App">
      <Navbar />
      <Swiper
        className="swiper-container"
        onSwiper={setSwiper}
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        effect="creative"
        onSlideChange={(swiper: any) => setActiveIndex(swiper.activeIndex)}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, "-20%", -1],
          },
          next: {
            translate: [0, "100%", 0],
          },
        }}
        modules={[Mousewheel, EffectCreative]}
      >
        <SwiperSlide key={'banner'}>
          <Layout id="banner" backgroundColor="#EDE8E1">
            <Banner id="inicio" />
          </Layout>
        </SwiperSlide>
        <SwiperSlide key={'banner-footer'}>
          <Layout id="banner-footer" isBannerFooter backgroundColor="#EDE8E1">
            <BannerFooter />
          </Layout>
        </SwiperSlide>
        <SwiperSlide key={'services'}>
        <Layout
          id="servicos"
          backgroundImage={ServicesBackground}
          title="Nossos serviços"
          whiteTitle
        >
          <Services />
        </Layout>

        </SwiperSlide>
      </Swiper>
        
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
            <div>
              <img src={casaPaulistaFoto1} alt="casa-terrea" />
              <img src={casaPaulistaFoto2} alt="casa-terrea" />
              <img src={casaPaulistaFoto3} alt="casa-terrea" />
            </div>
            <div>
              <img src={casaPaulistaFoto1} alt="casa-terrea" />
              <img src={casaPaulistaFoto2} alt="casa-terrea" />
              <img src={casaPaulistaFoto3} alt="casa-terrea" />
            </div>
            <div>
              <img src={casaPaulistaFoto1} alt="casa-terrea" />
              <img src={casaPaulistaFoto2} alt="casa-terrea" />
              <img src={casaPaulistaFoto3} alt="casa-terrea" />
            </div>
          </CarouselProject>
        </Layout>
        <Layout projectSection backgroundImage={bgImage1}>
          <ProjectSection
            Area="Reforma de aprox. 100m²"
            Localizacao="Guará II"
            Detalhes="Reforma da cozinha, sala de TV, quarto do casal e quarto do filho. Reforma da cozinha, sala de TV, quarto do casal e quarto do filho."
            Descricao="Reforma de alguns cômodos da casa, com o objetivo de modernizar e trazer mais conforto."
            name="Casa Vivência"
          />
          <CarouselProject>
            <div>
              <img src={casaPaulistaFoto1} alt="casa-terrea" />
              <img src={casaPaulistaFoto2} alt="casa-terrea" />
              <img src={casaPaulistaFoto3} alt="casa-terrea" />
            </div>
            <div>
              <img src={casaPaulistaFoto1} alt="casa-terrea" />
              <img src={casaPaulistaFoto2} alt="casa-terrea" />
              <img src={casaPaulistaFoto3} alt="casa-terrea" />
            </div>
            <div>
              <img src={casaPaulistaFoto1} alt="casa-terrea" />
              <img src={casaPaulistaFoto2} alt="casa-terrea" />
              <img src={casaPaulistaFoto3} alt="casa-terrea" />
            </div>
          </CarouselProject>
        </Layout>
        <Layout projectSection backgroundImage={bgImage1}>
          <ProjectSection
            name="Casa Vicente Pires"
            Area="Aprox. 240m²"
            Localizacao="Vicente Pires"
            Detalhes="contempla 3 suítes, piscina, gourmet integrado, sala de estar e jantar com pé direito duplo, escritório para home office, 2 lavabos sendo um interno e externo, paredes em cobogo, bancadas no cinza castelo escovado, jabuticabeira na ilha da bancada."
            Descricao=" Este projeto se desenvolve a partir de um conceito aberto, que valoriza a iluminação natural e preza pela boa ventilação de todos os ambientes. Além disso, possibilita a vista para paisagem, integrando a casa ao ambiente natural. integrando a casa ao ambiente natural"
          />
          <CarouselProject>
            <div>
              <img src={casaPaulistaFoto1} alt="casa-terrea" />
              <img src={casaPaulistaFoto2} alt="casa-terrea" />
              <img src={casaPaulistaFoto3} alt="casa-terrea" />
            </div>
            <div>
              <img src={casaPaulistaFoto1} alt="casa-terrea" />
              <img src={casaPaulistaFoto2} alt="casa-terrea" />
              <img src={casaPaulistaFoto3} alt="casa-terrea" />
            </div>
            <div>
              <img src={casaPaulistaFoto1} alt="casa-terrea" />
              <img src={casaPaulistaFoto2} alt="casa-terrea" />
              <img src={casaPaulistaFoto3} alt="casa-terrea" />
            </div>
          </CarouselProject>
        </Layout>
      </ExternalCarousel>
      <ExternalCarousel>
        <Layout noSpacement id="about-us">
          <AboutUs
            hasTitle
            StageTitle="1ª Etapa"
            subtitle="Levantamento de Dados e Informações"
            paragraph="Aqui, após o preenchimento do questionário, que nós enviaremos ao cliente, elaboramos o plano de necessidades, desenvolvendo fluxos e croquis a fim de capturar as ideias iniciais do projeto. Alem disso, serão feitas medições no local, documentadas através de fotografias. Ao londo desta fase, apresentamos imagens e projetos de referência para contribuir na tomada de decisões e na melhor compreensão dos gostos e necessidades do cliente."
          >
            <video controls loop autoPlay>
              <source
                className="source-video"
                src={VideoProjetos}
                type="video/mp4"
              />
            </video>
          </AboutUs>
        </Layout>
        <Layout noSpacement id="a">
          <AboutUs
            StageTitle="2ª Etapa"
            subtitle="Estudo Preliminar"
            paragraph="Nesta fase, após o briefing inicial e a análise das referências, elaboramos uma proposta que inclui uma planta de layout, na qual detalhamos as locações das paredes e mobiliários, exibindo a disposição dos móveis, medidas e imagens de referência. Além disso, apresentamos imagens e vídeos 3D que simulam digitalmente o projeto finalizado de acordo com as ideias e informações apresentadas até aqui. Realizamos também, reuniões para ajustar a proposta de acordo com suas preferências. "
          >
            <img src={ComoFazemos2} alt="about-us" />
          </AboutUs>
        </Layout>
        <Layout noSpacement id="a">
          <AboutUs
            StageTitle="3ª Etapa"
            subtitle="Projeto Executivo"
            paragraph="Depois da aprovação do projeto em 3D e alinhamento de todos os pontos, avançamos para os detalhamentos e o caderno executivo. Nesta etapa, elaboramos um documento abrangente com todos os detalhes essenciais para a execução bem-sucedida do projeto. A flexibilidade continua, permitindo ajustes para garantir a plena satisfação dos clientes. Iniciamos a seleção de orçamentos e opções para revestimentos, mobiliários, texturas e adornos, proporcionando escolhas alinhadas às preferências individuais."
          >
            <img src={ComoFazemos3} alt="about-us" />
          </AboutUs>
        </Layout>
      </ExternalCarousel>
      <Layout noSpacement id="who-we-are" backgroundColor="#86AB85">
        <WhoWeAre type={1} />
      </Layout>
      <Layout noSpacement id="who-we-are" backgroundColor="#597C59">
        <WhoWeAre type={2} />
      </Layout>
      <Layout noSpacement id="orcamento">
        <FormSection />
      </Layout>
    </div>
  );
}

export default App;
