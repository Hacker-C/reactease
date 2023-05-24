import { Icon } from '@iconify/react'
import { Link, useLocation } from 'react-router-dom'
import { useDark } from '~/hooks/useDark'

const items = [
  { path: '/', icon: 'carbon:campsite' },
  { path: '/about', icon: 'material-symbols:info-outline' },
  { path: '/404', icon: 'tabler:error-404' },
  { path: 'https://github.com/Hacker-C/reactease', icon: 'mdi:github' },
  { path: 'https://beta.reactjs.org/', icon: 'mdi:react' },
  { path: 'https://github.com/unocss/unocss', icon: 'simple-icons:unocss' }
]

export default function TheFooter() {
  const loc = useLocation()
  const { toggle, isDark } = useDark()
  return (
    <footer className='mt-5'>
      <div className='flex-center'>
        {items.map(({ path, icon }) => <Link
          to={path}
          key={path}
          target={path.includes('http') ? '_blank' : '_self'}
          m="x2"
        >
          <Icon
            icon={icon}
            width={path.includes('unocss') ? 22 : 25}
            className='text-gray-500 dark:text-white hover:text-primary'
            style={{
              color: loc.pathname === path ? '#7eebff' : ''
            }}
          />
        </Link>)}
        <Icon
          icon={isDark ? 'ph:sun-bold' : 'ph:moon-bold'}
          width={25}
          className='text-gray-500 dark:text-white cursor-pointer mx2'
          onClick={() => {
            toggle()
          }}
        />
      </div>
    </footer>
  )
}
