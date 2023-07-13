import { CardPulseTalks } from './common/CardPulseTalks'
import talksJSON from '../../config/talks.json'

export const Talks = () => {
  return (
    <>
      <div className='absolute text-transparent w-[300px] h-[300px] bg-white rounded-full blur-3xl opacity-10 translate-x-[50%] z-0'></div>
      <div className='flex flex-col gap-y-4'>
        {talksJSON.map((talk, index) => (
          <CardPulseTalks
            key={talk.name}
            name={talk.name}
            description={talk.description}
            url={talk.url}
            index={index}
          />
        ))}
      </div>
    </>
  )
}
