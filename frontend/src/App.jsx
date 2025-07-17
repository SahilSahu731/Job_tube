import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Jobs from './components/Jobs';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',  
    element: <Signup />,
  },
  {
    path: '/job',
    element: <Jobs />,
  },
])

function App() {

  return (
    <>
      <RouterProvider router= {appRouter} />
      <ToastContainer />
    </>
  )
}

export default App
