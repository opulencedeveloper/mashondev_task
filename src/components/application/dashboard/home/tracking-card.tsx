import Image from "next/image";

import NgnFlagIcon from "@/assets/dashboard/icons/flag-nigeria.svg";
import TimerIcon from "@/assets/dashboard/icons/timer.svg";

export default function TrackingCard() {
  return (
    <div className="flex w-full overflow-x-auto">
      <div className="p-6 w-max size1:w-full bg-white rounded-12p border border-219215">
        <div className="flex gap-x-24 pb-4 border-b border-219215">
          <div className="flex flex-col pr-5 gap-y-2 font-normal400">
            <span className="text-xs text-808080 truncate">Tracking ID</span>
            <span className="text-base text-5a65ab">MAF-100-234-291</span>
          </div>
          <div className="flex flex-col gap-y-2 font-normal400">
            <span className="text-xs text-808080">Sender</span>
            <span className="text-base text-3a3a3a truncate">Bunmi Tanny1</span>
          </div>
          <div className="flex flex-col gap-y-2 font-normal400">
            <span className="text-xs text-808080">Receiver</span>
            <span className="text-base text-3a3a3a">Mercy</span>
          </div>
        </div>

        <div className="flex justify-between gap-x-24 pb-4 pt-8 border-b border-219215">
          <div className="flex flex-col gap-y-2 font-normal400">
            <span className="text-xs text-808080 truncate">Pick Up From</span>
            <div className="flex items-center gap-x-2">
              <div className="w-18p h-18p flex-shrink-0">
                <Image
                  src={NgnFlagIcon}
                  alt="ngn flag"
                  className="w-full h-full"
                />
              </div>
              <span className="text-14p text-171717 truncate ">Lagos, Nigeria</span>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 font-normal400">
            <span className="text-xs text-808080 truncate">Delivery To</span>
            <div className="flex items-center gap-x-2">
              <div className="w-18p h-18p flex-shrink-0">
                <Image
                  src={NgnFlagIcon}
                  alt="ngn flag"
                  className="w-full h-full"
                />
              </div>
              <span className="truncate text-14p text-171717">Oyo, Nigeria</span>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 font-normal400">
            <span className="text-xs text-808080">Amount</span>

            <p className="text-14p text-171717">N3000</p>
          </div>

          <div className="flex flex-col gap-y-2 font-normal400">
            <span className="text-xs text-808080">Status</span>

            <span className="flex items-center justify-center h-8 px-3.5 rounded-lg text-14p text-171717 bg-c0fbff">
              Delayed
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center gap-x-24 pt-8">
          <div className="flex flex-col gap-y-2 font-normal400">
            <span className="text-xs text-808080 truncate">Processing time</span>
            <div className="flex items-center gap-x-2">
              <div className="w-6 h-6">
                <Image
                  src={TimerIcon}
                  alt="timer"
                  className="w-full h-full"
                />
              </div>
              <span className="text-base text-3a3a3a truncate">10 hours</span>
            </div>
          </div>



          <div className="flex gap-x-2 font-semiBold600 text-xs">
           <button className="h-8 px-3.5 border border-262a48 text-262a48 rounded-lg truncate">View More </button>
           <button className="h-8 px-3.5 bg-262a48 rounded-lg text-white truncate">Pay Now</button>
          </div>
        </div>

      </div>
      </div>
   
  );
}
