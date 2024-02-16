import DropdownUser from "./DropdownUser";
import DropdownUser2 from "./DropdownUser2";
import ButtonUser from "./ButtonUser";
const Header = () => {
  return (
    <header className="py-[18px] px-[40px] fixed top-0 backdrop-blur-[50px] z-[100] left-0 right-0">
      <div className="flex items-center justify-between">
        <div className="items-center flex gap-[30px]">
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
          <nav>
            <ul className="flex text-white items-center gap-8 font-semibold text-sm">
              <li>
                <a href="#">
                  <DropdownUser />
                </a>
              </li>
              <li>
                <a href="#">
                  <DropdownUser2 />
                </a>
              </li>
              <li className="ms-3">
                <a href="#">Pricing</a>
              </li>
              <li className="ms-3">
                <a href="#">Doc</a>
              </li>
              <li className="ms-3">
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-white flex items-center gap-8 font-semibold text-sm">
          <a href="#">Contact us</a>
          <a href="#">Login</a>
          <ButtonUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
