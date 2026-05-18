import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '@/components/ui/icon'
import ContactModal from '@/components/ContactModal'

const services = [
  {
    id: 1,
    icon: 'Building2',
    title: 'Управление многоквартирными домами',
    description: 'Полное техническое и административное управление МКД: содержание общего имущества, взаимодействие с ресурсоснабжающими организациями, ведение документации.',
  },
  {
    id: 2,
    icon: 'Waves',
    title: 'Устранение засоров канализации',
    description: 'Профессиональная прочистка канализационных труб любой сложности. Используем современное гидродинамическое и механическое оборудование.',
  },
  {
    id: 3,
    icon: 'Zap',
    title: 'Услуги электрика',
    description: 'Монтаж, замена и ремонт электропроводки, щитков, розеток и выключателей. Устранение аварийных ситуаций с электроснабжением.',
  },
  {
    id: 4,
    icon: 'Wrench',
    title: 'Услуги сантехника',
    description: 'Установка и ремонт сантехнического оборудования, замена труб, устранение течей, монтаж счётчиков воды.',
  },
  {
    id: 5,
    icon: 'Phone',
    title: 'Круглосуточная аварийная служба',
    description: 'Оперативное реагирование на любые аварийные ситуации 24/7. Выезд специалистов в кратчайшие сроки для устранения неисправностей.',
    highlight: true,
  },
]

export default function Services() {
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
        <h1 className="text-3xl font-light mb-2">Наши услуги</h1>
        <p className="text-white/50 text-sm mb-10">Полный спектр услуг по обслуживанию жилья и инженерных систем</p>

        <div className="flex flex-col gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex items-start gap-5 rounded-2xl px-6 py-5 border transition-colors ${
                service.highlight
                  ? 'bg-white/10 border-white/20'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${
                service.highlight ? 'bg-white/20' : 'bg-white/10'
              }`}>
                <Icon name={service.icon} size={20} className="text-white/80" />
              </div>
              <div>
                <div className="font-medium text-sm mb-1 flex items-center gap-2">
                  {service.title}
                  {service.highlight && (
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-normal">24/7</span>
                  )}
                </div>
                <div className="text-white/50 text-xs leading-relaxed">{service.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-white/40 text-sm mb-4">Готовы помочь — звоните или оставьте заявку</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="tel:84162392090"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-sm hover:bg-white/10 transition-all"
            >
              <Icon name="Phone" size={14} />
              8 (4162) 39-20-90
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3 rounded-full bg-white text-black text-sm font-normal hover:bg-white/90 transition-all"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </main>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}