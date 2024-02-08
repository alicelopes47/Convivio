import "./App.scss";
import SectionImage from "./assets/project-1.png";
import bgImage1 from "./assets/image-14.png";
import bgImage2 from "./assets/image-16.png";
import bgImage3 from "./assets/image-15.png";
import { Banner } from "./components/Banner/Banner";
import { Carousel } from "react-responsive-carousel";
import { Navbar } from "./components/Navbar/Navbar";
import { Section } from "./components/Section/Section";
//@ts-ignore
import ProjetoVideo from "./assets/projetos_video.mp4";
import casaPaulistaFoto1 from "./assets/casa-paulista/casa-paulista1.jpg";
import casaPaulistaFoto2 from "./assets/casa-paulista/casa-paulista2.jpg";
import casaPaulistaFoto3 from "./assets/casa-paulista/casa-paulista3.jpg";
import casaPaulistaFoto4 from "./assets/casa-paulista/casa-paulista4.jpg";
import casaPaulistaFoto5 from "./assets/casa-paulista/casa-paulista5.jpg";
import casaPaulistaFoto6 from "./assets/casa-paulista/casa-paulista6.jpg";
//@ts-ignore
import casaPaulistaVideo1 from "./assets/casa-paulista/casa-paulista-video1.mp4";
import image3 from "./assets/casa-terrea/image3.jpg";
import image4 from "./assets/casa-terrea/image4.jpg";
import image1 from "./assets/casa-terrea/image1.jpg";
import { Services } from "./components/Services/Services";
import { Layout } from "./components/Layout/Layout";
import { BannerFooter } from "./components/BannerFooter/BannerFooter";
import ServicesBackground from "./assets/bg-services.png";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import CircleIcon from "@mui/icons-material/Circle";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { useEffect, useState } from "react";
//@ts-ignore
import Lightbox from "react-awesome-lightbox";
export const ComeToFront = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

export const comeFromLeft = {
  visible: { width: "60%", x: 0 },
  hidden: { width: "0vw", x: "-30vw" },
};

