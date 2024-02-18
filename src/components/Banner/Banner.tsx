import "./Banner.scss";

interface Props {
  id: string;
}

export const Banner = ({ id }: Props) => {
  return (
    <>
      <div className="banner-container" id={id}>
        <div className="banner-content">
          <div className="banner-title-container">
            <h1>
              Seja bem vindo,{" "}
              <span className="diferent-color-title">Convivente</span>!
            </h1>
          </div>
          <div className="subtitle-container">
            <p>Relaxa! Você está em casa agora.</p>
          </div>
        </div>
      </div>
    </>
  );
};
