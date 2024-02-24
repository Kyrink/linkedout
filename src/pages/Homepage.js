import MainFrame from "../components/MainFrame";
import SignupForm from "../components/SignupForm";

const Homepage = () => {
  return (
    <div className="w-full [transform:scale(1)] relative [background:linear-gradient(90deg,_#013f87,_#01050a)] overflow-hidden flex flex-row items-center justify-start pt-[60px] pb-[50px] pr-[90px] pl-[90px] box-border gap-[0px_88px] tracking-[normal] lg:flex-wrap lg:gap-[0px_50px] lg:pl-[42px] lg:pr-[45px] lg:box-border md:gap-[0px_88px] md:pl-[21px] md:pr-[22px] md:box-border">
      <div className="flex-1 flex flex-col items-start justify-start py-0 pr-px pl-0 box-border min-w-[430px] min-h-[571px] max-w-full lg:min-h-[auto] md:min-w-full">
        <MainFrame />
      </div>
      <SignupForm />
    </div>
  );
};

export default Homepage;
