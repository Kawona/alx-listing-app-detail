import Link from "next/link";
import { Property } from "@/interfaces";

type PropertyCardProps = {
    property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
    return (
        <Link
            href={`/property/{property.name}`}
            className="block border rounded-lg shadow-sm hover:shadow-md transition p-4 bg-white"
        >
            {/* Property Image*/}
            <img
                src={property.image}
                alt={property.name}
                className="w-full h-8 object-cover rounded-md mb-4"
            />

            {/* Property Info */}
            <h2 className="text-xl font-semibold">{property.name}</h2>
            <p className="text-gray-500 text-sm">
                {property.address.city}, {property.address.country}
            </p>
            <p className="text-green-600 font-semibold mt-2">
                ${property.price}/night
            </p>
            <p className="text-yellow-500 text-sm">⭐ {property.rating}</p>
        </Link>
    )
}