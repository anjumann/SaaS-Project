import { Hero, Services, Portfolio, FAQ, Testimonials, About } from '@/components/Home'


export default async function Home() {

  
 
  return (
    <>
      <div className="">
        <div className="">
          <Hero />
          <Services />
        </div>
        <div className="">
          <Portfolio />
          <Testimonials />
        </div>
        <div className="">
          <About />
          <FAQ />
        </div>
      </div>
    </>
  )
}
