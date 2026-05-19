import { useState, useEffect } from 'react'
import Icon from '@/components/ui/icon'
import ContactModal from '@/components/ContactModal'
import PageHeader from '@/components/PageHeader'
import MaxButton from '@/components/MaxButton'
import CallButton from '@/components/CallButton'

const STATIC_REVIEWS = [
  {
    id: -1,
    name: 'Иванова Марина Сергеевна',
    address: 'ул. Кольцевая, 32',
    rating: 5,
    date: 'март 2024',
    text: 'Очень довольна работой управляющей компании. Всегда оперативно реагируют на заявки, во дворе чисто, подъезды в порядке. Диспетчерская служба работает круглосуточно — всегда можно дозвониться.',
  },
  {
    id: -2,
    name: 'Петров Алексей Николаевич',
    address: 'ул. Чайковского, 155',
    rating: 5,
    date: 'январь 2024',
    text: 'Обратился по поводу аварии в системе отопления — приехали в течение часа, всё устранили быстро и качественно. Спасибо мастерам за профессионализм!',
  },
  {
    id: -3,
    name: 'Соколова Елена Викторовна',
    address: 'ул. Ломоносова, 176',
    rating: 4,
    date: 'февраль 2024',
    text: 'В целом работой довольна. Территория убирается регулярно, на обращения реагируют. Хочется пожелать ещё быстрее обрабатывать заявки в пиковые периоды.',
  },
]

export default function Reviews() {
  const [modalOpen, setModalOpen] = useState(false)
  const [reviews, setReviews] = useState(STATIC_REVIEWS)

  const loadReviews = async () => {
    try {
      const res = await fetch('https://functions.poehali.dev/134a3901-15b0-4e54-8ade-26430a5bcd87')
      const data = await res.json()
      if (data.reviews && data.reviews.length > 0) {
        const dbReviews = data.reviews.map((r: { id: number; name: string; message: string; rating: number; created_at: string }) => ({
          id: r.id,
          name: r.name,
          address: '',
          rating: r.rating,
          date: r.created_at,
          text: r.message,
        }))
        setReviews([...dbReviews, ...STATIC_REVIEWS])
      }
    } catch (e) { void e }
  }

  useEffect(() => {
    loadReviews()
  }, [])

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <PageHeader onContact={() => setModalOpen(true)} />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-light mb-2">Отзывы</h1>
        <p className="text-white/50 text-sm mb-8 sm:mb-10">Что говорят жильцы об ООО «АМК Спец»</p>

        <div className="flex flex-col gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-6 py-4 sm:py-5"
            >
              <div className="flex items-start justify-between mb-3 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="User" size={16} className="text-white/50" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium">{review.name}</div>
                    <div className="text-white/40 text-xs mt-0.5">{review.address}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
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
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-white/40 text-sm mb-4">Хотите оставить отзыв? Свяжитесь с нами</p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black text-sm font-normal hover:bg-white/90 transition-all"
          >
            Оставить отзыв
          </button>
        </div>
      </main>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} mode="review" onSuccess={loadReviews} />
      <MaxButton />
      <CallButton />
    </div>
  )
}