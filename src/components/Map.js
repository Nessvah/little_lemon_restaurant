import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import marker from "../images/pinpoint.svg";

const Map = () => {
  const myIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
  });

  return (
    <MapContainer
      className="map"
      center={[41.890744, -87.647688]}
      zoom={17}
      minZoom={3}
      maxZoom={19}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[41.890744, -87.647688]} icon={myIcon}>
        <Popup>
          You can visit <br /> us here.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
