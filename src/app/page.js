import { Hero, Services, Portfolio, FAQ, Testimonials, About } from '@/components/Home'





export default async function Home() {
  return (
    <>
      <div className="">
        <div className="relative">
          <Hero />
          <div className="gradient-01 -z-10" />
          <Services />
        </div>
        <div className="relative">
          <Portfolio />
          <Testimonials />
        </div>
        <div className="relative">
          <About />
          <FAQ />
        </div>
      </div>
    </>
  )
}
