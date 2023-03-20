import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={`${process.env.REACT_APP_SERVER_URL}/assets/advert.jpeg`}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>ClaraCosmetics</Typography>
        <Typography color={medium}>ClaraCosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        You'll love our trendy selection of chic and essential Makeup.
        Find professional quality Makeup at amazing prices, all right here!
        Experience a new look. More bestselling products.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;