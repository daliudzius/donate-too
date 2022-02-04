import {extendTheme, theme as chakraTheme} from "@chakra-ui/react";
import {createBreakpoints} from "@chakra-ui/theme-tools";

const fonts = {...chakraTheme.fonts, body: "Inter", heading: "Inter"};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const overrides = {
  ...chakraTheme,
  breakpoints,
};

const customTheme = extendTheme({overrides});

export default customTheme;
