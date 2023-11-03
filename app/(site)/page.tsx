import GradientText from "@/components/General/GradientText";
import { HiCog } from "react-icons/hi";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-5xl pt-52 pb-24 mx-auto">
        <h1 className="text-80 text-center lh-6 font-bold text-white mb-3">
          <GradientText titleText="File Conversion" />
          {" "}
          <u>
            Made Easy
          </u>
        </h1>
        <h2 className="text-xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam repellendus odio, error, eveniet voluptatem deleniti perspiciatis iure eaque tenetur consequuntur quis enim atque, debitis odit tempore iste quam suscipit culpa.
        </h2>
        <div className="text-center">
          <Link href="/convert">
            <button className="bg-gradient-to-br gradient-primary mx-auto lg:mx-0 text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg shadow-pink-800 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Get Started
            </button>
          </Link>
        </div>
      </div>


      <h2 id="features" className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center lg:text-7xl md:text-6xl">
        <GradientText titleText="Features" />
      </h2>

      <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi at dolorum assumenda
        ipsa quod consectetur dicta est alias
      </p>

      <div className="pt-12 pb-24 max-w-4xl mx-auto feature-container md:px-1 px-3">
        <div className="feature">
          <HiCog size={30} className="text-primary" />

          <h3 className="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>

          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>


        <div className="feature">
          <HiCog size={30} className="text-primary" />

          <h3 className="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>

          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>

        <div className="feature">
          <HiCog size={30} className="text-primary" />

          <h3 className="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>

          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>

        <div className="feature">
          <HiCog size={30} className="text-primary" />

          <h3 className="pt-3 font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet
          </h3>

          <p className="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
