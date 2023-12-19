import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/app/logo.png'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link
          href='/'
          className='w-36 flex justify-center items-center gap-1 pl-4'
        >
          <Image src={logo} width={30} alt='Crowdfiesta logo' />
          <h1 className='font-bold text-lg'>CrowdFiesta</h1>
        </Link>

        <p>2023 CrowdFiesta. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
