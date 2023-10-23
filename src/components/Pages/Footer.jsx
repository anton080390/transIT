import Grid from "@mui/material/Grid";
import "./footer.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

function Footer() {
  const phoneNumber = "+380503948155";
  const emailAddress = "atkachenko@gmail.com";
  const companyDescription = "Наші контакти";
  return (
    <Grid container spacing={1} className="grid-container">
      <Grid item xs={12}>
        <p className="company-description">{companyDescription}</p>
      </Grid>
      <Grid item xs={12} className="contacts">
        <div>
          <a href={`tel:${phoneNumber}`} className="contact-link">
            <PhoneIcon className="icon" />
            <span>380503948155</span>
          </a>
        </div>
        <div>
          <a href={`mailto:${emailAddress}`} className="contact-link">
            <EmailIcon className="icon" />
            <span>atkachenko@gmail.com</span>
          </a>
        </div>
      </Grid>
      <Grid item xs={12}>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.124270444609!2d-73.9874991844984!3d40.75889697932387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f745c72bfbf%3A0x847db23852754e54!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1609759856259!5m2!1sen!2sus"
          width="100%"
          height="200"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </Grid>
    </Grid>
  );
}

export default Footer;
