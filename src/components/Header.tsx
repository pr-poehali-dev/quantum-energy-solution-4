import { useState } from 'react'
import Icon from '@/components/ui/icon'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-3 sm:p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-xs sm:text-sm uppercase tracking-wide font-medium">ООО «АМК Спец»</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <div className="flex items-center gap-3 lg:gap-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" size={16} className="text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white/50 text-xs uppercase tracking-wide">Аварийная служба 24/7</span>
                <a
                  href="tel:84162392090"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm font-medium"
                >
                  8 (4162) 39-20-90
                </a>
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white/50 text-xs uppercase tracking-wide">Федеральный номер</span>
              <a
                href="tel:88003330703"
                className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm font-medium"
              >
                8 800 333-07-03
              </a>
            </div>
          </div>
          <span className="text-white/20">|</span>
          <button
            onClick={() => navigate('/owners')}
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm cursor-pointer"
          >
            МКД
          </button>
          <button
            onClick={() => navigate('/about')}
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm cursor-pointer"
          >
            О нас
          </button>
          <button
            onClick={() => navigate('/works')}
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm cursor-pointer"
          >
            Фото
          </button>
          <button
            onClick={() => navigate('/reviews')}
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm cursor-pointer"
          >
            Отзывы
          </button>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 p-4 flex flex-col gap-3">
          <a href="tel:84162392090" className="flex items-center gap-3 text-white text-sm py-2">
            <Icon name="Phone" size={16} className="text-white/60" />
            8 (4162) 39-20-90
            <span className="text-white/40 text-xs ml-auto">24/7</span>
          </a>
          <a href="tel:88003330703" className="flex items-center gap-3 text-white text-sm py-2">
            <Icon name="PhoneCall" size={16} className="text-white/60" />
            8 800 333-07-03
            <span className="text-white/40 text-xs ml-auto">бесплатно</span>
          </a>
          <div className="h-px bg-white/10" />
          <button onClick={() => { navigate('/owners'); setMenuOpen(false) }} className="text-white text-sm py-2 text-left uppercase tracking-wide">МКД</button>
          <button onClick={() => { navigate('/about'); setMenuOpen(false) }} className="text-white text-sm py-2 text-left uppercase tracking-wide">О нас</button>
          <button onClick={() => { navigate('/works'); setMenuOpen(false) }} className="text-white text-sm py-2 text-left uppercase tracking-wide">Фото</button>
          <button onClick={() => { navigate('/reviews'); setMenuOpen(false) }} className="text-white text-sm py-2 text-left uppercase tracking-wide">Отзывы</button>
        </div>
      )}
    </header>
  )
}
