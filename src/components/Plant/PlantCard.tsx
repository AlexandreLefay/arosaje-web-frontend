import {Avatar, Card, CardContent, CardHeader, CardMedia, Collapse, Grid, Typography} from '@mui/material';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {TNewPlant} from '@appTypes/plant/Plant';
import styles from './PlantCard.module.scss';
import {format} from 'date-fns';
import {useTranslation} from "react-i18next";

type PlantCardProps = {
    plants: TNewPlant[];
};

const arrayToDate = (dateArray: number[]) => {
    const [year, month, day, hour, minute, second] = dateArray;
    return new Date(year, month - 1, day, hour, minute, second);
};

export const PlantCard: React.FC<PlantCardProps> = observer(({plants}) => {
    const {t} = useTranslation();

    return (
        <Grid container spacing={2} className={styles.container}>
            {plants.map((plant) => (
                <Grid item xs={12} sm={6} md={4} key={plant.id} className={styles.gridItem}>
                    <Card className={styles.plantCard}>
                        <CardHeader
                            avatar={<Avatar className={styles.avatar} src={'/assets/menu/plant.png'}></Avatar>}
                            title={plant.name}
                            subheader={format(arrayToDate(plant.createdAt), 'yyyy-MM-dd HH:mm:ss')} // Formatage de la date
                            titleTypographyProps={{variant: 'h6', style: {fontWeight: 'bold'}}}
                        />
                        <CardMedia
                            className={styles.cardMedia}
                            component="img"
                            image={plant.imageUrl || '/assets/plant/plant-smile.png'}
                            alt={plant.name}
                        />
                        <CardContent>
                            <h4>{t("myPlants.caring")}</h4>
                            <Typography paragraph>{plant.careInstructions}</Typography>
                        </CardContent>
                        <Collapse timeout="auto" unmountOnExit></Collapse>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
});
