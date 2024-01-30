import { Github, Linkedin, Twitter, Twitch } from 'lucide-react'
import { Link, useLocation } from 'wouter'
import { IconLink } from './common/IconLink'

export const Nav = () => {
  const [location] = useLocation()

  return (
    <div className='hidden w-full max-h-[100px] min-h-[100px] h-[100px] xl:flex items-center justify-between text-[16px] font-semibold text-Primary'>
      <Link href='/' className='icons-link'>
        Sara Montagud
      </Link>
      <div className='flex items-center gap-x-4'>
        <Link
          href='/projects'
          className={`icons-link  ${
            location === '/projects' && 'text-White-Custom'
          } `}
        >
          Projects
        </Link>
        <Link
          href='/talks'
          className={`icons-link  ${
            location === '/talks' && 'text-White-Custom'
          } `}
        >
          Talks
        </Link>
        <Link
          href='/community'
          className={`icons-link  ${
            location === '/community' && 'text-White-Custom'
          } `}
        >
          Community
        </Link>
        <Link
          href='/streams'
          className={`icons-link  ${
            location === '/streams' && 'text-White-Custom'
          } `}
        >
          Streams
        </Link>
        <IconLink
          href='https://github.com/afordigital'
          text='Github'
          icon={<Github color='#BBBBBB' size={18} className='icons-link' />}
        />
        <IconLink
          href='https://www.linkedin.com/in/saramonrod/'
          text='Linkedin'
          icon={<Linkedin color='#BBBBBB' size={18} className='icons-link' />}
        />
        <IconLink
          href='https://twitter.com/afor_digital'
          text='Twitter'
          icon={<Twitter color='#BBBBBB' size={18} className='icons-link' />}
        />
        <IconLink
          href='https://www.twitch.tv/afor_digital'
          text='Twitch'
          icon={<Twitch color='#BBBBBB' size={18} className='icons-link' />}
        />
      </div>
    </div>
  )
}
