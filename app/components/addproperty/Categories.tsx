import Image from "next/image";


interface CategoriesProps {
    dataCategory: string;
    setCategory: (category:string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory
}) => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
            <div 
            onClick={() => setCategory('Beach')}
            className={`cursor-pointer pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Beach' ? 'border-slate-900' : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-200`}>
                <Image src="/icn_category_beach.jpeg" alt="Category" width={20} height={20} />
                <span className='text-xs'>Beach</span>
            </div>
            <div 
            onClick={() => setCategory('Villas')}
            className={`cursor-pointer pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Villas' ? 'border-slate-900' : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-200`}>
                <Image src="/icn_category_beach.jpeg" alt="Category" width={20} height={20} />
                <span className='text-xs'>Villas</span>
            </div>
            <div 
            onClick={() => setCategory('Cabins')}
            className={`cursor-pointer pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Cabins' ? 'border-slate-900' : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-200`}>
                <Image src="/icn_category_beach.jpeg" alt="Category" width={20} height={20} />
                <span className='text-xs'>Cabins</span>
            </div>
            <div 
            onClick={() => setCategory('Tiny homes')}
            className={`cursor-pointer pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Tiny homes' ? 'border-slate-900' : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-200`}>
                <Image src="/icn_category_beach.jpeg" alt="Category" width={20} height={20} />
                <span className='text-xs'>Tiny homes</span>
            </div>
        </div>
    )
}

export default Categories;