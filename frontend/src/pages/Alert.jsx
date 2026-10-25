function Alert() {
  const alerts = [
    {
      district: "Rudraprayag",
      probability: "82%",
      level: "Very High",
    },
    {
      district: "Chamoli",
      probability: "76%",
      level: "High",
    },
    {
      district: "Uttarkashi",
      probability: "68%",
      level: "High",
    },
    {
      district: "Pithoragarh",
      probability: "61%",
      level: "High",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F4] px-6 py-32">

      <div className="mx-auto max-w-6xl">

        <p className="text-sm font-semibold uppercase tracking-widest text-[#D77A5D]">
          Warning System
        </p>

        <h1 className="mt-2 text-4xl font-bold text-[#173D2A]">
          Landslide Alerts
        </h1>

        <p className="mt-4 text-gray-600">
          Current areas requiring monitoring based on project predictions.
        </p>

        <div className="mt-10 space-y-5">

          {alerts.map((alert) => (
            <div
              key={alert.district}
              className="flex flex-col justify-between gap-4 rounded-2xl bg-white p-6 shadow sm:flex-row sm:items-center"
            >

              <div>
                <h2 className="text-xl font-bold text-[#173D2A]">
                  {alert.district}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Current predicted risk
                </p>
              </div>

              <div className="flex items-center gap-8">

                <div className="text-right">
                  <p className="text-2xl font-bold text-[#D77A5D]">
                    {alert.probability}
                  </p>

                  <p className="text-sm text-gray-500">
                    Probability
                  </p>
                </div>

                <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
                  {alert.level}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Alert;