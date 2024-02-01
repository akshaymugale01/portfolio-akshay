'use client'

import { useForm, SubmitHandler } from "react-hook-form"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
// type Props = {};

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
  }
function Contact() {
    const {
        register,
        handleSubmit,    
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href=`mailto:akshaymugale.sknsits.comp@gmail.com?subject=${formData.subject}&body= Hi, My name is${formData.name}, ${formData.message}`
      }
    
      
      
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-16 uppercase tracking-[15px] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Skills that you need ! Let's Talk ...
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">+91 7507295123</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">Sinhgad College of Engineering , Pune</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">akshaymugale.sknsits.comp@gmail.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto" >
            <div className="flex space-x-2">
                <input {...register('name')} placeholder="Name" className="contactInfo" type="text" />
                <input {...register('email')} placeholder="Email" className="contactInfo" type="email" />
            </div>
            <input {...register('subject')} placeholder="Subject" className="contactInfo" type="text" />
            <textarea {...register('message')} placeholder="Message" className="contactInfo" />
            <button type="submit" className="bg-[#F7AB0A] px-10 py-5 rounded-md text-black font-bold text-lg">Submit</button>
        </form>

      </div>
    </div>
  );
}

export default Contact;
