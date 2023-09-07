import { QRCodeSVG } from "qrcode.react";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 p-6">
      <div className="flex flex-col gap-4 items-center">
        <span className="text-lg font-bold">Page 1</span>
        <QRCodeSVG
          value={`${process.env.NEXT_PUBLIC_BASE_URL}/page1`}
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
          value={`${process.env.NEXT_PUBLIC_BASE_URL}/page2`}
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
          value={`${process.env.NEXT_PUBLIC_BASE_URL}/page3`}
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
