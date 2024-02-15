import "./FormSection.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

export const FormSection = () => {
  return (
    <div className="form-container layout-padding">
      <div className="form-content">
        <h1 className="title">Faça um orçamento!</h1>
        <form
          action="mailto:brenno1254@gmail.com"
          className="form-fields-container"
          method="post"
        >
          <input
            type="text"
            name="Nome"
            placeholder="Nome"
            className="form-field"
          />
          <input
            type="text"
            name="Email"
            placeholder="E-mail"
            className="form-field"
          />
          <input
            type="text"
            name="telefone"
            placeholder="Telefone"
            className="form-field"
          />
          <select name="Serviço" className="form-field">
            <option value="">Selecione um serviço</option>
            <option value="servico1">Serviço 1</option>
            <option value="servico2">Serviço 2</option>
            <option value="servico3">Serviço 3</option>
          </select>
          <input
            placeholder="Endereço da obra"
            name="address"
            className="form-field"
          />
          <input
            name="Metros"
            placeholder="Metragem aprox. (em m²)"
            className="form-field"
          />
          <textarea
            rows={5} // aumenta a altura
            cols={50}
            name="Mensagem"
            placeholder="Informações Adicionais"
            className="text-area-container"
          />
          <button type="submit" className="form-button">
            Enviar
          </button>
        </form>
      </div>
      <span className="vr"></span>
      <div className="socials-content">
        <h1 className="title">Fale Conosco!</h1>
        <div className="socials-icons">
          <div className="social-wrapper">
            <MailOutlineIcon className="social-icon" />
            <p>convivioarquitetura@gmail.com</p>
          </div>
          <div className="social-wrapper">
            <InstagramIcon className="social-icon" />
            <p>@convivioarquitetura</p>
          </div>
          <div className="social-wrapper">
            <WhatsAppIcon className="social-icon" />
            <p>Thiago - 6199913244</p>
          </div>
          <div className="social-wrapper">
            <WhatsAppIcon className="social-icon" />
            <p>Luana - 6199913244</p>
          </div>
          <div className="social-wrapper">
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
