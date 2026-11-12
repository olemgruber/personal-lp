import { Link } from 'react-router-dom'

function Nav() {
  return (
    <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-6 sm:px-8 sm:py-8 lg:px-[56px] lg:py-[37px]">
      <Link
        to="/"
        className="text-base font-extrabold uppercase leading-none tracking-[0] sm:text-lg lg:text-[22px]"
      >
        Lemgruber
      </Link>
      <nav className="flex items-center gap-6 text-sm uppercase leading-none tracking-[0] sm:text-base lg:gap-[50px] lg:text-[22px]">
        <Link to="/words" className="hover:opacity-70">
          words
        </Link>
      </nav>
    </header>
  )
}

export default Nav
