/* eslint-disable react/no-unescaped-entities */

import * as React from "react";

export interface Page1Props {}

export default function Page1(props: Page1Props) {
  return (
    <div className="min-h-screen">
      <h1 className="text-center py-8 font-bold text-3xl">Page 1</h1>
      <div className="px-4 lg:px-40">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
          isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
    </div>
  );
}
