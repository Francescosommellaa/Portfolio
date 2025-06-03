import { useMediaQuery } from "react-responsive";

export const useSize = () => {
    const isMobile = useMediaQuery({ maxWidth: 828 });
    const isTablet = useMediaQuery({ minWidth: 829, maxWidth: 1348 });

    const Size = isMobile ? "S" : isTablet ? "M" : "L";

    return Size;
};