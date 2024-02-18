import "./Layout.scss";

interface Props {
  children: React.ReactNode;
  backgroundImage?: string;
  id?: string;
  projectSection?:boolean;
  ref?:any;
  backgroundColor?: string;
  isBannerFooter?: boolean;
}

export const Layout = ({
  children,
  backgroundImage,
  ref,
  projectSection,
  backgroundColor,
  id,
  isBannerFooter
}: Props) => {
  return (
    <div
      ref={ref}
      className={`layout-container ${ projectSection ? "projects-section" : ""} ${isBannerFooter ? "banner-footer-responsive" : ""}`}
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
