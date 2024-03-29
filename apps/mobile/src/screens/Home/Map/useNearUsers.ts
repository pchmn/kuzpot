import { UserDocument } from '@kuzpot/core';
import { GeoQueryOptions, useFirestoreGeoQuery } from '@kuzpot/react-native';
import firestore from '@react-native-firebase/firestore';

export function useNearUsers(options?: GeoQueryOptions) {
  return useFirestoreGeoQuery(firestore().collection<UserDocument>('users'), options);
}
