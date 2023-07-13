import { useState, useEffect } from 'react'
import { CardPulseStreams } from './common/CardPulseStreams'

export interface StreamsData {
  title: string
  url: string
}

export const Streams = () => {
  const [streams, setStreams] = useState<StreamsData[]>([])

  const BASE_URL =
    'https://decapi.me/twitch/videos/afor_digital?limit=24&video_format={%22url%22:%22${url}%22,%22title%22:%22${title}%22}&separator=$$'

  const formatData = data => {
    setStreams(
      data.split('$$').map(a => {
        return JSON.parse(a)
      })
    )
  }

  console.log(streams)
  useEffect(() => {
    fetchData().then(data => formatData(data))
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL)
      const jsonData = await response.text()

      console.log(typeof jsonData)

      return jsonData
    } catch (error) {
      console.error('Error al obtener los datos:', error)
    }
  }

  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[1rem] gap-x-4 gap-y-8 pb-20 overflow-scroll-y'>
      {streams.map((stream, index) => (
        <CardPulseStreams key={index} title={stream.title} url={stream.url} />
      ))}
    </div>
  )
}
