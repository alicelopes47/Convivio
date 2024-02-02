import "./Section.scss";
import image1 from "../../assets/image-1.png";
import image2 from "../../assets/image-2.png";
import image3 from "../../assets/image-3.png";
import image4 from "../../assets/image-4.png";
import image5 from "../../assets/image-5.png";

interface Props {
  image: string;
  title: string;
  Area: string;
  Localizacao: string;
  Descricao: string;
  Detalhes: string;
}

export const Section = ({
  image,
  title,
  Area,
  Localizacao,
  Descricao,
  Detalhes,
}: Props) => {
  return (
    <div className="section-container">
      <div className="section-data">
        <div className="data-container">
          <h1 className="section-title">{title}</h1>
          <h1>
            Área: <span>{Area}</span>
          </h1>
          <h1>
            Localização: <span>{Localizacao}</span>
          </h1>
          <h1>
            Descrição: <span>{Descricao}</span>
          </h1>
          <h1>
            Detalhes: <span> {Detalhes}</span>
          </h1>
        </div>
        <div className="image-section-container">
          <img className="image1" src={image1} alt="" />
          <img className="image2" src={image3} alt="" />
          <img className="image3" src={image4} alt="" />
          <img className="image4" src={image2} alt="" />
        </div>
      </div>
    </div>
  );
};
