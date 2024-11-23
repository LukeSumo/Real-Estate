import React from 'react'
import { Form,Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'



const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md '>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to='/'>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap hover:bg-slate-600'>
        <span className='text-slate-500'>Luke</span>
        <span className='text-slate-700'>Estate</span>
      </h1>
      </Link>
      <Form method='post' className='bg-slate-100 p-3 rounded-lg flex items-center'>
     <input type="text" placeholder='search...' className='bg-transparent focus:outline-none w-24 sm:w-64'  />
     <FaSearch/>
       </Form>
       <ul className='flex gap-4'>
        <li className='hidden sm:inline text-slate-700 hover:underline'><Link to='/'>Home</Link></li>
        <li className='hidden sm:inline text-slate-700 hover:underline'><Link to='about'>About</Link></li>
        <li className=' sm:inline text-slate-700 hover:underline'><Link to='signin'>Signin</Link></li>
       </ul>
       </div> 
    </header>
  )
}

export default Header
