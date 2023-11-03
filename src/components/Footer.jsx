import React from 'react'
import { styles } from '../styles';
import { gh_light } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
    return (
        <div>
            <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-[#232930] px-8`}>
                <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                    <div className="flex-[1] flex flex-col justify-start mr-10">

                        <div className="flex flex-row justify-start items-center mr-10">
                            <img
                                src={gh_light}
                                alt="graphicshub_logo"
                                className="w-[90px] h-[90px] object-contain"
                            />
                            <span className='text-[#DEDEDE] font-bold text-[13px]  md:text-[16px] sm:text-[10px]  cursor-pointer'>
                                FOR UI/UX DESIGNERS.
                                <p className={`text-[6px]  md:text-[10px] sm:text-[4px] font-normal uppercase text-[#c3c3c3]`}>Full-Stack Development | Design Consulating Firm</p>
                            </span>
                        </div>

                        <p className={`${styles.paragraph} mt-0 max-w-[312px]`}>
                            Crafting a digital experience.
                        </p>
                    </div>

                    <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                        {footerLinks.map((footerlink) => (
                            <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                                    {footerlink.title}
                                </h4>
                                <ul className="list-none mt-4">
                                    {footerlink.links.map((link, index) => (
                                        <li
                                            key={link.name}
                                            className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                                                }`}
                                        >
                                            {link.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
                    <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                        Copyright Ⓒ 2022 GraphicsHub NG. All Rights Reserved.
                    </p>

                    <div className="flex flex-row md:mt-0 mt-6">
                        {socialMedia.map((social, index) => (
                            <img
                                key={social.id}
                                src={social.icon}
                                alt={social.id}
                                className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                                    }`}
                                onClick={() => window.open(social.link)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
