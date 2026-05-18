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
          <div
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
            style={{
              filter: "url(#glass-effect)",
            }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
            <span className="text-white/90 text-xs font-light relative z-10">Управляющая компания ООО «АМК Спец» · Амурская область, г. Благовещенск, ул. Кольцевая 43, офис 10</span>
          </div>

          {/* Description */}
          <p className="text-xs font-light text-white/70 mb-4 leading-relaxed">
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