import React, { useCallback, useState } from 'react';

export default (initialValue: any) => {
  const [value, setValue] = useState<any>(initialValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const eventTarget = e.target as HTMLInputElement;
    setValue(eventTarget.value);
  }, []);

  return [value, handler, setValue];
};
