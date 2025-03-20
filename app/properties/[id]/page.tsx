import ReservationSideBar from '@/app/components/properties/ReservationSideBar';
import Image from 'next/image';

import apiService from '@/app/services/apiService';

const PropertyDetailPage = async ({params}: {params: {id: string}}) => {
    const property = await apiService.get(`/api/properties/${params.id}`)
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image 
                    fill
                    alt='Beach house' 
                    src={property.image_url}
                    className='object-cover w-full h-full' />
            </div>

            <div className='mt-4 grid grid-cols-1 md:grid-cols-5 gap-4'>
                <div className='py-6 pr-6 col-span-3'>
                    <h1 className='mt-4 text-4xl'>{property.title}</h1>

                    <span className='mb-6 block text-lg text-gray-600'>
                        {property.guests} guests - {property.bedrooms} bedrooms - {property.bathrooms} bathrooms
                    </span>

                    <hr />

                    <div className='py-6 flex items-center space-x-4'>
                        {
                            property.landlord.avatar && (
                                <Image 
                                    src={property.landlord.image_url}
                                    alt='Profile photo'
                                    width={50}
                                    height={50}
                                    className='rounded-full'/>
                            )
                        }
                        <p><strong>{property.landlord.name}</strong> es tu host</p>
                    </div>

                    <hr />

                    <p className='mt-6 text-lg'>
                        {property.description}
                    </p>
                </div>

                <ReservationSideBar
                    property={property}
                />
            </div>
        </main>
    )
}

export default PropertyDetailPage;