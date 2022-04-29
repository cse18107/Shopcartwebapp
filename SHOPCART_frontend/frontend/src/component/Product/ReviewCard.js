import { Rating } from "@material-ui/lab";
import React from "react";
import profilePng from "../../images/Profile.png";

const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  console.log(review);

  return (
    <div className="reviewCard">
      <img src={review.profile && review.profile.length>0?review.profile:profilePng} alt="User" style={{width:"50px",height:"50px",borderRadius:"100%"}}/>
      <p>{review.name}</p>
      <Rating {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
