import "../src/styles/build.css"
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import "../src/index.css";

const MY_VIEWPORTS = {
  FEMDESKTOP: {
    name: "FEM - 1440p",
    styles: {
      width: "1440px",
      height: "800px"
    },
    type: "Desktop"
  },
  FEMMOBILE: {
    name: "FEM - 375px",
    styles: {
      width: "375px",
      height: "667px"
    },
    type: "mobile"
  }
}

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: { ...MY_VIEWPORTS, ...INITIAL_VIEWPORTS }
    }
  },
};

export default preview;
