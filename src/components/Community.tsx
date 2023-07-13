import { useState, useEffect } from 'react'
import { CardPulseBorder } from './common/CardPulse'
import hackaforJSON from '../../config/hackaforProjects.json'

export interface dataProps {
  avatar_url: string
}

export const Community = () => {
  const [data, setData] = useState<dataProps[]>()

  console.log(data)

  const BASE_URL = ''

  useEffect(() => {
    fetchData().then(data => setData(data))
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL)
      const jsonData = await response.json()

      return jsonData as dataProps[]

      // console.log(jsonData)
    } catch (error) {
      console.error('Error al obtener los datos:', error)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <div className='absolute text-transparent w-[400px] h-[400px] bg-white rounded-full blur-3xl opacity-10 translate-x-[20px] z-0'></div>
      <h1 className='text-[19px]'>Aforshow</h1>
      <div className='w-[300px] pt-8'>
        <CardPulseBorder
          name='Afor.show'
          description='Official page of a programming talk event on my twitch channel'
          stargazers_count={0}
          url='https://afor.show'
        />
      </div>
      <h1 className='text-[19px] pt-8'>Hackafor</h1>
      <div className='grid grid-cols-3 gap-x-4 w-full'>
        {hackaforJSON.map(proj => (
          <CardPulseBorder
            name={proj.name}
            description={proj.description}
            stargazers_count={0}
            url={proj.url}
          />
        ))}
      </div>
    </div>
  )
}
