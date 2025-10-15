import type React from "react"
import { ArrowUpRight } from "lucide-react";

interface Button1Props {
  name: string;
}

const Button1: React.FC<Button1Props> = ({name}) => {
  return (
    <div className="w-full sm:w-auto">
        <button className="flex items-center justify-center gap-2 sm:gap-4 bg-white rounded-2xl sm:rounded-3xl w-fit pr-1 sm:pr-2 pl-2 sm:pl-4 outline-4 outline-[#FFFFFF33]">
            <div className="py-2 sm:py-3 text-black text-xs sm:text-sm">
            {name}
            </div>
            <ArrowUpRight size={24} className="bg-black text-white p-1.5 sm:p-2 rounded-full sm:size-[30px]" />
        </button>
    </div>
  )
}

export default Button1
