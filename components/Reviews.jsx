'use client';

import Image from 'next/image';

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'

//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//import required modules
import { Pagination } from 'swiper/modules'

const reviewsData = [
    {
        avatar: '/reviews/mh.png',
        name: 'David Sanz',
        job: 'CEO of Majestic Houses',
        review: 'Exceptional experience! Pol Gallardo exceeded my expectations in developing my website. His creative approach and technical skills transformed my vision into a stunning online platform. Professional, responsive, and efficient. I highly recommend his services. Thank you for taking my business to the next level.',
    },
    {
        avatar: '/reviews/xdc.png',
        name: 'Hackathon Winner',
        job: '',
        review: 'XDC Honorable Mention Prize at the EBC9 Hackathon! Your team will receive a $1,000 worth of prize from the XDC team.',
    },
]


const Reviews = () => {
    return(
        <section className="mb-12 xl:mb-32 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
                {/* Slider */}
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640:{slidesPerView: 2},
                        1400: {slidesPerView: 2},
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true
                    }}
                    className='h-[${window.innerWidth < 1100 ? 515 : 300}px]'
                >
                    {reviewsData.map((person, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[200px]'>
                                    <CardHeader className='p-0 mb-10'>
                                        <div className='flex items-center gap-x-4'>
                                            {/* Avatar */}
                                            <Image
                                                src={person.avatar}
                                                width={70}
                                                height={70}
                                                alt={person.name}
                                                priority
                                            />
                                            {/* Name */}
                                            <CardTitle>{person.name}</CardTitle>
                                            <p>{person.job}</p>
                                        </div>
                                    </CardHeader>
                                    <CardDescription className='text-lg text-muted-foreground'>
                                        {person.review}
                                    </CardDescription>
                                </Card>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
        </section>
    )
}

export default Reviews;