import { Icon } from '@iconify/react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSnapshot } from 'valtio'
import Back from '~/components/back'
import { userSore } from '~/store'

const Hi: React.FC = () => {
  const location = useLocation()
  const { unames, uname } = useSnapshot(userSore)
  const names = unames.filter(name => name !== uname)
  return (
    <div className='text-center'>
      <div className='h-20 pt-10'>
        <Icon icon="carbon:pedestrian" className='pos-center dark:text-white' width='50'/>
      </div>
      <h1 text='lg center dark:white' font='sans' m='y4'>Hi, { location.state.name }!</h1>
      {
        !!names?.length && <div>
          Also known as: { names.map((name, i) => <div key={i}>{name} </div>) }
        </div>
      }
      <p><i className='text-gray-500 dark:text-white'>Demo of dynamic route</i></p>
      <Back />
    </div>
  )
}

export default Hi
