import { useEffect, useState } from 'react';
import { rootStore } from '@stores/global/RootStore';
import { PlantCard } from '@components/Plant/PlantCard';
import styles from './Plant.module.scss';
import { findPlantsByUserId } from '@api/Plant/Plant';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { CircularProgress } from '@mui/material';

export const Plant = observer(() => {
  const { t } = useTranslation();
  const { plants } = rootStore.plantStore;
  const { getUser } = rootStore.authStore;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = getUser();
    if (!user) {
      setLoading(false);
      return;
    }
    findPlantsByUserId(user.userId);
    setLoading(false);
  }, [getUser]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <h1>{t('myPlants.title')} :</h1>
      <PlantCard plants={plants} />
    </>
  );
});
