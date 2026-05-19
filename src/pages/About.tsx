import { useState } from 'react'
import Icon from '@/components/ui/icon'
import ContactModal from '@/components/ContactModal'
import PageHeader from '@/components/PageHeader'
import MaxButton from '@/components/MaxButton'

const team = [
  {
    name: 'Дроздов Олег Владимирович',
    role: 'Генеральный директор',
    icon: 'UserCircle',
  },
  {
    name: 'Копылова Маргарита Николаевна',
    role: 'Главный бухгалтер',
    icon: 'UserCircle',
  },
  {
    name: 'Коробанова Ирина Петровна',
    role: 'Диспетчер',
    note: 'Бессменный диспетчер со дня основания компании в 2020 году',
    icon: 'UserCircle',
  },
]

const documents = [
  {
    title: 'Лицензия на управление МКД',
    description: '№ Л045-01040-28/00027844 от 21.12.2020',
    icon: 'FileText',
  },
  {
    title: 'Свидетельство ИНН / ОГРН',
    description: 'ИНН: 2801258848 · ОГРН: 1202800005704',
    icon: 'FileCheck',
  },
  {
    title: 'Адрес',
    description: '675000, Амурская область, г. Благовещенск, ул. Кольцевая, 43, офис 10',
    icon: 'MapPin',
  },
  {
    title: 'Федеральный номер',
    description: '8 800 333-07-03',
    icon: 'Phone',
    link: 'tel:88003330703',
  },
]

export default function About() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <PageHeader onContact={() => setModalOpen(true)} />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-light mb-2">О нас</h1>
        <p className="text-white/50 text-sm mb-8 sm:mb-12">Управляющая компания ООО «АМК Спец»</p>

        {/* История */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-lg font-medium mb-4 sm:mb-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
              <Icon name="History" size={16} className="text-white/70" />
            </div>
            История компании
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="text-2xl sm:text-4xl font-light text-white/30">2020</div>
              <div className="h-px flex-1 bg-white/10" />
              <div className="text-xs sm:text-sm text-white/40">по сей день</div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              ООО «АМК Спец» основано 10 августа 2020 года. С первого дня работы компания оказывает полный спектр услуг по управлению и обслуживанию многоквартирных домов — от технического содержания общего имущества до круглосуточной аварийной службы. За время работы сформирована надёжная команда специалистов, которая заботится о комфорте жильцов каждый день.
            </p>
          </div>
        </section>

        {/* Команда */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-lg font-medium mb-4 sm:mb-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
              <Icon name="Users" size={16} className="text-white/70" />
            </div>
            Команда
          </h2>
          <div className="flex flex-col gap-3">
            {team.map((member, i) => (
              <div
                key={i}
                className="flex items-center gap-3 sm:gap-5 bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-4"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={20} className="text-white/50" />
                </div>
                <div>
                  <div className="text-sm font-medium">{member.name}</div>
                  <div className="text-white/50 text-xs mt-0.5">{member.role}</div>
                  {member.note && (
                    <div className="text-white/30 text-xs mt-1 italic">{member.note}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Документы */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-lg font-medium mb-4 sm:mb-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
              <Icon name="FolderOpen" size={16} className="text-white/70" />
            </div>
            Документы
          </h2>
          <div className="flex flex-col gap-3">
            {documents.map((doc, i) => (
              <div
                key={i}
                className="flex items-center gap-3 sm:gap-5 bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-4"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={doc.icon} size={20} className="text-white/70" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">{doc.title}</div>
                  {doc.link ? (
                    <a href={doc.link} className="text-white/70 hover:text-white transition-colors text-xs mt-0.5 block">{doc.description}</a>
                  ) : (
                    <div className="text-white/50 text-xs mt-0.5 break-words">{doc.description}</div>
                  )}
                </div>
                {!doc.link && <div className="text-white/20 text-xs hidden sm:block flex-shrink-0">по запросу</div>}
              </div>
            ))}
          </div>
          <p className="text-white/30 text-xs mt-4 text-center">
            Для ознакомления с документами свяжитесь с нами
          </p>
        </section>

        {/* CTA */}
        <div className="mt-4 text-center">
          <p className="text-white/40 text-sm mb-4">Есть вопросы? Мы всегда на связи</p>
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
