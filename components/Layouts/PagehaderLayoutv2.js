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
                <div class="carousel-inner relative w-full overflow-hidden">
                  <div class="carousel-item active relative float-left w-full">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                      class="block w-full"
                      alt="Wild Landscape"
                    />
                  </div>

                  <div class="carousel-item relative float-left w-full">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                      class="block w-full"
                      alt="Camera"
                    />
                  </div>
                  <div class="carousel-item relative float-left w-full">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                      class="block w-full"
                      alt="Exotic Fruits"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon inline-block bg-no-repeat"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon inline-block bg-no-repeat"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
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

{
  /* <div class="-skew-x-12 overflow-hidden w-4/6 -right-40 rounded-bl-xl absolute top-0 h-full md:block hidden">
<div
  class="skew-x-12 absolute top-0 right-0 left-0 -ml-20 h-full backdrop-brightness-110 backdrop-contrast-125 backdrop-saturate-100 bg-cover bg-center"
  style={{
    backgroundImage: "url(/img/pattern_nextjs.png)",
  }}
></div>
</div> */
}
