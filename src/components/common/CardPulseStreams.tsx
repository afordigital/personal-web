import { ArrowUpRight } from 'lucide-react'

export interface isCardProps {
  title: string
  url: string
}

export const CardPulseStreams = ({ title, url }: isCardProps) => {
  return (
    <div className='relative h-[110px]'>
      <div className='absolute top-0 flex w-full justify-center'>
        <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
      </div>
      <div className='flex flex-col h-full items-start px-8 pb-4 justify-center rounded-md border border-solid border-slate-800 bg-black'>
        <a
          href={url}
          className='flex items-center justify-between w-full underline-transparent'
          target='_blank'
          rel='noopener'
        >
          <span className='flex gap-x-1'>
            <span className='text-md text-White-Custom'>{title}</span>
            <ArrowUpRight color='#BBBBBB' size={12} />
          </span>
        </a>
      </div>
    </div>
  )
}
