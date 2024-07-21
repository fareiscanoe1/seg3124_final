import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomButton = ({ children, btnLink, classes }) => {
  return (
    <Link to={btnLink}>
      <Button variant="dark" className={ `px-4 py-2 btn-bg-dark ${classes}`} aria-label="button">
        {children}
      </Button>
    </Link>
  );
};

export default CustomButton;
