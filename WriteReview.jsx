import { useState } from "react";
import { Form } from "react-bootstrap";
import CustomButton from "../components/Button";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const WriteReview = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  return (
    <>
      <div onClick={() => navigate(-1)} className="mt-4">
        <CustomButton>Back</CustomButton>
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <div style={{ minWidth: "500px" }}>
          <h1>Write a review</h1>
          <Form className="mt-5">
            <Form.Group className="mb-4">
              <Form.Label>Review</Form.Label>
              <div>
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        style={{ display: "none" }}
                      />
                      <FaStar
                        className="star"
                        color={
                          ratingValue <= (hover || rating)
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                        size={30}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </div>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Feedback</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write a Feedback"
              />
            </Form.Group>

            <CustomButton classes="w-full">Submit</CustomButton>
          </Form>
        </div>
      </div>
    </>
  );
};

export default WriteReview;
