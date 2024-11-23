import React from 'react'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import { About, Home, Profile, Signin } from './pages'
const router= createBrowserRouter([
  {path:'/',
element:<Home/>,
children:[
  {path:'/about',
    element:<About/>
  },
  {path:'/profile',
    element:<Profile/>
  },

]
  },
  {path:'/signin',
    element:<Signin/>
  },
  {path:'/signout',
    element:<Signin/>
  },
])

const App = () => {
  return (
    <div>
      
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
