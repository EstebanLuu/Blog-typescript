import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer__container">
      <p>&#169; Typescript Blog All rights reserved</p>
      <div className="social">
        <a href="#">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="#">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="#">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="#">
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
