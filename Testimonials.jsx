import { FaStar } from "react-icons/fa";
import avatar1 from "../images/person.jpeg";
import avatar2 from "../images/person1.jpeg";
import avatar3 from "../images/person2.jpeg";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonialList = [
    {
      id: 1,
      name: "Mason",
      review: t("review1"),
      avatarImg: avatar1,
    },
    {
      id: 2,
      name: "Alex",
      review: t("review2"),
      avatarImg: avatar2,
    },
    {
      id: 3,
      name: "Smith",
      review: t("review3"),
      avatarImg: avatar3,
    },
  ];
  return (
    <div className="d-flex gap-3 mt-4">
      {testimonialList.map((item) => (
        <div lg={4} key={item.id} className="p-3 box-shadow rounded">
          <div className="d-flex justify-content-end gap-1 star-color">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="mt-3">
            <strong>"{item.review}"</strong>
          </div>
          <div className="d-flex align-items-center gap-3 mt-2">
            <img
              src={item.avatarImg}
              alt="Avatar of people"
              className="img-fluid rounded-circle"
              width="45"
              height="45"
            />
            <strong className="fs-6 mt-1">{item.name}</strong>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
