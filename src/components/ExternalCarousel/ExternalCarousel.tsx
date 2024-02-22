import { ReactChild } from "react";
import './ExternalCarousel.scss'
import { Carousel } from "react-responsive-carousel"
import CircleIcon from "@mui/icons-material/Circle";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

interface Props {
    children?: ReactChild[] | undefined;
    isProject?: boolean;
}

export const ExternalCarousel = ({children, isProject}: Props) => { 
    return (
        <Carousel
        useKeyboardArrows
        showArrows={false}
        className="external-carousel-container"
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
                  className={`carousel-icon ${isProject ? "is-projects" : ""}`}
                  onClick={clickHandler}
                />
              ) : (
                <PanoramaFishEyeIcon
                  fontSize="medium"
                  className={`carousel-icon ${isProject ? "is-projects" : ""}`}
                  onClick={clickHandler}
                />
              )}
            </>
          );
        }}
        >
            {children}
        </Carousel>
    )
}
