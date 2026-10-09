import { Link } from "react-router-dom";
import { Mountain, MapPin, ShieldCheck } from "lucide-react";

function Footer() {
return ( <footer className="bg-[#173D2A] text-white"> <div className="mx-auto max-w-7xl px-6 py-12"> <div className="grid gap-10 md:grid-cols-3">
{/* Brand */} <div> <Link to="/" className="inline-flex items-center gap-3"> <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D77A5D]"> <Mountain size={25} /> </div>

```
          <div>
            <h2 className="text-lg font-bold">
              Landslide Alert
            </h2>
            <p className="text-xs tracking-wider text-white/60">
              UTTARAKHAND
            </p>
          </div>
        </Link>

        <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
          Exploring landslide susceptibility through machine learning
          and geospatial data to support risk awareness across
          Uttarakhand.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-semibold">Quick Links</h3>

        <ul className="mt-4 space-y-3 text-sm text-white/70">
          <li>
            <Link to="/" className="transition hover:text-[#E47D5D]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="transition hover:text-[#E47D5D]">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/map" className="transition hover:text-[#E47D5D]">
              Risk Map
            </Link>
          </li>
          <li>
            <Link to="/prediction" className="transition hover:text-[#E47D5D]">
              Prediction
            </Link>
          </li>
          <li>
            <Link to="/alerts" className="transition hover:text-[#E47D5D]">
              Alerts
            </Link>
          </li>
        </ul>
      </div>

      {/* Project Information */}
      <div>
        <h3 className="font-semibold">Project Information</h3>

        <div className="mt-4 space-y-4 text-sm leading-6 text-white/70">
          <div className="flex items-start gap-3">
            <MapPin size={19} className="mt-1 shrink-0 text-[#E47D5D]" />
            <p>Uttarakhand, India</p>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck size={19} className="mt-1 shrink-0 text-[#E47D5D]" />
            <p>
              Machine-learning-based landslide susceptibility
              assessment.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-10 border-t border-white/15 pt-6 text-center text-xs leading-5 text-white/60">
      <p>
        © {new Date().getFullYear()} Landslide Alert · Uttarakhand
      </p>
      <p className="mt-2">
        Project demonstration only. Predictions are not official
        government warnings.
      </p>
    </div>
  </div>
</footer>

);
}

export default Footer;
