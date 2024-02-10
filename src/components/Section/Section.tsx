import "./Section.scss";

interface Props {
  title: string;
  Area: string;
  Localizacao: string;
  Descricao: string;
  children?: React.ReactNode;
  Detalhes: string;
}

export const Section = ({
  title,
  Area,
  Localizacao,
  Descricao,
  Detalhes,
  children
}: Props) => {

  return (
    <div
      className="section-container"
    >     
      <div className="section-data">
        <div className="data-container">
          <h1 className="section-title">{title}</h1>
          <h1>
            Área: <span>{Area}</span>
          </h1>
          <h1>
            Localização: <span>{Localizacao}</span>
          </h1>
          <h1>
            Descrição: <span>{Descricao}</span>
          </h1>
          <h1>
            Detalhes: <span> {Detalhes}</span>
          </h1>
        </div>
        <>
          {children}
        </>
      </div>
    </div>
  );
};
