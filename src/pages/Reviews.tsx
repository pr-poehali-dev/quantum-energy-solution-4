import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '@/components/ui/icon'
import ContactModal from '@/components/ContactModal'
import MaxButton from '@/components/MaxButton'

const reviews = [
  {
    id: 1,
    name: 'Иванова Марина Сергеевна',
    address: 'ул. Кольцевая, 32',
    rating: 5,
    date: 'март 2024',
    text: 'Очень довольна работой управляющей компании. Всегда оперативно реагируют на заявки, во дворе чисто, подъезды в порядке. Диспетчерская служба работает круглосуточно — всегда можно дозвониться.',
  },
  {
    id: 2,
    name: 'Петров Алексей Николаевич',
    address: 'ул. Чайковского, 155',
    rating: 5,
    date: 'январь 2024',
    text: 'Обратился по поводу аварии в системе отопления — приехали в течение часа, всё устранили быстро и качественно. Спасибо мастерам за профессионализм!',
  },
  {
    id: 3,
    name: 'Соколова Елена Викторовна',
    address: 'ул. Ломоносова, 176',
    rating: 4,
    date: 'февраль 2024',
    text: 'В целом работой довольна. Территория убирается регулярно, на обращения реагируют. Хочется пожелать ещё быстрее обрабатывать заявки в пиковые периоды.',
  },
]

export default function Reviews() {
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

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-light mb-2">Отзывы</h1>
        <p className="text-white/50 text-sm mb-10">Что говорят жильцы об ООО «АМК Спец»</p>

        <div className="flex flex-col gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="User" size={18} className="text-white/50" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{review.name}</div>
                    <div className="text-white/40 text-xs mt-0.5">{review.address}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={12}
                        className={i < review.rating ? 'text-yellow-400' : 'text-white/20'}
                      />
                    ))}
                  </div>
                  <div className="text-white/30 text-xs">{review.date}</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-white/40 text-sm mb-4">Хотите оставить отзыв? Свяжитесь с нами</p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-6 py-3 rounded-full bg-white text-black text-sm font-normal hover:bg-white/90 transition-all"
          >
            Оставить отзыв
          </button>
        </div>
      </main>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <MaxButton />
    </div>
  )
}