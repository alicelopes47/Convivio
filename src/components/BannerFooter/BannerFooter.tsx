import BannerFooterImage from "../../assets/banner-footer-image.png";
import './BannerFooter.scss';

export const BannerFooter = () => {

  return (
    <div className="banner-footer">
      <div className="description-container">
        <p>
          “Ser arquiteto é mais do que projetar espaços físicos; é ser um
          artista que transforma sonhos em realidade, equilibrando estética,
          funcionalidade e inovação para criar ambientes que inspiram e
          aprimoram a vida das pessoas.”
        </p>
        <p className="quote">Thiago Lopes</p>
      </div>
      <div className="image-container">
        <img
          src={BannerFooterImage}
          className="banner-footer-image"
          alt="arquiteto"
        />
      </div>
    </div>
  );
};
