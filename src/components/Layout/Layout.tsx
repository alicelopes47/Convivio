import "./Layout.scss";

interface Props {
  children: React.ReactNode;
  backgroundImage?: string;
  id?: string;
  projectSection?:boolean;
  noSpacement?: boolean;
  backgroundColor?: string;
  isBannerFooter?: boolean;
}

export const Layout = ({
  children,
  backgroundImage,
  projectSection,
  backgroundColor,
  id,
  noSpacement,
  isBannerFooter
}: Props) => {
  return (
    <div
      className={`layout-container ${noSpacement ? "no-spacement" : ""} ${ projectSection ? "projects-section" : ""} ${isBannerFooter ? "banner-footer-responsive" : ""}`}
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
        {children}
      </div>
    </div>
  );
};
