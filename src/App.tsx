import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import React, { Suspense } from 'react'
import type { RouteType } from '~/routes'
import { routes } from '~/routes'
import TheFooter from '~/components/footer'

interface Props {
  route: RouteType
}

const DomTitle: React.FC<Props> = (props: Props) => {
  const { route } = props
  if (route?.meta?.title)
    document.title = `${route?.meta?.title} | Reactease`
  return (
    <Suspense fallback={<h1 text-center>Loading...</h1>}>
      <route.element />
    </Suspense>
  )
}

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        {
          routes.map((route) => {
            return (
              <Route
                path={route.path}
                key={route.path}
                element={<DomTitle route={route}/>}
              />
            )
          })
        }
      </Routes>
      <TheFooter></TheFooter>
    </Router>
    </>
  )
}
