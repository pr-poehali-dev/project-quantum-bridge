import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Philosophy } from "../components/Philosophy"
import { Projects } from "../components/Projects"
import { MiniOffices } from "../components/MiniOffices"
import { Expertise } from "../components/Expertise"
import { FAQ } from "../components/FAQ"
import { CallToAction } from "../components/CallToAction"
import { OfficesBlog } from "../components/OfficesBlog"
import { Footer } from "../components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <Projects />
      <MiniOffices />
      <Expertise />
      <FAQ />
      <OfficesBlog />
      <CallToAction />
      <Footer />
    </main>
  )
}