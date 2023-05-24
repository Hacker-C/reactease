import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { useSnapshot } from 'valtio'
import { useState } from 'react'
import { userSore } from '~/store'

function Home() {
  const navigate = useNavigate()
  const { uname, update } = useSnapshot(userSore)
  const [name, setName] = useState(uname)
  return (
    <div text='center'>
      <div className='h-20 pt-10'>
        <Icon icon="carbon:campsite" width='50' className='pos-center text-gray-700 dark:text-white' />
      </div>
      <h1 text="lg gray-700 dark:white" m='y4'>Reactease</h1>
      <p font='sans' text="gray-500 dark:white sm" m='b-10'>
        <i>「"Create react project with ease"」</i>
        <i className='block mt-2'>React + TS + Unocss Starter Templete</i>
      </p>
      <input
        type="text"
        placeholder="What's your name?"
        border="1 solid gray-400"
        font="sans lg"
        className='w-70 px-3 py-2 rounded outline-none'
        text='center dark:white'
        bg='dark:gray-700'
        value={name ?? ''}
        onInput={e => setName(e.currentTarget.value)}
      />
      <div>
        <button
          className='btn-primary bg-gray-500 hover:bg-primary disabled:bg-gray-400 disabled:hover:bg-primary'
          p="y-1 x-4"
          disabled={!name}
          onClick={() => {
            update(name as string)
            navigate(`/hi/${name}`, {
              state: { name }
            })
          }}
        >
          GO
        </button>
      </div>
    </div>
  )
}

export default Home
