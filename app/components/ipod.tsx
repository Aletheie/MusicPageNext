import Image from "next/image";
import ipod from "../../public/gummy-ipod.svg";

const Ipod = () => {
  return (
    <div className="hidden md:block w-2/3 md:w-3/5 absolute -left-5 md:left-35 md:bottom-32 lg:bottom-28 lg:top-5 floating">
      <Image src={ipod} alt="ipod" />
    </div>
  );
};

export default Ipod;
