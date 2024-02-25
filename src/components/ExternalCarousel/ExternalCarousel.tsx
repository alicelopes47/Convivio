import { ReactChild, useState } from "react";
import "./ExternalCarousel.scss";
import { Carousel } from "react-responsive-carousel";
import CircleIcon from "@mui/icons-material/Circle";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props {
  children?: ReactChild[] | undefined;
}

export const ExternalCarousel = ({ children }: Props) => {
  const [isClickedPrev, setIsClickedPrev] = useState(false);
  const [isClickedNext, setIsClickedNext] = useState(false);

  const handleClickPrev = () => {
    setIsClickedPrev(true);
    setTimeout(() => {
      setIsClickedPrev(false);
    }, 300);
  };

  const handleClickNext = () => {
    setIsClickedNext(true);
    setTimeout(() => {
      setIsClickedNext(false);
    }, 300);
  }; //refactor this buttons, make it a component

  return (
    <Carousel
      useKeyboardArrows
      showArrows={false}
      className="external-carousel-container"
      showThumbs={false}
      swipeable={false}
      transitionTime={700}
      infiniteLoop
      showStatus={false}
      renderArrowNext={(clickHandler, hasNext) => (
        <div className="buttons-container" onClick={clickHandler}>
          <button
            className={isClickedNext ? "clicked" : ""}
            onClick={handleClickNext}
          >
            <ArrowForwardIosIcon
              fontSize="large"
              className={`carousel-arrow`}
            />
          </button>
        </div>
      )}
      renderArrowPrev={(clickHandler, hasPrev) => (
        <div className="buttons-container prev" onClick={clickHandler}>
          <button
            className={isClickedPrev ? "clicked" : ""}
            onClick={handleClickPrev}
          >
            <ArrowForwardIosIcon
              fontSize="large"
              className={`carousel-arrow prev`}
            />
          </button>
        </div>
      )}
    >
      {children}
    </Carousel>
  );
};
