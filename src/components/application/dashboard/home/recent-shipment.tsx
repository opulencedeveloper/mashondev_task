"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const dataYear = [
  { month: 1, value: 250 },
  { month: 2, value: 260 },
  { month: 3, value: 255 },
  { month: 4, value: 280 },
  { month: 5, value: 270 },
  { month: 6, value: 300 },
  { month: 7, value: 270 },
  { month: 8, value: 330 },
  { month: 9, value: 310 },
  { month: 10, value: 500 },
  { month: 11, value: 100 },
  { month: 12, value: 1000 },
];

const tabs = ["Year", "Month", "Week"];

export default function RecentShipment() {
  const [selectedTab, setSelectedTab] = useState<string>("Year");

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h4 className="text-171717 font-medium500 text-xl md:text-2xl">Recent shipment</h4>
        <button className="flex items-center justify-center bg-white text-737373 text-14p font-medium500 rounded-lg h-34p border border-e5e5e5 px-3">
          See All
        </button>
      </div>

      <div className="w-full rounded-2xl bg-white p-6 h-368p mt-6 border border-e4e7ec">
        <div className="flex items-center justify-between mb-6 gap-x-2">
          <h2 className="text-base md:text-lg font-semiBold600 text-1d2939">
            Company Growth
          </h2>
          <div className="flex bg-f2f4f7 p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)} 
                className={`px-4 py-1 rounded-sm text-xs md:text-sm ${
                  selectedTab === tab
                    ? "bg-white shadow text-1d2939 ont-extraBold800"
                    : "text-667085 font-normal400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer className="w-full h-full">
            <AreaChart
              className="text98A2B3 font-normal400 text-xs"
              data={dataYear}
            >
              <defs>
                <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={0}
                width={30}
              />

              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#5A65AB"
                fillOpacity={1}
                fill="url(#colorGrowth)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
