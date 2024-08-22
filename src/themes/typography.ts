import { fontSize, colours, fontFamily } from './global';

const heavyFontWeight = 700;
const lightFontWeight = 550;

const pageTitle = {
  fontFamily,
  fontWeight: heavyFontWeight,
  color: colours.darkTeal,
  p: {xs: 5, md: 10},
  justifyContent: 'center',
  fontSize: fontSize.responsive.large,
};

const pageSubtitle = {
  fontFamily,
  fontWeight: heavyFontWeight,
  color: colours.darkTeal,
  fontSize: fontSize.responsive.med,
};

const darkTitle = {
  fontFamily,
  fontWeight: heavyFontWeight,
  color: colours.darkTeal,
};

const darkSubtitle = {
  fontFamily,
  fontWeight: lightFontWeight,
  color: colours.darkTeal,
  fontSize: fontSize.responsive.med,
};

const darkBody = {
  fontFamily,
  color: colours.darkTeal,
  fontSize: fontSize.responsive.small,
};

const lightTitle = {
  fontFamily,
  fontWeight: lightFontWeight,
  color: colours.lightBeige,
};

export { pageTitle, pageSubtitle, darkTitle, darkSubtitle, darkBody, lightTitle, };