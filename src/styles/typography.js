export const fonts = {
  primary: `"Source Sans Pro", sans-serif, "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue"`,
};

export const typography = {
  semibold: {
    xs: `
    font-size: 14px;
    line-height: 17px;
    `,
    sm: `
    font-size: 16px;
    line-height: 20px;
    `,
    md: `
    font-size: 18px;
    line-height: 23px;
    `,
    lg: `
    font-size: 22px;
    line-height: 27.65px;
    `,
    xl: `
    font-size: 28px;
    line-height: 35.2px;
    `,
  },
  regular: {
    xs: `
    font-size: 14px;
    line-height: 17px;
    `,
    sm: `
    font-size: 16px;
    line-height: 20px;
    `,
    md: `
    font-size: 18px;
    line-height: 23px;
    `,
    lg: `
    font-size: 22px;
    line-height: 27.65px;
    `,
    xl: `
    font-size: 28px;
    line-height: 35px;
    `,
  },
};

for (const size in typography.regular) {
  typography.regular[size] += `
  font-family: ${fonts.primary};
  font-weight: 400;
  `;
}

for (const size in typography.semibold) {
  typography.semibold[size] += `
  font-family: ${fonts.primary};
  font-weight: 600;
  `;
}