import Icon from '@/components/ui/icon'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide font-medium">ООО «АМК Спец»</div>
        <nav className="flex items-center gap-8">
          <div className="flex items-center gap-5">
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
            МКД и объекты обслуживания
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
        </nav>
      </div>
    </header>
  )
}