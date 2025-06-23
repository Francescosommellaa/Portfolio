import React from "react";

/**
 * Funzione per generare un titolo formattato con le classi corrette.
 * Non è un hook, può essere chiamata ovunque.
 */
export const formatTitle = (
  title: string,
  Size: string,
  additionalClass = ""
) => {
  const words = title.trim().split(/\s+/);

  return (
    <h1 className={`title h1-${Size} ${additionalClass}`}>
      {words.map((word, index) => {
        const firstLetter = word.charAt(0);
        const rest = word.slice(1);
        return (
          <React.Fragment key={index}>
            <span className={`h1-script-${Size}`}>{firstLetter}</span>
            {rest}{" "}
          </React.Fragment>
        );
      })}
    </h1>
  );
};
