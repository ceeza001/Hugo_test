import { Hero, Health } from "@/components/";

const Home = () => {

  return (
    <div className="">
      <div className="relative h-screen">
        <Hero />
      </div>

      <div className="my-10 md:my-0">
        <Health />
      </div>

    </div>
  );
};

export default Home;