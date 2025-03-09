import { Email, Phone, User } from '@/icons'
import { CircleArrow, RadioButton } from '@/components/shared'
import Organizers from './Organizers'

export default function GetNotifiedForm() {
    return (
        <>
            <Organizers className='z-10 relative mt-20' />
            <section className='rounded-[20px] bg-black text-white exhibit-form-box py-20 px-10 xl:px-32 xl:mx-auto mx-3 md:mx-10 w-fit -mt-10'>
                <h1 className='md:tracking-[-4.5px] text-4xl md:text-[71px] font-bold text-center uppercase mx-auto w-full xl:max-w-[894px] leading-snug'>
                    <span className='text-white'>Get Notified </span>{" "}
                    <span className='outline-txt'>Form</span>
                </h1>
                <form className='w-full xl:w-[894px] mx-auto mt-16 text-sm md:text-lg'>
                    <div className='flex justify-between gap-4 flex-col md:flex-row'>
                        <div className='flex items-center gap-2 bg-[#191818] rounded-2xl border border-[#191818] p-4 group focus-within:border-[#ED1E24]'>
                            <User className='group-focus-within:text-[#ED1E24]'/>
                            <input type="text" placeholder='Name' name='Name' className='focus:outline-0 w-full' />
                        </div>
                        <div className='flex items-center gap-2 bg-[#191818] rounded-2xl border border-[#191818] p-4 group focus-within:border-[#ED1E24]'>
                            <Email className='group-focus-within:text-[#ED1E24]'/>
                            <input type="email" placeholder='Email Address' name='email' className='focus:outline-0 w-full' />
                        </div>
                        <div className='flex items-center gap-2 bg-[#191818] rounded-2xl border border-[#191818] p-4 group focus-within:border-[#ED1E24]'>
                            <Phone className='group-focus-within:text-[#ED1E24]'/>
                            <input type="tel" placeholder='Phone number' name='phone number' className='focus:outline-0 w-full' />
                        </div>
                    </div>
                    <div className='mt-8 cursor-pointer'>
                        <p className='inline'><RadioButton  /> I agreed to receive news, feature updates, discounts, and offers from 90EVENTS via SMS text messages. Standard messaging rates apply from your wireless carrier and have read the 90Events SMS Terms and Conditions.</p>
                    </div>

                    <button type='submit' className='flex items-center gap-5 border border-[#ED1E24] rounded-[215px] p-2 pl-7 text-[20px] mx-auto mt-10 font-bold cursor-pointer group hover:bg-[#ED1E24] transition-all'>
                        <span>Submit</span>
                        <CircleArrow />
                    </button>
                    <p className='text-center mt-2'>On sale times are quoted in local time.</p>
                </form>
            </section>
        </>
    )
}
