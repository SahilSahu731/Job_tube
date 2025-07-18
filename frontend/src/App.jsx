import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Jobs from './components/Jobs';
import Browse from './components/Browse';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',  
    element: <Signup />
  },
  {
    path: '/job',
    element: <Jobs />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: '/browse',
    element: <Browse />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  // admin routes
  {
    path: '/admin/companies',
    element: <Companies />
  },
  {
    path: '/admin/jobs',
    element: <Jobs />
  },
])

function App() {

  return (
    <>
      <RouterProvider router= {appRouter} />
      <ToastContainer position='bottom-right' />
    </>
  )
}

export default App
