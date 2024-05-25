// components/NotFoundPage.js
import React from 'react';
import {useState,useEffect} from 'react';
import icon1 from './assects/404-img/icon1.png'
import icon2 from './assects/404-img/icon2.png'
import icon3 from './assects/404-img/icon3.png'
import icon4 from './assects/404-img/icon4.png'
import icon5 from './assects/404-img/icon5.png'
import icon6 from './assects/404-img/icon6.png'
import icon7 from './assects/404-img/icon7.png'
import icon8 from './assects/404-img/icon8.png'

function NotFoundPage() {
  const [randicon , setRandIcon] = useState('')
  useEffect(()=>{
    const icons = [icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8]
    const rnd = Math.floor(Math.random() * icons.length)
    setRandIcon(icons[rnd]);
  },[]);
  return (
    <div>
      
      
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <img src={randicon} width={250} className='mx-auto  custom-margin'/>
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="./main"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
