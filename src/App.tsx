import { Nav } from './components/Nav'
import { MainScreen } from './components/MainScreen'
import { Route } from 'wouter'
import { Projects } from './components/Projects'
import { Talks } from './components/Talks'
import { Community } from './components/Community'
import { Streams } from './components/Streams'
import './App.css'

function App () {
  return (
    <div className='font-sans h-screen flex flex-col items-start bg-Background text-White-Custom '>
      <Nav />
      <div className='max-w-3xl mx-auto pt-[40px]'>
        <Route path='/home'>
          <MainScreen />
        </Route>
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
    </div>
  )
}

export default App
