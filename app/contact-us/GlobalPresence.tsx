"use client";
import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

type Office = {
  city: string;
  country: string;
  region: string;
  address: string;
  lat: number;
  lng: number;
  phone: string;
  email: string;
};

const cartoKey = process.env.NEXT_PUBLIC_CARTO_KEY;

// ---- FAKE DATA ----
const OFFICES: Office[] = [
  { city: "New York", country: "USA", region: "North America", address: "100 Park Ave, New York, NY", lat: 40.71, lng: -74.0, phone: "+1 212 555 0101", email: "ny@example.com" },
  { city: "Cincinnati", country: "USA", region: "North America", address: "221 Main St, Cincinnati, OH", lat: 39.1, lng: -84.51, phone: "+1 513 555 0102", email: "cincinnati@example.com" },
  { city: "Chicago", country: "USA", region: "North America", address: "55 W Monroe St, Chicago, IL", lat: 41.88, lng: -87.63, phone: "+1 312 555 0103", email: "chicago@example.com" },
  { city: "San Francisco", country: "USA", region: "North America", address: "1 Market St, San Francisco, CA", lat: 37.77, lng: -122.42, phone: "+1 415 555 0104", email: "sf@example.com" },
  { city: "Toronto", country: "Canada", region: "North America", address: "200 Bay St, Toronto, ON", lat: 43.65, lng: -79.38, phone: "+1 416 555 0105", email: "toronto@example.com" },
  { city: "Mexico City", country: "Mexico", region: "Latin America", address: "Paseo de la Reforma 250", lat: 19.43, lng: -99.13, phone: "+52 55 5555 0106", email: "mexico@example.com" },
  { city: "Bogotá", country: "Colombia", region: "Latin America", address: "Carrera 7 #71-21", lat: 4.71, lng: -74.07, phone: "+57 1 555 0107", email: "bogota@example.com" },
  { city: "São Paulo", country: "Brazil", region: "Latin America", address: "Av. Paulista 1000", lat: -23.55, lng: -46.63, phone: "+55 11 5555 0108", email: "saopaulo@example.com" },
  { city: "Buenos Aires", country: "Argentina", region: "Latin America", address: "Av. Corrientes 500", lat: -34.6, lng: -58.38, phone: "+54 11 5555 0109", email: "ba@example.com" },
  { city: "Amsterdam", country: "Netherlands", region: "Europe", address: "Herengracht 100", lat: 52.37, lng: 4.9, phone: "+31 20 555 0110", email: "amsterdam@example.com" },
  { city: "Berlin", country: "Germany", region: "Europe", address: "Friedrichstraße 50", lat: 52.52, lng: 13.4, phone: "+49 30 555 0111", email: "berlin@example.com" },
  { city: "Paris", country: "France", region: "Europe", address: "12 Rue de Rivoli", lat: 48.85, lng: 2.35, phone: "+33 1 5555 0112", email: "paris@example.com" },
  { city: "Stockholm", country: "Sweden", region: "Europe", address: "Drottninggatan 33", lat: 59.33, lng: 18.07, phone: "+46 8 555 0113", email: "stockholm@example.com" },
  { city: "London", country: "United Kingdom", region: "UK & Ireland", address: "30 St Mary Axe, London", lat: 51.5, lng: -0.12, phone: "+44 20 5555 0114", email: "london@example.com" },
  { city: "Dublin", country: "Ireland", region: "UK & Ireland", address: "Grand Canal Dock, Dublin", lat: 53.35, lng: -6.26, phone: "+353 1 555 0115", email: "dublin@example.com" },
  { city: "Mumbai", country: "India", region: "India", address: "Bandra Kurla Complex, Mumbai", lat: 19.07, lng: 72.87, phone: "+91 22 5555 0116", email: "mumbai@example.com" },
  { city: "Bhopal", country: "India", region: "India", address: "Arera Colony, Bhopal", lat: 23.25, lng: 77.41, phone: "+91 755 555 0117", email: "bhopal@example.com" },
  { city: "Bengaluru", country: "India", region: "India", address: "Outer Ring Road, Bengaluru", lat: 12.97, lng: 77.59, phone: "+91 80 5555 0118", email: "blr@example.com" },
  { city: "Delhi", country: "India", region: "India", address: "Connaught Place, New Delhi", lat: 28.61, lng: 77.2, phone: "+91 11 5555 0119", email: "delhi@example.com" },
  { city: "Chennai", country: "India", region: "India", address: "OMR Road, Chennai", lat: 13.08, lng: 80.27, phone: "+91 44 5555 0120", email: "chennai@example.com" },
  { city: "Singapore", country: "Singapore", region: "Asia Pacific", address: "1 Raffles Place", lat: 1.35, lng: 103.82, phone: "+65 5555 0121", email: "sg@example.com" },
  { city: "Shanghai", country: "China", region: "Asia Pacific", address: "88 Century Avenue, Pudong", lat: 31.23, lng: 121.47, phone: "+86 21 5555 0122", email: "shanghai@example.com" },
  { city: "Manila", country: "Philippines", region: "Asia Pacific", address: "Ayala Ave, Makati", lat: 14.6, lng: 120.98, phone: "+63 2 555 0123", email: "manila@example.com" },
  { city: "Sydney", country: "Australia", region: "Australia & New Zealand", address: "1 Martin Place, Sydney", lat: -33.86, lng: 151.2, phone: "+61 2 5555 0124", email: "sydney@example.com" },
  { city: "Melbourne", country: "Australia", region: "Australia & New Zealand", address: "120 Collins St, Melbourne", lat: -37.81, lng: 144.96, phone: "+61 3 5555 0125", email: "melbourne@example.com" },
  { city: "Auckland", country: "New Zealand", region: "Australia & New Zealand", address: "Queen St, Auckland", lat: -36.84, lng: 174.76, phone: "+64 9 555 0126", email: "auckland@example.com" },
  { city: "Dubai", country: "UAE", region: "Middle East & Africa", address: "Dubai Internet City", lat: 25.2, lng: 55.27, phone: "+971 4 555 0127", email: "dubai@example.com" },
  { city: "Johannesburg", country: "South Africa", region: "Middle East & Africa", address: "Sandton City, Johannesburg", lat: -26.2, lng: 28.04, phone: "+27 11 555 0128", email: "joburg@example.com" },
  { city: "Tokyo", country: "Japan", region: "Japan", address: "Marunouchi, Chiyoda-ku", lat: 35.68, lng: 139.69, phone: "+81 3 5555 0129", email: "tokyo@example.com" },
];

