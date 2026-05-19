import Icon from '@/components/ui/icon'
import { useNavigate } from 'react-router-dom'

interface PageHeaderProps {
  onContact: () => void
}

export default function PageHeader({ onContact }: PageHeaderProps) {
  const navigate = useNavigate()

  return (
    <header className="border-b border-white/10 px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-xs sm:text-sm flex-shrink-0"
      >
        <Icon name="ArrowLeft" size={16} />
        <span className="hidden xs:inline">На главную</span>
      </button>
      <div className="text-xs sm:text-sm font-medium uppercase tracking-wide text-center">ООО «АМК Спец»</div>
      <div className="flex items-center gap-2 sm:gap-4">
        <a
          href="tel:84162392090"
          className="hidden sm:flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
        >
          <Icon name="Phone" size={14} />
          8 (4162) 39-20-90
        </a>
        <a
          href="tel:84162392090"
          className="sm:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:text-white transition-colors"
        >
          <Icon name="Phone" size={16} />
        </a>
        <button
          onClick={onContact}
          className="text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/20 hover:bg-white/10 transition-all flex-shrink-0"
        >
          Связаться
        </button>
      </div>
    </header>
  )
}