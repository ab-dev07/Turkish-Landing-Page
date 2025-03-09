import { Email, Message, Phone, User } from '@/icons'
import { CircleArrow } from '@/components/shared'

export default function ExhibitForm() {
    return (
        <section className='rounded-[20px] bg-black text-white exhibit-form-box py-10 px-10 xl:px-32 mt-16 w-fit xl:mx-auto mx-3 md:mx-10'>
            <h1 className='text-4xl md:tracking-[-4.5px] md:text-[71px] font-bold text-center uppercase mx-auto w-full xl:max-w-[894px] leading-snug'>
                <span className='text-white'>Want to become an Exhibit in</span>{" "}
                <span className='outline-txt'>Turkish Week?</span>
            </h1>
            <form className='w-full xl:w-[894px] mx-auto mt-16 text-sm md:text-lg'>
                <div className='flex justify-between md:flex-row flex-col gap-4'>
                    <div className='flex items-center gap-2 bg-[#191818] rounded-2xl border border-[#191818] p-4 group focus-within:border-[#ED1E24]'>
                        <User className='group-focus-within:text-[#ED1E24]' />
                        <input type="text" placeholder='Name' name='Name' className='focus:outline-0 w-full' />
                    </div>
                    <div className='flex items-center gap-2 bg-[#191818] rounded-2xl border border-[#191818] p-4 group focus-within:border-[#ED1E24]'>
                        <Email className='group-focus-within:text-[#ED1E24]' />
                        <input type="email" placeholder='Email Address' name='email' className='focus:outline-0 w-full' />
                    </div>
                    <div className='flex items-center gap-2 bg-[#191818] rounded-2xl border border-[#191818] p-4 group focus-within:border-[#ED1E24]'>
                        <Phone className='group-focus-within:text-[#ED1E24]' />
                        <input type="tel" placeholder='Phone number' name='phone number' className='focus:outline-0 w-full' />
                    </div>
                </div>
                <div className='flex items-start gap-2 bg-[#191818] rounded-2xl border border-[#191818] p-4 mt-4 md:mt-8 group focus-within:border-[#ED1E24]'>
                    <Message className='group-focus-within:text-[#ED1E24]' />
                    <textarea name="message" id="message" className='focus:outline-0 w-full' placeholder='Message/Description' rows={7}></textarea>
                </div>

                <button type='submit' className='flex items-center gap-5 border border-[#ED1E24] rounded-[215px] p-2 pl-7 text-[20px] mx-auto mt-10 font-bold cursor-pointer group hover:bg-[#ED1E24] transition-all'>
                    <span>Submit</span>
                    <CircleArrow />
                </button>
            </form>
        </section>
    )
}
