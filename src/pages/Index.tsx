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
      <MaxButton />
      <CallButton />
    </ShaderBackground>
  )
}

export default Index