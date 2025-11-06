import { addons } from 'storybook/manager-api'

import {
  defaultConfig,
  type TagBadgeParameters,
} from 'storybook-addon-tag-badges/manager-helpers'

addons.setConfig({
  tagBadges: [
    {
      tags: 'native',
      badge: {
        text: 'Native',
        style: {
          backgroundColor: '#4F47E6',
          color: '#fff',
        },
        tooltip: 'This component can be used in native HTML environments',
      },
      display: {
        sidebar: [
          {
            type: 'component',
            skipInherited: true,
          },
        ],
        toolbar: false,
        mdx: true,
      },
    },
    ...defaultConfig,
  ] satisfies TagBadgeParameters,
})
