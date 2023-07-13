import { Link } from 'wouter'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export const NavMobile = () => {
  const [isOpened, setIsOpened] = useState<Boolean>(false)

  const openMenu = () => {
    console.log('estoy abriendo el menu')
    setIsOpened(isOpened => !isOpened)
  }
  return (
    <div className='relative w-[330px] justify-between max-h-[100px] min-h-[100px] h-[100px] flex xl:hidden items-center text-[16px] font-semibold text-Primary'>
      <Link href='/' className='ml-10 icons-link'>
        Sara Montagud
      </Link>
      {isOpened ? <X onClick={openMenu} /> : <Menu onClick={openMenu} />}
      {isOpened && (
        <div className='absolute z-5 top-0 max-w-screen w-screen h-screen bg-Background text-white text-3xl'>
          <div className='w-full h-[100px] min-h-[100px] flex items-center justify-around gap-x-28'>
            <p className='text-[16px] font-semibold text-Text-Custom'>
              Sara Montagud
            </p>
            <X onClick={openMenu} className='text-Text-Custom' />
          </div>
          <div className='flex flex-col text-[18px] gap-y-1 text-Primary'>
            <ul className='w-full p-0 m-0 list-none flex flex-col gap-1'>
              <li className='text-[16px] py-1 font-500 border-b-solid border-gray-800 text-White-Custom border-1 mx-8'>
                Projects
              </li>
              <li className='text-[16px] py-1 font-500 border-b-solid border-gray-800 text-White-Custom border-1 mx-8'>
                Talks
              </li>
              <li className='text-[16px] py-1 font-500 border-b-solid border-gray-800 text-White-Custom border-1 mx-8'>
                Community
              </li>
              <li className='text-[16px] py-1 font-500 border-b-solid border-gray-800 text-White-Custom border-1 mx-8'>
                Streams
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      )}
    </div>
  )
}
