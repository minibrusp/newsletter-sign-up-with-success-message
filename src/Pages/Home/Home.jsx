import SectionHomeCard from "../../Components/SectionHomeCard/SectionHomeCard"
import SectionCardSuccess from "../../Components/SectionCardSuccess/SectionCardSuccess"

import useFormContext from "../../Hooks/useFormContext"

export default function Home() {

  const { isFormSuccess } = useFormContext()

  return (
    <section className="Home bg-neutral-charcoal-grey font-roboto min-h-screen md:py-8 md:min-h-screen md:flex md:justify-center md:items-center">
      { !isFormSuccess && (
        <SectionHomeCard 
          headingText="Stay updated!"
          listItems= {[
            'Product discovery and building what matters',
            'Measuring to ensure updates are a success',
            'And much more!'
          ]}
          paragraphText="Join 60,000+ product managers receiving monthly updates on:"
        />
      )}
      { isFormSuccess && <SectionCardSuccess /> }
      
    </section>
  )
}
