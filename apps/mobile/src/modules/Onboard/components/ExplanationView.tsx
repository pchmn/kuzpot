import { useTranslation } from 'react-i18next';
import { Dimensions } from 'react-native';

import EarthImage from './EarthImage';
import { PageView } from './PageView';

const width = Dimensions.get('window').width;

export function ExplanationView({ onNext }: { onNext: () => void }) {
  const { t } = useTranslation();

  return (
    <PageView
      title={t('welcomeScreen.explalantionView.title')}
      description={t('welcomeScreen.explalantionView.description')}
      buttonLabel={t('common.next')}
      image={<EarthImage height={width / 1.75} width={width / 1.75} />}
      onPress={onNext}
    />
  );
}
