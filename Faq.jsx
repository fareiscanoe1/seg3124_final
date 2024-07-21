import { useState } from "react";
import { Accordion } from "react-bootstrap";
import CustomButton from "../components/Button";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    id: 1,
    question: "Is MyRecipe free to use?",
    answer:
      "Yes, MyRecipe is free to use. However, we offer a premium membership that provides additional features such as ad-free browsing, exclusive recipes, and more.",
  },
  {
    id: 2,
    question: "How do I search for recipes?",
    answer:
      "You can search for recipes by using the search bar at the top of the homepage. Simply enter keywords, ingredients, or the name of the dish you're looking for. You can also filter results by cuisine, dietary restrictions, meal type, and more.",
  },
  {
    id: 3,
    question: "Can I save my favorite recipes?",
    answer:
      "Yes, you can save your favorite recipes by clicking the 'Save' button on the recipe page. Saved recipes can be found in your personal recipe collection, accessible from your profile.",
  },
];

const Faq = () => {
  const navigate = useNavigate();

  return (
    <div style={{ paddingBottom: "5rem" }}>
      <div onClick={() => navigate(-1)} className="mt-4">
        <CustomButton>Back</CustomButton>
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <div style={{ minWidth: "600px" }}>
          <h1 className="text-center">Frequesntly Asked Questions</h1>

          <div className="mt-5">
            <Accordion style={{ width: "600px" }}>
              {faqs.map((item) => (
                <Accordion.Item eventKey={item.id}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
