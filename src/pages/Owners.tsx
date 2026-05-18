import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '@/components/ui/icon'
import ContactModal from '@/components/ContactModal'

const houses = [
  { id: 1, address: 'ул. Кольцевая, 43', floors: 5, apartments: 40 },
  { id: 2, address: 'ул. Ленина, 12', floors: 9, apartments: 72 },
  { id: 3, address: 'пр. Победы, 7', floors: 5, apartments: 30 },
]

export default function Owners() {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
        >
          <Icon name="ArrowLeft" size={16} />
          На главную
        </button>
        <div className="text-sm font-medium uppercase tracking-wide">ООО «АМК Спец»</div>
        <div className="flex items-center gap-4">
          <a
            href="tel:84162392090"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
          >
            <Icon name="Phone" size={14} />
            8 (4162) 39-20-90
          </a>
          <a
            href="tel:88003330703"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
          >
            8 800 333-07-03
          </a>
          <button
            onClick={() => setModalOpen(true)}
            className="text-sm px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-all"
          >
            Связаться
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-light mb-2">Наши объекты</h1>
        <p className="text-white/50 text-sm mb-10">Список домов, обслуживаемых ООО «АМК Спец»</p>

        <div className="flex flex-col gap-4">
          {houses.map((house) => (
            <div
              key={house.id}
              className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-6 py-5 hover:bg-white/8 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Building2" size={18} className="text-white/70" />
                </div>
                <div>
                  <div className="font-medium text-sm">г. Благовещенск, {house.address}</div>
                  <div className="text-white/40 text-xs mt-0.5">{house.floors} этажей · {house.apartments} квартиры</div>
                </div>
              </div>
              <Icon name="ChevronRight" size={16} className="text-white/30" />
            </div>
          ))}
        </div>

        <p className="text-white/30 text-xs mt-8 text-center">
          Не нашли свой дом? — <button onClick={() => setModalOpen(true)} className="underline hover:text-white/60 transition-colors">Свяжитесь с нами</button>
        </p>
      </main>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}