import Link from "next/link"
import { DarkModeButton } from "./ui/Button"

const Navigation = () => {

  const Navlist = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Services',
      link: '/services'
    },
    {
      name: 'Contact',
      link: '/contact'
    },
    {
      name: 'Projects',
      link: '/projects'
    },
    {
      name: 'Team',
      link: '/team'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Career',
      link: '/career'
    },
  ]

  return (
    <>
      <header className=" font-prompt sticky top-0 z-40 backdrop-blur-lg  ">
        <div
          className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
        >
          <div className="flex items-center gap-4">
            <button type="button" className="p-2 lg:hidden">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <a href="#" className="flex">
              <span className="sr-only">Logo</span>
              <span className="inline-block h-10 w-32 rounded-lg bg-gray-200 dark:bg-gray-700/80"></span>
            </a>
          </div>

          <div className="flex flex-1 items-center justify-end gap-8">
            <nav
              aria-label="Global"
              className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-700"
            >
              {Navlist.map((nav) => {
                return (
                  <Link
                    href={nav.link}
                    className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current text-gray-900 dark:text-gray-100 font-light "
                  >
                    {nav.name}
                  </Link>
                )
              })}

            </nav>

            <div className="flex items-center">
              <div className="flex items-center ">
                <span className="">
                  <div
                    
                    className="grid h-16 w-16 place-content-center border-b-4 border-transparent "
                  >
                    <DarkModeButton/>
                  </div>
                </span>

                <span className="">
                  <div
                    
                    className="grid h-16 w-16 place-content-center border-b-4 border-transparent "
                  >
                   

                  </div>
                </span>

                <span className="hidden sm:block">
                  <div
                    
                    className="grid h-16 w-16 place-content-center border-b-4 border-transparent "
                  >
                    

                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navigation