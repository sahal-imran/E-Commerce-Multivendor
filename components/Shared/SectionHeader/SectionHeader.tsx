import Link from "next/link";
import React from "react";

import * as Icons from "../../../SVG/Icons";
import TitleHeading from "../Heading/TitleHeading";

interface Props {
  headingText: string;
  href: string;
  IsMoreProduct?: boolean
}

const SectionHeader: React.FC<Props> = ({ headingText, href, IsMoreProduct = true }: Props) => {
  return (
    <div className="w-full flex justify-between items-center md:gap-4">
      <TitleHeading Text={headingText} />
      {
        IsMoreProduct && <Link href={href}>
          <button className="bg-transparent border-0 flex items-center justify-end gap-2 cursor-pointer">
            <p className="text-base font-semibold capitalize">View More</p>
            <Icons.RightArrow
              ClassName="w-[23px] h-[18px]  arrow-right-bouncing"
              stroke="#000000"
            />
          </button>
        </Link>
      }
    </div>
  );
};

export default SectionHeader;
