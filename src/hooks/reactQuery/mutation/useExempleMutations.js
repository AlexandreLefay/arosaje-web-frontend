import { createExemple, deleteExempleById, updateExemple } from '@api/ExempleAPI';
import { exempleQKey } from '@stores/ReactQueryKEYS';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateExempleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (exemple) => createExemple(exemple),
    onSuccess: (savedExemple) => {
      queryClient.setQueryData(exempleQKey.detail(savedExemple.id), savedExemple);
    }
  });
};

export const useUpdateCandidateMutation = (exempleId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updatedExemple) => updateExemple(exempleId, updatedExemple),
    onSuccess: (savedExemple) => {
      queryClient.setQueryData(exempleQKey.detail(exempleId), savedExemple);
    }
  });
};

export const useDeleteCandidateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteExempleById(id),
    onSuccess: (_, id) => {
      queryClient.removeQueries(exempleQKey.detail(id));
    }
  });
};
