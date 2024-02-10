import "./Layout.scss";

interface Props {
  children: React.ReactNode;
  backgroundImage?: string;
  title?: string;
  whiteTitle?: boolean;
  id?: string;
  noSpacement?: boolean;
  backgroundColor?: string;
  isBannerFooter?: boolean;
}

export const Layout = ({
  children,
  backgroundImage,
  title,
  backgroundColor,
  whiteTitle,
  id,
  noSpacement,
  isBannerFooter
}: Props) => {
  return (
    <div
      className={`layout-container ${noSpacement ? "no-spacement" : ""} ${whiteTitle ? "services-section" : ""} ${isBannerFooter ? "banner-footer-responsive" : ""}`}
      id={id}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "60%",
        backgroundColor: backgroundColor,
      }}
    >
      {" "}
      {/* Colocar children dentro dessa div */}
      <div className={`children`}>
        {title && (
          <h1 className={`layout-title ${whiteTitle ? "white" : ""}`}>
            {title}
          </h1>
        )}
        {children}
      </div>
    </div>
  );
};
