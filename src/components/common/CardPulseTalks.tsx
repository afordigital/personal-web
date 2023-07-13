import { ArrowUpRight, MessageSquare, UserCog2, Users2 } from 'lucide-react'

export interface isTalksProps {
  name: string
  description: string
  url: string
  index: number
}

const icons = {
  0: <MessageSquare />,
  1: <UserCog2 />,
  2: <Users2 />
}

export const CardPulseTalks = ({
  name,
  description,
  url,
  index
}: isTalksProps) => {
  return (
    <div className='relative h-[100px] w-[80%]'>
      <div className='absolute top-0 flex w-full justify-center'>
        <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
      </div>
      <div className='flex gap-x-4 h-full px-12 items-center rounded-md border border-solid border-slate-800 bg-black'>
        <div className='text-Text-Custom'>{icons[index]}</div>
        <div className='flex flex-col gap-y-1 items-start'>
          <a
            href={url}
            className='flex items-center gap-x-1 w-full underline-transparent'
            target='_blank'
            rel='noopener'
          >
            <span className='text-md text-White-Custom'>{name}</span>
            <ArrowUpRight color='#BBBBBB' size={12} />
          </a>
          <span className='text-[14px] text-Text-Custom'>{description}</span>
        </div>
      </div>
    </div>
  )
}
