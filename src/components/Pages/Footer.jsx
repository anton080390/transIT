import Grid from "@mui/material/Grid";
import "./footer.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import React from "react";
import emailjs from "emailjs-com";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function Footer() {
  const phoneNumber = "+380503948155";
  const emailAddress = "atkachenko@gmail.com";
  const companyDescription = "Наші контакти:";
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kdgfocc",
        "template_713i9v7",
        e.target,
        "fmoGGolBajMSGggZs"
      )
      .then((result) => {
        console.log("Email sent successfully!", result.text);

        e.target.reset();
        const { name, email, message } = e.target.elements;

        const data = {
          from_name: name.value,
          from_email: email.value,
          message: message.value,
        };

        console.log("Имя:", name.value);
        console.log("Email:", email.value);
        console.log("Сообщение:", message.value);
      })
      .catch((error) => {
        console.error("Error sending email:", error.text);
      });
  };

  return (
    <Grid container spacing={2} className="grid-container">
      <Grid item xs={12}>
        <p className="company-description">{companyDescription}</p>
      </Grid>

      <Grid
        item
        xs={12}
        md={9}
        className="contacts"
        sx={{ textAlign: "center" }}
      >
        <div className="contact-block">
          <p>Логистика:</p>
          <a href={`tel:${phoneNumber}`} className="contact-link">
            <PhoneIcon className="icon" />
            <span>380503948155</span>
          </a>
        </div>
        <div className="contact-block">
          <p>Лабораторія:</p>
          <a href={`tel:${phoneNumber}`} className="contact-link">
            <PhoneIcon className="icon" />
            <span>380503948155</span>
          </a>
        </div>
        <div className="contact-block">
          <p>Складське зберігання:</p>
          <a href={`tel:${phoneNumber}`} className="contact-link">
            <PhoneIcon className="icon" />
            <span>380503948155</span>
          </a>
        </div>
        <div className="contact-block">
          <p>Перевалка вантажів:</p>
          <a href={`tel:${phoneNumber}`} className="contact-link">
            <PhoneIcon className="icon" />
            <span>380503948155</span>
          </a>
        </div>
        <div className="contact-block">
          <p>Експедиторські послуги:</p>
          <a href={`tel:${phoneNumber}`} className="contact-link">
            <PhoneIcon className="icon" />
            <span>380503948155</span>
          </a>
        </div>
        <div className="contact-block">
          <p>Бухгалтерія:</p>
          <a href={`tel:${phoneNumber}`} className="contact-link">
            <PhoneIcon className="icon" />
            <span>380503948155</span>
          </a>
        </div>
        <div className="contact-block">
          <p>Наша пошта:</p>
          <a href={`mailto:${emailAddress}`} className="contact-link">
            <EmailIcon className="icon" />
            <span>atkachenko@gmail.com</span>
          </a>
        </div>
      </Grid>

      <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
        <p style={{ fontSize: "2rem" }}>Напищіть нам</p>
        <form onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="from_name"
              placeholder="Ваше имя"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="from_email"
              placeholder="Ваш Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Сообщение" required />
          </div>
          <div className="form-group">
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              className="submit"
            >
              Отправить
            </Button>
          </div>
        </form>
      </Grid>

      <Grid item xs={12}>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47620.19988611016!2d28.501171930117295!3d45.336189021350606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b73f822bb361dd%3A0x9878ecbe91cb7182!2z0JfQtdGA0L3QvtCy0LAg0LvQsNCx0L7RgNCw0YLQvtGA0ZbRjyDQotCe0JIg0KLRgNCw0L3RгSDQkNC5INCi0ZY!5e1!3m2!1sru!2sua!4v1698782149118!5m2!1sru!2sua"
          width="100%"
          height="300px"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Grid>
    </Grid>
  );
}

export default Footer;
