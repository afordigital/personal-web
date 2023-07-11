import { ArrowUpRight } from 'lucide-react'

interface CustomLinkProps {
  href: string
  title: string
}

export const CustomLink = ({ href, title }: CustomLinkProps) => {
  return (
    <a
      href={href}
      title={title}
      className='custom-link'
      target='_blank'
      rel='noopener'
    >
      <span>{title}</span>
      <ArrowUpRight color='#BBBBBB' size={12} />
    </a>
  )
}
