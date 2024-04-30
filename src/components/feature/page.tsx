import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from './style.module.css'

const featureData = [
  {
    id: 1,
    imgPath: '/images/analysis.jpeg',
    alt: 'analysis image',
    title: 'Business Analysis',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    id: 2,
    imgPath: '/images/Emplyee.jpeg',
    alt: 'analysis image',
    title: 'Sales Monitoring',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    id: 3,
    imgPath: '/images/Inventory.jpeg',
    alt: 'analysis image',
    title: 'Inventory Info',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    id: 4,
    imgPath: '/images/Order.avif',
    alt: 'analysis image',
    title: 'Tax Management',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    id: 5,
    imgPath: '/images/Sales.webp',
    alt: 'sales',
    title: 'Easy to use',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
]

const FeatureSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <div className="py-10">
      {featureData.map(({ id, imgPath, alt, title, description }) => {
        const isEven = id % 2 === 0 ? true : false

        return (
          <div
            className={`flex ${
              isEven ? '' : 'flex-row-reverse'
            } flex-wrap md:flex-nowrap items-center justify-between p-8 mb-10 bg-gray-100`}
            data-aos={`fade-${isEven ? 'left' : 'right'}`}
            key={id}
          >
            <div className="w-full md:min-w-1/2 lg:w-1/2 relative md:mb-0 ">
              <img
                src={imgPath}
                alt={alt}
                className={`w-full h-[300px] ${
                  isEven ? styles.image3dleft : styles.image3dright
                } `}
              />
            </div>
            <div
              className={`max-w-1/2 my-6 text-left ${
                isEven ? 'md:text-right' : ''
              }`}
            >
              <h2 className="text-3xl font-semibold mb-1">{title}</h2>
              <p className="text-lg">{description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FeatureSection
