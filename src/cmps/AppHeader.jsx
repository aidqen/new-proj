import { NavLink } from 'react-router-dom'

export function AppHeader() {
  return (
    <header className="app-header flex flex-row items-center w-screen h-20 font-bold relative">
      <h1 className="ms-10 text-xl w-40 absolute">Team Arc</h1>
      <nav className="w-full font-sans">
        <ul className="flex flex-row w-full justify-center gap-20">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-4 text-xl font-semibold relative ${
                  isActive ? 'text-blue-500' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Home
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[4px] bg-blue-500 transition-all duration-300
                    ${isActive ? 'w-6' : 'w-0'}
                    `}
                  />
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `p-4 text-xl font-semibold relative ${
                  isActive ? 'text-blue-500' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Our Projects
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[4px] bg-blue-500 transition-all duration-300
                    ${isActive ? 'w-6' : 'w-0'}
                    `}
                  />
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `p-4 text-xl font-semibold relative ${
                  isActive ? 'text-blue-500' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  About Us
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[4px] bg-blue-500 transition-all duration-300
                    ${isActive ? 'w-6' : 'w-0'}
                    `}
                  />
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
