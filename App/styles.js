import { useFonts } from 'expo-font';

const colors = {
    oppurple: '#00BFA6',
    opgreen: '#6259F5',
    opblack: '#3F3D56',
    // Add more colors as needed
};
  
const [fontsLoaded] = useFonts({
  'Italic': require('../assets/fonts/DMSans-Italic.ttf'),
  'Light': require('../assets/fonts/DMSans-Light.ttf'),
  'LightItalic': require('../assets/fonts/DMSans-LightItalic.ttf'),
  'Medium': require('../assets/fonts/DMSans-Medium.ttf'),
  'MediumItalic': require('../assets/fonts/DMSans-MediumItalic.ttf'),
  'Regular': require('../assets/fonts/DMSans-Regular.ttf'),
  'Bold': require('../assets/fonts/DMSans-SemiBold.ttf'),
  'BoldItalic': require('../assets/fonts/DMSans-SemiBoldItalic.ttf'),
});

const textStyles = {
    header: {
      fontSize: 30,
      fontFamily: fonts.Bold,
      color: colors.text,
    },
    paragraph: {
      fontSize: 16,
      fontFamily: fonts.Regular,
      color: colors.text,
    },
    // Define other text styles here
  };
  
  export { colors, fontsLoaded, textStyles };
  