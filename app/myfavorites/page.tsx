import PropertyList from "../components/properties/PropertyList";
import { getUserId } from "../lib/actions"

const MyFavoritesPage = async () => {
    const userId = getUserId();

    if (!userId) {
        return (
            <main className="max-w-[1500px] max-auto px-6 py-12">
                <p>Necesitas registrarte</p>
            </main>
        )
    }

    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className='my-6 text-2xl'>My properties</h1>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                <PropertyList 
                    favorites={true}
                />
            </div>
        </main>
    )

}

export default MyFavoritesPage;