import step1 from "/public/img/step1.webp";
import step2 from "/public/img/step2.webp";
import step3 from "/public/img/step3.webp";
import illaflow from "/public/img/illaflow.webp";
const Carduser = () => {
  return (
    <div className="">
      <div className="text-white text-center  max-[2000px]:ms-[300px] max-[1900px]:ms-[460px]  max-[1500px]:ms-[280px]">
        <div
          className="text-[40px] font-bold"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1500"
        >
          4 steps to customize your business apps
        </div>
        <div
          className="mt-4 text-[14px]"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          Build tools through drag-and-drop components, customize your AI Agent,
          <br />
          connect to your data sources, and make AI a smart tool tailored to
          your needs <br /> and data, making your work more intelligent.
        </div>
      </div>

      <div className="container ms-[740px]  max-[2000px]:ms-[500px] max-[1900px]:ms-[540px]  max-[1500px]:ms-[280px] text-white mt-[6em]">
        <div className="flex flex-col gap-[32px]">
          <div
            className=" bg-[#121212] p-[49px] w-[90%] rounded-[30px]"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="flex gap-[40px]">
              <div className="">
                <img className="w-[900px]" src={step1} alt="" />
              </div>
              <div className="">
                <div className="text-[36px] font-bold leading-[44px]">
                  1. <br />
                  Drag and drop components to design UI
                </div>
                <div className="text-[14px] mt-[31px]">
                  By dragging and dropping components, you can quickly build the
                  UI of the apps and implement any functionality you desire.
                </div>
                <div className="pt-[31px]">
                  <a href="#" className="underline text-[#654aec] ">
                    Start building UI with ILLA →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className=" bg-[#121212] p-[49px] w-[90%] rounded-[30px]"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="flex gap-[40px]">
              <div className="">
                <div className="text-[36px] font-bold leading-[44px]">
                  2. <br />
                  Connect to your data sources
                </div>
                <div className="text-[14px] mt-[31px]">
                  Connect to your own data sources, including MySQL, PostgreSQL,
                  and other databases, REST APIs, GraphQL, etc. Build CRUD apps
                  in just one minute.
                </div>
                <div className="pt-[31px]">
                  <a href="#" className="underline text-[#654aec] ">
                    Start building Apps with your data sources →
                  </a>
                </div>
              </div>
              <div className="">
                <img className="w-[900px]" src={step2} alt="" />
              </div>
            </div>
          </div>

          <div
            className=" bg-[#121212] p-[49px] w-[90%] rounded-[30px]"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="flex gap-[40px]">
              <div className="">
                <img className="w-[900px]" src={step3} alt="" />
              </div>
              <div className="">
                <div className="text-[36px] font-bold leading-[44px]">
                  3. <br />
                  Configure and connect to AI agents
                </div>
                <div className="text-[14px] mt-[31px]">
                  Integrating AI agents into your app and empower it with AI
                  capabilities such as intelligent analysis, content generation,
                  and more, without AI development skills.
                </div>
                <div className="pt-[31px]">
                  <a href="#" className="underline text-[#654aec] ">
                    Start building AI driven apps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className=" bg-[#121212] p-[49px] w-[90%] rounded-[30px]"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="flex gap-[40px]">
              <div className="">
                <div className="text-[36px] font-bold leading-[44px]">
                  4. <br />
                  Automate your Workflow
                </div>
                <div className="text-[14px] mt-[31px]">
                  Use ILLA Flow to automate your workflow to ensure you always
                  have the latest data and reduce repetitive tasks.
                </div>
                <div className="pt-[31px]">
                  <a href="#" className="underline text-[#654aec] ">
                    Learn more about ILLA Flow →
                  </a>
                </div>
              </div>
              <div className="">
                <img className="w-[900px]" src={illaflow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carduser;
