import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import smicon from './assects/studimate-icon.png';
import backdrop from './assects/backdrop.jpeg';
import Polygon from './Polygon';
import VectorMbl from './assects/VectorMbl.png'
const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Blog', href: '#' },
  { name: 'Support/Help', href: '#' },
  { name: 'Testimonials', href: '#' },
  { name: 'FAQ', href: '#' },
]

export default function Main() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const studimate = "./main"
  const features = [
    {
      title: 'AI-Powered Assistance',
      description: 'Get instant help and personalized study recommendations with our AI-powered chatbot.'
    },
    {
      title: 'Personalized Study Dashboard',
      description: 'Track your progress and manage your study schedule with a customizable dashboard.'
    },
    {
      title: 'Comprehensive Resource Library',
      description: 'Access curated study materials, textbooks, articles, videos, and tutorials.'
    },
    {
      title: 'Interactive Study Tools',
      description: 'Utilize tools like flashcard maker, virtual study planner, and quizzes to enhance your learning.'
    },
    {
      title: 'Community Support',
      description: 'Join our vibrant community to discuss topics, share resources, and collaborate with peers.'
    },
    {
        title: 'Progress Tracking',
        description: 'Monitor your learning progress and get insights to improve your study habits and performance.'
      }
  ];
  return (
    <div className="bg-white " >
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href={studimate} className="-m-1.5 p-1.5">
              <span className="sr-only">StudiMate</span>
              <img
                className="h-8 w-auto"
                src={smicon}
                alt="Studimate"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="./Login" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">StudiMate</span>
                <img
                  className="h-8 w-auto"
                  src={smicon}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="./login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-y lg:px-5">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-40 sm:py-96  lg:py-40 lg:my-25">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
             Follow us on social media for updates and study tips!{' '}
              <a href="./ntg" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Click here <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center ">
          <img src={VectorMbl} className="lg:hidden sm:ml-20" width="500" alt="Description of the image" />
            <h1 className="text-.5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
             Empower your study journey with enriched resources
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Unlock a world of knowledge tailored to your needs. 
                Dive into interactive study tools and curated materials to ace your academic goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      
      <div id='features' className="py-12 bg-gray-50 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Key Features</h2>

        <div className="hidden sm:grid gap-8 lg:grid-cols-3 sm:grid-cols-2 z-50 ">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-4 sm:hidden">
          {features.map((feature, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    
    </div>
        
     
  );
}
