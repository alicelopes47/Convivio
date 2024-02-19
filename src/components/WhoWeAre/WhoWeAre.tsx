import "./WhoWeAre.scss";
import WhoWeAreImage from "../../assets/whoweare/whoweare.png";
import ConvivioImage from "../../assets/whoweare/a-convivio.png";
import ConvivioImageMobile from "../../assets/whoweare/whoweare-mobile.png";

interface Props {
  type: number;
}

export const WhoWeAre = ({ type }: Props) => {
  return type === 1 ? (
    <div className="who-container" id="who-us">
      <div className="who-content">
        <div className="who-informations layout-padding">
          <div className="title white-title">Quem somos?</div>
          <div className="informations-container">
            <div className="information">
              <h1>Luana Morais</h1>
              <p>
                Arquiteta e pós graduada em gerenciamento de obras. Tem vasta
                experiência com móveis planejados, projetos de casas de alto
                padrão e edificações em altura.
              </p>
            </div>
            <div className="information">
              <h1>Thiago Lopes</h1>
              <p>
                Arquiteto e pós graduado em arquitetura hospitalar. Apresenta
                ampla experiência com iluminação de alto padrão. Destaca-se na
                concepção de projetos de interiores, sendo especialista em cores
                e texturas.
              </p>
            </div>
          </div>
        </div>
        <div className="who-assets">
          <img alt="imagem convivio" src={WhoWeAreImage} />
        </div>
      </div>
    </div>
  ) : (
    <div className="who-container" id="who-us">
      <div className="who-content">
        <div className="who-informations layout-padding">
          <div className="title white-title">A Convívio</div>
          <div className="informations-container">
          <div className="information">
            <p>
              A Convívio é fruto do nosso conviver. Somos um casal de arquitetos
              apaixonados pelo nosso ofício, e um pelo outro. Então decidimos
              agregar isso tudo para proporcionar o que temos de melhor a
              oferecer aos nossos clientes, juntos!
            </p>
          </div>
          <div className="information">
            <p>
              A Luana é o lado racional, mais técnica e focada na execução dos
              projetos. O Thiago mais criativo, se concentra na concepção e em
              captar às ideias dos clientes. Juntos formamos o melhor time para
              concretizar os seus sonhos!
            </p>
          </div>
          </div>
        </div>
        <div className="who-assets type-2-desktop">
          <img alt="imagem convivio" src={ConvivioImage} />
        </div>
        <div className="who-assets type-2-mobile">
          <img alt="imagem convivio" src={ConvivioImageMobile} />
        </div>
      </div>
    </div>
  );
};