// region -> [lat, lng, zoom]
const VIEWS: Record<string, [number, number, number]> = {
  "North America": [40, -98, 4],
  "Latin America": [-12, -65, 3],
  Europe: [51, 10, 4],
  "UK & Ireland": [54, -4, 5],
  India: [22, 79, 5],
  "Asia Pacific": [15, 112, 4],
  "Australia & New Zealand": [-30, 160, 4],
  "Middle East & Africa": [10, 35, 3],
  Japan: [36, 138, 5],
};
const WORLD: [number, number, number] = [22, 10, 2];
const CLUSTER_PX = 56; // is size ke andar ke pins ek number me jud jaate hain

export default function GlobalPresence() {
  const mapEl = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const hintTimer = useRef<any>(null);
  const focusRef = useRef<(o: Office) => void>(() => {});
  const renderRef = useRef<() => void>(() => {});
  const selectedRef = useRef<Office | null>(null);

  const [active, setActive] = useState<string | null>(null);
  const [selected, setSelected] = useState<Office | null>(null);
  const [hint, setHint] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let cleanup = () => {};

    (async () => {
      const LMod: any = await import("leaflet");
      const L: any = LMod.default ?? LMod;
      if (cancelled || !mapEl.current || mapRef.current) return;

      const map = L.map(mapEl.current, {
        zoomControl: false,
        zoomSnap: 0.5,
        zoomDelta: 1,
        attributionControl: true,
        minZoom: 2,
        maxZoom: 16,
        worldCopyJump: true,
        scrollWheelZoom: false, // page scroll pe map zoom nahi hoga
        doubleClickZoom: false,
        dragging: !L.Browser.mobile,
        tap: false,
      }).setView([WORLD[0], WORLD[1]], WORLD[2]);
      mapRef.current = map;
      setTimeout(() => map.invalidateSize(), 200);

      L.tileLayer(`https://basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png?key=${cartoKey}`, {
        attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
        maxZoom: 19,
      }).addTo(map);

      // ---------- Apna clustering (plugin ki zarurat nahi) ----------
      const layer = L.layerGroup().addTo(map);

      const render = () => {
        layer.clearLayers();
        const z = map.getZoom();
        const cells = new Map<string, Office[]>();
        OFFICES.forEach((o) => {
          const p = map.project([o.lat, o.lng], z);
          const key = z >= 13 ? o.city : `${Math.floor(p.x / CLUSTER_PX)}:${Math.floor(p.y / CLUSTER_PX)}`;
          if (!cells.has(key)) cells.set(key, []);
          cells.get(key)!.push(o);
        });

        cells.forEach((list) => {
          if (list.length === 1) {
            const o = list[0];
            const on = selectedRef.current === o;
            const icon = L.divIcon({
              html: `<div class="hc-pin hc-pin--single ${on ? "hc-pin--sel" : ""}"></div>`,
              className: "",
              iconSize: [18, 24],
              iconAnchor: [9, 24],
            });
            L.marker([o.lat, o.lng], { icon, title: o.city })
              .on("click", () => focusRef.current(o))
              .addTo(layer);
          } else {
            const lat = list.reduce((s, o) => s + o.lat, 0) / list.length;
            const lng = list.reduce((s, o) => s + o.lng, 0) / list.length;
            const icon = L.divIcon({
              html: `<div class="hc-pin">${list.length}</div>`,
              className: "",
              iconSize: [34, 42],
              iconAnchor: [17, 42],
            });
            L.marker([lat, lng], { icon })
              .on("click", () => {
                const b = L.latLngBounds(list.map((o) => [o.lat, o.lng]));
                map.flyToBounds(b, { padding: [100, 100], maxZoom: 12, duration: 1 });
              })
              .addTo(layer);
          }
        });
      };
      renderRef.current = render;
      map.on("zoomend", render);
      render();

      focusRef.current = (o: Office) => {
        selectedRef.current = o;
        setSelected(o);
        map.flyTo([o.lat, o.lng], Math.max(map.getZoom(), 8), { duration: 1 });
        render();
      };

      // ---------- Zoom sirf Ctrl/Cmd + scroll, buttons ya pinch se ----------
      const el = map.getContainer();
      let lastZoom = 0;
      const onWheel = (e: WheelEvent) => {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          const now = Date.now();
          if (now - lastZoom > 150) {
            lastZoom = now;
            e.deltaY < 0 ? map.zoomIn(0.5) : map.zoomOut(0.5);
          }
        } else {
          setHint(true);
          clearTimeout(hintTimer.current);
          hintTimer.current = setTimeout(() => setHint(false), 1200);
        }
      };
      el.addEventListener("wheel", onWheel, { passive: false });
      cleanup = () => el.removeEventListener("wheel", onWheel);
    })();

    return () => {
      cancelled = true;
      cleanup();
      clearTimeout(hintTimer.current);
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  const clearSelection = () => {
    selectedRef.current = null;
    setSelected(null);
    renderRef.current();
  };

  const goRegion = (r: string) => {
    setActive(r);
    clearSelection();
    const [lat, lng, z] = VIEWS[r];
    mapRef.current?.flyTo([lat, lng], z, { duration: 1.2 });
  };
  const reset = () => {
    setActive(null);
    clearSelection();
    mapRef.current?.flyTo([WORLD[0], WORLD[1]], WORLD[2], { duration: 1 });
  };
  const pan = (dx: number, dy: number) => mapRef.current?.panBy([dx, dy]);

  const regionOffices = active ? OFFICES.filter((o) => o.region === active) : [];

  return (
    <section className="hc-presence ">
      <div className="hc-container">
        <small>OUR GLOBAL PRESENCE</small>
        <h2>56 countries, 194 delivery centers, 500,000+ associates.</h2>
        <div className="hc-tabs">
          {Object.keys(VIEWS).map((r) => (
            <button key={r} className={`hc-tab ${active === r ? "active" : ""}`} onClick={() => goRegion(r)}>
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="hc-map-wrap">
        <div ref={mapEl} className="hc-map" />

        {/* {hint && <div className="hc-map-hint">Zoom karne ke liye Ctrl / ⌘ + scroll, + − buttons ya numbers par click karo

        </div>
        } */}

        {/* Region ke offices ki list */}
        {/* {active && !selected && (
          <div className="hc-side">
            <h4>{active}</h4>
            {regionOffices.map((o) => (
              <button key={o.city} className="hc-office-item" onClick={() => focusRef.current(o)}>
                {o.city}
                <small>{o.country}</small>
              </button>
            ))}
          </div>
        )} */}

        {/* Selected office ki detail */}
        {selected && (
          <div className="hc-side hc-office-card">
            <button className="hc-close" aria-label="Close" onClick={clearSelection}>×</button>
            <h4>{selected.city}, {selected.country}</h4>
            <p>{selected.address}</p>
            <p>☎ <a href={`tel:${selected.phone.replace(/\s/g, "")}`}>{selected.phone}</a></p>
            <p>✉ <a href={`mailto:${selected.email}`}>{selected.email}</a></p>
            <a
              className="hc-ghost hc-dir"
              target="_blank"
              rel="noreferrer"
              href={`https://www.google.com/maps/search/?api=1&query=${selected.lat},${selected.lng}`}
            >
              Open in Google Maps
            </a>
          </div>
        )}

        <div className="hc-map-ctrl">
          <span />
          <button aria-label="Up" onClick={() => pan(0, -120)}>⌃</button>
          <button aria-label="Zoom in" onClick={() => mapRef.current?.zoomIn()}>+</button>
          <button aria-label="Left" onClick={() => pan(-120, 0)}>‹</button>
          <span />
          <button aria-label="Right" onClick={() => pan(120, 0)}>›</button>
          <button aria-label="Reset" onClick={reset}>⤢</button>
          <button aria-label="Down" onClick={() => pan(0, 120)}>⌄</button>
          <button aria-label="Zoom out" onClick={() => mapRef.current?.zoomOut()}>−</button>
        </div>
      </div>
    </section>
  );
}