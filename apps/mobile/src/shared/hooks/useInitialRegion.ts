import { useSecureStorage, useTimeout } from '@kuzpot/react-native';
import { getLastKnownPositionAsync } from 'expo-location';
import { useEffect, useState } from 'react';
import { Region } from 'react-native-maps';

let didInit = false;

export function useInitialRegion() {
  const [regionOnMap] = useRegionOnMap();

  const [initialRegion, setInitialRegion] = useState<Region>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  if (regionOnMap && isLessThanOneHour(regionOnMap.age) && !initialRegion) {
    setInitialRegion((prev) => (prev ? prev : regionOnMap));
    setIsLoading(false);
  }

  useEffect(() => {
    const getLastKnownPosition = async () => {
      try {
        const location = await getLastKnownPositionAsync();
        if (location) {
          setInitialRegion((prev) => (prev ? prev : { ...location.coords, latitudeDelta: 0.05, longitudeDelta: 0.05 }));
          setIsLoading(false);
        }
      } catch (e) {
        console.error('Error while getting last known position', e);
        setIsLoading(false);
      }
    };

    if (!didInit) {
      didInit = true;
      getLastKnownPosition();
    }
  }, []);

  // We don't want to wait more than 500ms for the preferred location to be set
  useTimeout(() => {
    setIsLoading(false);
  }, 500);

  return { initialRegion, isLoading };
}

export function useRegionOnMap() {
  const [regionOnMap, setRegionOnMap] = useSecureStorage<Region & { age: number }>('regionOnMap');

  const set = (region: Region) => {
    setRegionOnMap({ ...region, age: Date.now() });
  };

  return [regionOnMap, set] as const;
}

function isLessThanOneHour(date: number) {
  const now = new Date();
  const diff = now.getTime() - date;
  return diff < 1000 * 60 * 60;
}
