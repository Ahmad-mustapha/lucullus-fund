import { RxCross2 } from "react-icons/rx";

const Resetpassword = ({ closeModal }) => {
  return (
    <div style={{padding: '1rem'}} className="bg-white w-5/6 sm:w-[500px] rounded-[15px] p-4">
      <div className="flex items-center justify-between">
        <p></p>
        <p className="text-[22px] md:text-[28px] font-[600] text-[#094C41]">Reset Password</p>
        <p>
          <RxCross2 className="cursor-pointer text-[1.5rem]" onClick={closeModal} />
        </p>
      </div>

      <div style={{padding: '1rem'}} className="mt-6 p-4">
        <form>
          <div className="w-full">
            <label className="text-[15px]">Current Password</label>
            <input 
            style={{marginBottom: '1.5rem', padding: '.4rem'}}
            className="rounded-[10px] bg-[#F5F5F5] w-full p-2" type="password" />
          </div>
          <div className="w-full mt-3">
            <label className="text-[15px]">New Password</label>
            <input 
            style={{padding: '.4rem'}}
            className="rounded-[10px] bg-[#F5F5F5] w-full p-2" type="password" />
          </div>
          <div className="mt-4 flex items-center justify-center">
            <button 
            style={{marginTop: '1.5rem', padding: '1rem'}}
            className="bg-[#094C41] text-white rounded-[100px] font-[600] text-[15px] w-[185px] p-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;
