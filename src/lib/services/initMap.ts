export async function initMap() {
  // Request needed libraries.

  const { Map } = (await google.maps.importLibrary(
    "maps"
  )) as google.maps.MapsLibrary;

  const { AdvancedMarkerElement } = (await google.maps.importLibrary(
    "marker"
  )) as google.maps.MarkerLibrary;
  console.log(document.getElementById("map"));

  if (!document.getElementById("map")) return;

  const map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 37.42, lng: -122.1 },
    zoom: 14,
    mapId: "4504f8b37365c3d0",
  });

  const marker = new AdvancedMarkerElement({
    map,
    position: { lat: 37.42, lng: -122.1 },
  });
}
