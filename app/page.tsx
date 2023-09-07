"use client";

import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";

export default function Home() {
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    // Check if window is defined (i.e., running in the browser)
    if (typeof window !== "undefined") {
      // Access window.location
      const currentLocation = window.location;
      setBaseUrl(currentLocation.origin);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="min-h-screen grid place-items-center place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 p-6">
      <div className="flex flex-col gap-4 items-center">
        <span className="text-lg font-bold">Page 1</span>
        <QRCodeSVG
          value={`${baseUrl}/page1`}
          className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px]"
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
          includeMargin={false}
        />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <span className="text-lg font-bold">Page 2</span>
        <QRCodeSVG
          value={`${baseUrl}/page2`}
          className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px]"
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
          includeMargin={false}
        />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <span className="text-lg font-bold">Page 3</span>
        <QRCodeSVG
          value={`${baseUrl}/page3`}
          className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px]"
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
          includeMargin={false}
        />
      </div>
    </main>
  );
}
