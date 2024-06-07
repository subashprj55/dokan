'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Container from '@/components/containder'
import Footer from '@/components/footer'
import Nav from '@/components/navBar/page'
import PriceDetails from '@/components/PricePlanDetails/page'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Accordian from '@/components/accordian'
import FeatureSection from '@/components/feature/page'
import PricePlanDetails from '@/components/PricePlanDetails/page'
import { aboutUsData, customerData, howItWorkData } from './homePageData'
import { Button } from '@mui/material'
import { FaHandPointLeft } from 'react-icons/fa'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <>
      <Nav />
      <Intro />
      <FeaturesSection />
      <HowItWorksSection />
      <AboutUsSection />
      <TestimonialsSection />
      <PricingPlansSection />
      <FaqSection />
      <Footer />
    </>
  )
}

const Intro = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center pt-20  md:pt-32">
        <div
          className="md:w-1/2 mt-4 md:mt-0 md:mb-0 md:mr-4"
          data-aos="fade-right"
        >
          <div className="mx-auto text-center md:text-left">
            <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-800 mb-4">
              Welcome to Your Grocery Store Management System
            </h1>
            <h2 className="text-6xl lg:text-7xl xl:text-9xl font-bold text-gray-600 mb-4">
              <span
                className="bg-gradient-to-r text-transparent from-green-400 to-cyan-400"
                style={{
                  backgroundClip: 'text',
                }}
              >
                DOKAN
              </span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Manage your grocery store efficiently with our user-friendly
              system.
            </p>
            <div className="flex justify-center items-center md:justify-start gap-2">
              <Button variant="contained" color="success" href="/dashboard">
                Let's Start
              </Button>
              <FaHandPointLeft className="text-gray-500 text-3xl animate-bounce" />
            </div>
          </div>
        </div>
        <div
          className="md:w-1/2 mt-2 md:mt-0 lg:flex justify-end"
          data-aos="fade-left"
        >
          <img
            src="/images/intro.png "
            alt="Grocery Image"
            className="lg:w-[85%;] h-auto rounded-md"
          />
        </div>
      </div>
    </Container>
  )
}

const FeaturesSection = () => {
  return (
    <Container>
      <div className="mt-20 w-full overflow-hidden">
        <h2 className="text-2xl px-2 md:4xl font-medium md:font-semibold">
          Explore the Benefits of DOKAN Features
        </h2>
        <FeatureSection />
      </div>
    </Container>
  )
}

const AboutUsSection = () => {
  return (
    <section className="bg-gray-100 mt-20 md:mt-32 py-10 md:mx-0 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-5 md:mb-10">
          About Us
        </h2>
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8 ">
          <div data-aos="fade-right">
            <Image
              className="lg:max-h-[550px;] rounded-md"
              alt={aboutUsData.alt}
              src={aboutUsData.photo}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%' }}
            />
          </div>
          <div className="max-w-lg" data-aos="fade-left">
            {aboutUsData.text.map((text) => {
              return (
                <p className="md:text-lg mb-4" key={text}>
                  {text}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

const HowItWorksSection = () => {
  return (
    <section className="bg-white mt-10 md:mt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-5 md:mb-10">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {howItWorkData.map(({ id, title, description }) => {
            return (
              <div className="text-center" key={id} data-aos="zoom-out-up">
                <div className="rounded-full bg-blue-500 text-white w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold">{id}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="md:text-lg">{description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const TestimonialsSection = () => {
  return (
    <div className="mt-20 md:mt-32 overflow-hidden ">
      <Container>
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8">
          Happy Customers
        </h2>
        <div data-aos="fade-up">
          <Swiper
            spaceBetween={50}
            modules={[Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop
            speed={1700}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1250: { slidesPerView: 3 },
            }}
          >
            {customerData.map(({ id, description, customerName }) => {
              return (
                <SwiperSlide key={id} className="cursor-pointer pb-10">
                  <div className="w-auto h-auto flex justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-[350px] md:w-auto ">
                      <p className="md:text-lg mb-4">
                        <span className="text-2xl text-gray-400">&#8220; </span>
                        {description}
                        <span className="text-2xl text-gray-400"> &#8221;</span>
                      </p>
                      <p className="text-gray-500">{`- ${customerName}`}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </Container>
    </div>
  )
}

const PricingPlansSection = () => {
  return (
    <section className="bg-white mt-10 md:mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl  font-semibold text-center mb-8">
          Choose best plan for your Business
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center "
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <PricePlanDetails
            time={'1 Month'}
            color={'bg-yellow-500'}
            hoverBg={'md:group-hover:bg-yellow-500'}
            price={99.99}
            bgCol={'bg-sky-200'}
          />
          <PriceDetails
            time={'6 Month'}
            color={'bg-green-500'}
            hoverBg={'md:group-hover:bg-green-500'}
            price={449.9}
            bgCol={'bg-yellow-100'}
          />
          <PriceDetails
            time={'1 Years'}
            color={'bg-pink-500'}
            hoverBg={'md:group-hover:bg-pink-500'}
            price={999.9}
            bgCol={'bg-green-200'}
          />
        </div>
      </div>
    </section>
  )
}

const FaqSection = () => {
  return (
    <section className="bg-gray-100 py-10 mt-20 ">
      <Container>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div data-aos="fade-up">
            <Accordian />
          </div>
        </div>
      </Container>
    </section>
  )
}
