import Image from "next/image";
import React from "react";
import GetItOnPlayStore from "../../../public/Get_it_on_play_store.svg";
import DownloadOnTheAppStore from "../../../public/Download_on_the_App_Store.svg";
import twitter from "../../../public/socials/twitter.svg";
import facebook from "../../../public/socials/facebook.svg";
import instagram from "../../../public/socials/instagram.svg";
import linkedin from "../../../public/socials/linkedin.svg";
import Link from "next/link";
import { Send } from "@/icons";

export default function Footer() {
    return (
        <footer className="text-black px-5 md:px-16 lg:px-20 py-16 flex flex-col gap-5 mt-10 mx-auto max-w-[1920px]">
            <div className="flex justify-between flex-col lg:flex-row gap-5">
                <div className="space-y-5 lg:w-1/3">
                    <h2 className="text-[46px] font-semibold uppercase">
                        <span>
                            Turkish
                        </span>{" "}
                        <span className="text-[#DC143C]">
                            Week
                        </span>
                    </h2>
                    <span>
                        Another GREAT SHOW is on the way! 90EVENTS offers you the
                        opportunity to watch the most beautiful and popular shows!
                    </span>
                    <div className="flex gap-2 my-5">
                        <a
                            href="https://upload.wikimedia.org/wikipedia/commons/9/91/Download_on_the_App_Store_RGB_blk.svg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image src={DownloadOnTheAppStore} alt="Get it on Google Play" />
                        </a>
                        <a
                            href="https://apps.apple.com/app/example-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image src={GetItOnPlayStore} alt="Download on the App Store" />
                        </a>
                    </div>
                    <div className="flex gap-5">
                        <Image src={twitter} alt="twitter" />
                        <Image src={facebook} alt="facebook" />
                        <Image src={instagram} alt="instagram" />
                        <Image src={linkedin} alt="linkedin" />
                    </div>
                </div>
                <div className="flex gap-6 justify-between flex-wrap md:flex-nowrap md:flex-row">
                    <div className="flex flex-col gap-3 w-1/4">
                        <p className="text-[20px] font-semibold">Location</p>
                        <span>Address</span>
                        <span>City</span>
                        <span>State</span>
                        <span>Country</span>
                    </div>
                    <div className="flex flex-col gap-3 w-1/4">
                        <p className="text-[20px] font-semibold">Contact</p>
                        <span>Email</span>
                        <span>Phone Number</span>
                        <span>Support Links</span>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-1/2">
                        <p className="text-[20px] font-semibold">Get In Touch</p>
                        <span>
                            Lorem ipsum dolor sit amet. At reprehenderit soluta ut accusamus
                        </span>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                name="get-in-touch-email"
                                placeholder="Enter your email address"
                                className="focus:outline-none bg-[#F2F2F2] rounded-[10px] px-6 py-4 text-xs md:text-base w-full"
                            />
                            <button className="bg-[#EC1F24] rounded-[10px] w-[55px] aspect-square flex justify-center items-center">
                                <Send />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider" />
            <div className="flex justify-between items-center flex-col md:flex-row gap-5">
                <div className="flex flex-col md:flex-row items-center gap-4 ">
                    <span>
                        Copyright © 2024, All Right Reserved Turkish Week
                    </span>
                    <span className="w-[1px] h-[44px] bg-[#DCDCDC] hidden md:inline" />
                    <span className="flex gap-2 items-center">
                        Powered by
                        <Image src="/organizers/90events.png" alt="90events" width={80} height={80} />
                    </span>
                </div>
                <span className="flex gap-5 items-center">
                    <Link href="/" className="underline">
                        Privacy Policy
                    </Link>
                    <Link href="/" className="underline">
                        Terms & Conditions
                    </Link>
                </span>
            </div>
        </footer>
    );
}