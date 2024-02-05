import { faPenRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Services.scss";

export const Services = () => {
  return (
    <div className="services-container">
      <div className="services-content">
        <div className="wraper">
          <div className="title-container">
            <FontAwesomeIcon
              icon={faPenRuler}
              color="white"
              fontSize={"19px"}
            />
            <h1>Projetos de arquitetura</h1>
          </div>
          <div className="data-container">
            <p>
              Elaboração de projetos de arquitetura, interiores, paisagismo e
              urbanismo.
            </p>
          </div>
        </div>
        <div className="wraper">
          <div className="title-container">
            <FontAwesomeIcon
              icon={faPenRuler}
              color="white"
              fontSize={"19px"}
            />
            <h1>Projetos complementares</h1>
          </div>
          <div className="data-container">
            <p>
              Desenvolvimento de projetos estruturais e complementares
              desenvolvidos pos engenheiros habilitados.
            </p>
          </div>
        </div>
        <div className="wraper">
          <div className="title-container">
            <FontAwesomeIcon
              icon={faPenRuler}
              color="white"
              fontSize={"19px"}
            />
            <h1>Design de interiores</h1>
          </div>
          <div className="data-container">
            <p>
              Elaboração de projetos de design, voltados à arquitetura de
              interiores.
            </p>
          </div>
        </div>
        <div className="wraper">
          <div className="title-container">
            <FontAwesomeIcon
              icon={faPenRuler}
              color="white"
              fontSize={"19px"}
            />
            <h1>Consultoria</h1>
          </div>
          <div className="data-container">
            <p>
              Prestamos consultoria para compra de imóveis, compra de materiais
              de construção e acabamentos finos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
