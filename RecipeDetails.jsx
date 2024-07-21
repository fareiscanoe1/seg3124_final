import { Button, Col, Row } from "react-bootstrap";
import CustomButton from "../components/Button";
import food1 from "../images/food9.jpg";
import Testimonials from "../components/Testimonials";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RecipeDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-5">
      <div className="d-flex align-items-center justify-content-between gap-3">
        <div onClick={() => navigate(-1)}>
          <CustomButton>Back</CustomButton>
        </div>
        <Button
          variant="primary"
          className={`px-4 py-2`}
          aria-label="button"
        >
          Save Recipe
        </Button>
      </div>

      <h1 className="recipe-title mt-4">{data?.name || "Tomato Basil Soup"}</h1>
      <p className="fs-5 text-muted text-center my-3">
        A hearty and flavorful dish, perfect for any time of the year
      </p>
      <div className="p-5">
        <img
          src={data?.img || food1}
          alt="food"
          className="img-fluid rounded-3"
        />

        <Row className="mt-5">
          <Col md={6}>
            <h1 className="fs-2 fw-bold">Ingredients:</h1>
            <p className="fs-5 mt-4">2 cans of crushed tomatoes</p>
            <p className="fs-5">1 cup chicken or vegetable broth</p>
            <p className="fs-5">1/2 cup fresh basil leaves</p>
            <p className="fs-5">2 cloves garlic, minced</p>
            <p className="fs-5">1 tbsp olive oil</p>
            <p className="fs-5">Salt and pepper to taste</p>
          </Col>
          <Col md={6}>
            <h1 className="fs-2 fw-bold">Steps:</h1>
            <p className="fs-5 mt-4">
              1.Heat olive oil in a large pot over medium heat.
            </p>
            <p className="fs-5">2.Add garlic and cook until fragrant.</p>
            <p className="fs-5">3.Stir in crushed tomatoes and broth.</p>
            <p className="fs-5">4.Bring to a simmer and cook for 20 minutes.</p>
            <p className="fs-5">
              5.Add basil leaves and blend the soup until smooth.
            </p>
            <p className="fs-5">6.Season with salt and pepper.</p>
            <p className="fs-5">
              7.Serve hot with a drizzle of olive oil and fresh basil for
              garnish.
            </p>
          </Col>
        </Row>
      </div>
      {/* ----Testimonials---- */}
      <h1 className="fs-3 mt-4 fw-bolder">User Testimonials</h1>
      <p className="text-muted fs-5">
        Discover what our community has to say about this recipe
      </p>
      <Testimonials />

      <div className="mt-5 text-center">
        <CustomButton btnLink="/recipe-feedback">Write a Review</CustomButton>
      </div>
    </div>
  );
};

export default RecipeDetails;
