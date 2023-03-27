import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const items = [
  { path: '/', icon: 'carbon:campsite' },
  { path: '/about', icon: 'material-symbols:info-outline' },
  { path: '/404', icon: 'tabler:error-404' },
  { path: 'https://github.com/Hacker-C/reactease', icon: 'mdi:github' },
  { path: 'https://beta.reactjs.org/', icon: 'mdi:react' },
  { path: 'https://github.com/unocss/unocss', icon: 'simple-icons:unocss' }
]

export default function TheFooter() {
  return (
    <footer className='mt-5'>
      <div className='flex-center'>
        {
          items.map((item) => {
            return (
              item.path.includes('http')
                ? <a href={item.path} key={item.path} target="_blank" m="x-2">
                    <Icon icon={item.icon} width='25' className='text-gray-500 hover:text-primary' />
                  </a>
                : <Link to={item.path} key={item.path} m="x-2">
                    <Icon icon={item.icon} width='25' className='text-gray-500 hover:text-primary' />
                  </Link>
            )
          })
        }
      </div>
    </footer>
  )
}
