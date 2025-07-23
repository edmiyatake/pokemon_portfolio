import Pokeball from './Pokeball'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 min-h-[72px] bg-white shadow-md overflow-visible">
        {/* Left side: Pokeball + Name */}
        <a href="/" className="flex items-center relative overflow-visible">
            <div className="-left-2 w-14 h-14">
                <Pokeball />
            </div>
            <span className="text-lg font-bold text-gray-800 ml-6">Edwin Miyatake</span>
        </a>

        {/* Right side: Links */}
        <div className="flex gap-4">
            <button className="text-gray-700 hover:text-blue-500">About</button>
            <button className="text-gray-700 hover:text-blue-500">Contact</button>
        </div>
    </nav>
  )
}

export default Navbar
