import { Icon } from '@iconify/react'

const techs = [
  { name: 'React Router', link: 'https://reactrouter.com', desc: 'react routing' },
  { name: 'Vite', link: 'https://vitejs.dev', desc: 'build tool' },
  { name: 'Valtio', link: 'https://valtio.pmnd.rs', desc: 'state management' },
  { name: 'UnoCSS', link: 'https://unocss.dev', desc: 'atomic css' },
  { name: 'Iconify', link: 'https://iconify.design', desc: 'for icons' },
  { name: 'ESLint', link: 'https://github.com/antfu/eslint-config', desc: 'code linting' },
  { name: 'TypeScript', link: 'https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/', desc: 'type checking' }
]

export default function About() {
  return (
    <div className='mx-30% sm:mx-30% font-sans text-gray-800 pt20'>
      <div h-20>
        <Icon icon='material-symbols:info-outline' width='50' className='pos-center text-gray-700 dark:text-white' />
      </div>
      <h1 text="xl center dark:white" font="bold sans">About</h1>
      <p m='t5' text='dark:white'>
        Reactease is a Vite React starter template for creating your own react projects easily. It uses the following techs:
      </p>
      <ul className='list-disc mt3 ml6 leading-7' text='dark:white'>
        {
          techs.map((tech) => {
            return (
              <li key={tech.name}>
                <a href={tech.link} target="_blank" className='hover:underline'>{tech.name}</a>
                &nbsp;-&nbsp;
                <span>{ tech.desc }</span>
              </li>
            )
          })
        }
        <li>File path alias ('~/*' -&gt; src/*)</li>
      </ul>
    </div>
  )
}
