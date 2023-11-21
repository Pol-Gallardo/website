'use client';

import {
    RiLinkedinFill,
    RiTwitterXFill,
    RiGithubFill
} from 'react-icons/ri';
import { FaMedium } from "react-icons/fa6";

import Link from 'next/link';

const icons = [
    {
        name: <RiLinkedinFill />,
        path: 'https://www.linkedin.com/in/pol-gallardo-comajuan/'
    },
    {
        name: <RiTwitterXFill />,
        path: 'https://twitter.com/PolGallardo_'
    },
    {
        name: <RiGithubFill />,
        path: 'https://github.com/Pol-Gallardo'
    },
    {
        name: <FaMedium />,
        path: 'https://medium.com/@pol.gallardo/'
    },
]

const Socials = ({ containerStyles, iconsStyles }) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index}>
                        <div className={`${iconsStyles}`}>{icon.name}</div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials;