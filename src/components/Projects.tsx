import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CardPulseBorder } from './common/CardPulse'

const BASE_URL = 'https://api.github.com/users/aforina/repos'

export interface isGithubData {
  name: string
  description: string
  stargazers_count: number
  html_url: string
}

export const Projects = () => {
  const [data, setData] = useState<isGithubData[]>([])

  useEffect(() => {
    fetchData().then(data => setData(data))
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL)
      const jsonData = await response.json()

      return jsonData as isGithubData[]

      // console.log(jsonData)
    } catch (error) {
      console.error('Error al obtener los datos:', error)
    }
  }

  return (
    <>
      <div className='absolute text-transparent w-[400px] h-[400px] bg-white rounded-full blur-3xl opacity-10 translate-x-[320px] z-0'></div>
      <motion.div
        transition={{ type: 'spring', stiffness: 800, damping: 500 }}
        className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[1rem] gap-x-4 gap-y-8 pb-20 overflow-scroll-y'
      >
        {data &&
          data?.map(d => (
            <CardPulseBorder
              key={d.name}
              name={d.name}
              description={d.description}
              stargazers_count={d.stargazers_count}
              url={d.html_url}
            />
          ))}
      </motion.div>
    </>
  )
}
