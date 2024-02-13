import { Carousel } from "react-responsive-carousel";
import "./AboutUs.scss";

interface Props {
  hasTitle?: boolean;
  StageTitle: string;
  subtitle: string;
  paragraph: string;
  children: React.ReactNode;
  isCarouselInner?: boolean;
}

export const AboutUs = ({
  hasTitle,
  StageTitle,
  subtitle,
  paragraph,
  children,
  isCarouselInner,
}: Props) => {
  return (
    <div className="about-container" id="about-us">
      <div className="about-content">
        <div className="about-informations layout-padding">
          {hasTitle && <h1 className="title">Como fazemos?</h1>}
          <h1 className={`stage-title ${!hasTitle ? "with-spacement" : ""}`}>
            {StageTitle}
          </h1>
          <h2>{subtitle}</h2>
          <p>{paragraph}</p>
        </div>
        <div className="about-assets">
          {isCarouselInner ? (
            children
          ) : (
            <Carousel showThumbs={false}>
              {children as React.ReactChild[]}
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
};
