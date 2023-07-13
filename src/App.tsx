import { Nav } from './components/Nav'
import { MainScreen } from './components/MainScreen'
import { Route } from 'wouter'
import { Projects } from './components/Projects'
import { Talks } from './components/Talks'
import { Community } from './components/Community'
import { Streams } from './components/Streams'
import { InternalNav } from './components/InternalNav'
import { NavMobile } from './components/NavMobile'
import useLocation from 'wouter/use-location'
import './App.css'

function App () {
  const location = useLocation()

  return (
    <div className='font-sans min-h-screen flex flex-col items-start bg-Background text-White-Custom'>
      <div className='max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-3xl w-full mx-auto xl:pt-[40px]'>
        <Nav />
        <NavMobile />
      </div>
      {location[0] === '/' ? (
        <Route path='/'>
          <div className='max-w-sm md:max-w-3xl lg:max-w-3xl xl:max-w-3xl w-full mx-auto xl:pt-[40px]'>
            <div className='p-4'>
              <MainScreen />
            </div>
          </div>
        </Route>
      ) : (
        <div className='max-w-sm md:max-w-xl lg:max-w-5xl xl:max-w-5xl w-full mx-auto pt-[20px]'>
          <InternalNav />
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/talks'>
            <Talks />
          </Route>
          <Route path='/community'>
            <Community />
          </Route>
          <Route path='/streams'>
            <Streams />
          </Route>
        </div>
      )}
    </div>
  )
}

export default App
