import "./FormSection.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

export const FormSection = () => {
  return (
    <div className="form-container">
      <div className="form-content">
        <h1 className="title-content">Faça um orçamento!</h1>
        <div className="form-fields-container">
          <input type="text" placeholder="Nome" className="form-field" />
          <input type="text" placeholder="E-mail" className="form-field" />
          <input type="text" placeholder="Telefone" className="form-field" />
          <input
            type="text"
            placeholder="Selecione um serviço"
            className="form-field"
          />
          <input placeholder="Endereço da obra" className="form-field" />
          <input placeholder="Metragem aprox. (em m²)" className="form-field" />
          <textarea
            rows={5}
            cols={40}
            placeholder="Informações Adicionais"
            className="form-field text-area-container"
          />
          <button className="form-button">Enviar</button>
        </div>
      </div>
      <span className="vr"></span>
      <div className="socials-content">
        <h1 className="title-socials">Fale Conosco!</h1>
        <div className="socials-icons">
          <div className="buceta">
            <MailOutlineIcon className="social-icon" />
            <p>convivioarquitetura@gmail.com</p>
          </div>
          <div  className="buceta">
            <InstagramIcon className="social-icon" />
            <p>@convivioarquitetura</p>
          </div>
          <div  className="buceta">
            <WhatsAppIcon className="social-icon" />
            <p>Thiago - 6199913244</p>
          </div>
          <div  className="buceta">
            <WhatsAppIcon className="social-icon" />
            <p>Luana - 6199913244</p>
          </div>
          <div  className="buceta">
            <PlaceOutlinedIcon className="social-icon" />
            <p>
              Qi 27, Bloco A, Ed. Guara Shopping, sala 212, Guara II - DF Cep:
              71060280
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
