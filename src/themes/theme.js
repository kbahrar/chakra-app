import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant
} from "@chakra-ui/react";

import { mode } from "@chakra-ui/theme-tools";

const primaryVariant = {
  primary: (props) => ({
    rounded: "none",
    ...brandRing,
    color: mode("gray.50", "gray.900")(props),
    backgroundColor: mode("brand.500", "brand.200")(props),
    _hover: {
      backgroundColor: mode("brand.600", "brand.300")
    },
    _active: {
      backgroundColor: mode("brand.700", "brand.400")(props)
    }
  })
};

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: "brand.500"
  }
};

const InputStyle = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.500"
        }
      }
    }
  },
  sizes: {
    md: {
      field: {
        borderRadius: "none"
      }
    }
  }
};

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#f5fee5",
        100: "#e1fbb2",
        200: "#cdf781",
        300: "#b8ee56",
        400: "#a2e032",
        500: "#8ac919",
        600: "#71ab09",
        700: "#578602",
        800: "#3c5e00",
        900: "#203300"
      }
    },
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`
    },
    components: {
      Button: {
        variants: {
          ...primaryVariant
        }
      },
      Flex: {
        variants: {
          ...primaryVariant
        }
      },
      Input: { ...InputStyle },
      Select: { ...InputStyle },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: "none",
            ...brandRing
          }
        }
      }
    }
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"]
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"]
  })
);

export default theme;
