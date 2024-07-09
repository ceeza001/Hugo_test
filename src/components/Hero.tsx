
const Hero = () => {
  return (
    <div>
      
      <div className="mt-[4rem] absolute z-50 flex flex-wrap-reverse md:flex-nowrap justify-between items-center gap-8 p-[1rem] md:p-[6rem]">
        <div className="text-white w-full space-y-8 md:space-y-10">
          <h1 className="font-bold text-[30px] md:text-[40px] leading-[101%] text-[#009CEB] drop-shadow-2xl">
            The Benefits of Traveling
          </h1>
          <p>
            Exploring new places and cultures can significantly enhance your overall well-being and happiness. Here’s how traveling can contribute to a healthier and more fulfilling lifestyle:
          </p>

          <div className="z-[900] flex items-center gap-2">
            
            <div>
              <img 
                src="/assets/icons/1.svg"
                alt="telegram"
                width={25}
                height={25}
                className="invert-white"
              />
            </div>
            
            <div className="relative">
              <img 
                src="/assets/icons/2.svg"
                alt="X-twitter"
                width={25}
                height={25}
                className="invert-white"
              />
            </div>
            <div className="relative">
              <img 
                src="/assets/icons/3.svg"
                alt="X-twitter"
                width={25}
                height={25}
                className="invert-white"
              />
            </div>
            <div className="relative">
              <img 
                src="/assets/icons/4.svg"
                alt="X-twitter"
                width={25}
                height={25}
                className="invert-white"
              />
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border-2 w-full flex items-center justify-center h-full">
          <img 
            src="/assets/images/hero.jpg" 
            alt="Button_On_Ton" 
            className="w-full md:w-[20rem] aspect-square"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
