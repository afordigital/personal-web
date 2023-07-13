import { Link, useLocation } from 'wouter'

export const InternalNav = () => {
  const [location] = useLocation()

  return (
    <div className='hidden lg:flex text-2xl pb-16 px-8 gap-x-4'>
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
    </div>
  )
}
