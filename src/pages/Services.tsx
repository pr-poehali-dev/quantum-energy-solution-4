import { useState } from 'react'
import Icon from '@/components/ui/icon'
import ContactModal from '@/components/ContactModal'
import PageHeader from '@/components/PageHeader'
import MaxButton from '@/components/MaxButton'

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
  {
    id: 6,
    icon: 'Headphones',
    title: 'Аварийно-диспетчерское обслуживание МКД и организаций любой формы собственности',
    description: 'Круглосуточный приём заявок от жильцов и организаций, координация аварийных бригад, контроль сроков устранения неисправностей и ведение журнала обращений.',
  },
]

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <PageHeader onContact={() => setModalOpen(true)} />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-light mb-2">Наши услуги</h1>
        <p className="text-white/50 text-sm mb-8 sm:mb-10">Полный спектр услуг по обслуживанию жилья и инженерных систем</p>

        <div className="flex flex-col gap-3 sm:gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex items-start gap-3 sm:gap-5 rounded-2xl px-4 sm:px-6 py-4 sm:py-5 border transition-colors ${
                service.highlight
                  ? 'bg-white/10 border-white/20'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${
                service.highlight ? 'bg-white/20' : 'bg-white/10'
              }`}>
                <Icon name={service.icon} size={20} className="text-white/80" />
              </div>
              <div>
                <div className="font-medium text-sm mb-1 flex items-center gap-2 flex-wrap">
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

        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-white/40 text-sm mb-4">Готовы помочь — звоните или оставьте заявку</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="tel:84162392090"
              className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 text-sm hover:bg-white/10 transition-all"
            >
              <Icon name="Phone" size={14} />
              8 (4162) 39-20-90
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-black text-sm font-normal hover:bg-white/90 transition-all"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </main>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <MaxButton />
    </div>
  )
}
