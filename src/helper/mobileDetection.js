import { useMediaQuery } from 'react-responsive';

const IsMobile = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    return isMobile;
};

export default IsMobile;



// const IsMobileOrTablet = () => {
    // const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    // const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });

    // return (isMobile || isTablet) ? true : false;
// };

// export default IsMobileOrTablet;