import DashCardSlider from "@/components/application/dashboard/home/dash-card-slider";
import OverView from "@/components/application/dashboard/home/overview";
import RecentShipment from "@/components/application/dashboard/home/recent-shipment";
import Tracking from "@/components/application/dashboard/home/tracking";

export default async function Page() {
  return (
    <>
      <DashCardSlider />
      <OverView />
      <RecentShipment />
      <Tracking />
    </>
  );
}
