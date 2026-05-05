"use client";
import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("react-globe.gl"), { 
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-neutral-900 animate-pulse rounded-3xl" />
});

export default function InteractiveGlobe() {
  const globeRef = useRef<any>(null);
  const [countries, setCountries] = useState<any[]>([]);
  const [selectedCountryName, setSelectedCountryName] = useState<string>("Kenya");
  const [hoveredCountry, setHoveredCountry] = useState<any>(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson")
      .then(res => res.json())
      .then(data => {
        // Pre-process data to ensure every country has a center point
        const processed = data.features.map((f: any) => {
          // If the dataset lacks LABEL_LAT, we take a coordinate from the geometry as a fallback
          const coordinates = f.geometry.type === "Polygon" 
            ? f.geometry.coordinates[0][0] 
            : f.geometry.coordinates[0][0][0];
          
          return {
            ...f,
            center: {
              lng: f.properties.LABEL_LON || f.properties.LNG || coordinates[0],
              lat: f.properties.LABEL_LAT || f.properties.LAT || coordinates[1]
            }
          };
        });
        setCountries(processed);
      });

    setTimeout(() => {
      if (globeRef.current) {
        globeRef.current.pointOfView({ lat: 1.29, lng: 36.82, altitude: 2.0 }, 3000);
      }
    }, 1200);
  }, []);

  const memoData = useMemo(() => countries, [countries]);

  // IMPROVED FLY-TO: Guaranteed to center the country
  const flyToCountry = useCallback((country: any) => {
    if (!globeRef.current || !country) return;

    const name = country.properties.NAME;
    const { lat, lng } = country.center;

    setSelectedCountryName(name);

    // pointOfView forces the globe to rotate so the lat/lng is dead center of the screen
    globeRef.current.pointOfView(
      { 
        lat: lat, 
        lng: lng, 
        altitude: 1.7 // Zoomed in enough to see the map clearly
      }, 
      2500 // Smooth orbital rotation
    );
  }, []);

  return (
    <div className="h-[500px] w-full relative flex items-center justify-center bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
      
      {/* Dropdown UI */}
      <div className="absolute top-6 left-6 z-30 flex flex-col gap-1">
        <label className="text-[10px] font-mono text-indigo-400 uppercase tracking-[0.3em] font-bold ml-1">
          Network Node
        </label>
        <select 
          onChange={(e) => {
            const country = countries.find(c => c.properties.NAME === e.target.value);
            if (country) flyToCountry(country);
          }}
          value={selectedCountryName}
          suppressHydrationWarning
          className="bg-neutral-900/90 backdrop-blur-md border border-white/20 text-white text-xs py-2 px-3 rounded-lg outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer min-w-[160px]"
        >
          {countries.map((c, i) => (
            <option key={`${c.properties.NAME}-${i}`} value={c.properties.NAME}>
              {c.properties.NAME}
            </option>
          ))}
        </select>
      </div>

      <Globe
        ref={globeRef}
        backgroundColor="rgba(0,0,0,0)"
        width={600}
        height={600}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        
        polygonsData={memoData}
        
        polygonAltitude={(d: any) => d.properties.NAME === selectedCountryName ? 0.12 : 0.01}
        
        polygonCapColor={(d: any) => 
          d.properties.NAME === selectedCountryName 
            ? "rgba(99, 102, 241, 0.9)" 
            : d === hoveredCountry 
            ? "rgba(255, 255, 255, 0.2)" 
            : "rgba(255, 255, 255, 0.03)"
        }
        
        polygonSideColor={() => "rgba(99, 102, 241, 0.4)"}
        polygonStrokeColor={() => "rgba(255, 255, 255, 0.8)"} 
        
        onPolygonHover={setHoveredCountry}
        onPolygonClick={(d: any) => flyToCountry(d)}

        showAtmosphere={true}
        atmosphereColor="#6366f1"
        atmosphereAltitude={0.15}
      />

      {/* Info Card */}
      <div className="absolute bottom-6 left-6 p-5 bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-2xl pointer-events-none z-30">
        <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-indigo-500 animate-ping absolute" />
            <div className="w-3 h-3 rounded-full bg-indigo-500" />
            <div>
                <p className="text-[10px] text-neutral-500 uppercase font-mono tracking-tighter mb-1">Target Identified</p>
                <p className="text-white font-black text-xl leading-none uppercase tracking-tighter italic">
                    {selectedCountryName}
                </p>
            </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,1)] z-20" />
    </div>
  );
}