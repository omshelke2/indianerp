import { SoftwareInfoProp } from "@/app/TS/interfaces/interface";
import Link from "next/link";

const SoftwareInfo = ({ src, name,navLink }: SoftwareInfoProp) => {
  return (
    <div className="flex flex-col gap-4 border p-3 ">
      <div className="border rounded-md ">
        <img
          src={src}
          alt=""
          className="w-full h-[300px] object-contain object-center "
        />
      </div>
      <Link href={navLink} className="bg-gray-100 hover:bg-gray-200 transition-all ease-linear duration-300 px-4 py-2 rounded-sm text-center">
        {name}
      </Link>
    </div>
  );
};

export default SoftwareInfo;
