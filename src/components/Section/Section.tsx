import "./Section.scss";
import image1 from "../../assets/image-1.png";
import image2 from "../../assets/image-2.png";
import { motion, useAnimation } from "framer-motion";
import Motion from "framer-motion";
import { useEffect } from "react";
import image3 from "../../assets/image-3.png";
import image4 from "../../assets/image-4.png";
import { useInView } from "react-intersection-observer";
import { boxVariant } from "../../App";

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
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className="section-container">
      <h1 className="section-title">{title}</h1>
      <div className="section-data">
        <motion.div 
            ref={ref}
            initial={{ width: "0vw", x: "-50vw" }}
            animate={{ width: "50vw", x: 0 }}
            transition={{ duration: 1, origin: 1 }}
        className="data-container">
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
          variants={boxVariant}
          initial="hidden"
          className="image-section-container"
          animate={control}
        >
          <img className="image1" src={image1} alt="" />
          <img className="image2" src={image3} alt="" />
          <img className="image3" src={image4} alt="" />
          <img className="image4" src={image2} alt="" />
        </motion.div>
      </div>
    </div>
  );
};
