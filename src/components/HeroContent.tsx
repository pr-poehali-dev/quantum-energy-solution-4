import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ContactModal from '@/components/ContactModal'

export default function HeroContent() {
  const [modalOpen, setModalOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <main className="absolute bottom-8 left-8 z-20 max-w-lg">
        <div className="text-left">
          {/* Description */}
          <p className="text-base font-light text-white/70 mb-4 leading-relaxed">
            ООО «АМК Спец» специализируется на оперативном реагировании на внештатные ситуации в сфере ЖКХ.
            Обеспечиваем надёжную поддержку многоквартирных домов и организаций — современное оборудование,
            опытные специалисты и бесперебойная работа всех инженерных систем.
            Сотрудничество с нами — залог вашей безопасности и комфорта.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => navigate('/services')}
              className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer"
            >
              Наши услуги
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer"
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