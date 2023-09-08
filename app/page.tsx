"use client";

import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { useRouter } from "next/navigation";

export default function Home() {
  const [baseUrl, setBaseUrl] = useState("");
  const [result, setResult] = useState("No result");
  const router = useRouter();

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
    <main>
      <QrReader
        onResult={(result: any, error) => {
          if (!!result) {
            console.log(result.text);
            setResult(result.text);
            if (
              result.text.includes("http://") ||
              result.text.includes("https://")
            ) {
            }
            router.push(result.text);
          }

          if (!!error) {
            // console.info(error);
          }
        }}
        constraints={{ facingMode: "environment" }}
      />
      <div>{result}</div>
    </main>
  );
}
