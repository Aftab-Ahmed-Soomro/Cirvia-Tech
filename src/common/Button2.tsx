import type React from "react";
import { ArrowUpRight } from "lucide-react";

interface IPROPS {
  name: string;
}

const Button2: React.FC<IPROPS> = ({ name }) => {
  return (
    <div>
      <button className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 bg-[#800080] rounded-2xl sm:rounded-3xl w-fit pr-1 sm:pr-2 pl-2 sm:pl-3 md:pl-4 outline-4 outline-[#80008033]">
        <div className="py-2 sm:py-2.5 md:py-3 text-white text-xs sm:text-sm">
          {name}
        </div>
        <ArrowUpRight
          size={20}
          className="bg-white text-black p-1.5 sm:p-2 rounded-full sm:w-[25px] sm:h-[25px] md:w-[30px] md:h-[30px]"
        />
      </button>
    </div>
  );
};

export default Button2;
