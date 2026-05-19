import { useState } from 'react'
import Icon from '@/components/ui/icon'

interface ContactModalProps {
  open: boolean
  onClose: () => void
  mode?: 'contact' | 'review'
  onSuccess?: () => void
}

export default function ContactModal({ open, onClose, mode = 'contact', onSuccess }: ContactModalProps) {
  const isReview = mode === 'review'
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  if (!open) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://functions.poehali.dev/539eaa3a-05e3-4f45-979a-4b2fe0f0b87c', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message, mode: isReview ? 'review' : 'contact' }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setSuccess(true)
        if (onSuccess) onSuccess()
      } else {
        setError(data.error || 'Ошибка отправки. Попробуйте позже.')
      }
    } catch {
      setError('Ошибка соединения. Попробуйте позже.')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setName('')
    setPhone('')
    setMessage('')
    setSuccess(false)
    setError('')
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-neutral-900 border border-white/10 rounded-2xl p-5 sm:p-8 w-full max-w-md shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white/80 transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        {success ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
              <Icon name="Check" size={28} className="text-white" />
            </div>
            <h3 className="text-white text-xl font-medium mb-2">{isReview ? 'Отзыв отправлен!' : 'Заявка отправлена!'}</h3>
            <p className="text-white/60 text-sm">{isReview ? 'Спасибо за ваш отзыв!' : 'Мы свяжемся с вами в ближайшее время.'}</p>
            <button
              onClick={handleClose}
              className="mt-6 px-8 py-3 rounded-full bg-white text-black text-xs font-normal hover:bg-white/90 transition-all"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-white text-xl font-medium mb-1">{isReview ? 'Оставить отзыв' : 'Связаться с нами'}</h3>
            <p className="text-white/50 text-xs mb-6">{isReview ? 'Поделитесь своим мнением о нашей работе' : 'Оставьте заявку — ответим в кратчайшие сроки'}</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Ваше имя *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
              />
              <input
                type="tel"
                placeholder="Телефон *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
              />
              <textarea
                placeholder="Сообщение (необязательно)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
              {error && <p className="text-red-400 text-xs">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 rounded-full bg-white text-black text-xs font-normal hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Отправляем...' : isReview ? 'Отправить отзыв' : 'Отправить заявку'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}