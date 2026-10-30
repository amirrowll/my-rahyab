"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function ContactMap() {
  const [icon, setIcon] = useState<L.Icon | null>(null);

  useEffect(() => {
    // ایجاد آیکون در سمت کلاینت
    const customIcon = new L.Icon({
      iconUrl: "/imageLanding/myrahyab-removebg-preview.svg",
      iconSize: [46, 46],
      iconAnchor: [23, 46],
      popupAnchor: [0, -46],
      className: "drop-shadow-lg",
    });
    setIcon(customIcon);
  }, []);

  const position: [number, number] = [35.72767152560186, 51.46027591500089];

  return (
    <div className="w-full h-80 md:h-[400px] relative z-0">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className="w-full h-full rounded-2xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {icon && (
          <Marker position={position} icon={icon}>
            <Popup>
              <div className="text-right font-xmedium p-1">
                <strong className="text-sm text-[#253359] block font-xbold">
                  دفتر مرکزی شرکت رهیاب
                </strong>
                <span className="text-xs text-slate-600 block mt-1">
                  تهران، سبلان شمالی، خیابان شهید شجاعی، پلاک ۳۸
                </span>
                <span className="text-[11px] text-emerald-600 block mt-1 dir-ltr font-xbold">
                  ۰۲۱-۸۸۴۴۰۳۴۵ | ۰۹۱۲۵۳۵۴۸۱۱
                </span>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
