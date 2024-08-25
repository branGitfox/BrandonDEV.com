
import { Link } from 'react-router-dom'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu,MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon} from '@heroicons/react/24/outline'
import github from '../../assets/github.svg'






function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function Nav() {
  const navigation = [
    { name: 'Home', href: '/', current: location.pathname =='/'?true:false },
    { name: 'Stacks', href: '/stacks', current: location.pathname =='/stacks'? true:false },
    { name: 'Projects', href: '/projects', current: location.pathname =='/projects'?true:false},
    { name: 'Tutorials', href: '/tutorials', current: location.pathname =='/tutorials'?true:false},
  ]

  const onGithub = () => {
    location.target='_blank'
    location.href = 'https://www.github.com/BranGitfox'
  }
  
  return (
   <>
     <Disclosure as="nav" className="bg-gray-800">
      <div className=" sticky top-0  mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <h3 className='font-medium text-3xl text-purple-700'>BrandonDEV.com</h3>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
            
                <button onClick={onGithub} className='px-5 py-1 bg-blue-900 rounded-xl border-2 border-blue-900 font-200'>
                  <img  src={github} alt="" />
                </button>
              </div>
              <MenuItems
                transition
                className="absolute  right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <Link  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              as="Link"
              to={item.href}
              
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
   </>
  )
}

export default Nav
