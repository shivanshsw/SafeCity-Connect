import { useEffect, useRef } from "react";
import leaflet from "leaflet";

export default function Map() {
    const mapRef = useRef();

    useEffect(() => {
        if (mapRef.current) return;
        mapRef.current = leaflet.map("map").setView([51.505, -0.09], 13);

        leaflet
            .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
                attribution:
                    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            })
            .addTo(mapRef.current);
        setTimeout(() => {
            mapRef.current.invalidateSize();
        }, 0);
    }, []);

    return <div id="map" style={{ height: "100vh" , width:"100vh"}}></div>;
}
