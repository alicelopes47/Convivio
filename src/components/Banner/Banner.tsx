import "./Banner.scss";

export const Banner = () => {
  return (
    <>
    <div className="banner-container" id="inicio">
      <div className="banner-content">
        <h1>
          Seja bem vindo,{" "}
          <span className="diferent-color-title">Convivente</span>!
        </h1>
        <div className="subtitle-container">
          <p>Relaxa! Você está em casa agora.</p>
        </div>
      </div>
    </div>
      </>
  );
};
