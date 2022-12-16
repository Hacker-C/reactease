import type React from 'react'
import Home from '~/pages/home'
import Hi from '~/pages/hi'
import About from '~/pages/about'
import ErrorPage from '~/pages/error-page'

export interface RouteType {
  path: string
  element: React.FC
  meta?: {
    title: string
  }
}

const routes: RouteType[] = [
  {
    path: '/',
    element: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/hi/:id',
    element: Hi,
    meta: {
      title: 'Welcome'
    }
  },
  {
    path: '/about',
    element: About
  },
  {
    path: '*',
    element: ErrorPage,
    meta: {
      title: 'Page not found'
    }
  }
]

export { routes }

