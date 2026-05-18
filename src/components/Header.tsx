export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide font-medium">ООО АМК Спец</div>
        <nav className="flex gap-8">
          <a
            href="#owners"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Собственникам
          </a>
          <a
            href="#partners"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Партнёрам
          </a>
          <a
            href="#emergency"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Аварийная служба
          </a>
        </nav>
      </div>
    </header>
  )
}