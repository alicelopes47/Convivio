import { Carousel } from "react-responsive-carousel";
import { ReactChild } from "react";
import "./CarouselProject.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface Props {
  children?: ReactChild[] | undefined;
}

export const CarouselProject = ({ children }: Props) => {
  return (
    <Carousel
      axis="vertical"
      showThumbs={false}
      dynamicHeight={true}
      infiniteLoop
      interval={4000}
      transitionTime={700}
      showStatus={false}
      className="carrousel-project-container"
      showIndicators={false}
      renderArrowNext={(clickHandler, selectedItem) => {
        return (
          <button onClick={clickHandler} className="button-next">
            <ExpandMoreIcon  className="arrow-next" />
          </button>
        );
      }}
      renderArrowPrev={(clickHandler) => {
        return (
          <button onClick={clickHandler} className="button-prev">
              <KeyboardArrowUpIcon  className="arrow-prev" />
          </button>
        );
      }}
    >
      {children}
    </Carousel>
  );
};
