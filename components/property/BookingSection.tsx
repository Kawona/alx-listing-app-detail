import { useState } from "react";

type BookingSectionProps = {
    price: number;
};

export default function BookingSection({ price }: BookingSectionProps) {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    const getTotalNights = () => {
        if (!checkIn || !checkOut) return 0;
        const inDate = new Date(checkIn);
        const outDate = new Date(checkOut);
        const diffTime = outDate.getTime() - inDate.getTime();
        return diffTime > 0 ? diffTime / (1000 * 60 * 60 * 24) : 0;
    };

    const totalNights = getTotalNights();
    const totalPrice = totalNights * price;

    return (
        <div className="bg-white p-6 shadow-md rounded-lg sticky top-4">
            <h3 className="text-xl font-semibold">${price}per night</h3>

            {/* check-in */}
            <div className="mt-">
                <label className="block text-sm font-medium">Check-in</label>
                <input
                    type="date"
                    className="border rounded-md p-2 w-full mt-2"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                />
            </div>

            {/* ceck-out */}
            <div className="mt-4">
                <label className="block text-sm font-medium">Check-out</label>
                <input
                    type="date"
                    className="border rounded-md p-2 w-full mt-2"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                />
            </div>

            {/* Total */}
            <div className="mt-4">
                <p>
                    Total payment: {" "}
                    <strong>
                        {totalNights > 0 ? `$${totalPrice}` : "Select dates"}
                    </strong>
                </p>
            </div>

            {/* Button*/}
            <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                Reserve now
            </button>
        </div>
    )
}