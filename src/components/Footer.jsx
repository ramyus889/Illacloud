import DropdownFooter from "./DropdownFooter";
const Footer = () => {
  return (
    <div className="text-white mb-10 mt-[124px] max-[2500px]:ms-[700px] max-[2400px]:ms-[660px] max-[2300px]:ms-[560px] max-[2200px]:ms-[540px] max-[2100px]:ms-[500px] max-[2000px]:ms-[420px] max-[1900px]:ms-[480px] max-[1800px]:ms-[380px] max-[1700px]:ms-[400px] max-[1600px]:ms-[330px] max-[1500px]:ms-[50px]">
      <footer className="flex place-content-center gap-[140px]  mb-10 ">
        <div className="flex flex-col pt-20">
          <div className="text-[18px] font-bold mb-[18px]">Components</div>
          <a className="pb-3 text-[14px] ps-1" href="#">
            Table
          </a>
          <a className="pb-3 text-[14px] ps-1" href="#">
            Chart
          </a>
          <a className="pb-3 text-[14px] ps-1" href="#">
            Upload
          </a>
          <a className="pb-3 text-[14px] ps-1" href="#">
            Switch
          </a>
          <a className="pb-3 text-[14px] ps-1" href="#">
            Select
          </a>
          <a className="pb-3 text-[14px] ps-1" href="#">
            Radio Group
          </a>
          <a className="pb-3 underline text-[14px] ps-1" href="#">
            Show more
          </a>
        </div>
        <div className="flex flex-col pt-20">
          <div className="text-[18px] font-bold mb-[18px]">Integrations</div>
          <a className="pb-3 text-[14px] ps-1" href="#">
            MySQL
          </a>
          <a className="pb-3 text-[14px] ps-1" href="#">
            PostgreSQL
          </a>
          <a className="pb-3 text-[14px] ps-1" href="#">
            MongoDB
          </a>
          <a className="pb-3 text-[14px] ps-1" href="#">
            Firebase
          </a>
          <a className="pb-3 text-[14px] ps-1" href="#">
            Elastic Search
          </a>
          <a className="pb-3 text-[14px] ps-1" href="#">
            Microsoft SQL Server
          </a>
          <a className="pb-3 underline text-[14px] ps-1" href="#">
            Show more
          </a>
        </div>
        <div className="flex flex-col pt-20">
          <div className="text-[18px] font-bold mb-[18px]">Solutions</div>
          <a className="pb-3 text-[14px] ps-1" href="#">
            AI Image Generator
          </a>
          <a className="pb-3 text-[14px] ps-1" href="#">
            AI Voice Generator
          </a>
          <a className="pb-3 text-[14px] ps-1" href="#">
            Data Analysis Dashboard
          </a>
          <a className="pb-3 text-[14px] ps-1" href="#">
            Content Management
          </a>
          <a className="pb-3 text-[14px] ps-1" href="#">
            Sales CRM
          </a>
          <a className="pb-3 text-[14px] ps-1" href="#">
            Admin Panel
          </a>
        </div>
        <div className="flex flex-col pt-20">
          <div className="text-[18px] font-bold mb-[18px]">Company</div>
          <a className="pb-3 text-[14px] ps-1" href="#">
            Status
          </a>
          <a className="pb-3 text-[14px] ps-1" href="#">
            Roadmap
          </a>
          <a className="pb-3 text-[14px] ps-1" href="#">
            Changelog
          </a>
          <a className="pb-3 text-[14px] ps-1" href="#">
            Media Kit
          </a>
        </div>
        <div className="flex flex-col pt-20">
          <div className="text-[18px] font-bold mb-[18px]">Community</div>
          <a className="pb-3 text-[14px] ps-1 flex gap-2" href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M.48 11.806c0 5.026 3.22 9.299 7.71 10.867.605.154.512-.278.512-.57V20.11c-3.49.41-3.63-1.9-3.866-2.286-.474-.809-1.591-1.015-1.258-1.4.795-.41 1.605.103 2.542 1.49.679 1.006 2.003.836 2.676.668a3.255 3.255 0 0 1 .892-1.565c-3.615-.647-5.123-2.854-5.123-5.48 0-1.273.42-2.443 1.243-3.387-.524-1.558.049-2.89.125-3.087C7.428 4.928 8.98 6.132 9.1 6.227c.85-.23 1.818-.35 2.902-.35 1.09 0 2.064.124 2.918.356.288-.22 1.73-1.254 3.12-1.128.074.198.634 1.499.141 3.034.835.946 1.259 2.127 1.259 3.404 0 2.63-1.517 4.838-5.143 5.478a3.282 3.282 0 0 1 .98 2.342v2.895c.02.231 0 .46.386.46 4.554-1.535 7.834-5.84 7.834-10.91C23.498 5.449 18.344.3 11.99.3 5.63.297.48 5.447.48 11.806Z"
                fill="currentColor"
              ></path>
            </svg>
            GitHub
          </a>
          <a className="pb-3 text-[14px] ps-1 flex gap-2" href="#">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.924 4.234a8.98 8.98 0 0 1-2.579.693 4.467 4.467 0 0 0 1.97-2.469 8.84 8.84 0 0 1-2.842 1.082 4.467 4.467 0 0 0-3.272-1.415 4.476 4.476 0 0 0-4.477 4.48c0 .346.042.693.11 1.026a12.725 12.725 0 0 1-9.232-4.687 4.446 4.446 0 0 0-.61 2.261 4.48 4.48 0 0 0 1.996 3.732 4.516 4.516 0 0 1-2.024-.57v.055a4.478 4.478 0 0 0 3.59 4.396 4.74 4.74 0 0 1-1.18.152c-.291 0-.567-.029-.845-.068a4.486 4.486 0 0 0 4.186 3.106 8.975 8.975 0 0 1-5.56 1.914c-.375 0-.722-.013-1.081-.055a12.68 12.68 0 0 0 6.877 2.009c8.235 0 12.74-6.822 12.74-12.743 0-.195 0-.39-.012-.583a9.645 9.645 0 0 0 2.245-2.316Z"
                fill="currentColor"
              ></path>
            </svg>
            Twitter
          </a>
          <a className="pb-3 text-[14px] ps-1 flex gap-2" href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.247 4.494a.06.06 0 0 0-.03-.028A19.56 19.56 0 0 0 15.39 2.97a.073.073 0 0 0-.077.037c-.221.4-.422.812-.601 1.234a18.058 18.058 0 0 0-5.42 0c-.181-.423-.385-.835-.61-1.234a.076.076 0 0 0-.078-.037c-1.667.287-3.29.79-4.827 1.496a.07.07 0 0 0-.031.027C.672 9.083-.17 13.561.243 17.983a.081.081 0 0 0 .03.055 19.664 19.664 0 0 0 5.921 2.992.076.076 0 0 0 .083-.027c.458-.622.863-1.281 1.212-1.97a.075.075 0 0 0-.042-.104 12.948 12.948 0 0 1-1.849-.881.076.076 0 0 1-.008-.126c.125-.093.248-.19.368-.288a.074.074 0 0 1 .076-.01c3.88 1.77 8.082 1.77 11.916 0a.073.073 0 0 1 .077.009c.12.1.243.195.368.289a.076.076 0 0 1-.006.126c-.59.345-1.21.64-1.85.88a.075.075 0 0 0-.044.044.076.076 0 0 0 .003.061c.355.685.76 1.343 1.21 1.969a.075.075 0 0 0 .084.028 19.6 19.6 0 0 0 5.93-2.992.075.075 0 0 0 .03-.054c.495-5.112-.827-9.553-3.505-13.49ZM8.068 15.29c-1.168 0-2.13-1.071-2.13-2.388s.943-2.389 2.13-2.389c1.196 0 2.15 1.082 2.13 2.389 0 1.317-.943 2.389-2.13 2.389Zm7.878 0c-1.168 0-2.13-1.071-2.13-2.388s.943-2.389 2.13-2.389c1.196 0 2.15 1.082 2.131 2.389 0 1.317-.935 2.389-2.13 2.389Z"
                fill="currentColor"
              ></path>
            </svg>
            Discord
          </a>
          <a className="pb-3 text-[14px] ps-1 flex gap-2" href="#">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.924 0 11c0 6.075 4.924 11 11 11ZM9.35 11h3.116a1.65 1.65 0 0 0 0-3.3H9.35V11Zm-2.2-5.5h5.316a3.85 3.85 0 0 1 0 7.7H9.35v3.3h-2.2v-11Z"
                fill="currentColor"
              ></path>
            </svg>
            ProductHunt
          </a>
          <a className="pb-3 text-[14px] ps-1 flex gap-2" href="#">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.55 7.23v12.926H1.253V7.23h4.295ZM5.832 3.233c0 1.241-.932 2.232-2.43 2.232h-.028C1.932 5.465 1 4.475 1 3.233 1 1.966 1.96 1 3.431 1c1.47 0 2.374.964 2.4 2.233ZM12.182 12.937v7.219H7.89s.054-11.712 0-12.925h4.293v1.828c.573-.882 1.594-2.134 3.873-2.134C18.883 6.925 21 8.77 21 12.742v7.414h-4.295v-6.914c0-1.74-.62-2.924-2.175-2.924-1.188 0-1.895.8-2.204 1.571-.115.276-.144.662-.144 1.048Z"
                fill="currentColor"
              ></path>
            </svg>
            LinkedIn
          </a>
        </div>
      </footer>
      <div className="container mx-auto text-white">
        <div className="border-t-2 w-[90%] justify-center ms-20 pt-5 border-[#423c3c]">
          <div className="justify-between flex px-2">
            <div className="flex items-center gap-4">
              <svg
                width="43"
                height="20"
                viewBox="0 0 43 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[51px] h-[24px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5 0H13v20H7.5V0ZM0 7.5h5.5V20H0V7.5ZM20.5 0H15v20h5.5V0Z"
                  fill="#fff"
                ></path>
                <path fill="#FF58BE" d="M0 0h5.5v5.5H0z"></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37 10a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 8.933A9.959 9.959 0 0 1 32.5 20c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10v10H37v-1.067Z"
                  fill="#fff"
                ></path>
              </svg>
              <div className="text-[15px] font-medium">
                Create business apps like assembling blocks
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                <DropdownFooter />
              </div>
              <a href="#" className="">
                Privacy policy
              </a>
              <a href="#" className="">
                Terms of service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
