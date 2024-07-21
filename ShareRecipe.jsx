import { Col, Form, Row } from "react-bootstrap";
import CustomButton from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShareRecipe = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    ingredients: "",
    steps: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.ingredients)
      newErrors.ingredients = "Ingredients is required";
    if (!formData.steps)
      newErrors.steps = "Steps is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log(formData);
      navigate(-1);
    }
  };

  return (
    <div className="mt-5 d-flex justify-content-center">
      <div style={{ minWidth: "500px" }}>
        <h1 className="fw-bold text-center">Share Your Favorite Recipe</h1>
        <p className="text-muted fs-5">
          Fill out the form below to share your favorite recipe with our
          community
        </p>
        <Form>
          <Row>
            <Col xs={6}>
              <Form.Group className="mb-3">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your first name"
                  name="firstName"
                  value={formData.firstName}
                  className={`${errors.firstName && "error-border"}`}
                  onChange={handleChange}
                />
                <p className="text-small text-danger mt-1">
                  {errors.firstName && errors.firstName}
                </p>
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className="mb-3">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your last name"
                  name="lastName"
                  value={formData.lastName}
                  className={`${errors.lastName && "error-border"}`}
                  onChange={handleChange}
                />
                <p className="text-small text-danger mt-1">
                  {errors.lastName && errors.lastName}
                </p>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={formData.email}
              className={`${errors.email && "error-border"}`}
              onChange={handleChange}
            />
            <p className="text-small text-danger mt-1">
              {errors.email && errors.email}
            </p>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter ingredients"
              name="ingredients"
              value={formData.ingredients}
              className={`${errors.ingredients && "error-border"}`}
              onChange={handleChange}
            />
            <p className="text-small text-danger mt-1">
              {errors.ingredients && errors.ingredients}
            </p>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Steps</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter steps"
              name="steps"
              value={formData.steps}
              className={`${errors.steps && "error-border"}`}
              onChange={handleChange}
            />
            <p className="text-small text-danger mt-1">
              {errors.steps && errors.steps}
            </p>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter description"
              name="description"
              value={formData.description}
              className={`${errors.description && "error-border"}`}
              onChange={handleChange}
            />
            <p className="text-small text-danger mt-1">
              {errors.description && errors.description}
            </p>
          </Form.Group>

          <div onClick={handleSubmit}>
            <CustomButton classes="w-full">Submit</CustomButton>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ShareRecipe;
