import React from "react";
import { useRouter } from "next/router";
const [id] = () => {
  const router = useRouter();
  const { id } = router.query;
  const cardData = data[id];

  return (
    <div>
      {/* Display card details */}
      <p>{cardData.name}</p>
      <p>{cardData.title}</p>
      <p>{cardData.article}</p>
      {/* Additional content */}
    </div>
  );
};

export default [id];
