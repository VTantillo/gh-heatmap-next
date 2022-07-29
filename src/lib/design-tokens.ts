// Screens
export const BREAKPOINTS = {
  xs: 390,
  sm: 550,
  md: 1100,
  lg: 1500,
  xl: 1920,
}

export const QUERIES = {
  lgAndDown: `(max-width: ${BREAKPOINTS.lg}px)`,
  mdAndDown: `(max-width: ${BREAKPOINTS.md}px)`,
  smAndDown: `(max-width: ${BREAKPOINTS.sm}px)`,
  xsAndDown: `(max-width: ${BREAKPOINTS.xs}px)`,
}

// Core tokens

export const COLORS = {
  ocean: 'hsl(207deg 100% 7%)',
  white: 'hsl(0deg 0% 100%)',
}

export const TYPOGRAPHY = {
  family: {
    sans: 'archivo',
  },
}
