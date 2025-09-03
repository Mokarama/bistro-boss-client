import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    fetch("rating.json")
      .then((res) => res.json())
      .then((data) => setRatings(data));
  }, []);
  return (
    <div>
      <SectionTitle
        subHading={"What Our Clients Say"}
        hading={"Testimonials"}
      ></SectionTitle>

      <div className="">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {ratings.map((rating) => (
            <SwiperSlide key={rating._id}>


              <div className="m-24 flex flex-col items-center">

                <Rating style={{ maxWidth: 180 }} value={rating.rating} readOnly />

                <p>{rating.details}</p>
                <h3 className="text-2xl text-orange-400">{rating.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
