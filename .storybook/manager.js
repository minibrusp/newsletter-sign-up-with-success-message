import { addons } from '@storybook/manager-api';
import myTheme from './myTheme';

addons.setConfig({
  showNav: true,
  theme: myTheme,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  showPanel: true,
  panelPosition: right,
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  initialActive: 'sidebar',
  selectedPanel: 'sidebar',
  
});