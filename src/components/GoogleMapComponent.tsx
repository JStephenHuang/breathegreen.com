import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import { IoClose } from "react-icons/io5";

const GoogleMapComponent = ({
  center,
}: {
  center: { lat: number; lon: number };
}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  return (
    <>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName={"w-full h-full"}
          center={{ lat: center.lat, lng: center.lon }}
          zoom={20}
        >
          <Marker position={{ lat: center.lat, lng: center.lon }} />
        </GoogleMap>
      )}
    </>
  );
};

export default GoogleMapComponent;
