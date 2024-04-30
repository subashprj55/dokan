'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/container'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import PriceDetails from '@/components/price'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import AOS from 'aos'
import 'aos/dist/aos.css'
import FaqsSection from '@/components/accordian'
import FeatureSection from '@/components/feature/page'

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
      <FaqsSection />
      <Footer />
    </>
  )
}

const Intro = () => {
  return (
    <div className="bg-white" data-aos="fade-up">
      <div>
        <title>Your Grocery Store Management</title>
        <meta
          name="description"
          content="Welcome to Your Grocery Store Management System"
        />
      </div>

      {/* body contant  start form here*/}
      <Container>
        <div className="pt-48">
          <h1 className="text-3xl md:text-7xl text-center font-bold text-gray-800 mb-4">
            Welcome to Your Grocery Store Management System
          </h1>
          <br />
          <h1 className="text-5xl md:text-8xl text-center font-bold text-gray-600 mb-4">
            DOKAN
          </h1>
          <p className=" text-gray-600 text-center mb-5 text-2xl mt-5 md:mt-14">
            Manage your grocery store efficiently with our user-friendly system.
          </p>
          <div className="flex justify-center gap-3 pt-5">
            <Link
              href={'/dashboard'}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors duration-300"
            >
              Let's Start
            </Link>
          </div>
        </div>
      </Container>
    </div>
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

const TestimonialsSection = () => {
  const customerData = [
    {
      id: 0,
      description:
        "I'm amazed by how easy it is to manage my store with this system. It has everything I need to stay organized and serve my customers better.",
      customerName: 'Emily Johnson, Owner of Fresh Mart',
    },
    {
      id: 2,
      description:
        "Switching to this management system was one of the best decisions I've made for my business. It's efficient, reliable, and has helped me increase my sales.",
      customerName: 'Emily Johnson, Owner of Fresh Mart',
    },
    {
      id: 3,
      description:
        "The support team behind this system is outstanding. They're always available to help me with any questions or issues I encounter, which gives me peace of mind.",
      customerName: 'Emily Johnson, Owner of Fresh Mart',
    },
    {
      id: 4,
      description:
        "Switching to this management system was one of the best decisions I've made for my business. It's efficient, reliable, and has helped me increase my sales.",
      customerName: 'Emily Johnson, Owner of Fresh Mart',
    },
    {
      id: 5,
      description:
        "I'm amazed by how easy it is to manage my store with this system. It has everything I need to stay organized and serve my customers better.",
      customerName: 'Emily Johnson, Owner of Fresh Mart',
    },
  ]

  return (
    <div className="mt-20 md:my-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8">
        Happy Customers
      </h2>
      {/* image slide for tab and laptop */}
      <div className=" hidden md:block">
        <Swiper
          spaceBetween={50}
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop
          speed={1700}
        >
          {customerData.map(({ id, description, customerName }) => {
            return (
              <SwiperSlide key={id} className="cursor-pointer pb-10">
                {/* image */}
                <div className="w-auto h-auto">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <p className="text-lg mb-4">
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
    </div>
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
              alt={'image'}
              src={'/images/Sales.webp'}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="max-w-lg" data-aos="fade-left">
            <p className="md:text-lg mb-4">
              At Dokan, we are dedicated to revolutionizing the way grocery
              stores manage their operations. With a focus on innovation and
              excellence, we strive to provide cutting-edge solutions that
              streamline inventory management, enhance sales tracking, and
              improve customer satisfaction.
            </p>
            <p className="md:text-lg">
              Our team consists of passionate professionals who are committed to
              delivering exceptional results and exceeding our customers'
              expectations. With a deep understanding of the challenges faced by
              grocery store owners, we work tirelessly to develop and implement
              solutions that drive success and growth.
            </p>
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
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          data-aos="zoom-out-up"
        >
          <div className="text-center">
            <div className="rounded-full bg-blue-500 text-white w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Sign Up</h3>
            <p className="md:text-lg">
              Sign up for our grocery store management system by providing your
              basic information. It's quick, easy, and free!
            </p>
          </div>
          <div className="text-center">
            <div className="rounded-full bg-blue-500 text-white w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Set Up Your Store</h3>
            <p className="md:text-lg">
              Customize and set up your store according to your preferences. Add
              products, categories, and manage inventory effortlessly.
            </p>
          </div>
          <div className="text-center">
            <div className="rounded-full bg-blue-500 text-white w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Start Selling</h3>
            <p className="md:text-lg">
              Once your store is set up, you can start selling your products to
              customers both online and offline. Manage orders, track sales, and
              grow your business effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const PricingPlansSection = () => {
  return (
    <section className="bg-white py-16 md:mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl  font-semibold text-center mb-8">
          Choose best plan for your Business
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center "
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <PriceDetails
            time={'1 Month'}
            color={'blue'}
            price={'99.99'}
            bgColor={'red'}
          />
          <PriceDetails
            time={'6 Month'}
            color={'yellow'}
            price={'449.9'}
            bgColor={'blue'}
          />
          <PriceDetails
            time={'1 Years'}
            color={'red'}
            price={'999.9'}
            bgColor={'yellow'}
          />
        </div>
      </div>
    </section>
  )
}
