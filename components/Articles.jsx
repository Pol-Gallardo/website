'use client';
import Link from 'next/link';
import { Button } from "./ui/button";

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'

//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//import required modules
import { Pagination } from 'swiper/modules'

//components
import ArticleCard from '@/components/ArticleCard';

const projectData = [
    {
        image: '/articles/erc4626.png',
        category: 'Smart Contracts',
        name: 'Have You Heard About ERC-4626? Unveiling the Future of Decentralized Finance',
        description: 'One of the standout tools we used to create a vault for the perpetual protocol is the ERC-4626 standard.',
        link: 'https://medium.com/@pol.gallardo/have-you-heard-about-erc-4626-unveiling-the-future-of-decentralized-finance-a0e7e8f094ac'
    },
    {
        image: '/articles/wallet2.png',
        category: 'Solidity',
        name: 'Exploring the Future of Crypto Wallets: Wallets 2.0',
        description: 'Have you heard about Smart Contracts Wallets and MPC Wallets? Let me take you on a journey to where the future of Crypto Wallets could be heading.',
        link: 'https://medium.com/@pol.gallardo/exploring-the-future-of-crypto-wallets-wallets-2-0-f4fd2ff5e25a'
    },
    {
        image: '/articles/arquitecture.png',
        category: 'Solidity',
        name: 'Unraveling the Architecture of Web3 Applications: A Peek Under the Hood of the Decentralized Future',
        description: 'From smart contracts to decentralized storage and Layer 2 scalability solutions.',
        link: 'https://medium.com/@pol.gallardo/unraveling-the-architecture-of-web3-applications-a-peek-under-the-hood-of-the-decentralized-4e2d1b62dce6'
    },
    {
        image: '/articles/thunder.png',
        category: 'Audits',
        name: 'First Flight #3: Thunder Loan',
        description: 'In this article, we continue with our series of CodeHawks Articles, this time focusing on the exciting weekly contests of FirstFlight. We delve into the fascinating world of DeFi protocols, specifically in the realm of flash loans.',
        link: 'https://medium.com/@pol.gallardo/first-flight-3-thunder-loan-b31ebf40faf1'
    },
    {
        image: '/articles/audit.jpg',
        category: 'Audits',
        name: 'Unlocking the Power of Smart Contract Audits',
        description: 'In this article, we explain how smart contract audits help you',
        link: 'https://medium.com/@pol.gallardo/have-you-heard-about-erc-4626-unveiling-the-future-of-decentralized-finance-a0e7e8f094ac'
    },
    {
        image: '/articles/gas.png',
        category: 'Solidity',
        name: 'Gas Optimization in Solidity: How to Avoid Gas Guzzlers on the EVM',
        description: 'In this article, I explain how to optimize gas in the EVM and reduce your operational costs.',
        link: 'https://medium.com/@pol.gallardo/gas-optimization-in-solidity-how-to-avoid-gas-guzzlers-on-the-evm-1e60e4ec1867'
    },
    {
        image: '/articles/unv.png',
        category: 'Solidity',
        name: 'Unveiling Security Dimensions in Layer 2',
        description: 'If you are interested in the future of blockchain and how we can make it both secure and efficient, I invite you to read my latest article.',
        link: 'https://medium.com/@pol.gallardo/unveiling-security-dimensions-in-layer-2-665d05f27324'
    },
    {
        image: '/articles/1.png',
        category: 'Audits',
        name: 'First Flight #1: PasswordStore',
        description: 'Check out this insightful Medium article from #FirstFlight by CodeHawks. They have launched a tool for junior auditors to practice simpler audits and learn with shorter codes in the web3 environment. ',
        link: 'https://medium.com/@pol.gallardo/first-flight-1-passwordstore-e8018185b99f'
    },
    {
        image: '/articles/puppy.png',
        category: 'Audits',
        name: 'First Flight #2: Puppy Raffle',
        description: 'Are you familiar with reentrancy attacks? During our recent audit at FirstFlight PuppyRaffle, we discovered a concerning reentrancy vulnerability. We ll take this opportunity to explain how a reentrancy attack occurs and how to effectively mitigate this vulnerability.',
        link: 'https://medium.com/@pol.gallardo/first-flight-2-puppy-raffle-e3dbf4b26496'
    }
];// En total puedo hacer 9


const Articles = () => {
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className="container mx-auto">
                {/* Text */}
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className='section-title mb-4'>Latest Articles</h2>
                    <p className='subtitle mb-8'>
                    Explore my articles published on Medium, where I share all my knowledge about blockchain security and development.                    </p>
                    <Link href='/articles'>
                        <Button>All articles</Button>
                    </Link>
                </div>
                {/* Slider */}
                <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                    <Swiper className='h-[600px]' slidesPerView={1} breakpoints={{
                        640: {
                            slidesPerView: 2
                        }
                    }} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
                        {/* Show only the first 4 artciles for the slides */}
                        {projectData.slice(0, 4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ArticleCard project={project} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Articles;