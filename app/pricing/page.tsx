import { AiOutlineCheckCircle, AiOutlineDollarCircle } from "react-icons/ai";

import { Button } from "@/components/Radix/Button";
import GradientText from "@/components/General/GradientText";

const Pricing: React.FC = () => {
    return (
        <div className="container my-24 mx-auto md:px-6">
            <section className="mb-32">
                <h2 className=" mb-8 text-2xl font-semibold text-center lg:text-7xl md:text-6xl">
                    <GradientText titleText="Plans" />
                </h2>

                <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
                    <div className="mb-6 lg:mb-0">
                        <div
                            className="block h-full rounded-lg shadow-primary shadow-inner  bg-gray-900">
                            <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                                <p className="mb-4 text-lg uppercase">
                                    <strong>Free Forver</strong>
                                </p>
                                <h3 className="mb-6 text-3xl">
                                    <strong>$ 0</strong>
                                    <small className="text-base text-neutral-500 dark:text-neutral-300">/year</small>
                                </h3>

                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-xl font-semibold relative text-md flex items-center w-full"
                                >
                                    <div className="flex flex-row justify-center items-center gap-1">
                                        <AiOutlineDollarCircle size={20} />
                                        <span>Buy</span>
                                    </div>
                                </Button>

                            </div>

                            <div className="p-6">
                                <ol className="list-inside">
                                    <li className="mb-4 flex">
                                        <p className="flex flex-row justify-start gap-2">
                                            <AiOutlineCheckCircle size={20} className="text-primary" />
                                            <span>
                                                Free Forver Feature
                                            </span>
                                        </p>
                                    </li>

                                    <li className="mb-4 flex">
                                        <p className="flex flex-row justify-start gap-2">
                                            <AiOutlineCheckCircle size={20} className="text-primary" />
                                            <span>
                                                Free Forver Feature
                                            </span>
                                        </p>
                                    </li>

                                    <li className="mb-4 flex">
                                        <p className="flex flex-row justify-start gap-2">
                                            <AiOutlineCheckCircle size={20} className="text-primary" />
                                            <span>
                                                Free Forver Feature
                                            </span>
                                        </p>
                                    </li>

                                    <li className="mb-4 flex">
                                        <p className="flex flex-row justify-start gap-2">
                                            <AiOutlineCheckCircle size={20} className="text-primary" />
                                            <span>
                                                Free Forver Feature
                                            </span>
                                        </p>
                                    </li>

                                    <li className="mb-4 flex">
                                        <p className="flex flex-row justify-start gap-2">
                                            <AiOutlineCheckCircle size={20} className="text-primary" />
                                            <span>
                                                Free Forver Feature
                                            </span>
                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 lg:mb-0">
                        <div className="block h-full rounded-lg shadow-2xl bg-gray-900 shadow-primary">
                            <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                                <p className="mb-4 text-lg uppercase">
                                    <strong>
                                        <GradientText titleText="Pro" />
                                    </strong>
                                </p>
                                <h3 className="mb-6 text-3xl">
                                    <strong>$ 299.99</strong>
                                    <small className="text-base text-neutral-500 dark:text-neutral-300">/year</small>
                                </h3>

                                <Button
                                    size="icon"
                                    className="rounded-xl font-semibold relative text-md flex items-center w-full"
                                >
                                    <div className="flex flex-row justify-center items-center gap-1">
                                        <AiOutlineDollarCircle size={20} />
                                        <span>Buy</span>
                                    </div>
                                </Button>
                            </div>
                            <div className="p-6">
                                <ol className="list-inside">
                                    <li className="mb-4 flex">
                                        <p className="flex flex-row justify-start gap-2">
                                            <AiOutlineCheckCircle size={20} className="text-primary" />
                                            <span>
                                                Pro Feature
                                            </span>
                                        </p>
                                    </li>

                                    <li className="mb-4 flex">
                                        <p className="flex flex-row justify-start gap-2">
                                            <AiOutlineCheckCircle size={20} className="text-primary" />
                                            <span>
                                                Pro Feature
                                            </span>
                                        </p>
                                    </li>

                                    <li className="mb-4 flex">
                                        <p className="flex flex-row justify-start gap-2">
                                            <AiOutlineCheckCircle size={20} className="text-primary" />
                                            <span>
                                                Pro Feature
                                            </span>
                                        </p>
                                    </li>

                                    <li className="mb-4 flex">
                                        <p className="flex flex-row justify-start gap-2">
                                            <AiOutlineCheckCircle size={20} className="text-primary" />
                                            <span>
                                                Pro Feature
                                            </span>
                                        </p>
                                    </li>

                                    <li className="mb-4 flex">
                                        <p className="flex flex-row justify-start gap-2">
                                            <AiOutlineCheckCircle size={20} className="text-primary" />
                                            <span>
                                                Pro Feature
                                            </span>
                                        </p>
                                    </li>

                                    <li className="mb-4 flex">
                                        <p className="flex flex-row justify-start gap-2">
                                            <AiOutlineCheckCircle size={20} className="text-primary" />
                                            <span>
                                                Pro Feature
                                            </span>
                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 lg:mb-0">
                        <div className="block h-full rounded-lg shadow-inner bg-gray-900 shadow-primary">

                            <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                                <p className="mb-4 text-lg uppercase">
                                    <strong>Enterprise</strong>
                                </p>
                                <h3 className="mb-6 text-3xl">
                                    <strong>$ 499</strong>
                                    <small className="text-base text-neutral-500 dark:text-neutral-300">/year</small>
                                </h3>


                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-xl font-semibold relative text-md flex items-center w-full"
                                >
                                    <div className="flex flex-row justify-center items-center gap-1">
                                        <AiOutlineDollarCircle size={20} />
                                        <span>Buy</span>
                                    </div>
                                </Button>
                            </div>
                            <div className="p-6">
                                <ol className="list-inside">
                                    <li className="mb-4 flex">
                                        <p className="flex flex-row justify-start gap-2">
                                            <AiOutlineCheckCircle size={20} className="text-primary" />
                                            <span>
                                                Enterprise Feature
                                            </span>
                                        </p>
                                    </li>

                                    <li className="mb-4 flex">
                                        <p className="flex flex-row justify-start gap-2">
                                            <AiOutlineCheckCircle size={20} className="text-primary" />
                                            <span>
                                                Enterprise Feature
                                            </span>
                                        </p>
                                    </li>

                                    <li className="mb-4 flex">
                                        <p className="flex flex-row justify-start gap-2">
                                            <AiOutlineCheckCircle size={20} className="text-primary" />
                                            <span>
                                                Enterprise Feature
                                            </span>
                                        </p>
                                    </li>

                                    <li className="mb-4 flex">
                                        <p className="flex flex-row justify-start gap-2">
                                            <AiOutlineCheckCircle size={20} className="text-primary" />
                                            <span>
                                                Enterprise Feature
                                            </span>
                                        </p>
                                    </li>

                                    <li className="mb-4 flex">
                                        <p className="flex flex-row justify-start gap-2">
                                            <AiOutlineCheckCircle size={20} className="text-primary" />
                                            <span>
                                                Enterprise Feature
                                            </span>
                                        </p>
                                    </li>

                                    <li className="mb-4 flex">
                                        <p className="flex flex-row justify-start gap-2">
                                            <AiOutlineCheckCircle size={20} className="text-primary" />
                                            <span>
                                                Enterprise Feature
                                            </span>
                                        </p>
                                    </li>

                                    <li className="mb-4 flex">
                                        <p className="flex flex-row justify-start gap-2">
                                            <AiOutlineCheckCircle size={20} className="text-primary" />
                                            <span>
                                                Enterprise Feature
                                            </span>
                                        </p>
                                    </li>


                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Pricing;