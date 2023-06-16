import { Heading, SubHeading } from "../ui/Heading"


const ServicesCard = ({ service }) => {
  const { title, description, features, image } = service
  return (
    <>

      <div className="w-72 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800 glassEffect   ">
        <p className="mb-4 text-xl  font-medium text-gray-800 dark:text-gray-200">
          {title}
        </p>
        {/* <p className="text-3xl font-bold text-gray-900 dark:text-white">
          $0
          <span className="text-sm text-gray-500">
            / month
          </span>
        </p> */}
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-100">
          {description}
        </p>
        <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
          {features.map((feature, index) => {
            return (
              <li className="mb-3 flex items-center " key={index} >
                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                  <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                  </path>
                </svg>
                {feature}
              </li>
            )
          })}


        </ul>
        <button type="button" className="py-2 px-4 bg-primary-purple glassEffectColor text-gray-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg b ">
          Choose plan
        </button>
      </div>

    </>
  )

}

const Services = () => {


  const serviceList = [
    {
      "title": "Website Development",
      "description": "Unlock Your Online Potential",
      "features": ["Engaging", "Responsive", "SEO Optimized", "User-friendly", "Scalable"],
      "image": "website-development.jpg"
    },
    {
      "title": "Mobile App Development",
      "description": "Embrace the Power of Mobile",
      "features": ["Sleek UI", "Intuitive", "High Performance", "Cross-platform", "Engaging"],
      "image": "mobile-app-development.jpg"
    },
    {
      "title": "Software Development",
      "description": "Unleash Your Business's Full Potential",
      "features": ["Scalable", "Secure", "Efficient", "Customized", "Integration"],
      "image": "custom-software-development.jpg"
    },
    {
      "title": "UI/UX Design",
      "description": " Deliver Exceptional User Experiences",
      "features": ["Visually Stunning", "Intuitive", "Seamless Interactions", "User-centric", "Brand Transformation"],
      "image": "ui-ux-design.jpg"
    }
  ]

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>

            <Heading url="/services" >
              Our Expertise
            </Heading>

            <SubHeading>
              Tailor-Made Solutions for Your Unique Requirements
            </SubHeading>
          </header>

          <div className="mt-8">
            <p className="text-sm text-gray-500"></p>
          </div>

          <div className="mt-4 grid gap-3 lg:gap-6 sm:grid-cols-1 lg:grid-cols-4 w-fit mx-auto ">

            {serviceList.map((service, index) => {
              return (
                <ServicesCard key={index} service={service} />
              )
            })
            }

          </div>


        </div>
      </section>
    </>
  )
}

export default Services