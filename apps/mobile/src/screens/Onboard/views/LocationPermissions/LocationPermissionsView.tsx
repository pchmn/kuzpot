import { Flex, useToggle } from '@kuzpot/react-native';
import { openSettings } from 'expo-linking';
import { LocationPermissionResponse } from 'expo-location';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions } from 'react-native';
import { ActivityIndicator, Button, Dialog, Portal, Text } from 'react-native-paper';

import { useLocationPermissions } from '@/shared/hooks';

import { PageView } from '../../components/PageView';
import LocationImage from './LocationImage';

const width = Dimensions.get('window').width;

export function LocationPermissionView({ onNext }: { onNext?: () => void }) {
  const { t } = useTranslation();

  const { locationPermissions: locationPermission, requestPermissions, isLoading } = useLocationPermissions();

  const [visible, toggleDialog] = useToggle();

  const handleOpenSettings = () => {
    openSettings();
    toggleDialog();
  };

  const checkLocationPermission = useCallback(
    (status: LocationPermissionResponse | null) => {
      if (status && status.granted) {
        onNext?.();
      }
    },
    [onNext]
  );

  const handleRequestPermission = async () => {
    if (locationPermission?.status === 'denied' && !locationPermission.canAskAgain) {
      toggleDialog();
      return;
    }
    await requestPermissions();
  };

  useEffect(() => {
    checkLocationPermission(locationPermission);
  }, [checkLocationPermission, locationPermission]);

  if (isLoading) {
    return (
      <Flex flex={1} align="center" justify="center">
        <ActivityIndicator size="large" />
      </Flex>
    );
  }

  return (
    <>
      <PageView
        title={t('welcomeScreen.locationPermissionView.title')}
        description={t('welcomeScreen.locationPermissionView.description')}
        buttonLabel={t('welcomeScreen.locationPermissionView.grantLocation')}
        image={<LocationImage height={width / 1.75} width={width / 1.75} />}
        onPress={handleRequestPermission}
      />
      <Portal>
        <Dialog visible={visible} onDismiss={toggleDialog}>
          <Dialog.Title>{t('welcomeScreen.locationPermissionView.dialog.title')}</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">{t('welcomeScreen.locationPermissionView.dialog.description')}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={toggleDialog}>{t('common.cancel')}</Button>
            <Button onPress={handleOpenSettings}>{t('common.openSettings')}</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
}
