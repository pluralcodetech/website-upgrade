import Logo from "../../../atoms/Logo";
import Text from "../../../atoms/Text";
import TextLink from "../../../atoms/TextLink";
import whats from "../../../../assets/images/ri_whatsapp-fill.png";
import curve1 from "../../../../assets/images/Frame.png";
import curve2 from "../../../../assets/images/Vector 10.png";
import curve3 from "../../../../assets/images/Vector 11.png";

const ProgrammingHero = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row bg-[#F5F6FA] px-4 lg:px-14 pb-4 lg:py-0 gap-6">
      <div className="lg:w-7/12 2xl:w-full relative"data-aos="fade-up" data-aos-duration="2000" >
        <div className="hidden lg:block absolute w-[70px] top-1 right-[22%] 2xl:right-[26%] xxxl:right-[35%] xxxl:w-[100px]">
          <Logo src={curve1} alt="" className="w-full" />
        </div>
        <div className="hidden lg:block absolute w-[40px] -left-[6%] top-0 2xl:-left-10 xxxl:w-[60px]">
          <Logo src={curve2} alt="" className="w-full" />
        </div>
        <Text
          className="hidden lg:block plt w-fit px-4 text-corange text-xs pt-1 xxxl:text-3xl"
          body="Welcome to Pluralcode's"
        />
        <p className="hero-text 2xl:w-[750px] 2xl:text-7xl leading-tight lg:leading-none pt-6 text-cblue xxxl:text-8xl xxxl:w-[1000px]">
          Programming <span className="text-corange">School</span>
        </p>
        <Text
          className="lg:w-9/12 2xl:w-[800px] xxxl:w-[950px] 2xl:py-5 2xl:text-2xl py-3 lg:py-0  font-['gmedium'] text-cblue xxxl:text-3xl xxxl:leading-tight"
          body="Our training is open to all without prerequisite or degree. PluralCode provides a 16 weeks, cutting-edge, full-time, and accessible web development course to help you upskill or quickly change careers. Our Web Development Course is intensive and incorporates extensive practice to help you prepare for the real world. You’ll learn coding by working on interactive websites that utilize HTML, CSS, JavaScript and more."
        />

        <div className="relative pt-4 lg:text-lg xxxl:text-2xl text-cblue flex gap-1 ">
          Got Questions?
          <TextLink
            className=""
            to="https://wa.me/2347083153185?text=I%27m%20interested%20in%20taking%20one%20of%20your%20programs"
            target="_blank"
            body={
              <span className="flex text-corange items-center gap-2">
                Chat with us{" "}
                <div className="w-4 lg:w-5">
                  <Logo src={whats} className="w-full" alt="" />
                </div>
              </span>
            }
          />
          <div className="hidden lg:block absolute w-[40px] left-[38%] 2xl:left-[33%] top-2 xxxl:left-[28%]">
            <Logo src={curve3} alt="" className="w-full" />
          </div>
        </div>
      </div>
      <div className="w-full" data-aos="zoom-in-up" data-aos-duration="2000">
        <Logo
          className="w-full xxxl:w-3/4"
          src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/IMG_4237.PNG"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProgrammingHero;
