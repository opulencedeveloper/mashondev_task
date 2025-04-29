import TrackingCard from "./tracking-card";

export default function Tracking() {
  return (
    <div className="flex flex-col max-w-[900px] md:max-w-full gap-y-2 mt-2 pb-20">
      <TrackingCard />
      <TrackingCard />
      <TrackingCard />
      <TrackingCard />
    </div>
  );
}
