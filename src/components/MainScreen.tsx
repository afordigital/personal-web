import { CustomLink } from './common/CustomLink'

export const MainScreen = () => {
  return (
    <>
      <h1 className='text-[44px]'>Sara Montagud</h1>
      {/* <div className='absolute text-transparent w-[400px] h-[400px] bg-white rounded-full blur-3xl opacity-10 translate-x-[50%] z-0'></div> */}
      <div className='relative z-1 text-[18px] leading-7 space-y-4xl text-Text-Custom'>
        <p>
          Hi, I'm Sara Montagud, a frontend developer and programming content
          creator.
        </p>
        <p>
          Learning live as a creator in{' '}
          <a
            href='https://www.twitch.tv/afor_digital'
            target='_blank'
            rel='noopener'
            className='text-White-Custom underline-dotted underline-offset-2 underline-Text-Custom hover:underline-White-Custom ease-in duration-300'
          >
            afor_digital
          </a>
          .
        </p>
        <p>
          I always liked programming, until I discovered I could do it in front
          of people. Helping the programming community and participating with
          them to develop projects together makes me not only feel motivated,
          but learn more than I would have done otherwise.
        </p>
        <p>
          I always was a person who was drawn to discomfort in order to learn
          new things and move forward in life. I dreamed about making good
          technology, technology that brings value to others.
        </p>
        <p>Find me on</p>
        <div className='flex flex-wrap items-center whitespace-nowrap gap-x-6 relative z-1'>
          <CustomLink href='https://github.com/Aforina' title='Github' />
          <CustomLink href='https://twitter.com/afordigital' title='Twitter' />
          <CustomLink
            href='http://discord.io/Comu-Afor'
            title='Discord Server'
          />
          <CustomLink
            href='https://www.youtube.com/@afordigital/videos'
            title='Youtube'
          />
          <CustomLink
            href='https://www.twitch.tv/afor_digital'
            title='Twitch'
          />
        </div>
      </div>
    </>
  )
}
