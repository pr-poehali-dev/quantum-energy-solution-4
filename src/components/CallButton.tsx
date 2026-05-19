import Icon from '@/components/ui/icon'

export default function CallButton() {
  return (
    <a
      href="tel:84162392090"
      className="sm:hidden fixed bottom-5 left-4 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-sm font-medium shadow-xl active:scale-95 transition-transform"
    >
      <Icon name="Phone" size={16} />
      Позвонить
    </a>
  )
}