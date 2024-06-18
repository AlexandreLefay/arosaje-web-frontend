import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { updatePlant } from '@api/Plant/PlantApi';
import { rootStore } from '@stores/global/RootStore';
import { TNewPlant } from '@appTypes/plant/Plant';
import { PlantData } from '@stores/plant/PlantStore';

interface EditPlantDialogProps {
  open: boolean;
  onClose: () => void;
  plant: TNewPlant;
}

export const EditPlantDialog: React.FC<EditPlantDialogProps> = observer(({ open, onClose, plant }) => {
  const [plantData, setPlantData] = useState<Partial<TNewPlant>>({
    ...plant
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPlantData({
      ...plantData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    updatePlant(plantData as PlantData)
      .then((updatedPlant) => {
        // @ts-ignore
        rootStore.plantStore.setPlants(
          rootStore.plantStore.plants.map((p: PlantData) => (p.id === updatedPlant.id ? updatedPlant : p))
        );
        onClose();
      })
      .catch((error) => {
        console.error('Error updating plant', error);
      });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Modifier la plante</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Nom"
          type="text"
          fullWidth
          variant="outlined"
          value={plantData.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="species"
          label="Espèce"
          type="text"
          fullWidth
          variant="outlined"
          value={plantData.species}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="careInstructions"
          label="Instructions d'entretien"
          type="text"
          fullWidth
          variant="outlined"
          value={plantData.careInstructions}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Annuler
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Modifier
        </Button>
      </DialogActions>
    </Dialog>
  );
});
