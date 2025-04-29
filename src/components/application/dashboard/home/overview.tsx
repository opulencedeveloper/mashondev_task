import Image from "next/image";

import ChevronDropDownIcon from "@/assets/dashboard/icons/chevron-down.svg";
import TruckIcon from "@/assets/dashboard/icons/truck.svg";
import ArrowUpIcon from "@/assets/dashboard/icons/arrow-up.svg";
import ArrowDownIcon from "@/assets/dashboard/icons/arrow-down.svg";

import OverViewCard from "./overview-card";


export default function OverView() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h4 className="text-171717 font-medium500 text-xl md:text-2xl">Overview</h4>
        <button className="flex items-center justify-center bg-white gap-x-1 rounded-lg h-34p border border-e5e5e5 px-3">
          <p className="text-737373 text-14p font-medium500">This Month</p>
          <div className="h-4 w-4">
            {" "}
            <Image
              className="h-full w-full"
              src={ChevronDropDownIcon}
              width={16}
              height={16}
              alt="drop down"
            />
          </div>
        </button>
      </div>

      <div className="flex flex-col gap-6 mt-6 lg:flex-row">
        <div className="flex flex-col justify-center h-163p w-full flex-shrink-0 rounded-lg bg-5a65ab py-26p px-245p lg:w-1/3">
          <p className="text-252507 font-light300 text-xs mb-2">Your Balance</p>
          <p className="font-heavy900 text-2xl text-252507">N3,000,000.28</p>
          <button className="flex items-center justify-center mt-6 bg-white w-max rounded-lg h-8 px-4 font-medium500 text-xs text-5a65ab">
            Fund Wallet
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
         <OverViewCard icon={TruckIcon} title="Total Shipment" iconBgColor="bg-f4e3c4" />
         <OverViewCard icon={ArrowUpIcon} title="Total Exports" iconBgColor="bg-d9ffd7" />
         <OverViewCard icon={ArrowDownIcon} title="Total Import" iconBgColor="bg-d7Fdff" />
        </div>
      </div>
    </div>
  );
}
