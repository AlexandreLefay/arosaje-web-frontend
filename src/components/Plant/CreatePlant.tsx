import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import styles from './CreatePlant.module.scss';
import { createPlant } from '@api/Plant/PlantApi';
import { rootStore } from '@stores/global/RootStore';
import { PlantData } from '@stores/plant/PlantStore';

export const CreatePlant: React.FC = observer(() => {
  const [open, setOpen] = useState(false);
  const { userId } = rootStore.authStore;
  const [plantData, setPlantData] = useState<Partial<PlantData>>({
    name: '',
    species: '',
    careInstructions: '',
    userId: undefined // Définir userId comme undefined par défaut
  });

  useEffect(() => {
    if (userId !== null) {
      setPlantData((prev) => ({
        ...prev,
        userId: userId
      }));
    }
  }, [userId]);

  const handleClickOpen = () => {
    if (userId !== null) {
      setOpen(true);
    } else {
      console.error('User ID is not defined');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPlantData({
      ...plantData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    if (plantData.name && plantData.species && plantData.careInstructions && plantData.userId) {
      createPlant(plantData as PlantData)
        .then((newPlant) => {
          rootStore.plantStore.addPlant(newPlant);
          handleClose();
        })
        .catch((error) => {
          console.error('Error creating plant', error);
        });
    }
  };

  return (
    <div className={styles.container}>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajoutez une plante</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            value={plantData.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="species"
            label="Species"
            type="text"
            fullWidth
            variant="outlined"
            value={plantData.species}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="careInstructions"
            label="Care Instructions"
            type="text"
            fullWidth
            variant="outlined"
            value={plantData.careInstructions}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});
