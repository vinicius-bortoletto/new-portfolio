import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import logo from "../../images/icons/logo.svg";
import shape from "../../images/illustrations/shape-bottom-mobile.svg";

// Components
import Button from "../../components/Button";

// Styles
import { Container } from "./styles";

function Footer({ lang, cv }) {
  const enContent = (
    <>
      <img className="logo" src={logo} alt="vinicius bortoletto's logo" />

      <ul className="social-icons">
        <li>
          <a href="https://github.com/vinicius-bortoletto/">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/vinicius-bortoletto/">
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </a>
        </li>
        <li>
          <a href="mailto:ovinibortoletto@gmail.com?subject=website contact">
            <FontAwesomeIcon icon="envelope" />
          </a>
        </li>
      </ul>

      <a href={cv.en}>
        <Button className="download" icon="file-download" text="Download CV" />
      </a>

      <p className="copyright">Created and designed by Vinicius Bortoletto</p>

      <img src={shape} alt="abstract shape" className="shape" />
    </>
  );
  const brContent = (
    <>
      <img className="logo" src={logo} alt="logo de vinicius bortoletto" />

      <ul className="social-icons">
        <li>
          <a href="https://github.com/vinicius-bortoletto/">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/vinicius-bortoletto/">
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </a>
        </li>
        <li>
          <a href="mailto:ovinibortoletto@gmail.com?subject=website contact">
            <FontAwesomeIcon icon="envelope" />
          </a>
        </li>
      </ul>

      <a href={cv.br}>
        <Button
          className="download"
          icon="file-download"
          text="Baixar currículo"
        />
      </a>

      <p className="copyright">Criado e desenvolvido por Vinicius Bortoletto</p>

      <img src={shape} alt="forma abstrata" className="shape" />
    </>
  );

  return <Container>{lang === "en" ? enContent : brContent}</Container>;
}

export default Footer;
