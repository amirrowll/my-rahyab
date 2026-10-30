"use client";
import Link from "next/link";
import React from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

interface emailType {
  email: string;
}

export default function Footer() {
  const email = useForm<emailType>({});

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = email;

  const onSubmit = (data: emailType) => {
    console.log(data);
  };

  const onErrorHandler = (errors: FieldErrors<emailType>) => [
    console.log(errors, "errors"),
  ];

  return (
    <>
      <div className="bg-[#F4F5FC] px-5 py-8 mt-[40px]  ">
        <div className="flex flex-col lg:flex lg:flex-row lg:justify-between xl:px-[120px] max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-col lg:items-start lg:pt-0 mt-[-10px]">
            <div className="relative block lg:hidden">
              <img alt="لوگو شرکت رهیاب محمدی"
                className="float-right w-[50px] h-[50px] object-cover [shape-outside:inset(0)]"
                src="/imageLanding/myrahyab-removebg-preview.svg"
                
              />
              <p className="text-[12px] font-xregular text-[#404040] leading-[23px] mt-[4px] text-justify w-full">
                شرکت رهیاب با بیش از سه دهه تجربه در حوزه تلفن‌های اداری،
                سانترال، VoIP و پاناسونیک و تجهیزات ارتباطی، به عنوان یکی از
                معتبرترین تامین‌کنندگان این صنعت شناخته می‌شود. با ارائه یک سال
                گارانتی، ۱۰ سال خدمات پس از فروش و پشتیبانی همیشگی تلفنی، همراه
                مطمئن سازمان‌ها، بیمارستان‌ها و شرکت‌های بزرگ در سراسر کشور
                هستیم.
              </p>
            </div>

            <div className="hidden lg:flex lg:flex-col lg:items-start">
              <img alt="لوگو شرکت رهیاب محمدی"
                className="w-[110px]"
                src="/imageLanding/myrahyab-removebg-preview.svg"
                
              />
              <p className="text-[12px] font-xregular w-[240px] text-[#404040] leading-[28.8px] mt-[-10px] text-justify">
                رهیاب عرضه‌کننده تلفن‌های رومیزی و تجهیزات ویپ با کیفیت و
                پشتیبانی مطمئن است.
              </p>
            </div>
          </div>
          <div className="flex flex-col pt-[21px] lg:pt-[25px] gap-[10px] lg:pr-5 lg:gap-4">
            <a href="tel:02188440345">
              <div className="flex items-center">
                <FiPhoneCall className="w-6 h-6 text-[#253359]" />
                <span className="text-[12px] font-xregular pr-3 text-[#404040]">
                  021-88440345 (دفتر فروش)
                </span>
              </div>
            </a>
            <a href="tel:09125354811">
              <div className="flex items-center">
                <FiPhoneCall className="w-6 h-6 text-[#253359]" />
                <span className="text-[12px] font-xregular pr-3 text-[#404040]">
                  0912-5354811 (پشتیبانی و مشاوره)
                </span>
              </div>
            </a>
            <div className="flex items-center">
              <img alt="آیکون موقعیت مکانی"
                className="w-6 h-6 "
                src="/iconLanding/location.svg"
                
              />
              <span className="w-[184px] pr-2 text-[12px] font-xregular text-[#404040] leading-[21.6px]">
                تهران، سبلان شمالی، خیابان شهید شجاعی، پلاک 38
              </span>
            </div>
            <div className="flex items-center">
              <MdOutlineMail className="w-6 h-6" />
              <span className="text-[12px] pr-3 font-xregular text-[#404040] ">
                rahyabmhmd@gmail.com
              </span>
            </div>
          </div>
          <div className="flex flex-col  pt-[22px] lg:pt-[25px]  gap-3 lg:pr-5 ">
            <h1 className="text-[#404040] text-[14px] font-xbold">
              دسترسی آسان
            </h1>
            <div className="text-[12px] font-xregular flex gap-3 lg:flex-col lg:gap-[14px]">
              <Link href="/"><span> صفحه اصلی </span></Link>
              <Link href="/products"><span> کاتالوگ محصولات </span></Link>
              <Link href="/blog"><span className="text-[#253359] font-xbold hover:underline"> مقالات و راهنمای خرید </span></Link>
              <Link href="/contactUs"><span> درباره ما و تماس </span></Link>
            </div>
          </div>
          <div className="pt-6 lg:pr-9 xl:w-[29%] text-[14px] font-xbold">
            <h1> عضویت خبرنامه </h1>
            <div>
              <form
                noValidate
                onSubmit={handleSubmit(onSubmit, onErrorHandler)}
              >
                <div className="flex flex-col pt-3">
                  <input
                    className="placeholder-[#868686] placeholder:text-[10px] py-[12px] px-4 rounded-lg border-solid border-[1px] border-black"
                    placeholder="ایمیل خود را وارد نمایید"
                    type="email"
                    id="email"
                    {...register("email", {
                      required: " در وارد کردن ایمیل خود دقت فرمایید ",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "invalid form",
                      },
                    })}
                  />
                  <p className="error">{errors.email?.message}</p>
                </div>
              </form>
            </div>
            <div className="flex gap-10  lg:gap-2 pr-4 mt-[16px]">
              <img alt="اینستاگرام" src="/iconLanding/instagram.svg"  />
              <img alt="تلگرام" src="/iconLanding/send-2.svg"  />
              <img alt="لینکدین" src="/iconLanding/Linkdin.svg"  />
              <img alt="یوتیوب" src="/iconLanding/youtube.svg"  />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#253359]">
        <div className="flex items-center justify-center py-5">
          <img src="/iconLanding/creative-commons.svg" alt="img" />
          <span className="text-[12px] font-xregular text-white pr-2">
            {" "}
            تمامی حقوق این وبسایت متعلق به رهیاب می‌باشد{" "}
          </span>
        </div>
      </div>
    </>
  );
}
