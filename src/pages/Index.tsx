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

      {/* Center image */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
          <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl scale-110" />
          <img
            src="https://cdn.poehali.dev/projects/7c970d2e-d910-4bf6-a295-9744fe4a9514/files/58019642-e9dd-4d4a-b4d9-22614aa9165f.jpg"
            alt="Аварийная служба АМК Спец"
            className="w-full h-full object-cover rounded-full border border-white/10 shadow-2xl"
            style={{ maskImage: 'radial-gradient(circle, black 60%, transparent 100%)' }}
          />
        </div>
      </div>

      <MaxButton />
      <CallButton />
    </ShaderBackground>
  )
}

export default Index