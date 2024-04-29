import { useEffect, useState } from 'react';

/**
 * Set the value to the state only when the user doesn't update the value in the delay provided
 * @param value the value provided by the user
 * @param delay the delay used, after the user stop to update it, to set the value
 */
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay ?? 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
