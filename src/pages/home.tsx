import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Home() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  return (
    <div text-center>
      <div h-20 mt-10>
        <Icon icon="carbon:campsite" width='50' className='pos-center' text-gray-700/>
      </div>
      <h1 text="lg gray-700">Reactease</h1>
      <p font-sans text="gray-500 sm" mb-10>
        <i>「"Create react project with ease"」</i>
        <i block mt-2>React + TS + Unocss Starter Templete</i>
      </p>
      <input
        type="text" placeholder="What's your name?"
        border="1 solid gray-400" font="sans lg"
        className='w-70 px-3 py-2 rounded outline-none text-center'
        value={name}
        onInput={e => setName(e.currentTarget.value)}
      />
      <div>
        <button
          className='btn-primary bg-gray-500 hover:bg-primary disabled:bg-gray-400 disabled:hover:bg-[#bef5ff]'
          p="y-1 x-4"
          disabled={name === ''}
          onClick={() => {
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
