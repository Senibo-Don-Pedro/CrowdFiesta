import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'
import logo from '@/app/logo.png'
import { Separator } from '@/components/ui/separator'
import NavItems from './NavItems'

const MobileNav = () => {
  return (
    <nav className='md:hidden'>
      <Sheet>
        <SheetTrigger className='align-middle'>
          <Image
            src='/assets/icons/menu.svg'
            alt='menu'
            width={24}
            height={24}
            className='cursor-pointer'
          />
        </SheetTrigger>
        <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
          <div className='flex justify-start items-center gap-1'>
            <Image src={logo} width={45} alt='Crowdfiest logo' />
            <h1 className='font-bold text-2xl'>CrowdFiesta</h1>
          </div>
          <Separator className='border border-gray-50 ' />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav
