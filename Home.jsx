import { useTranslation } from "react-i18next";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../components/Button";
import Testimonials from "../components/Testimonials";
import foodImg from "../images/food.png";
import food2 from "../images/food2.jpg";
import food10 from "../images/food10.jpg";
import food5 from "../images/food5.jpg";
import food6 from "../images/food6.jpg";
import food12 from "../images/food12.jpg";
import food15 from "../images/food15.jpg";
import { Link } from "react-router-dom";

const foodsList = [
  {
    id: 1,
    name: "Spicy Pasta",
    img: food12,
  },
  {
    id: 2,
    name: "Vegetable Blizz",
    img: food5,
  },
  {
    id: 3,
    name: "Spicy Fish",
    img: food6,
  },
  {
    id: 4,
    name: "Vegetable Beef",
    img: food15,
  },
  {
    id: 5,
    name: "Beef Burger with Chips",
    img: food2,
  },
  {
    id: 6,
    name: "Vegetable Spaghetti",
    img: food10,
  },
];

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* -----Main content----- */}
      <div className="main-title text-center">
        <strong>
          {t("homeTitlePart1")} <br /> {t("homeTitlePart2")}
        </strong>
      </div>
      <p className="text-muted fs-5 text-center mt-4">{t("homeIntro")}</p>
      <div className="text-center mt-4">
        <CustomButton btnLink="/share-recipe">{t("homeBtn")}</CustomButton>
      </div>
      <img
        src={foodImg}
        alt="foods in a plate"
        className="img-fluid mt-5 rounded"
      />

      {/* --------Trending Recipes--------- */}

      <div className="mt-5">
        <h1 className="fs-3 fw-bolder">{t("recipeHead")}</h1>
        <p className="text-muted mt-1">{t("recipePara")}</p>
        <Row>
          {foodsList.map((item) => (
            <Col lg={2}>
              <Link
                to="/recipe-details"
                state={{ name: item.name, img: item.img }}
              >
                <div style={{ width: "100%", height: "120px" }}>
                  <img
                    src={item.img}
                    alt="food"
                    className="img-fluid object-fit-cover h-100 rounded"
                  />
                </div>
                <h1 className="fs-6 mt-3">{item.name}</h1>
                <p className="text-muted" style={{ fontSize: "13px" }}>
                  {item.info}
                </p>
              </Link>
            </Col>
          ))}
        </Row>
      </div>

      {/* ----Testimonials---- */}
      <div className="mt-5">
        <strong className="fs-3">{t("testimonials")}</strong>
      </div>
      <p className="text-muted fs-5">{t("testimonialsPara")}</p>
      <Testimonials />
    </div>
  );
};

export default Home;
