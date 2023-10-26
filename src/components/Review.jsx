import React, { useCallback, useState } from "react";

const Review = ({ productId }) => {
  const [userDisplayName, setUserDisplayName] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = useCallback( 
    async(e) => {

    e.preventDefault()
    await fetch("http://localhost:1337/api/reviews", {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            data:{
                userDisplayName: userDisplayName,
                body:review,
                product:productId

        }})
    })
    setUserDisplayName("")
    setReview("")

  }, [userDisplayName, review] )
  console.log(productId);
  return (
    <div>
      <form className="flex flex-col max-w-md gap-3 mt-10" onSubmit={handleSubmit}>
        <input
          className="bg-gray-100 rounded-md p-4"
          type="string"
          placeholder="Enter Your Name"
          onChange={(e) => setUserDisplayName(e.target.value)}
        />
        <textarea
          className="bg-gray-100 rounded-md p-4"
          placeholder="Your Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button  className="bg-blue-500 text-white rounded-md self-start p-2" type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default Review;
