import "./Section.scss";
//@ts-nocheck

import image2 from "../../assets/casa-terrea/image2.jpg";
import image3 from "../../assets/casa-terrea/image3.jpg";
import image4 from "../../assets/casa-terrea/image4.jpg";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
//@ts-ignore
import Lightbox from "react-awesome-lightbox";
import { useInView } from "react-intersection-observer";
import { on } from "events";

interface CarouselProps {
  // other props...
  children?: React.ReactChild[] | null;
  // other props...
}
interface Props {
  image: string;
  title: string;
  Area: string;
  Localizacao: string;
  Descricao: string;
  children?: React.ReactNode;
  Detalhes: string;
}

export const Section = ({
  title,
  Area,
  Localizacao,
  Descricao,
  Detalhes,
  children
}: Props) => {

  return (
    <div
      className="section-container"
    >     
      <Lightbox
      image={image4}
      />
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
        <>
          {children}
        </>
      </div>
    </div>
  );
};
