/*
 * More info here: http://www.material-ui.com/#/customization/themes
*/

import {
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  darkBlack,
  fullBlack,
} from 'material-ui/styles/colors';

import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#21412a',
    primary2Color: '#21412a',
    primary3Color: grey400,
    accent1Color: '#ffb41f',
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: '#21412a',
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};
