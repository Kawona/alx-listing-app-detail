import React from "react";
import { Property } from "@/interfaces";

type SimilarPropertiesProps = {
    properties: Property[];
};

export default function SimilarProperties({ properties }: SimilarPropertiesProps) {
    return (
        <div className="mt-10">
            <h3 className="text-2xl font-semiold mb-4">Similar Properties</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property, index) => (
                    <div
                        key={index}
                        className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                    >
                        <img src={property.image}
                            alt={property.name}
                            className="w-full h-448 oject-cover"
                        />

                        <div className="p-4">
                            <h4 className="font-semibold text-lg">{property.name}</h4>
                            <p className="text-gray-600 text-sm">
                                {property.address.city}, {property.address.country}
                            </p>
                            <p className="text-green-600 font-bold mt-2">${property.price} / night</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}