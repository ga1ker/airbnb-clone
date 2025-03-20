export type Property = {
    id: string;
    price_per_night: number;
}

interface ReservationSideBarProps {
    property: Property
}

const ReservationSideBar: React.FC<ReservationSideBarProps> = ({property}) => {
    return(
        <aside className="p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">${property.price_per_night} por noche</h2>

            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label htmlFor="" className="block font-bold text-xs">Guests</label>
                <select name="" id="" className="w-full -ml-1 text-sm">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
            </div>  

            <div className="w-full mb-6 py-6 text-center text-white bg-airbnb rounded-md hover:bg-airbnb-dark">
                Book
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>$200 * 4 nights</p>
                <p>$800</p>
            </div>
            <div className="mb-4 flex justify-between align-center">
                <p>Djangobnb fee</p>
                <p>$40</p>
            </div>
            <hr />
            <div className="mb-4 flex justify-between align-center font-bold">
                <p>Total</p>
                <p>$840</p>
            </div>
        </aside>
    )
}

export default ReservationSideBar;