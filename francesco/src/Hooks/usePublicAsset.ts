import { useMemo } from 'react';

/**
 * Hook per ottenere il percorso completo di un asset dalla cartella public
 * @param folder - La cartella all'interno di public (es: "Project-img" o "icons")
 * @param filename - Il nome del file con estensione (es: "image.png")
 * @returns - Il percorso completo dell'asset
 */
const usePublicAsset = (folder: string, filename: string): string => {
  return useMemo(() => {
    if (!folder || !filename) return '';
    // Utilizzo di import.meta.env per compatibilità con Vite
    return `${import.meta.env.BASE_URL}${folder}/${filename}`;
  }, [folder, filename]);
};

export default usePublicAsset;

