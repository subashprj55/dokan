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
    description: ` Gain valuable insights into your grocery store's performance with advanced analytics and reporting tools. Track sales trends, monitor inventory turnover rates, and identify opportunities for growth.`,
  },
  {
    id: 2,
    imgPath: '/images/Emplyee.jpeg',
    alt: 'analysis image',
    title: 'Record Daily Transactions',
    description: ` Easily record and track all daily transactions within your grocery store, including sales, purchases, refunds, and expenses. Keep accurate records for better financial management and decision-making.`,
  },
  {
    id: 3,
    imgPath: '/images/Inventory.jpeg',
    alt: 'analysis image',
    title: 'Inventory Information',
    description: `
    Gain insight into inventory details, including product info and stock levels. Track categories, suppliers, and purchase history. Stay organized with reports for informed decision-making.`,
  },
  {
    id: 4,
    imgPath: '/images/credit-record.jpeg',
    alt: 'analysis image',
    title: 'Credits Record',
    description: `Manage customer credits efficiently by recording and tracking credit transactions. Keep track of credit limits, outstanding balances, and payment schedules to ensure smooth credit management processes.`,
  },
  {
    id: 5,
    imgPath: '/images/quickSale.jpeg',
    alt: 'analysis image',
    title: 'Quick Sale',
    description: `Streamline the sales process with a quick sale feature that allows cashiers to process transactions rapidly. Access commonly sold items with shortcuts, apply discounts or promotions, and complete sales quickly to enhance customer satisfaction.`,
  },
  {
    id: 6,
    imgPath: '/images/lowStock.jpeg',
    alt: 'analysis image',
    title: 'Inform Low Stock Products:',
    description: ` Receive real-time notifications or alerts when products reach low stock levels. Stay informed about inventory levels to prevent stockouts, optimize ordering processes, and ensure that popular items are always available to customers.`,
  },
  {
    id: 7,
    imgPath: '/images/Sales.webp',
    alt: 'sales',
    title: 'Easy to use',
    description: `
    Experience seamless navigation and powerful features with our user-friendly interface. Manage inventory, transactions, and business performance effortlessly for efficient grocery store management.`,
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
    <div className="pt-5 md:pt-10">
      {featureData.map(({ id, imgPath, alt, title, description }) => {
        const isEven = id % 2 === 0 ? true : false

        return (
          <div
            className={`flex ${
              isEven ? '' : 'flex-row-reverse'
            } flex-wrap md:flex-nowrap items-center justify-between p-5 md:p-8 mb-5 md:mb-10 bg-gray-50`}
            data-aos={`fade-${isEven ? 'left' : 'right'}`}
            key={id}
          >
            <div className="w-full md:min-w-1/2 lg:w-1/2 relative md:mb-0 ">
              <img
                src={imgPath}
                alt={alt}
                className={`md:min-w-[250px] lg:min-w-[390px] h-[300px] ${
                  isEven ? styles.image3dleft : styles.image3dright
                } `}
              />
            </div>
            <div
              className={`max-w-1/2 my-6 text-left ${
                isEven ? 'md:text-right' : ''
              }`}
            >
              <h2 className="text-xl md:text-3xl font-semibold mb-1">
                {title}
              </h2>
              <p className="md:text-lg">{description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FeatureSection
