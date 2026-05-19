import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ContactModal from '@/components/ContactModal'

export default function HeroContent() {
  const [modalOpen, setModalOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <main className="absolute bottom-36 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto z-20 max-w-sm sm:max-w-lg">
        <div className="text-left">
          <p className="text-sm sm:text-sm font-light text-white/70 mb-4 leading-relaxed line-clamp-3 sm:line-clamp-none">
            ООО «АМК Спец» специализируется на предоставлении высококачественных услуг аварийно-диспетчерского обслуживания. Наша компания обеспечивает оперативное реагирование на любые внештатные ситуации в сфере жилищно-коммунального хозяйства. Мы гарантируем надежную поддержку как многоквартирных домов, так и различных организаций. Наши специалисты обладают необходимыми знаниями и опытом для решения самых сложных задач. Применение современного оборудования позволяет нам проводить диагностику и устранять неисправности в кратчайшие сроки. Мы стремимся к поддержанию бесперебойной работы всех инженерных систем. Сотрудничество с ООО «АМК Спец» — это залог вашей безопасности и комфорта. Обратившись к нам, вы получите профессиональное и ответственное обслуживание.
          </p>

          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <button
              onClick={() => navigate('/services')}
              className="px-5 sm:px-8 py-2.5 sm:py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-sm sm:text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer"
            >
              Наши услуги
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="px-5 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white text-black font-normal text-sm sm:text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer"
            >
              Связаться с нами
            </button>
          </div>
        </div>
      </main>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}