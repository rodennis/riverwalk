import React from "react";
import bubble from '../../photos/bubble.png'

function ConnectForm() {
  return (
    <div className=" flex justify-center items-center pt-[100px]">
      <div className=" flex-1">
      <img className=" w-[400px] h-[400px] m-auto mt-[100px]" src={bubble} alt="" />
      <p className=" text-[#DEC822] text-[30px] relative bottom-[320px]"> Leave us a message <br/> we would love to <br /> get in contact!</p>
      </div>
      <div className="flex-1">
      <form className=" h-[560px] w-[500px] m-auto shadow-shadow">
      <h1 className=" text-[50px] font-slab text-[#007b83] pb-10 pt-10 ">
        Contact Us
      </h1>
        <input
          className=" border-2 w-[400px] mb-5 p-2"
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          className=" border-2 w-[400px] mb-5 p-2"
          type="text"
          placeholder="Email"
        />
        <br />
        <textarea
          className=" border-2 w-[400px] h-[150px] p-2"
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
