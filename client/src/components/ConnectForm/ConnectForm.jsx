import React from "react";
import phone from '../../photos/telephone.png'

function ConnectForm() {
  return (
    <div className=" flex justify-center items-center pt-[100px]">
      <div className="flex-1">
        <form className=" m-auto ">
          <h1 className=" text-[50px] font-satisfy text-[#DEC822] pb-10 pt-10 ">
            Contact Us
          </h1>
            <input
            className=" w-[35%] mb-5 p-2 bg-[#eee] rounded-md mr-2"
            type="text"
            placeholder="First Name"
            />
            <input
            className=" w-[34%] mb-5 p-2 bg-[#eee] rounded-md"
            type="text"
            placeholder="Last Name"
            />
          <br />
          <input
            className="  w-[70%] mb-5 p-2 bg-[#eee] rounded-md"
            type="text"
            placeholder="Email"
          />
          <br />
          <input
            className={` bg-top-[10px] bg-[length:15px] indent-[20px] bg-phone bg-no-repeat w-[70%] mb-5 p-2 bg-[#eee] rounded-md`}
            type="text"
            placeholder="Phone (__)-__-___"
          />
          <br />
          <textarea
            className=" resize-none w-[70%] h-[150px] p-2 bg-[#eee] rounded-md"
            placeholder="Message..."
          ></textarea>
          <br />
          <button className=" rounded-md p-3 bg-[#007b83] text-[white] mt-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConnectForm;
