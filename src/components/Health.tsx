
const Health = () => {
  return (
    <div className="text-white p-[1rem] md:p-[4rem] w-full">
      <div className=" w-full md:text-center">
        <h2 className="font-semibold text-[25px] text-[#009CEB]">Mental health benefits</h2>
      </div>
      
      <div className="w-full flex md:flex-nowrap flex-wrap-reverse  gap-4 md:gap-10 justify-center items-center pointer-events-none">
        <div className="w-full flex flex-col gap-2">
          <div
            className="bg-dark-2 flex items-center justify-center w-full h-full border-primary-500/50">
            <img 
              src="/assets/images/1.jpg"
              className="h-[8rem] w-full object-cover"
            />
          </div>
          <div className="flex gap-2 w-full">
            <div
              className="bg-dark-2 flex items-center justify-center w-full h-full border-primary-500/50">
              <img 
                src="/assets/images/2.jpg"
                className=" "
              />
            </div>
            <div
              className="bg-dark-2 flex items-center justify-center w-full h-full border-primary-500/50">
              <img 
                src="/assets/images/3.jpg"
                className=""
              />
            </div>
          </div>
        </div>
        
        <div className="w-full font-medium text-[15px]">
          <p>
            Stress Relief: Traveling can be a great way to escape daily stress and rejuvenate your mind.
          </p>
          <br />
          <p>
            Boosts Creativity: Experiencing new environments and cultures can stimulate creativity and new ways of thinking.
          </p>
          <br />
          <p>
            Happiness and Satisfaction: The anticipation of a trip and the experiences gained during travel can lead to increased happiness and life satisfaction.
          </p>
        </div>
        <div>
        
        </div>
      </div>
    </div>
  );
};

export default Health;
