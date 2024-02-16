const Main = () => {
  return (
    <div className="text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="-z-[100] absolute top-0 opacity-50"
        width="100%"
        height="142%"
      >
        <defs>
          <pattern
            id="p"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(0.55)"
          >
            <path
              data-color="outline"
              fill="none"
              stroke="#333333"
              strokeWidth="2.06"
              d="M50 0v100M100 50H0"
            ></path>
          </pattern>
        </defs>
        <rect fill="#000000" width="100%" height="100%"></rect>
        <rect fill="url(#p)" width="100%" height="100%"></rect>
      </svg>
      <div
        className="z-[50]"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="2000"
      >
        <div className="flex place-content-center mt-[7em]">
          <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-2 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
            <div className="flex justify-between gap-20">
              <div className="flex gap-2">
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFFFFF"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  ></path>
                </svg>
                Github <span className="ps-2">10.2k stars</span>
              </div>
              <div className="">Star us 👉 </div>
            </div>
          </button>
        </div>
        <div className="text-[80px] font-extrabold text-center leading-[90px] mt-[1em]">
          Create business apps like <br /> assembling blocks
        </div>
        <div className="text-center mt-3">
          Build
          <span className="bg-gradient-to-r px-2 bg-clip-text text-transparent from-[#20c1c1] to-[#86b7b7] ">
            website&app
          </span>
          with low code, make automated
          <span className="bg-gradient-to-tr px-2 bg-clip-text text-transparent from-[#8538e7] to-[#beb5c8]">
            flow
          </span>
          , create
          <span className="bg-gradient-to-tr px-2 bg-clip-text text-transparent from-[#9f2275] to-[#ca8ab5]">
            AI Agent
          </span>
          easily
        </div>
        <div className="flex place-content-center mt-9">
          <button className="group group-hover:before:duration-500 group-hover:after:duration-500 shadow-xl shadow-[#310080] after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-[30px]  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
