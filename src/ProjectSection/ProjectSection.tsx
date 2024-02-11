import './ProjectSection.scss'

interface Props {
    name: string;
    Area: string;
    Localizacao: string;
    Descricao: string;
    children?: React.ReactNode;
    Detalhes: string;
  }

export const ProjectSection = ({name, Area, Localizacao, Descricao, children, Detalhes}: Props) => { 
    return (
        <div
        className="project-container"
      >     
        <div className="project-data">
          <h1 className='project-title'>Projetos</h1>
          <div className="data-container">
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
          <>
            {children}
          </>
        </div>
      </div>
    )
}