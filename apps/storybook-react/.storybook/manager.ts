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
          backgroundColor: '#e54b22',
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
    {
      tags: 'radix-ui',
      badge: {
        text: 'Radix UI',
        style: {
          backgroundColor: '#10b981',
          color: '#fff',
        },
        tooltip: 'This component needs React and Radix UI to work',
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
