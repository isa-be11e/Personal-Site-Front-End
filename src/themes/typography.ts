import { fontSize, colours, fontFamily } from './global';

const pageTitle = {
  fontFamily,
  fontWeight: 'bold',
  color: colours.primaryText,
  p: {xs: 5, md: 10},
  justifyContent: 'center',
  fontSize: fontSize.responsive.large,
};

const pageSubtitle = {
  fontFamily,
  fontWeight: 'bold',
  color: colours.primaryText,
  fontSize: fontSize.responsive.med,
};

const darkTitle = {
  fontFamily,
  fontWeight: 'bold',
  color: colours.primaryText,
  fontSize: fontSize.responsive.large,
};

const darkSubtitle = {
  fontFamily,
  fontWeight: 'bold',
  color: colours.primaryText,
  fontSize: fontSize.responsive.med,
};

const darkBody = {
  fontFamily,
  color: colours.primaryText,
  fontSize: fontSize.responsive.small,
};

const darkLabel = {
  fontFamily,
  color: colours.primaryText,
  fontSize: fontSize.responsive.label,
};

const lightTitle = {
  fontFamily,
  fontWeight: 'bold',
  color: colours.secondaryText,
};

export { pageTitle, pageSubtitle, darkTitle, darkSubtitle, darkBody, darkLabel, lightTitle, };