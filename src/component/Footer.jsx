import React from 'react'

const Footer = () => {
  return (
    <div className='bg-color mt-3 mb-0 pb-0'>
        <div className="container d-sm-flex justify-content-between text-light pt-4">
            <div className="footer-text">
               <img src="../../assets/logo3.jpg" alt="logo" className='mb-2' />
               <p>Kinplus Technologies is a software <br /> development company focused on building <br />scalable applications and software for <br /> businesses, corporate organisations, and individuals.</p>
            </div>
            <div className="mb-3 links mx-xs-0 mx-sm-5 mx-md-5  mx-lg-0">
               <h6>LINKS</h6>
               <ol className='p-0'><a href="https://www.kinplusgroup.com/kinplus">Homepage</a></ol >
               <ol className='p-0'><a href="https://www.kinplusgroup.com/about">Know more about us</a></ol >
               <ol className='p-0'><a href="https://www.kinplusgroup.com/training">Our training programs</a></ol >
               <ol className='p-0'><a href="https://www.kinplusgroup.com/contact">Get in touch with us</a></ol >
               <ol className='p-0'><a href="https://www.kinplusgroup.com/interns">Internship programs</a></ol >
               <ol className='p-0'><a href="https://www.kinplusgroup.com/it-siwes">IT / SIWES program</a></ol >
            </div>
            <div className="mx-xs-0 mx-sm-4 mx-md-5 mx-lg-0">
                <h6>ADDRESS:</h6>
                <p> Top Floor, 68B Christore Building, <br />
                    Opp. Crunchies Restaurant, <br />
                    Similoluwa, Ado Ekiti, Ekiti State, Nigeria. <br />
                    Email: help@kinplusgroup.com <br />
                    Phone: +2347069718643, +2348071572767</p>

                    
                    <ul class="my-list text-light">
                        <li>Whatsapp</li>
                        <li>Facebook</li>
                        <li>Email</li>
                        <li>Telegram</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
            </div>
        </div>

        <div className="mt-5 pb-3">
            <h6 className='text-center text-light fs-6'>Copyright © 2023 Kinplus Technologies All Right Reserved.</h6>
        </div>
    </div>
  )
}

export default Footer