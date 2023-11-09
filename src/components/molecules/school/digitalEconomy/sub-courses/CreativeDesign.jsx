import Text from "../../../../atoms/Text"
import Logo from "../../../../atoms/Logo"
import playbtn from '../../../../../assets/images/playbtn.png'
// import framebox from '../../../../../assets/images/thumb.jpg'
// import { useRef } from "react"


const CreativeDesign = () => {


  const handlePlay = () => {
    const videocard = document.querySelector("#video1");
    const videoWrapper = document.querySelector(".video");
    const wrapper = document.querySelector(".wrapperc");
    const close =document.querySelector('.ex');
    const playimg =document.querySelector('.playimg');
    playimg.style.display="none"
    videocard.play();
    videoWrapper.style.display = "block";
    close.style.display="block";
    wrapper.classList.add('wrapperc2') 
    wrapper.classList.remove('wrapperc') 
  };
  

  
  const handleClose = () => {
    const videoWrapper = document.querySelector(".video");
    const wrapper = document.querySelector(".wrapperc2");
    const videocard = document.querySelector("#video1");
    const playimg =document.querySelector('.playimg');
    const close =document.querySelector('.ex');
    playimg.style.display="block"
    close.style.display="none"
    videocard.pause();
    videocard.currentTime = 0;
    videoWrapper.style.display = "none";
    wrapper.classList.add('wrapperc')
    wrapper.classList.remove('wrapperc2')
  };
  return (
    <div className="bg-[#0D0032] px-4 lg:px-14 pt-10 lg:pt-14  flex flex-col lg:flex-row items-center">
      <div className="w-full pb-10 lg:pb-6 ">
        <p className="w-[70%] xxxl:w-[50%] leading-[1] text-corange font-['aristbold'] text-3xl lg:text-[64px] xxxl:text-[80px]">Creative & Motion <span className="text-white">Graphics Design</span></p>
        <Text className="text-white py-2 lg:py-0 text-lg lg:text-2xl xxxl:text-3xl font-['aristbold']" body='Out-compete & out-earn some of the best designers you know. '/>
        <Text className="text-white font-['gmedium'] xxxl:w-[80%] xxxl:text-2xl lg:pe-2" body='What does it take to be a top level creative designer? This course will answer that by combining still creative tools like Adobe Photoshop, Adobe Illustrator and Motion Design tools like Adobe After Effects and more to give you a comprehensive background as well as soft-skills training to prepare you for the world of freelancing and remote employment. '/>

      </div>
      <div className="lg:w-[65%] xl:w-[70%] wrapperc xl:h-[370px] xxxl:h-[660px] pb-0 lg:pb-10 bg-white  relative rounded-t-[24px]">
      <button
        className="ex text-xl lg:text-3xl lg:p-5 text-black exx"
        onClick={handleClose}
      >
        x
      </button>
        {/* <Logo src={framebox} className='w-full h-full'/> */}
        
        <Logo src={playbtn}id='play' className='absolute w-14 playimg cursor-pointer  top-[35%] left-[43%]' alt='' onClick={handlePlay}/>
        <div className="video">
        <video width="100%" height="100%" id="video1" className="vid" controls>
          <source
            src="https://bulletsaintseverus911.s3.eu-west-3.amazonaws.com/advert.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>
      </div>
      </div>
    </div>
  )
}

export default CreativeDesign
