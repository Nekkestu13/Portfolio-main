import Link from 'next/link'
import ThemeToggle from './theme-toggle'

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between h-16 before:block">
        <div className="grow flex justify-end space-x-4">

          {/* Light switch */}
          <ThemeToggle />

          {/* Button */}
          <div>
            <Link className="btn-sm text-slate-100 bg-sky-500 hover:bg-sky-600" href="mailto:ryan.houha13@gmail.com?subject=Prise de contact" target="_blank">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
