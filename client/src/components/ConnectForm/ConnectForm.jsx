import React from "react";
import phone from '../../photos/telephone.png'
import comment from '../../photos/comment.png'
import email from '../../photos/email.png'

function ConnectForm() {
  return (
    <div className=" flex justify-center items-center ">
      <div className="flex-1">
        <form className=" m-auto ">
          <h1 className=" text-[50px] font-satisfy text-[#DEC822] pb-10 pt-10 ">
            Contact Us
          </h1>
            <input
            className=" w-[70%] md:w-[35%] mb-5 p-2 bg-[#eee] rounded-md md:mr-2"
            type="text"
            placeholder="First Name"
            />
            <input
            className=" w-[70%] md:w-[34%] mb-5 p-2 bg-[#eee] rounded-md"
            type="text"
            placeholder="Last Name"
            />
          <br />
          <img className=" w-4 inline-block absolute mt-[12px] ml-2" src={email} alt="" />
          <input
            className=" indent-[20px] w-[70%] mb-5 p-2 bg-[#eee] rounded-md"
            type="text"
            placeholder="Email"
          />
          <br />
          <img className=" w-4 inline-block absolute mt-[12px] ml-2" src={phone} alt="" />
          <input
            className={` indent-[20px] w-[70%] mb-5 p-2 bg-[#eee] rounded-md`}
            type="text"
            placeholder="Phone (__)-__-___"
          />
          <br />
          <img className=" w-4 inline-block absolute mt-[12px] ml-2" src={comment} alt="" />
          <textarea
            className=" indent-[20px] resize-none w-[70%] h-[150px] p-2 bg-[#eee] rounded-md"
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
