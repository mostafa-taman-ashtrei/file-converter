import GradientText from "@/components/General/GradientText";

const Convert: React.FC = () => {
    return (
        <div>
            <h2 className="pt-36 mb-1 text-2xl font-semibold tracking-tighter text-center lg:text-7xl md:text-6xl">
                <GradientText titleText="Convert Files" />
            </h2>

            <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi at dolorum assumenda
                ipsa quod consectetur dicta est alias
            </p>

            <div className="container my-10 py-20 border border-dashed flex flex-col items-center justify-center mx-auto">
                Drop Zone
            </div>
        </div>
    );
};

export default Convert;