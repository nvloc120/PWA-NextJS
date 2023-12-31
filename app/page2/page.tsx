/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import Link from "next/link";

export interface Page1Props {}

export default function Page2(props: Page1Props) {
  return (
    <div className="min-h-screen">
      <Link href="/">Go back home</Link>
      <h1 className="text-center py-8 font-bold text-3xl">Page 2</h1>
      <div className="px-4 lg:px-40">
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </div>
  );
}
