
import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  useMap,
} from "react-leaflet";
import { MapPin, Layers, Info } from "lucide-react";

// DEMO locations and scores.
// Replace these with verified locations and model outputs later.
const locations = [
  { district: "Rudraprayag", lat: 30.28, lng: 78.98, risk: 82 },
  { district: "Chamoli", lat: 30.40, lng: 79.32, risk: 76 },
  { district: "Uttarkashi", lat: 30.73, lng: 78.45, risk: 68 },
  { district: "Pithoragarh", lat: 29.58, lng: 80.22, risk: 61 },
  { district: "Nainital", lat: 29.39, lng: 79.46, risk: 42 },
  { district: "Dehradun", lat: 30.32, lng: 78.03, risk: 25 },
  { district: "Almora", lat: 29.60, lng: 79.66, risk: 34 },
  { district: "Tehri Garhwal", lat: 30.38, lng: 78.48, risk: 55 },
];

function getRiskColor(risk) {
  if (risk >= 80) return "#DC2626";
  if (risk >= 60) return "#EA580C";
  if (risk >= 40) return "#D4A017";
  return "#16A34A";
}

function MapFocus({ selected }) {
  const map = useMap();

  if (selected) {
    map.flyTo([selected.lat, selected.lng], 10, {
      duration: 0.8,
    });
  }

  return null;
}

function RiskMap() {
  const [selectedDistrict, setSelectedDistrict] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState(null);

  const filteredLocations =
    selectedDistrict === "All"
      ? locations
      : locations.filter(
          (location) => location.district === selectedDistrict
        );

  function selectDistrict(event) {
    const district = event.target.value;
    setSelectedDistrict(district);

    const location = locations.find(
      (item) => item.district === district
    );

    setSelectedLocation(district === "All" ? null : location);
  }

  return (
    <main className="min-h-screen bg-[#F8F7F4] px-4 pb-16 pt-28 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#D77A5D]">
              <MapPin size={16} />
              Geographic Monitoring
            </p>

            <h1 className="mt-2 text-3xl font-bold text-[#173D2A] sm:text-4xl">
              Uttarakhand Risk Map
            </h1>

            <p className="mt-3 max-w-2xl text-gray-600">
              Explore sample landslide-risk indicators across selected
              locations in Uttarakhand.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-[#173D2A]/10 bg-white px-4 py-3">
            <Layers className="text-[#173D2A]" size={20} />
            <div>
              <p className="text-xs text-gray-500">Map locations</p>
              <p className="font-semibold text-[#173D2A]">
                {filteredLocations.length} displayed
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_290px]">
          <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-col gap-3 border-b border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-bold text-[#173D2A]">
                  Interactive map
                </h2>
                <p className="text-sm text-gray-500">
                  Select a marker to view its sample risk score.
                </p>
              </div>

              <select
                value={selectedDistrict}
                onChange={selectDistrict}
                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#D77A5D]"
                aria-label="Filter by district"
              >
                <option value="All">All locations</option>
                {locations.map((location) => (
                  <option key={location.district} value={location.district}>
                    {location.district}
                  </option>
                ))}
              </select>
            </div>

            <MapContainer
              center={[30.3, 79.1]}
              zoom={7}
              scrollWheelZoom={true}
              className="h-[480px] w-full sm:h-[580px]"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <MapFocus selected={selectedLocation} />

              {filteredLocations.map((location) => (
                <CircleMarker
                  key={location.district}
                  center={[location.lat, location.lng]}
                  radius={10}
                  pathOptions={{
                    color: getRiskColor(location.risk),
                    fillColor: getRiskColor(location.risk),
                    fillOpacity: 0.75,
                    weight: 2,
                  }}
                  eventHandlers={{
                    click: () => setSelectedLocation(location),
                  }}
                >
                  <Popup>
                    <div className="min-w-36">
                      <strong>{location.district}</strong>
                      <p>Demo risk score: {location.risk}%</p>
                      <p>
                        Level:{" "}
                        {location.risk >= 80
                          ? "Very High"
                          : location.risk >= 60
                            ? "High"
                            : location.risk >= 40
                              ? "Moderate"
                              : "Low"}
                      </p>
                    </div>
                  </Popup>
                </CircleMarker>
              ))}
            </MapContainer>

            <div className="flex items-start gap-2 border-t border-gray-100 p-4 text-xs text-gray-500">
              <Info size={16} className="mt-0.5 shrink-0" />
              Demo visualization only. Scores and marker locations are
              illustrative, not verified live warnings.
            </div>
          </section>

          <aside className="space-y-5">
            <div className="rounded-2xl bg-[#173D2A] p-6 text-white">
              <p className="text-sm text-white/70">Map overview</p>
              <h2 className="mt-2 text-2xl font-bold">
                {filteredLocations.length} locations
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Choose a district to zoom in, or select a marker to inspect
                its sample risk score.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="font-bold text-[#173D2A]">Risk level legend</h2>

              <div className="mt-5 space-y-4">
                {[
                  { label: "Very High", range: "80–100%", color: "#DC2626" },
                  { label: "High", range: "60–79%", color: "#EA580C" },
                  { label: "Moderate", range: "40–59%", color: "#D4A017" },
                  { label: "Low", range: "0–39%", color: "#16A34A" },
                ].map((level) => (
                  <div
                    key={level.label}
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: level.color }}
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {level.label}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {level.range}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-gray-500">
                These are project-defined demo categories, not official
                government warning thresholds.
              </p>
            </div>

            <div className="rounded-2xl border border-[#D77A5D]/30 bg-[#D77A5D]/10 p-5">
              <h3 className="font-semibold text-[#173D2A]">
                Selected location
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {selectedLocation
                  ? `${selectedLocation.district} — sample score ${selectedLocation.risk}%`
                  : "Select a marker or district to inspect a location."}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default RiskMap;