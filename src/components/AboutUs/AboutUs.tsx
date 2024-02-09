import "./AboutUs.scss";


interface Props {
    hasTitle?: boolean;
    StageTitle: string;
    subtitle: string;
    paragraph: string;
    children: React.ReactNode;
}

export const AboutUs = ({hasTitle, StageTitle, subtitle, paragraph, children}: Props) => {
  return (
    <div className="about-container" id="about-us">
      <div className="about-content">
        <div className="about-informations">
          {hasTitle && <h1 className="about-us-title">Como fazemos?</h1>}
          <h1 className={`stage-title ${!hasTitle ? 'with-spacement': ''}`}>{StageTitle}</h1>
          <h2>{subtitle}</h2>
          <p>
            {paragraph}
          </p>
        </div>
        <div className="about-assets">
          {children}
        </div>
      </div>
    </div>
  );
};
