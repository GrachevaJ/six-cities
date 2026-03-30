import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import type { City, Location } from '../../types/types';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

const URL_MARKER_DEFAULT = 'img/pin.svg';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type MapProps = {
  city: City;
  locations: Location[];
};

const Map = ({ city, locations }: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      locations.forEach(({latitude: lat, longitude: lng}) => {
        const marker = new Marker({
          lat,
          lng
        });

        marker.setIcon(defaultCustomIcon).addTo(map);
      });
    }
  }, [map, locations]);

  return <section className="cities__map map" ref={mapRef} />;
};

export default Map;