function App() {
  const [section, setSection] = useState(0);
  const [openImage, setOpenImage] = useState(false);
  const [imageToOpen, setImageToOpen] = useState("");

  const handleClickImage = (image: string) => {
    setOpenImage(true);
    setImageToOpen(image);
  };

  useEffect(() => {
    setTimeout(() => {
      if (section === 0) {
        setSection(1);
      }
    }, 8000);
  });

  return (
    <div className="App">
      <Navbar onClickProjetos={() => setSection(0)} />
      <Banner />
      <Layout>
        <BannerFooter />
      </Layout>
      {openImage && (
        <Lightbox image={imageToOpen} onClose={() => setOpenImage(false)} />
      )}
      <Layout
        id="servicos"
        backgroundImage={ServicesBackground}
        title="Nossos serviços"
        whiteTitle
        darkerBgChildren
      >
        <Services />
      </Layout>

      <Carousel
        useKeyboardArrows
        showArrows={false}
        infiniteLoop
        swipeable
        stopOnHover
        transitionTime={1000}
        autoPlay
        selectedItem={section}
        interval={8000}
        showThumbs={false}
        showIndicators
        renderIndicator={(clickHandler, selectedItem) => {
          return (
            <>
              {selectedItem ? (
                <CircleIcon
                  fontSize="medium"
                  className="carousel-icon"
                  onClick={clickHandler}
                />
              ) : (
                <PanoramaFishEyeIcon
                  fontSize="medium"
                  className="carousel-icon"
                  onClick={clickHandler}
                />
              )}
            </>
          );
        }}
      >
        <Layout backgroundImage={bgImage1} title="Projetos" id="projetos">
          {" "}
          <Section
            title="Casa Paulista"
            Area="Aprox. 450m²"
            Localizacao="Jardim Botânico - DF"
            Descricao="AGUARDANDO"
            Detalhes="Sala de estar integrada com jantar; Cozinha; Espaço Gourmet; Escritório; Sala íntima no andar superior; Fireplace; Piscina; Garagem p/ 2 carros."
            image={SectionImage}
          >
            <Carousel
              axis="vertical"
              showThumbs={false}
              transitionTime={1000}
              infiniteLoop
              showIndicators={false}
              showStatus={false}
              renderArrowNext={(clickHandler, selectedItem) => {
                return (
                  <>
                    <div
                      className="grid-section-buttons-container"
                      onClick={clickHandler}
                    >
                      <div className="grid-section-buttons-inner">
                        <ChangeHistoryIcon className="icon-grid-section-next" />
                      </div>
                    </div>
                  </>
                );
              }}
              renderArrowPrev={(clickHandler) => {
                return (
                  <>
                    <div
                      className="grid-section-buttons-container"
                      onClick={clickHandler}
                    >
                      <div className="grid-section-buttons-inner">
                        <ChangeHistoryIcon className="icon-grid-section-prev" />
                      </div>
                    </div>
                  </>
                );
              }}
              className="image-section-carousel-container"
            >
              <div className="image-carousel-section">
                <img
                  src={casaPaulistaFoto1}
                  alt="casa-terrea"
                  onClick={() => handleClickImage(casaPaulistaFoto1)}
                />
                <img
                  src={casaPaulistaFoto2}
                  alt="casa-terrea"
                  onClick={() => handleClickImage(casaPaulistaFoto2)}
                />
                <img
                  src={casaPaulistaFoto3}
                  alt="casa-terrea"
                  onClick={() => handleClickImage(casaPaulistaFoto3)}
                />
              </div>
              <div className="image-carousel-section">
                <img
                  src={casaPaulistaFoto4}
                  alt="casa-terrea"
                  onClick={() => handleClickImage(casaPaulistaFoto4)}
                />
                <img
                  src={casaPaulistaFoto5}
                  alt="casa-terrea"
                  onClick={() => handleClickImage(casaPaulistaFoto5)}
                />
                <img
                  src={casaPaulistaFoto6}
                  alt="casa-terrea"
                  onClick={() => handleClickImage(casaPaulistaFoto6)}
                />
              </div>
            </Carousel>
          </Section>
        </Layout>
        <Layout backgroundImage={bgImage2}>
          <Section
            Area="Reforma de aprox. 100m²"
            Localizacao="Guará II"
            Detalhes="AGUARDANDO"
            Descricao="Reforma da cozinha, sala de TV, quarto do casal e quarto do filho.Reforma da cozinha, sala de TV, quarto do casal e quarto do filhoReforma da cozinha, sala de TV, quarto do casal e quarto do filho"
            image={SectionImage}
            title="Casa Vivência"
          >
            <Carousel
              axis="vertical"
              transitionTime={1000}
              showThumbs={false}
              infiniteLoop
              showIndicators={false}
              showStatus={false}
              renderArrowNext={(clickHandler, selectedItem) => {
                return (
                  <>
                    <div
                      className="grid-section-buttons-container"
                      onClick={clickHandler}
                    >
                      <div className="grid-section-buttons-inner">
                        <ChangeHistoryIcon className="icon-grid-section-next" />
                      </div>
                    </div>
                  </>
                );
              }}
              renderArrowPrev={(clickHandler) => {
                return (
                  <>
                    <div
                      className="grid-section-buttons-container"
                      onClick={clickHandler}
                    >
                      <div className="grid-section-buttons-inner">
                        <ChangeHistoryIcon className="icon-grid-section-prev" />
                      </div>
                    </div>
                  </>
                );
              }}
              className="image-section-carousel-container"
            >
              <div className="image-carousel-section">
                <img
                  src={casaPaulistaFoto1}
                  alt="casa-terrea"
                  onClick={() => handleClickImage(casaPaulistaFoto1)}
                />
                <img
                  src={casaPaulistaFoto2}
                  alt="casa-terrea"
                  onClick={() => handleClickImage(casaPaulistaFoto2)}
                />
                <img
                  src={casaPaulistaFoto3}
                  alt="casa-terrea"
                  onClick={() => handleClickImage(casaPaulistaFoto3)}
                />
              </div>
              <div className="image-carousel-section">
                <img
                  src={casaPaulistaFoto4}
                  alt="casa-terrea"
                  onClick={() => handleClickImage(casaPaulistaFoto4)}
                />
                <img
                  src={casaPaulistaFoto5}
                  alt="casa-terrea"
                  onClick={() => handleClickImage(casaPaulistaFoto5)}
                />
                <img
                  src={casaPaulistaFoto6}
                  alt="casa-terrea"
                  onClick={() => handleClickImage(casaPaulistaFoto6)}
                />
              </div>
            </Carousel>
          </Section>
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
          >
            <Carousel
              renderArrowNext={(clickHandler, selectedItem) => {
                return (
                  <>
                    <div
                      className="grid-section-buttons-container"
                      onClick={clickHandler}
                    >
                      <div className="grid-section-buttons-inner">
                        <ChangeHistoryIcon className="icon-grid-section-next" />
                      </div>
                    </div>
                  </>
                );
              }}
              renderArrowPrev={(clickHandler) => {
                return (
                  <>
                    <div
                      className="grid-section-buttons-container"
                      onClick={clickHandler}
                    >
                      <div className="grid-section-buttons-inner">
                        <ChangeHistoryIcon className="icon-grid-section-prev" />
                      </div>
                    </div>
                  </>
                );
              }}
              axis="vertical"
              transitionTime={1000}
              className="image-section-carousel-container"
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
            >
              <div className="image-carousel-section">
                <img src={image1} alt="casa-terrea" />
                <img src={image3} alt="casa-terrea" />
                <img src={image4} alt="casa-terrea" />
              </div>
              <div className="image-carousel-section">
                <img src={image1} alt="casa-terrea" />
                <img src={image3} alt="casa-terrea" />
                <img src={image4} alt="casa-terrea" />
              </div>
              <div className="image-carousel-section">
                <img src={image1} alt="casa-terrea" />
                <img src={image3} alt="casa-terrea" />
                <img src={image4} alt="casa-terrea" />
              </div>
            </Carousel>
          </Section>
        </Layout>
      </Carousel>
    </div>
  );
}

export default App;
