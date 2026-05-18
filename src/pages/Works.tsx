import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '@/components/ui/icon'
import ContactModal from '@/components/ContactModal'

const works = [
  {
    id: 1,
    title: 'Ремонт трубопровода',
    description: 'Замена аварийного участка водопроводной трубы в подвале жилого дома',
    date: 'Март 2024',
    image: 'https://cdn.poehali.dev/projects/7c970d2e-d910-4bf6-a295-9744fe4a9514/files/625dd015-f8dd-4ca1-8c79-234f6ee78b2b.jpg',
  },
  {
    id: 2,
    title: 'Электромонтажные работы',
    description: 'Замена электропроводки в подъезде многоквартирного дома',
    date: 'Февраль 2024',
    image: 'https://cdn.poehali.dev/projects/7c970d2e-d910-4bf6-a295-9744fe4a9514/files/a26e492d-dc70-46bf-985a-da22d00c5cbe.jpg',
  },
  {
    id: 3,
    title: 'Ремонт кровли',
    description: 'Гидроизоляция и восстановление кровельного покрытия жилого дома',
    date: 'Январь 2024',
    image: 'https://cdn.poehali.dev/projects/7c970d2e-d910-4bf6-a295-9744fe4a9514/files/b27db348-4ccc-4f83-8080-10e1fdf9a19e.jpg',
  },
]

export default function Works() {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)
  const [selected, setSelected] = useState<number | null>(null)

  const selectedWork = works.find(w => w.id === selected)

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
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-light mb-2">Наши работы</h1>
        <p className="text-white/50 text-sm mb-10">Примеры выполненных работ ООО «АМК Спец»</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelected(work.id)}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all cursor-pointer"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="text-white/40 text-xs mb-1">{work.date}</div>
                <div className="font-medium text-sm mb-1">{work.title}</div>
                <div className="text-white/50 text-xs leading-relaxed">{work.description}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-white/30 text-xs mt-10 text-center">
          Хотите заказать работы?{' '}
          <button onClick={() => setModalOpen(true)} className="underline hover:text-white/60 transition-colors">
            Свяжитесь с нами
          </button>
        </p>
      </main>

      {/* Lightbox */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <Icon name="X" size={16} />
            </button>
            <img src={selectedWork.image} alt={selectedWork.title} className="w-full object-cover max-h-96" />
            <div className="p-6">
              <div className="text-white/40 text-xs mb-1">{selectedWork.date}</div>
              <div className="font-medium mb-2">{selectedWork.title}</div>
              <div className="text-white/60 text-sm leading-relaxed">{selectedWork.description}</div>
            </div>
          </div>
        </div>
      )}

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}