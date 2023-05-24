import { Icon } from '@iconify/react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import Back from '~/components/back'

const Hi: React.FC = () => {
  const location = useLocation()
  return (
    <div className='text-center'>
      <div className='h-20 pt-10'>
        <Icon icon="carbon:pedestrian" className='pos-center dark:text-white' width='50'/>
      </div>
      <h1 text='lg center dark:white' font='sans' m='y4'>Hi, { location.state.name }!</h1>
      <p><i className='text-gray-500 dark:text-white'>Demo of dynamic route</i></p>
      <Back />
    </div>
  )
}

export default Hi
