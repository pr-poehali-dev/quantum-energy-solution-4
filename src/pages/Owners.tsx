import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '@/components/ui/icon'
import ContactModal from '@/components/ContactModal'
import MaxButton from '@/components/MaxButton'

const houses = [
  { id: 1, address: 'ул. Кольцевая, 32' },
  { id: 2, address: 'ул. Текстильная, 25' },
  { id: 3, address: 'ул. Пионерская, 157' },
  { id: 4, address: 'ул. Чайковского, 155' },
  { id: 5, address: 'ул. Чайковского, 163' },
  { id: 6, address: 'ул. Чайковского, 167' },
  { id: 7, address: 'ул. Чайковского, 209' },
  { id: 8, address: 'ул. Ломоносова, 176' },
  { id: 9, address: 'ул. Мичурина, 15' },
  { id: 10, address: 'ул. Комсомольская, 61' },
  { id: 11, address: 'ул. Шимановского, 46' },
  { id: 12, address: 'ул. Шимановского, 68/5' },
  { id: 13, address: 'Верхнеблаговещенск, ул. Ленина, 21' },
  { id: 14, address: 'ул. Ленина, 187' },
  { id: 15, address: 'ул. Амурская, 55/2', label: 'ТСЖ «Лазурит»' },
  { id: 16, address: 'ул. Амурская, 55/3', label: 'ТСЖ «Лазурит»' },
  { id: 17, address: 'ул. Пушкина, 89', label: 'ТСЖ «Лазурит»' },
  { id: 18, address: 'ул. Амурская, 14/3' },
  { id: 19, address: 'ул. Красноармейская, 63/2' },
  { id: 20, address: 'ул. Политехническая, 79' },
  { id: 21, address: 'ул. Горького, 136/1' },
  { id: 22, address: 'ул. Горького, 136/2' },
  { id: 23, address: 'ул. Больничная, 28' },
  { id: 24, address: 'ул. 50 лет Октября, 147/3' },
  { id: 25, address: 'ул. 50 лет Октября, 147/5' },
  { id: 26, address: 'ул. 50 лет Октября, 110/4' },
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
                  {house.label && (
                    <div className="text-white/40 text-xs mt-0.5">{house.label}</div>
                  )}
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
      <MaxButton />
    </div>
  )
}