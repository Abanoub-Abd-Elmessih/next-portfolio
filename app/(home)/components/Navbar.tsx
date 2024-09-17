import Link from 'next/link'; // Correct import for Next.js navigation
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function Navbar() {
    const socials =[
        {
            link: 'https://www.linkedin.com/in/abanoub-abd-elmessih/',
            label: 'LinkedIn',
            icon: FaLinkedin,
        },
        {
            link: 'https://github.com/Abanoub-Abd-Elmessih',
            label: 'GitHub',
            icon: FaGithub,
        },
        {
            link: 'https://www.linkedin.com/in/abanoub-abd-elmessih/',
            label: 'LinkedIn',
            icon: FaWhatsapp,
        },
        {
            link: 'https://www.linkedin.com/in/abanoub-abd-elmessih/',
            label: 'LinkedIn',
            icon: FaInstagram,
        },
    ]
  return (
    <nav className='py-10 flex items-center justify-between'>
        <Link href='#about' className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-6 hover:rotate-0'>Abanoub</Link>
        <div className="flex items-center gap-5">
            {socials.map((social,index)=>{
                const Icon = social.icon
                return <Link href={social.link} target='_blank' key={index} aria-label={social.label}>
                    <Icon className='w-5 h-5 hover:scale-125 transition-all duration-300'/>
                </Link>
            })}
        </div>
    </nav>
  )
}
