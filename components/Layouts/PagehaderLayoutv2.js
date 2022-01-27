import React from "react";

export default function PagehaderLayoutv2(props) {
  return (
    <>

      <div
        class="container xl:max-w-6xl lg:max-w-5xl my-12 py-12 mx-auto"
        style={{
          paddingBottom: 1,
          marginBottom: 0,
          // marginTop:10
        }}
      >
        <section class="mb-20">
          <div
            class="relative overflow-hidden flex items-center bg-cover p-0"
            style={{ height: "50vh" }}
          >
            <div class="-skew-x-12 overflow-hidden w-4/6 -right-40 rounded-bl-xl absolute top-0 h-full md:block hidden">
              <div
                id="carouselExampleControls"
                class="carousel slide relative"
                data-bs-ride="carousel"
              >
                {props.image.map((p, index) => (
                  <div class={`carousel-item ${index==0?"active":" "} relative float-left w-full`}>
                    <img
                      key={index}
                      src={p?.featuredImage?.node?.sourceUrl}
                      class="block w-full"
                      alt="Wild Landscape"
                    />
                  </div>
                ))}
              </div>

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

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}



