const MainFrame = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full text-left font-helvetica-neue md:gap-20">
      <div className="w-full relative flex items-center justify-center">
        <img
          className="w-full h-auto object-contain relative top-2.5 scale-100"
          loading="eager"
          alt="Group Illustration"
          src="/group.svg"
        />
      </div>
      <h1 className="mt-5 pl-2.5 relative font-normal text-[3vw] md:text-[5vw] lg:text-[3vw] xl:text-[3vw] 2xl:text-[2.5vw] text-center flex w-full leading-snug">
        <span className="w-full  text-gold">
          Beyond the Classroom<br />
          <span className="text-white">Your Social Study Space.</span>
        </span>
      </h1>
      <div className="w-full px-5 flex flex-col items-center justify-center gap-3 text-5xl text-white md:w-auto md:max-w-full md:px-1">
        <h2 className="mt-10 relative font-normal text-base md:text-base lg:text-lg inline-block w-full text-center">
          Already have an account?
        </h2>
        <button className="cursor-pointer border-none py-3 px-5 bg-lightgray w-full max-w-xs h-14 rounded-full flex items-center justify-center text-black text-lg md:text-sm hover:bg-silver scale-100">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default MainFrame;
