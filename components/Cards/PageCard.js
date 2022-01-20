import React from "react";

export default function PageCard(props) {
  return (
    // <div class="flex justify-center" style={{ width: "100%" }}>
    <div class="shadow-lg rounded-lg overflow-hidden" style={{ width: "100%" }}>
      <div class="py-3 px-6 border-b border-gray-300 font-extrabold text-dark-800 text-2xl">{props.title}</div>
      <div
        class="block p-6 rounded-lg shadow-lg bg-white"
        style={{ width: "100%" }}
      >
        {props.children}
      </div>
    </div>
  );
}
