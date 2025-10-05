import Link from "next/link";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { Property } from "@/interfaces/index";

export default function HomePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Properties</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property: Property, index: number) => (
          <Link
            key={index}
            href={`/property/${property.name}`}
            className="block border rounded-xl shadow-sm hover:shadow-lg transition bg-white overflow-hidden"
          >
            {/* Property Image */}
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Property Info */}
            <h2 className="text-xl font-semibold">{property.name}</h2>
            <p className="text-gray-500 text-sm">
              {property.address.city}, {property.address.country}
            </p>
            <p className="text-green-600 font-semibold mt-2">${property.price}/night</p>
            <p className="text-yellow-500 text-sm">⭐ {property.rating}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
