import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { PlantCard } from '@components/Plant/PlantCard';
import { useEffect, useState } from 'react';
import { findPlantsByUserId } from '@api/Plant/Plant';
import { useAuthStore } from '@hooks/contexts/useStore';
import { CircularProgress } from '@mui/material';
import styles from './Plant.module.scss';

export const Plant = observer(() => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getUser } = useAuthStore();

  useEffect(() => {
    const fetchPlants = async () => {
      const user = getUser();
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const data = await findPlantsByUserId(user.userId);
        const plantsWithImageUrls = data.map((plant: any) => {
          const imageBlob = plant.photos && plant.photos[0] ? plant.photos[0].imageBlob : null;
          return {
            ...plant,
            imageUrl: imageBlob ? `data:image/jpeg;base64,${imageBlob}` : null
          };
        });
        setPlants(plantsWithImageUrls);
      } catch (error) {
        setError('Failed to fetch plants');
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, [getUser]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <PlantCard plants={plants} />
    </>
  );
});
