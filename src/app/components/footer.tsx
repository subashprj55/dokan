import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              At GroceryMaster, we're passionate about revolutionizing the
              grocery store management experience. Our mission is to empower
              store owners with innovative solutions that streamline operations
              and enhance customer satisfaction.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">123 Main Street, Anytown, USA</p>
            <p className="text-sm">Email: info@grocerymaster.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-sm">
                Facebook
              </a>
              <a href="#" className="text-sm">
                Twitter
              </a>
              <a href="#" className="text-sm">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-center">
          &copy; {new Date().getFullYear()} GroceryMaster. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
