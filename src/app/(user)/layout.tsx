import SideBar from "@/components/application/user-layout/side-bar";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full border border-5a65ab h-full">
      <SideBar />
      <section className="flex-1 overflow-y-auto">
        <header className="sticky z-30 top-0 left-0 right-0 flex bg-white flex-col justify-center gap-y-1 h-24 w-full border-b border-e5e5e5 pl-4 md:pl-7">
          <h1 className="text-xl font-bold700 text-171717">Invite & Earn</h1>
          <h2 className="text-737373 font-normal400 leading-20p text-xs max-w-453p">
            Keep track of your addresses, location updates. Edit, Delete, Update
            and see all your saved addresses
          </h2>
        </header>
        <div className="flex flex-col overflow-y-auto pt-19p pr-4 pl-4 md:pr-30p md:pl-7 flex-1">
          {children}
        </div>
      </section>
    </main>
  );
}
