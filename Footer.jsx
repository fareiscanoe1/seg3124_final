import { Container } from "react-bootstrap";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="btn-bg-dark mt-5 py-5">
      <Container className="text-center text-white">
        <p>
          &copy; {new Date().getFullYear()} MyRecipeBook. All rights reserved.
        </p>
        <div className="d-flex align-items-center justify-content-center gap-4 fs-5 text-gray">
          <a href="https://www.facbook.com/" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <BsInstagram />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
