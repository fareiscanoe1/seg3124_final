import { Link } from "react-router-dom";
import CustomButton from "./Button";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <nav className="d-flex justify-content-between align-items-center py-4">
      <Link to="/">
        <strong className="fs-4">MyRecipeBook</strong>
      </Link>
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/explore-recipes">
          <h1 className="fs-5 me-4 mt-1 nav-head">Explore Recipes</h1>
        </Link>
        <Link to="/faq">
          <h1 className="fs-5 me-4 mt-1 nav-head">Faqs</h1>
        </Link>
        <CustomButton btnLink="/share-recipe">Share Recipe</CustomButton>
        <Form.Select
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-pink-2 ms-4"
          style={{ width: "135px" }}
        >
          <option value="">Language</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </Form.Select>
      </div>
    </nav>
  );
};

export default Navbar;
