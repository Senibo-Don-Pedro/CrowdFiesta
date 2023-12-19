import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/app/logo.png'
import { SignedOut } from '@clerk/nextjs'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex items-center justify-between'>
        <Link
          href='/'
          className='w-36 flex justify-center items-center gap-1 pl-4'
        >
          <Image src={logo} width={45} alt='Crowdfiest logo' />
          <h1 className='font-bold text-2xl'>CrowdFiesta</h1>
        </Link>

        <div className='flex w-32 justify-end gap-3'>
          <SignedOut>
            <Button asChild className='rounded-full bg-green-500' size='lg'>
              <Link href='/sign-in'>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header
