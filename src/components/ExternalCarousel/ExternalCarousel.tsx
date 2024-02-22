import { ReactChild } from "react";
import './ExternalCarousel.scss'
import { Carousel } from "react-responsive-carousel"
import CircleIcon from "@mui/icons-material/Circle";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Props {
    children?: ReactChild[] | undefined;
    isProject?: boolean;
}

export const ExternalCarousel = ({children, isProject}: Props) => { 
    return (
        <Carousel
        useKeyboardArrows
        showArrows={false}
        className={`carousel ${isProject ? "is-projects" : "is-not-projects"} external-carousel-container`}
        showThumbs={false}
        swipeable={false}
        transitionTime={700}
        showStatus={false}
        renderIndicator={(clickHandler, selectedItem) => {
          return (
            <>
              {selectedItem ? (
                <CircleIcon
                  fontSize="medium"
                  className={`carousel-icon`}
                  onClick={clickHandler}
                />
              ) : (
                <PanoramaFishEyeIcon
                  fontSize="medium"
                  className={`carousel-icon`}
                  onClick={clickHandler}
                />
              )}
            </>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => (
          <ArrowForwardIosIcon
            fontSize="large"
            className={`carousel-arrow ${isProject ? "" : "is-not-projects"}`}
            onClick={clickHandler}
          />
        )}
        renderArrowPrev={(clickHandler, hasPrev) => ( 
          <ArrowBackIosIcon
            fontSize="large"
            className={`carousel-arrow prev ${isProject ? "" : "is-not-projects"}`}
            onClick={clickHandler}  
          />
        )}
        >
            {children}
        </Carousel>
    )
}
