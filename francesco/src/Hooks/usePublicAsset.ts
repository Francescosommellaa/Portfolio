import { useMemo } from 'react';

const usePublicAsset = (folder: string, filename: string): string => {
  return useMemo(() => {
    if (!folder || !filename) return '';
    const base = import.meta.env.BASE_URL || '/';
    return `${base}assets/${folder}/${filename}`;
  }, [folder, filename]);
};

export default usePublicAsset;

