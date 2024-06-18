import { useEffect, useState } from 'react';
import { rootStore } from '@stores/global/RootStore';
import { PlantCard } from '@components/Plant/PlantCard';
import styles from './Plant.module.scss';
import { findPlantsByUserId } from '@api/Plant/PlantApi';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { CircularProgress } from '@mui/material';
import { CreatePlant } from '@components/Plant/CreatePlant';
import { PlantData } from '@stores/plant/PlantStore';

export const Plant = observer(() => {
  const { t } = useTranslation();
  const { plants, setPlants } = rootStore.plantStore;
  const { userId } = rootStore.authStore;
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [size] = useState(3);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [sortBy] = useState('name');

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }
    findPlantsByUserId(userId, page, size, sortDirection, sortBy)
      .then((data: PlantData[]) => {
        setPlants(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId, page, size, sortDirection, sortBy, setPlants]);

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
      <CreatePlant />
      <PlantCard
        plants={plants}
        page={page}
        sortDirection={sortDirection}
        sortBy={sortBy}
        setPage={setPage}
        setSortDirection={setSortDirection}
      />
    </>
  );
});
