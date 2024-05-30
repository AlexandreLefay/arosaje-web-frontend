import { Avatar, Card, CardContent, CardHeader, CardMedia, Collapse, Grid, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { TNewPlant } from '@appTypes/plant/Plant';
import styles from './PlantCard.module.scss';

type PlantCardProps = {
  plants: TNewPlant[];
};

export const PlantCard: React.FC<PlantCardProps> = observer(({ plants }) => {
  return (
    <Grid container spacing={3} className={styles.container}>
      {plants.map((plant) => (
        <Grid item xs={12} sm={6} md={4} key={plant.id}>
          <Card className={styles.plantCard}>
            <CardHeader
              avatar={<Avatar className={styles.avatar} aria-label="plant" src={'/assets/menu/plant.png'}></Avatar>}
              title={plant.name}
              subheader={plant.createdAt}
            />
            <CardMedia className={styles.cardMedia} component="img" image={plant.imageUrl} alt={plant.name} />
            <CardContent>
              <Typography paragraph>Entretien :</Typography>
              <Typography paragraph>{plant.careInstructions}</Typography>
            </CardContent>
            <Collapse timeout="auto" unmountOnExit></Collapse>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
});
