import "./ProjectSection.scss";

interface Props {
  name: string;
  Area: string;
  Localizacao: string;
  Descricao: string;
  Detalhes: string;
  hasTitle?: boolean;
}

export const ProjectSection = ({
  name,
  Area,
  Localizacao,
  hasTitle,
  Descricao,
  Detalhes,
}: Props) => {
  return (
    <div className="project-data layout-padding">
      {hasTitle && <h1 className="title">Projetos</h1>}
      <div className={`data-container ${!hasTitle ? 'data-padding' : ''}`}>
        <h1 className="project-name">{name}</h1>
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
    </div>
  );
};
