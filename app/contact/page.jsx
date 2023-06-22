import React from 'react'

export default function Contact() {
  return (
    <>
      <div className='w-full h-screen mt-10 mb-20'>
        <div className="flex w-full mb-10">
            <div className="felx flex-col mx-auto my-20">
              <div className="flex flex-col items-center">
                <p className="bankName">Contact us</p>
                <h1 className="promotionName">Get in touch</h1>
                <p className="text-gray-600">
                  We's love to hear from you. Please fill out the form.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:max-w-[600px] sm:max-w-[400px] items-center justify-center mt-10">
                <div className="flex lg:flex-row sm:flex-col sm:w-full gap-3 items-center justify-center">
                  <div className="flex flex-col w-full">
                    <p className="text-[13px] text-gray-600">First name</p>
                    <input
                      type="text"
                      placeholder="First name"
                      className="input-btn"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <p className="text-[13px] text-gray-600">Last name</p>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="input-btn"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-[13px] text-gray-600">Email</p>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="input-btn"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-[13px] text-gray-600">Phone number</p>
                  <input
                    type="phone"
                    placeholder="First name"
                    className="input-btn"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-[13px] text-gray-600">Message</p>
                  <textarea
                    type="message"
                    placeholder=""
                    className="input-btn"
                  />
                </div>
                <div className="flex flex-row gap-1">
                  <input type="checkbox" className="mr-2" />
                  <p>You agree to our friendly privacy policy</p>
                </div>
                <div className="redButton hover:bg-red-600 w-full">
                  <p className='text-center'>Send message</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}
