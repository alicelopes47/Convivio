//@ts-nocheck
import "./FormSection.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const FormSection = () => {
  const form = useRef();

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2zgd0ip", "template_60fz9an", form.current, {
        publicKey: "T_bMvP6JDqkfVpfZs",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="form-container layout-padding">
      <div className="form-content">
        <h1 className="title">Faça um orçamento!</h1>
        <form ref={form} onSubmit={sendEmail} className="form-fields-container">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            id="name"
            className="form-field"
          />
          <input
            type="text"
            name="from_email"
            id="from_email"
            placeholder="E-mail"
            className="form-field"
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Telefone"
            className="form-field"
          />
          <select name="service" className="form-field">
            <option value="">Selecione um serviço</option>
            <option value="servico1">Projeto de arquitetura</option>
            <option value="servico2">Projeto complementar</option>
            <option value="servico3">Projeto de interiores</option>
            <option value="servico4">Consultoria</option>
          </select>
          <input
            placeholder="Endereço da obra"
            name="address"
            id="address"
            className="form-field"
          />
          <input
            name="meters"
            id="meters"
            placeholder="Metragem aprox. (em m²)"
            className="form-field"
          />
          <textarea
            rows={5} // aumenta a altura
            cols={50}
            id="message"
            name="message"
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
