import { useState, useEffect } from 'react'
import { CardPulseBorder } from './common/CardPulse'

const BASE_URL = 'https://api.github.com/users/aforina/repos'

interface Data {
  id: number
  name: string
}

export const Projects = () => {
  const [data, setData] = useState<Data | null>(null)

  console.log(data)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL)
      const jsonData = await response.json()

      console.log(response)
      console.log(jsonData)
      setData(jsonData)
    } catch (error) {
      console.error('Error al obtener los datos:', error)
    }
  }

  return (
    <div>
      <CardPulseBorder />
    </div>
  )
}
