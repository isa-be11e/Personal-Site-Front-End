const fontSize = {
  responsive: {
    large: { xs: 20, md: 30 },
    med: {xs: 15, md: 20 },
    small: {xs: 13, md: 18 },
    label: {xs: 10, md: 15 },
  },
};

const colourWheel = {
  teal: {
    light: 'rgb(140,210,210)',
    medium: 'rgb(0,120,120)',
    dark: 'rgb(0,50,50)',
    darkest: 'rgb(0,25,25)',
    grey: 'rgb(50,100,100)',
  },
  beige: {
    lightest: 'rgb(250, 245, 230)',
    light: 'rgb(240, 230, 210)',
    medium: 'rgb(230, 215, 190)',
    dark: 'rgb(220, 200, 170)',
    grey: 'rgb(200, 190, 190)',
  },
  brown: {
    lightest: 'rgb(80, 70, 70)',
    light: 'rgb(70, 60, 60)',
    medium: 'rgb(60, 50, 50)',
    dark: 'rgb(50, 40, 40)',
  },
};

const colours = {
  outline: colourWheel.teal.dark,
  primaryText: colourWheel.teal.dark,
  secondaryText: colourWheel.beige.lightest,
  appBar: colourWheel.teal.medium,
  background: colourWheel.teal.light,
  grey: colourWheel.teal.grey,
  buttonColour: colourWheel.beige.dark,
  secondaryBackground: colourWheel.beige.lightest,
  accordion: [
    colourWheel.beige.lightest,
    colourWheel.beige.light,
    colourWheel.beige.medium,
    colourWheel.beige.dark,
  ]
};
/*
const colours = {
  outline: colourWheel.teal.darkest,
  primaryText: colourWheel.beige.lightest,
  secondaryText: colourWheel.beige.lightest,
  appBar: colourWheel.teal.medium,
  background: colourWheel.teal.dark,
  grey: colourWheel.beige.grey,
  buttonColour: colourWheel.brown.dark,
  secondaryBackground: colourWheel.brown.lightest,
  accordion: [
    colourWheel.brown.lightest,
    colourWheel.brown.light,
    colourWheel.brown.medium,
    colourWheel.brown.dark,
  ]
};*/

const fontFamily = 'monospace';

export { fontSize, colours, fontFamily };