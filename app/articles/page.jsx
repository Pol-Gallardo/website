'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
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
];

// remove category duplicates
const uniqueCategories = [
    'all articles',
    ...new Set(projectData.map((item) => item.category)),
]


const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('all articles');

    const filteredProjects = projectData.filter((project) => {
        // if category is 'all projects' return all articles, else filter by category
        return category === 'all articles'
        ? project
        : project.category === category
    });
    console.log(category);
    return (
    <section className="min-h-screen pt-12">
        <div className='container mx-auto'>
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                My Articles
            </h2>
            {/* tabs */}
            <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
                <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[800px] mb-12 mx-auto md:border dark:border-none'>
                    {categories.map((category, index) => {
                        return (
                        <TabsTrigger
                        onClick={() => setCategory(category)} 
                        value={category}
                        key={index}
                        className='capitalize w-[162px] md:w-auto'
                        >
                            {category}
                        </TabsTrigger>
                        );
                    })}
                </TabsList>
                {/* tabs content */}
                <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {filteredProjects.map((project, index) => {
                        return (
                            <TabsContent value={category} key={index}>
                                <ArticleCard project={project} />
                            </TabsContent>
                        )
                    })}
                </div>
            </Tabs>    
        </div>
        </section>
    );
};

export default Projects;