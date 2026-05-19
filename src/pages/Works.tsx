import { useState } from 'react'
import Icon from '@/components/ui/icon'
import ContactModal from '@/components/ContactModal'
import PageHeader from '@/components/PageHeader'
import MaxButton from '@/components/MaxButton'

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
  const [modalOpen, setModalOpen] = useState(false)
  const [selected, setSelected] = useState<number | null>(null)

  const selectedWork = works.find(w => w.id === selected)

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <PageHeader onContact={() => setModalOpen(true)} />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-light mb-2">Наши работы</h1>
        <p className="text-white/50 text-sm mb-8 sm:mb-10">Примеры выполненных работ ООО «АМК Спец»</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {works.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelected(work.id)}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all cursor-pointer"
            >
              <div className="relative overflow-hidden h-44 sm:h-52">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5">
                <div className="text-white/40 text-xs mb-1">{work.date}</div>
                <div className="font-medium text-sm mb-1">{work.title}</div>
                <div className="text-white/50 text-xs leading-relaxed">{work.description}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-white/30 text-xs mt-8 sm:mt-10 text-center">
          Хотите заказать работы?{' '}
          <button onClick={() => setModalOpen(true)} className="underline hover:text-white/60 transition-colors">
            Свяжитесь с нами
          </button>
        </p>
      </main>

      {/* Lightbox */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-lg sm:max-w-2xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              <Icon name="X" size={18} />
            </button>
            <img src={selectedWork.image} alt={selectedWork.title} className="w-full object-cover max-h-64 sm:max-h-96" />
            <div className="p-4 sm:p-6">
              <div className="text-white/40 text-xs mb-1">{selectedWork.date}</div>
              <div className="font-medium mb-2">{selectedWork.title}</div>
              <div className="text-white/60 text-sm leading-relaxed">{selectedWork.description}</div>
            </div>
          </div>
        </div>
      )}

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <MaxButton />
    </div>
  )
}
