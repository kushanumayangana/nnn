import React, { useState, useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { FaStar } from "react-icons/fa";;

const AddReviewForm = () => {
  const { addReview, reviews } = useContext(StoreContext); // Assuming `reviews` is an array of review objects.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
    rating: 0,
  });
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStarClick = (starValue) => {
    setFormData({ ...formData, rating: starValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user has already submitted a review
    const userReviewExists = reviews.some(
      (review) => review.email === formData.email
    );

    if (userReviewExists) {
      setError("You can only submit one review.");
      return;
    }

    if (formData.rating < 1 || formData.rating > 5) {
      alert("Please select a rating between 1 and 5 stars.");
      return;
    }

    addReview({
      name: formData.name,
      review: formData.review,
      rating: formData.rating,
      email: formData.email, // Save the user's email for future checks
    });

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    setFormData({
      name: "",
      email: "",
      review: "",
      rating: 0,
    });
    setError(""); // Clear any previous errors
  };

  return (
    <div className="relative max-w-md mx-auto">
      <h1 className=" text-2xl font-bold text-black 2xl:text-[21px] xl:text-[20px]">Tell Us What You Think</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name Field */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
            className="w-full p-2 text-sm border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
            className="w-full p-2 text-sm border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Review Field */}
        <div>
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            placeholder="Write a Review"
            required
            rows="4"
            className="w-full p-2 text-sm border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </div>

        {/* Star Rating Section */}
        <div className="">
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Select Rating
          </label>
          <div className="flex">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <span
                  key={index}
                  onClick={() => handleStarClick(starValue)}
                  className={`cursor-pointer text-2xl ${formData.rating >= starValue ? "text-orange-500" : "text-gray-400"}`}
                >
                  <FaStar className="size-5"/>
                </span>
              );
            })}
          </div>
        </div>

        {/* Error Message */}
        {error && <p className="text-sm text-red-500">{error}</p>}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-[#FF4C00] rounded-lg hover:bg-orange-600 xl:text-[15px]"
          >
            Add a Review
          </button>
        </div>
      </form>

      {/* Popup Message */}
      {showPopup && (
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 p-4 bg-[#FF4C00] text-white rounded-lg shadow-lg">
          <p className="text-sm font-semibold text-center">
            🎉 Review added successfully! Thank you for your feedback.
          </p>
        </div>
      )}
    </div>
  );
};

export default AddReviewForm;
