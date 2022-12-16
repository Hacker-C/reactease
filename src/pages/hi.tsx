import { Icon } from '@iconify/react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import Back from '~/components/back'

const Hi: React.FC = () => {
  const location = useLocation()
  return (
    <div text-center>
      <div h-20 mt-10>
        <Icon icon="carbon:pedestrian" className='pos-center' width='50'/>
      </div>
      <h1 text='lg center' font-sans>Hi, { location.state.name }!</h1>
      <p><i text-gray-500>Demo of dynamic route</i></p>
      <Back />
    </div>
  )
}

export default Hi
