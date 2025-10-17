import React from "react";
import RightCardContent from "./Section1/RightCardContent";

const RightCard = () => {
  return (
    <div className="h-full overflow-hidden relative w-80 rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src="https://media.istockphoto.com/id/1746066315/photo/portrait-of-a-businesswoman-standing-in-the-office.jpg?s=612x612&w=0&k=20&c=YbgR6JbWuqut2dsji9FybRDK6X4YnnJLmMFQjAx9Qqw="
      />
      <RightCardContent />
    </div>
  );
};

export default RightCard;
