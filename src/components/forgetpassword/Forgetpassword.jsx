import { useState } from "react";
import Enteremail from "./Enteremail"
import Entercode from "./Entercode";
import Resetpassword from "./Resetpassword";
export const Forgetpassword = ({showForgetPassword, setShowForgetPassword}) => {
    const [step, setStep] = useState(1); // Track modal step

    const closeModal = () => {
        setShowForgetPassword(false);
        setStep(1); // Reset to first step
    };
    
  return (
    <section className='fixed top-8 inset-0 z-50 contact flex items-center justify-center bg-opacity-50 h-[]'>
        <div className={showForgetPassword ? 'overlays' : ''}
        onClick={closeModal}
        ></div>

        {step === 1 && <Enteremail setStep={setStep} closeModal={closeModal} />}
        {step === 2 && <Entercode setStep={setStep} closeModal={closeModal} />}
        {step === 3 && <Resetpassword closeModal={closeModal} />}
  </section>
  )
}

export default Forgetpassword