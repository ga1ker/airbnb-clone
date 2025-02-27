import ReservationSideBar from '@/app/components/properties/ReservationSideBar';
import Image from 'next/image';
const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image 
                    fill
                    alt='Beach house' 
                    src='/beach_1.jpg'
                    className='object-cover w-full h-full' />
            </div>

            <div className='mt-4 grid grid-cols-1 md:grid-cols-5 gap-4'>
                <div className='py-6 pr-6 col-span-3'>
                    <h1 className='mt-4 text-4xl'>Property name</h1>

                    <span className='mb-6 block text-lg text-gray-600'>
                        4 guests - 2 bedrooms - 1 bathroom
                    </span>

                    <hr />

                    <div className='py-6 flex items-center space-x-4'>
                        <Image 
                            src="/profile_pic_1.jpg"
                            alt='Profile photo'
                            width={50}
                            height={50}
                            className='rounded-full'/>
                        <p><strong>Jon Doe</strong> es tu host</p>
                    </div>

                    <hr />

                    <p className='mt-6 text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iure architecto officiis nihil quam facilis delectus incidunt. Temporibus ea quidem tenetur, libero hic iure nesciunt quis sed nihil. Saepe, beatae.
                        Vitae necessitatibus, ab eveniet omnis perferendis expedita molestias error nobis exercitationem adipisci earum, odio modi libero odit quia. Corporis, eveniet. Assumenda corporis asperiores animi reprehenderit alias maiores similique recusandae aut.
                        Officiis reiciendis ut quia mollitia quam expedita quo rerum, est autem sed iure molestias beatae! Eum sed sint error molestias saepe, dignissimos quas eos rerum laboriosam neque placeat nobis facilis?
                    </p>
                </div>

                <ReservationSideBar />
            </div>
        </main>
    )
}

export default PropertyDetailPage;