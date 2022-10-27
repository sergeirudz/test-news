import { memo } from 'react';
import NextLink from 'next/link';
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

const Logo: React.FC = ({ sx }: BoxProps) => {
  const theme = useTheme();

  return (
    <NextLink href="https://erply.com/" passHref>
      <Box
        sx={{
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        <svg
          width="117"
          height="31"
          viewBox="0 0 117 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M110.906 0L105.205 9.81155L99.4671 0H93.3764L102.155 15.0588L102.128 15.1048V25.5788L102.122 25.5903L85.4926 25.5891V0H80.1187V30.9987H107.497V16.3543L117.001 0H110.906Z"
            fill="#F4F9FF"
          />
          <path
            d="M71.8811 0.969389C70.1368 0.2967 67.9867 0.00383663 65.3883 0H55.3506V25.5891H48.7911L44.3547 16.9745C45.95 16.3095 47.2665 15.4002 48.2311 14.2173C49.4462 12.7402 50.0832 10.9498 50.0794 9.03911C50.0807 7.29088 49.5515 5.62323 48.5342 4.18065C47.5144 2.72273 46.0797 1.63313 44.3522 0.968111C42.6054 0.2967 40.4578 0.00255776 37.8594 0H27.8217V23.406V25.5891H10.5566L17.8315 15.4002L14.4831 10.7694L14.4574 10.8052L14.4831 10.7694L10.5746 5.41349H19.0222L22.8986 0.00127888H0L3.91105 5.41349L11.1539 15.4194L0 31H6.69566H27.8243H33.2137V18.1179H38.9422L42.843 25.5891L45.6661 31H55.3532L60.7439 25.6505V18.1191H64.9773C69.7823 18.1191 71.8862 16.9758 71.8862 16.9758C73.484 16.3108 74.798 15.4015 75.7626 14.2186C76.9789 12.7427 77.6147 10.951 77.6095 9.04167C77.6134 7.29344 77.0842 5.62578 76.0644 4.18321C75.0459 2.72401 73.6112 1.63441 71.8811 0.969389ZM43.7228 11.139C43.3156 11.7222 42.7826 12.2734 41.9593 12.5522C40.6274 12.9972 39.307 13.0676 37.9738 13.0676H33.2137V5.3764H38.9897C41.0409 5.3764 42.3652 5.52731 43.1281 6.21023C43.972 6.97628 44.3342 7.77558 44.3509 8.98156C44.3432 9.85631 44.1364 10.5316 43.7228 11.139ZM71.2517 11.139C70.8458 11.7222 70.3102 12.2734 69.4882 12.5522C68.1588 12.9972 66.8384 13.0676 65.5014 13.0676H60.7439V5.3764H66.5173C68.5711 5.3764 69.8941 5.52731 70.6557 6.21023C71.5009 6.97628 71.8631 7.77558 71.8798 8.98284C71.8733 9.85631 71.6666 10.5316 71.2517 11.139Z"
            fill="#F4F9FF"
          />
        </svg>
      </Box>
    </NextLink>
  );
};

export default memo(Logo);