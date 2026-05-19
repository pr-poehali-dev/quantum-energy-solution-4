import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import MaxButton from "@/components/MaxButton"
import CallButton from '@/components/CallButton'

const Index = () => {
  return (
    <ShaderBackground>
      <Header />
      <HeroContent />
      <PulsingCircle />

      {/* Building image */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px]">
          <img
            src="https://cdn.poehali.dev/projects/7c970d2e-d910-4bf6-a295-9744fe4a9514/files/93de84d1-846f-4942-9742-528f54ace72c.jpg"
            alt="Многоквартирный дом"
            className="w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl"
            style={{ maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 100%)' }}
          />
        </div>
      </div>

      <MaxButton />
      <CallButton />
    </ShaderBackground>
  )
}

export default Index