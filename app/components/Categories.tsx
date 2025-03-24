'use client'

import { useState } from 'react';
import useSearchModal, {SearchQuery} from '../hooks/useSearchModal';
import Image from 'next/image';
const Categories = () => {
    const searchModal = useSearchModal()
    const [category, setCategory] = useState('');

    const _setCategory = (_category: string) => {
        setCategory(_category);

        const query: SearchQuery = {
            country: searchModal.query.country,
            checkIn: searchModal.query.checkIn,
            checkOut: searchModal.query.checkOut,
            guests: searchModal.query.guests,
            bedrooms: searchModal.query.bedrooms,
            bathrooms: searchModal.query.bathrooms,
            category: _category
        }

        searchModal.setQuery(query)
    }

    return(
        <div className="pt-3 pb-6 flex items-center space-x-12">
            <div 
                onClick={() => _setCategory('')}
                className={`cursor-pointer pb-4 flex flex-col items-center ${category == '' ? 'border-black' : 'border-white'} space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-200`}>
                <Image src="/icn_category_beach.jpeg" alt="Category" width={20} height={20} />
                <span className='text-xs'>All</span>
            </div>
            <div 
                onClick={() => _setCategory('Beach')}
                className={`cursor-pointer pb-4 flex flex-col items-center ${category == 'Beach' ? 'border-black' : 'border-white'} space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-200`}>
                <Image src="/icn_category_beach.jpeg" alt="Category" width={20} height={20} />
                <span className='text-xs'>Beach</span>
            </div>
            <div 
                onClick={() => _setCategory('Villas')}
                className={`cursor-pointer pb-4 flex flex-col items-center ${category == 'Villas' ? 'border-black' : 'border-white'} space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-200`}>
                <Image src="/icn_category_beach.jpeg" alt="Category" width={20} height={20} />
                <span className='text-xs'>Villas</span>
            </div>
            <div 
                onClick={() => _setCategory('Cabins')}
                className={`cursor-pointer pb-4 flex flex-col items-center ${category == 'Cabins' ? 'border-black' : 'border-white'} space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-200`}>
                <Image src="/icn_category_beach.jpeg" alt="Category" width={20} height={20} />
                <span className='text-xs'>Cabins</span>
            </div>
            <div 
                onClick={() => _setCategory('Tiny homes')}
                className={`cursor-pointer pb-4 flex flex-col items-center ${category == 'Tiny homes' ? 'border-black' : 'border-white'} space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-200`}>
                <Image src="/icn_category_beach.jpeg" alt="Category" width={20} height={20} />
                <span className='text-xs'>Tiny homes</span>
            </div>
        </div>
    )
}

export default Categories;