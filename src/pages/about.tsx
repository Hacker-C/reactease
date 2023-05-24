import { Icon } from '@iconify/react'

const techs = [
  { name: 'React', link: 'https://react.dev' },
  { name: 'React Router', link: 'https://reactrouter.com' },
  { name: 'Vite', link: 'https://vitejs.dev' },
  { name: 'ESLint', link: 'https://github.com/antfu/eslint-config' },
  { name: 'UnoCSS', link: 'https://unocss.dev' },
  { name: 'Iconify', link: 'https://iconify.design' }
]

export default function About() {
  return (
    <div className='mx-30% sm:mx-30% font-sans text-gray-800'>
      <div className='h-20 pt-10'>
        <Icon icon='material-symbols:info-outline' width='50' className='pos-center text-gray-700 dark:text-white' />
      </div>
      <h1 text="xl center dark:white" font="bold sans">About</h1>
      <p m='t5' text='dark:white'>
        Reactease is a Vite React starter template for creating your own react projects easily. It uses the following techs:
      </p>
      <ul className='list-disc mt3 ml6' text='dark:white'>
        {
          techs.map((tech) => {
            return (
              <li key={tech.name}>
                <a href={tech.link} target="_blank" className='underline'>{tech.name}</a>
              </li>
            )
          })
        }
        <li>File path alias ('~/*' -&gt; src/*)</li>
      </ul>
    </div>
  )
}
