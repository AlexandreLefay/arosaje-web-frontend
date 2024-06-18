import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { TNewPlant } from '@appTypes/plant/Plant';
import styles from './PlantCard.module.scss';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { deletePlant } from '@api/Plant/PlantApi';
import { EditPlantDialog } from './EditPlantDialog';

type PlantCardProps = {
  userId?: number;
  plants: TNewPlant[];
  page: number;
  size?: number;
  sortDirection: 'asc' | 'desc';
  sortBy: string;
  setPage: (page: number) => void;
  setSortDirection: (direction: 'asc' | 'desc') => void;
  // setSortBy: (sortBy: string) => void;
};

const arrayToDate = (dateArray: number[]) => {
  const [year, month, day, hour, minute, second] = dateArray;
  return new Date(year, month - 1, day, hour, minute, second);
};

export const PlantCard: React.FC<PlantCardProps> = observer(
  ({ plants, page, sortDirection, setPage, setSortDirection }) => {
    const { t } = useTranslation();
    const [editOpen, setEditOpen] = useState(false);
    const [selectedPlant, setSelectedPlant] = useState<TNewPlant | null>(null);

    const handleDelete = (id: number) => {
      deletePlant(id).catch((error) => {
        console.error('Error deleting plant', error);
      });
    };

    const handleEditClick = (plant: TNewPlant) => {
      setSelectedPlant(plant);
      setEditOpen(true);
    };

    const handleEditClose = () => {
      setEditOpen(false);
      setSelectedPlant(null);
    };

    const handleSortChange = (event: SelectChangeEvent<'asc' | 'desc'>) => {
      setSortDirection(event.target.value as 'asc' | 'desc');
    };

    const handlePrevPage = () => {
      if (page > 0) {
        setPage(page - 1);
      }
    };

    const handleNextPage = () => {
      setPage(page + 1);
    };

    return (
      <>
        <div className={styles.controls}>
          <FormControl variant="outlined" className={styles.sortControl}>
            <InputLabel>Sort By</InputLabel>
            <Select value={sortDirection} onChange={handleSortChange} label="Sort By">
              <MenuItem value="asc">Asc</MenuItem>
              <MenuItem value="desc">Desc</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Grid container spacing={2} className={styles.container}>
          {plants.map((plant) => (
            <Grid item xs={12} sm={6} md={4} key={plant.id} className={styles.gridItem}>
              <Card className={styles.plantCard}>
                <CardHeader
                  avatar={<Avatar className={styles.avatar} src={'/assets/menu/plant.png'}></Avatar>}
                  action={
                    <>
                      <IconButton onClick={() => handleEditClick(plant)} aria-label="edit" color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(plant.id)} aria-label="delete" color="error">
                        <CloseIcon />
                      </IconButton>
                    </>
                  }
                  title={plant.name}
                  subheader={format(arrayToDate(plant.createdAt), 'yyyy-MM-dd HH:mm:ss')}
                  titleTypographyProps={{ variant: 'h6', style: { fontWeight: 'bold' } }}
                />
                <CardMedia
                  className={styles.cardMedia}
                  component="img"
                  image={plant.imageUrl || '/assets/plant/plant-smile.png'}
                  alt={plant.name}
                />
                <CardContent>
                  <h4>{t('myPlants.caring')}</h4>
                  <Typography paragraph>{plant.careInstructions}</Typography>
                </CardContent>
                <Collapse timeout="auto" unmountOnExit></Collapse>
              </Card>
            </Grid>
          ))}
        </Grid>
        {selectedPlant && <EditPlantDialog open={editOpen} onClose={handleEditClose} plant={selectedPlant} />}
        <div className={styles.paginationControls}>
          <Button onClick={handlePrevPage} disabled={page === 0}>
            Prev
          </Button>
          <Button onClick={handleNextPage}>Next</Button>
        </div>
      </>
    );
  }
);
