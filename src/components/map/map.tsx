import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import type { City, Location } from '../../types/types';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, CityLocation } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  locations: Location[];
  place?: 'cities' | 'property';
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20,40]
});

const Map = ({ city, locations, place = 'cities' }: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {
      locations.forEach(({latitude: lat, longitude: lng}) => {
        const marker = new Marker({
          lat,
          lng
        });

        marker.setIcon(defaultCustomIcon).addTo(map);

        markers.push(marker);
      });

      const {latitude: lat, longitude: lng} = CityLocation[city.name];
      map.setView({ lat,lng });
    }
    return () => {
      if (map) {
        markers.forEach((marker) => {
          map.removeLayer(marker);
        });
      }
    };
  }, [map, city, locations]);

  return <section className={`${place}__map map`} ref={mapRef} />;
};

export default Map;
