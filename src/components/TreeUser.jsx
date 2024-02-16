import tree_img from "/public/img/treeuser.webp";
const TreeUser = () => {
  return (
    <div className="container ms-[665px] mt-[200px] max-[2500px]:ms-[700px] max-[2400px]:ms-[660px] max-[2300px]:ms-[560px] max-[2200px]:ms-[540px] max-[2100px]:ms-[500px] max-[2000px]:ms-[420px] max-[1900px]:ms-[480px] max-[1800px]:ms-[380px] max-[1700px]:ms-[400px] max-[1600px]:ms-[230px] max-[1500px]:ms-[75px]">
      <div className="text-[40px] text-white font-bold mb-8 text-center">
        ILLA Cloud integrates everything
      </div>
      <div className="">
        <img src={tree_img} alt="" />
      </div>
    </div>
  );
};

export default TreeUser;
