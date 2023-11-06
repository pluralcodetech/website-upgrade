import Logo from "../../../atoms/Logo";
import Text from "../../../atoms/Text";
import TextLink from "../../../atoms/TextLink";
import whats from "../../../../assets/images/ri_whatsapp-fill.png";
import curve1 from "../../../../assets/images/Frame.png";
import curve2 from "../../../../assets/images/Vector 10.png";
import curve3 from "../../../../assets/images/Vector 11.png";

const CloudHero = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row bg-[#F5F6FA] px-4 lg:px-14 pb-4 lg:py-0 gap-6">
      <div className="lg:w-7/12 2xl:w-full relative" data-aos="zoom-in-up" data-aos-duration="2000">
        <div className="hidden lg:block absolute w-[70px] top-1 right-[51%] 2xl:right-[54%] xxxl:w-[100px] xxxl:right-[59%]">
          <Logo src={curve1} alt="" className="w-full" />
        </div>
        <div className="hidden lg:block absolute w-[40px] -left-[6%] top-0 2xl:-left-10 xxxl:-top-2 xxxl:-left-[5%] xxxl:w-[60px] ">
          <Logo src={curve2} alt="" className="w-full" />
        </div>
        <Text
          className="hidden lg:block plt w-fit px-4 text-corange text-xs pt-1 xxxl:text-3xl"
          body="Welcome to Pluralcode's"
        />
        <p className="hero-text 2xl:w-[750px] 2xl:text-7xl xxxl:text-8xl leading-tight lg:leading-none pt-6 text-cblue">
          Cloud <span className="text-corange">School</span>
        </p>
        <Text
          className="lg:w-9/12 2xl:w-[800px] xxxl:w-[900px] xxxl:leading-tight 2xl:py-5 2xl:text-2xl py-3 lg:py-0  font-['gmedium'] text-cblue xxxl:text-3xl"
          body="The Cloud Computing program prepares students to design solutions for Infrastructure as a Service (IaaS) architectures by provisioning computing instances, managing databases, and storage within a secure online environment. Our cloud school prepares students for occupations in Cloud Architecture, Cloud Support Associate, Devops engineering & Cyber Security."
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
          <div className="hidden lg:block absolute w-[40px] left-[38%] 2xl:left-[33%] xxxl:left-[28%] top-2">
            <Logo src={curve3} alt="" className="w-full" />
          </div>
        </div>
      </div>
      <div className="w-full" data-aos="zoom-in-up" data-aos-duration="2000">
        <Logo
          className="w-full xxxl:w-3/4"
          src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/IMG_4236.PNG"
          alt=""
        />
      </div>
    </div>
  );
};

export default CloudHero;
