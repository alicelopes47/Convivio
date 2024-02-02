import "./Banner.scss";
import BannerFooter from '../../assets/banner-footer-image.png';
import { useEffect, useState } from "react";
import image1 from '../../assets/banner-image.jpg';
import image2 from '../../assets/banner-image2.png';
import image3 from '../../assets/banner-image3.png';


export const Banner = () => {


  return (
    <>
    <div className="banner-container" id="inicio">
      <div className="banner-content">
        <h1>
          Seja bem vindo,{" "}
          <span className="diferent-color-title">Convivente</span>!
        </h1>
        <div className="subtitle-container">
          <p>Relaxa! Você está em casa agora.</p>
        </div>
      </div>
    </div>
    <div className="banner-footer layout">
        <div className="description-container">
        <p>
          “Ser arquiteto é mais do que projetar espaços físicos; é ser um
          artista que transforma sonhos em realidade, equilibrando estética,
          funcionalidade e inovação para criar ambientes que inspiram e
          aprimoram a vida das pessoas.”
        </p>
        <p className="quote">
            Thiago Lopes
          </p>
        </div>
        <div className="image-container"> 
        <img src={BannerFooter} className='banner-footer-image' alt="arquiteto" />
        </div>
      </div>
      
      </>
  );
};
