import { Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-8 mt-20">
      <div className="container mx-auto px-10">
        <Grid container spacing={4}>
          {/* First Column */}
          <Grid item xs={12} md={4}>
            <div className="flex items-center">
              <img
                src="/images/logoFooter.png"
                alt="Logo"
                className="w-28 mr-2"
              />
              {/* <Typography variant="h6">Dokan</Typography> */}
            </div>
            <Typography variant="body2" className="mt-2">
              We are a leading provider of innovative solutions in the tech
              industry. Our mission is to deliver high-quality products that
              meet the needs of our customers.
            </Typography>
          </Grid>

          {/* Second Column */}
          <Grid item xs={12} md={4}>
            <div className="lg:flex justify-center">
              <div>
                <Typography variant="h6" className="text-xl" gutterBottom>
                  Connect With Us
                </Typography>
                <div className="flex space-x-4 -ml-2">
                  <IconButton>
                    <FaFacebook className="text-[#1877F2]" />
                  </IconButton>
                  <IconButton>
                    <FaTwitter className="text-[#1DA1F2]" />
                  </IconButton>
                  <IconButton>
                    <FaInstagram className="text-[#F58529]" />
                  </IconButton>
                  <IconButton>
                    <FaLinkedin className="text-[#0077B5]" />
                  </IconButton>
                </div>
                <Typography variant="body2" className="mt-2">
                  123 Company Address, City, Country
                  <br />
                  Phone: +1234567890
                </Typography>
              </div>
            </div>
          </Grid>

          {/* Third Column */}
          <Grid item xs={12} md={4}>
            <div className="ld:flex justify-center">
              <div>
                <Typography variant="h6" gutterBottom>
                  Quick Links
                </Typography>
                <ul className="list-none p-0">
                  <li>
                    <Typography variant="body2">About Us</Typography>
                  </li>
                  <li>
                    <Typography variant="body2">Services</Typography>
                  </li>
                  <li>
                    <Typography variant="body2">Contact Us</Typography>
                  </li>
                  {/* Add more links as needed */}
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-center">
        &copy; {new Date().getFullYear()} GroceryMaster. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
