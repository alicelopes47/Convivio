import "./Section.scss";
import image1 from "../../assets/casa-terrea/image1.jpg";
import image2 from "../../assets/casa-terrea/image2.jpg";
import image3 from "../../assets/casa-terrea/image3.jpg";
import image4 from "../../assets/casa-terrea/image4.jpg";
import { Carousel } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
//@ts-ignore
import Lightbox from "react-awesome-lightbox";
import { useInView } from "react-intersection-observer";
import { comeFromLeft, ComeToFront } from "../../App";

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
  const [openImage, setOpenImage] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const imagesArray = [image1, image2, image3, image4];

  const handleClickImage = (index: number) => {
    setImageIndex(index);
    setOpenImage(true);
  };

  const handleCloseImage = () => {
    setOpenImage(false);
    setImageIndex(0);
  };

  return (
    <div className="section-container">
      {openImage && (
        <Lightbox
          images={imagesArray}
          startIndex={imageIndex}
          onClose={() => handleCloseImage()}
        />
      )}
      <div className="section-data">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={control}
          variants={comeFromLeft}
          className="data-container"
        >
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
        </motion.div>

        <motion.div
          ref={ref}
          variants={ComeToFront}
          initial="hidden"
          className="image-section-container"
          animate={control}
        >
          <img
            className="image1"
            onClick={() => handleClickImage(0)}
            src={image1}
            alt=""
          />
          <img
            className="image2"
            onClick={() => handleClickImage(2)}
            src={image3}
            alt=""
          />
          <img
            className="image3"
            onClick={() => handleClickImage(3)}
            src={image4}
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};
