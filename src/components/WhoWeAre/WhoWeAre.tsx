import "./WhoWeAre.scss";
import WhoWeAreImage1 from '../../assets/whoweare/whoweare1.jpg'
import WhoWeAreImage2 from '../../assets/whoweare/whoweare2.jpg'
import WhoWeAreImage3 from '../../assets/whoweare/whoweare3.jpg'

interface Props {}

export const WhoWeAre = () => {
  return (
    <div className="who-container" id="who-us">
      <div className="who-content">
        <div className="who-informations">
        <div className="who-us-title">Quem somos?</div>
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
              concepção de projetos de interiores, sendo especialista em cores e
              texturas.
            </p>
          </div>
        </div>
        <div className="who-assets">
          <img src={WhoWeAreImage1} className="small" alt="Luana Morais" />
          <img src={WhoWeAreImage2} className="small" alt="Thiago Lopes" />
          <img src={WhoWeAreImage3} className="big" alt="Luana Morais e Thiago Lopes" />
        </div>
      </div>
    </div>
  );
};
