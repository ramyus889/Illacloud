import UserAccordion from "@/components-ui-user/user/UserAccordion";

const AccordionUser = () => {
  return (
    <div className="container mx-auto px-4 py-8  max-[2000px]:ms-[420px] max-[1900px]:ms-[480px]  max-[1500px]:ms-[210px]">
      <div className="text-center text-[48px] font-bold text-white">
        Frequently Asked Questions
      </div>
      <div className="flex place-content-center mt-[48px]">
        <UserAccordion />
      </div>
    </div>
  );
};

export default AccordionUser;
