import type { ReactNode } from 'react'

interface CustomIconProps {
  href: string
  text: string
  icon: ReactNode
}

export const IconLink = ({ href, text, icon }: CustomIconProps) => {
  return (
    <a
      href={href}
      title={text}
      className='custom-link'
      target='_blank'
      rel='noopener'
    >
      {icon}
    </a>
  )
}
