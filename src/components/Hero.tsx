
const Hero = () => {
  return (
    <div>
      <div className="mt-[4rem] absolute z-50 flex flex-wrap-reverse md:flex-nowrap justify-between items-center gap-8 p-[1rem] md:p-[6rem]">
        <div className="w-full space-y-8 md:space-y-10">
          <h1 className="font-bold text-[30px] md:text-[40px] leading-[101%] text-[#FB89C0] drop-shadow-2xl">
            Simple Health Talk: The Importance of a Balanced Diet.
          </h1>
          <p>
            Maintaining a balanced diet is crucial for overall health and well-being. A balanced diet provides the necessary nutrients for our bodies to function effectively, reducing the risk of disease and improving energy and performance.
          </p>

          <p>
            Key Components of a Balanced Diet:

Fruits and Vegetables: Essential for vitamins, minerals, and fiber.
Proteins: Important for growth and repair; include lean meats, fish, beans, and nuts.
Carbohydrates: Provide energy; choose whole grains like brown rice and whole wheat bread.
Dairy: Supports bone health with calcium and vitamin D; include milk, yogurt, and cheese.
          </p>

          <p>
            By incorporating a variety of these food groups in the right proportions, we can support our body's needs and promote long-term health.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
