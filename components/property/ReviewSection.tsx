import React from "react";

type Review = {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
};

type ReviewSectionProps = {
  reviews: Review[];
};

export default function ReviewSection({ reviews }: ReviewSectionProps) {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>

      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4 mb-4 flex items-start space-x-4"
          >
            {/* Avatar */}
            <img
              src={review.avatar}
              alt={review.name}
              className="w-12 h-12 rounded-full object-cover"
            />

            {/* Review details */}
            <div>
              <p className="font-semibold">{review.name}</p>
              <p className="text-yellow-500 text-sm">
                {"⭐".repeat(review.rating)} ({review.rating})
              </p>
              <p className="text-gray-700 mt-2">{review.comment}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
