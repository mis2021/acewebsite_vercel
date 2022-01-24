import React from "react";

export default function PagehaderLayoutv2(props) {
  return (
    <>
      <div class="container xl:max-w-6xl lg:max-w-5xl my-12 py-12 mx-auto"   style={{
          paddingBottom:5
          }}>
        <section class="mb-20">
          <div
            class="relative overflow-hidden flex items-center bg-cover p-0"
            style={{ height: "80vh" }}
          >
            <div class="-skew-x-12 overflow-hidden w-4/6 -right-40 rounded-bl-xl absolute top-0 h-full md:block hidden">
              <div
                class="skew-x-12 absolute top-0 right-0 left-0 -ml-20 h-full backdrop-brightness-110 backdrop-contrast-125 backdrop-saturate-100 bg-cover bg-center"
                style={{
                  backgroundImage: "url(/img/pattern_nextjs.png)",
                }}
              ></div>
            </div>
            <div class="container">
              <div class="grid grid-cols-1 gap-4">
                <div class="lg:max-w-lg md:max-w-sm flex justify-center flex-col">
                  <h2 class="text-5xl font-extrabold tracking-tight text-gray-900 mb-1">
                    ALLIED CARE EXPERTS MEDICAL CENTER
                  </h2>
                  <h2 class="text-6xl font-extrabold tracking-tight text-blue-600 mb-6">
                    NEWS AND EVENTS
                  </h2>
                  {/* <p class="lg:pr-12 lg:mr-12 text-xl font-normal text-gray-500 mt-1 mb-4">
                        KASALIGAN MO!
                      </p> */}
                  {/* <div>
                    <button
                      type="button"
                      class="px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-300 ease-in-out mt-6 mr-2"
                    >
                      Get Started
                    </button>
                    <button
                      type="button"
                      class="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:bg-gray-100 focus:text-blue-700 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 active:text-blue-800 transition duration-300 ease-in-out mt-6"
                    >
                      See Demo
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
