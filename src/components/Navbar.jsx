import Pokeball from './Pokeball'

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 min-h-[72px] bg-white shadow-md">
      {/* Left side: Pokeball + Name */}
      <a href="/" className="flex items-center gap-4">
        <div className="w-14 h-14">
          <Pokeball />
        </div>
        <span className="text-2xl text-gray-700">Edwin Miyatake</span>
      </a>

      {/* Right side: Links */}
      <div className="flex gap-10 mr-10">
        <button className="text-2xl text-gray-700 hover:text-blue-500">About</button>
        <button className="text-2xl text-gray-700 hover:text-blue-500">Experience</button>
        <button className="text-2xl text-gray-700 hover:text-blue-500">Contact</button>
      </div>
    </nav>
  )
}

export default Navbar
