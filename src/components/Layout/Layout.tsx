import "./Layout.scss";
import BannerFooter from "../../assets/banner-footer-image.png";
import { Children } from "react";

interface Props {
  children: React.ReactNode;
  backgroundImage?: string;
  title?: string;
  whiteTitle?: boolean;
  id?: string;
  darkerBgChildren?: boolean;
}

export const Layout = ({ children, backgroundImage, title, whiteTitle, id }: Props) => {
  return (
    <div
    className={`layout-container`}
    id={id} 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "60%",
      }}
    >
      {" "}
      {/* Colocar children dentro dessa div */}
      
      <div className={`children`}>
        {title && <h1 className={`layout-title ${whiteTitle ? 'white' : ''}`}>{title}</h1>}
        {children}
      </div>
    </div>
  );
};
