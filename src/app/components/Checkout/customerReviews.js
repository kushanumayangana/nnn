import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";

const CustomerReviews = () => {
  const { reviews } = useContext(StoreContext);

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  // Get the reviews to display (either first 3 or all depending on showAll)
  const reviewsToShow = showAll ? reviews : reviews.slice(0, 3);

  return (
    <div className="mb-6">
      <div className="">
        <h1 className=" text-[25px] font-bold text-[#FF4C00] leading-tight 2xl:text-[17px] xl:text-[14px] pr-2 py-2">
          What Our Customers Are Saying
        </h1>
      </div>

      {/* No Reviews Message */}
      {reviews.length === 0 ? (
        <p className="text-center text-gray-500 text-[18px] font-medium px-2 py-1 2xl:leading-5 xl:leading-3 2xl:text-[15px] xl:text-[12px]">
          No reviews yet. Be the first to share your thoughts!
        </p>
      ) : (
        <>
          {/* Reviews */}
          {reviewsToShow.map((review, index) => (
            <div
              key={index}
              className="p-2 mb-3 bg-white rounded-lg shadow-md max-w-[294px]"
            >
              <div className="flex items-start">
                {/* User Icon */}
                <div className="flex items-center justify-center w-12 h-12 mr-4 bg-gray-300 rounded-full">
                  <img
                    src="Test/Home/Profile.png"
                    alt="User Profile"
                    className="w-full h-full rounded-full"
                  />
                </div>

                {/* Review Content */}
                <div>
                  {/* Name and Rating */}
                  <div className="flex flex-col space-y-[-8px]">
                    <h2 className="ml-[2px] text-lg font-bold">
                      {review.name}
                    </h2>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-xl ${
                            i < (review.rating || 0)
                              ? "text-[#FF4C00]"
                              : "text-black"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-start ml-1">
                {/* Review Text */}
                <p className="text-[18px] text-gray-600 max-h-32 break-words">
                  <i>"{review.review}"</i>
                </p>
              </div>
            </div>
          ))}

          {/* See More Button */}
          {reviews.length > 3 && (
            <div className="mt-4 text-center">
              <button
                onClick={toggleShowAll}
                className="text-[#FF4C00] font-semibold"
              >
                {showAll ? "See Less" : "See More"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CustomerReviews;
