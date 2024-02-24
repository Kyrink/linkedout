import SocialSignupButton from "./SocialSignupButton";

const SignupForm = () => {
  const handleGoogleSignup = () => {
    // Google signup logic
  };

  const handleAppleSignup = () => {
    // Apple signup logic
  };

  return (
    <div className="w-[520px] rounded-6xl bg-lightskyblue shadow-lg flex flex-col items-center justify-start gap-6 pt-9 pb-10 px-10 box-border text-xl text-center text-black font-helvetica-neue sm:w-full sm:px-5 [transform:scale(0.9)]">
      <div className="w-[139px] flex flex-row items-start justify-start box-border">
        <input
          className="[border:none] [outline:none] bg-gray-100 h-[31px] flex-1 relative rounded-xl min-w-[77px] z-[1]"
          type="text"
        />
      </div>
      <h1 className="pt-0 text-4xl font-thin">
        Where Campus Comes to Click!
      </h1>
      <h1 className="text-xl font-normal">
        Join Now
      </h1>
      <div className="flex flex-col items-center justify-start gap-6 w-full">
        <SocialSignupButton
          iconSrc="/-icon-google.svg"
          buttonText="Sign In with Google"
          onButtonClick={handleGoogleSignup}
        />
        <SocialSignupButton
          iconSrc="/apple-logo@2x.png"
          buttonText="Sign In with Apple"
          onButtonClick={handleAppleSignup}
        />
      </div>
      <div className="flex items-center justify-between w-full py-2">
        <div className="border-t-1px border-black flex-grow"></div>
        <b className="px-4">Or</b>
        <div className="border-t-1px border-black flex-grow"></div>
      </div>
      <button className="py-2 px-6 rounded-full flex items-center justify-center gap-4 border-2 border-black hover:bg-lightslategray text-lg font-medium">
        <img
          className="h-8 w-8"
          alt="Email icon"
          src="/-icon-email.svg"
        />
        Create an Account
      </button>
      <div className="text-xs text-darkslategray-100 text-center mt-4">
        By proceeding, you agree to our
        <a href="https://www.tripadvisor.com/pages/terms.html" target="_blank" className="underline mx-1">
          Terms of Use
        </a>
        and confirm you have read our
        <a href="https://www.tripadvisor.com/pages/privacy.html" target="_blank" className="underline mx-1">
          Privacy and Cookie Statement.
        </a>
      </div>
    </div>
  );
};

export default SignupForm;




<div className="flex flex-row items-start justify-start py-0 pr-3 pl-0 text-left text-base">
  <div className="w-[289px] flex flex-row items-center justify-start gap-[0px_9.5px]">
    <div className="h-px flex-1 relative box-border border-t-[1px] border-solid border-black" />
    <b className="relative shrink-0">Or</b>
    <div className="h-px flex-1 relative box-border border-t-[1px] border-solid border-black" />
  </div>
</div>
