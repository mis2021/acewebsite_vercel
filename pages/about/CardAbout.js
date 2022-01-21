import React from "react";

export default function CardAbout(props) {
  return (
    <div class="flex justify-center ">
      <div class="rounded-lg shadow-lg bg-white max-w-sm ">
        <div class="px-10 w-20 mb-5 inline-flex items-center justify-center  ">
          <img src={props.image} />
        </div>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{props.title}</h5>
          <p class="text-gray-700 text-base mb-4">
           {props.content}
          </p>
        </div>
      </div>
    </div>
  );
}
