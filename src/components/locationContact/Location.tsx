"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FieldErrors, useForm } from "react-hook-form";
import L from "leaflet";

interface dataType {
  username: string;
  email: string;
  description: string;
}

export default function Location() {
  const form = useForm<dataType>({});

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = form;

  const onSubmit = (data: dataType) => {
    console.log(data);
  };

  const onErrorHandler = (errors: FieldErrors<dataType>) => [
    console.log(errors, "errors"),
  ];

  const customIcon = new L.Icon({
    iconUrl: "/imageLanding/rahyab-removebg-preview.svg",
    iconSize: [60, 60],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  return (
    <div className="mt-[-40px] bg-[#253359] px-5 md:px-8 pt-5 md:pt-8 md:mb-12">
      <div className="md:flex md:flex-row-reverse md:justify-between">
        <div className="pb-5 w-full md:hidden rounded-2xl">
          <MapContainer
            center={[35.72767152560186, 51.46027591500089]}
            zoom={13}
            scrollWheelZoom={true}
            className="w-full h-full rounded-2xl"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker
              position={[35.72767152560186, 51.46027591500089]}
              icon={customIcon}
            >
              <Popup>اینجا دفتر ماست</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="hidden pb-5 lg:pb-8 w-full md:z-10 md:w-[68.5%] md:block rounded-2xl">
          <MapContainer
            center={[35.72767152560186, 51.46027591500089]}
            zoom={13}
            scrollWheelZoom={true}
            className="w-full h-full rounded-2xl"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker
              position={[35.72767152560186, 51.46027591500089]}
              icon={customIcon}
            >
              <Popup>اینجا دفتر ماست</Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="md:w-[29%]">
          <div className="flex items-center pb-4">
            <img alt="فلش بازگشت" src="/iconLanding/arrow-left.svg"  />
            <h1 className="text-white text-[16px] font-xbold ">
              با ما در تماس باشید
            </h1>
          </div>
          <form noValidate onSubmit={handleSubmit(onSubmit, onErrorHandler)}>
            <div className="flex flex-col">
              <label
                className="text-[14px] font-xbold text-white "
                htmlFor="username"
              >
                نام شما
              </label>
              <input
                className="placeholder-[#868686] placeholder:font-xregular placeholder:text-[14px] py-[12px] px-4 mt-[10px] rounded-lg"
                placeholder="نام خود را وارد نمایید"
                type="text"
                id="username"
                {...register("username", {
                  required: "نام کاربری الزامی است ",
                })}
              />
              <p className="error">{errors.username?.message}</p>
            </div>

            <div className="flex flex-col pt-4">
              <label
                className="text-[14px] font-xbold text-white"
                htmlFor="email"
              >
                ایمیل شما
              </label>
              <input
                className="placeholder-[#868686] placeholder:font-xregular placeholder:text-[14px] py-[12px] px-4 mt-[10px] rounded-lg"
                placeholder="ایمیل خود را وارد نمایید"
                type="email"
                id="email"
                {...register("email", {
                  required: " در وارد کردن ایمیل خود دقت فرمایید ",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "invalid form",
                  },
                })}
              />
              <p className="error">{errors.email?.message}</p>
            </div>

            <div className="flex flex-col pt-4">
              <label
                className="text-[14px] font-xbold text-white "
                htmlFor="description"
              >
                متن پیام ارسالی
              </label>
              <input
                className="placeholder-[#868686] placeholder:font-xregular placeholder:text-[14px] py-[8px] pb-[83px] px-4 mt-[10px] rounded-lg"
                placeholder=" پیام خود را اینجا بنویسید "
                type="text"
                id="description"
                {...register("description", {
                  required: "توضیحات خود را وارد نمایید ",
                })}
              />
              <p className="error">{errors.description?.message}</p>
            </div>

            <button className="bg-[#44C0ED] w-full rounded-lg py-2 text-[14px] font-xmedium text-white mt-4 mb-8">
              ارسال نظر
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
