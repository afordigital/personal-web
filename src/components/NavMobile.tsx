import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Github, Linkedin, Twitter, Twitch } from 'lucide-react'
import { Link } from 'wouter'
import { IconLink } from './common/IconLink'

export const NavMobile = () => {
  const [isOpened, setIsOpened] = useState<Boolean>(false)

  const openMenu = () => {
    setIsOpened(isOpened => !isOpened)
  }
  return (
    <div className='relative justify-between min-h-[100px] h-[100px] flex xl:hidden items-center text-[16px] font-semibold text-Primary'>
      <div className='w-full flex items-center justify-between px-4'>
        <Link href='/' className='icons-link'>
          Sara Montagud
        </Link>
        {isOpened ? <X onClick={openMenu} /> : <Menu onClick={openMenu} />}
      </div>
      {isOpened && (
        <div className='absolute z-5 top-20 max-w-screen w-full h-screen overflow-hidden bg-Background text-white text-3xl'>
          <div className='flex flex-col text-[18px] gap-y-1 text-Primary '>
            <div className='w-full p-0 m-0 list-none flex flex-col gap-1'>
              <Link
                href='/projects'
                className='text-[16px] underline-transparent py-1 font-500 border-b-solid border-gray-800 text-White-Custom border-1 mx-4'
              >
                Projects
              </Link>
              <Link
                href='/talks'
                className='text-[16px] underline-transparent py-1 font-500 border-b-solid border-gray-800 text-White-Custom border-1 mx-4'
              >
                Talks
              </Link>
              <Link
                href='/community'
                className='text-[16px] underline-transparent py-1 font-500 border-b-solid border-gray-800 text-White-Custom border-1 mx-4'
              >
                Community
              </Link>
              <Link
                href='/streams'
                className='text-[16px] underline-transparent py-1 font-500 border-b-solid border-gray-800 text-White-Custom border-1 mx-4'
              >
                Streams
              </Link>
            </div>
          </div>
          <div className='px-4 pt-4 flex items-center gap-x-4'>
            <IconLink
              href='https://github.com/Aforina'
              text='Github'
              icon={<Github color='#BBBBBB' size={18} className='icons-link' />}
            />
            <IconLink
              href='https://www.linkedin.com/in/saramonrod/'
              text='Linkedin'
              icon={
                <Linkedin color='#BBBBBB' size={18} className='icons-link' />
              }
            />
            <IconLink
              href='https://twitter.com/afordigital'
              text='Twitter'
              icon={
                <Twitter color='#BBBBBB' size={18} className='icons-link' />
              }
            />
            <IconLink
              href='https://www.twitch.tv/afor_digital'
              text='Twitch'
              icon={<Twitch color='#BBBBBB' size={18} className='icons-link' />}
            />
          </div>
        </div>
      )}
    </div>
  )
}
