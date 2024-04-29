import { findExempleById, getAllExemple } from '@api/ExempleAPI';
import { exempleQKey } from '@stores/ReactQueryKEYS';
import { useQuery } from '@tanstack/react-query';

export const useExempleByIdQuery = (id, options) => {
  useQuery({
    ...options,
    queryKey: exempleQKey.detail(id),
    queryFn: () => findExempleById(id)
  });
};

export const useExempleQuery = (options) => {
  useQuery({
    ...options,
    queryKey: exempleQKey,
    queryFn: () => getAllExemple()
  });
};
