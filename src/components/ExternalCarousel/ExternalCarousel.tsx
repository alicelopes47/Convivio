import { ReactChild } from "react";
import './ExternalCarousel.scss'
import { Carousel } from "react-responsive-carousel"
import CircleIcon from "@mui/icons-material/Circle";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

interface Props {
    children?: ReactChild[] | undefined;
}

export const ExternalCarousel = ({children}: Props) => { 
    return (
        <Carousel
        useKeyboardArrows
        showArrows={false}
        className="external-carousel-container"
        showThumbs={false}
        showStatus={false}
        renderIndicator={(clickHandler, selectedItem) => {
          return (
            <>
              {selectedItem ? (
                <CircleIcon
                  fontSize="medium"
                  className="carousel-icon"
                  onClick={clickHandler}
                />
              ) : (
                <PanoramaFishEyeIcon
                  fontSize="medium"
                  className="carousel-icon"
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
