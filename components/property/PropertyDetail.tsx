import BookingSection from "./BookingSection";
import { Property } from "@/interfaces";
import ReviewSection from "./ReviewSection";
import SimilarProperties from "@/components/property/SimilarProperties";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const PropertyDetail: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6">
      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left section (info) */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold">{property.name}</h1>

          <div className="flex items-center space-x-2 mt-2">
            <span className="text-yellow-500">{property.rating} stars</span>
            <span>
              {property.address.city}, {property.address.country}
            </span>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <img
              src={property.image}
              alt={property.name}
              className="col-span-2 w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Description */}
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Description</h2>
            <p>{property.description}</p>
          </div>

          {/* Amenities */}
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">What this place offers</h2>
            <ul className="flex flex-wrap gap-2 mt-2">
              {property.category.map((amenity, index) => (
                <li key={index} className="bg-gray-200 px-3 py-1 rounded-md">
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Review Section */}
          <ReviewSection reviews={property.reviews} />
        </div>

        {/* Right Section - Booking */}
        <div>
          <BookingSection price={property.price} />
        </div>
      </div>

      {/* Similar Properties Section */}
      <SimilarProperties properties={PROPERTYLISTINGSAMPLE} />
    </div>
  );
};

export default PropertyDetail;
