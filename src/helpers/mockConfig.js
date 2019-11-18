import TYPES from './constants/TYPES';

const mockConfig = {
    metadata: {
      title: 'Mock wayfinder config'
    },
    slides: [
      {
        index: 0,
        type: TYPES.PROMPT,
        components: {
          primaryText: 'This is the first prompt?',
          secondaryText: 'This is some clarifying text. It should help you get the general idea in one or two brief sentences.',
          buttonList: [
            {
              label: 'To result',
              toIndex: 1
            }
          ]
        }
      },
      {
        index: 1,
        type: TYPES.RESULT,
        components: {
          primaryText: 'This is the result.',
          secondaryText: 'This should help clarify further actions of this result, or clarify the purpose of this screen. You should also understand the general decision path that brought you here.',
          resources: [
            {
              label: 'Google it, bruh!',
              href: 'https://google.com'
            }
          ]
        }
      }
    ]
  }

  export default mockConfig;