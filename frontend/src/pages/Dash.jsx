import {
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
} from "recharts";
import { MapPin, ShieldAlert, Bell, Activity } from "lucide-react";

const riskData = [
{ district: "Rudraprayag", risk: 82 },
{ district: "Chamoli", risk: 76 },
{ district: "Uttarkashi", risk: 68 },
{ district: "Pithoragarh", risk: 61 },
{ district: "Tehri", risk: 55 },
{ district: "Nainital", risk: 42 },
];

const alerts = [
{ district: "Rudraprayag", risk: 82, level: "Very High" },
{ district: "Chamoli", risk: 76, level: "High" },
{ district: "Uttarkashi", risk: 68, level: "High" },
{ district: "Pithoragarh", risk: 61, level: "High" },
];

function Dashboard() {
return ( <main className="min-h-screen bg-[#F8F7F4] px-6 py-32"> <div className="mx-auto max-w-7xl"> <p className="text-sm font-semibold uppercase tracking-widest text-[#D77A5D]">
Monitoring </p>

```
    <h1 className="mt-2 text-4xl font-bold text-[#173D2A]">
      Risk Dashboard
    </h1>

    <p className="mt-4 text-gray-600">
      Overview of sample landslide-risk indicators across Uttarakhand.
    </p>

    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <DashboardCard
        title="Districts Covered"
        value="13"
        icon={<MapPin size={22} />}
      />
      <DashboardCard
        title="High-Risk Locations"
        value="4"
        icon={<ShieldAlert size={22} />}
      />
      <DashboardCard
        title="Sample Alerts"
        value="4"
        icon={<Bell size={22} />}
      />
      <DashboardCard
        title="Average Demo Risk"
        value="64%"
        icon={<Activity size={22} />}
      />
    </div>

    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-[#173D2A]">
          Risk Overview
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Illustrative risk scores by selected location
        </p>

        <div className="mt-6 h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={riskData}
              margin={{ top: 10, right: 10, left: 0, bottom: 35 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="district"
                angle={-25}
                textAnchor="end"
                interval={0}
                tick={{ fontSize: 11 }}
              />
              <YAxis domain={[0, 100]} />
              <Tooltip formatter={(value) => [`${value}%`, "Demo risk"]} />
              <Bar
                dataKey="risk"
                fill="#173D2A"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-[#173D2A]">
          Recent Alerts
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Example alerts for the dashboard preview
        </p>

        <div className="mt-6 space-y-4">
          {alerts.map((alert) => (
            <AlertRow
              key={alert.district}
              district={alert.district}
              risk={alert.risk}
              level={alert.level}
            />
          ))}
        </div>

        <p className="mt-5 rounded-lg bg-[#F8F7F4] p-3 text-xs leading-5 text-gray-500">
          Demo data only. These are not official warnings or live ML
          predictions.
        </p>
      </section>
    </div>
  </div>
</main>


);
}

function DashboardCard({ title, value, icon }) {
return ( <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"> <div className="flex items-center justify-between"> <p className="text-sm text-gray-500">{title}</p> <span className="text-[#D77A5D]">{icon}</span> </div> <p className="mt-3 text-3xl font-bold text-[#173D2A]">{value}</p> </div>
);
}

function AlertRow({ district, risk, level }) {
return ( <div className="flex items-center justify-between gap-3 rounded-xl bg-gray-50 p-4"> <div> <p className="font-semibold text-[#173D2A]">{district}</p> <p className="mt-1 text-xs text-gray-500">{level} · Demo status</p> </div> <span className="font-bold text-[#D77A5D]">{risk}%</span> </div>
);
}

export default Dashboard;
