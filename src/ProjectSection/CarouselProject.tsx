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
      autoPlay={false}
      className="carrousel-project-container"
      showIndicators={false}
      renderArrowNext={(clickHandler, selectedItem) => {
        return (
          <>
            <ExpandMoreIcon onClick={clickHandler} className="arrow-next" />
          </>
        );
      }}
      renderArrowPrev={(clickHandler) => {
        return (
          <>
              <KeyboardArrowUpIcon onClick={clickHandler} className="arrow-prev" />
          </>
        );
      }}
    >
      {children}
    </Carousel>
  );
};
