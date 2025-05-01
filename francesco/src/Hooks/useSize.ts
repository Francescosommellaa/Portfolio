import { useMediaQuery } from "react-responsive";

export const useSize = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const Size = isMobile ? "S" : isTablet ? "M" : "L";

    return Size;
};