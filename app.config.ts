export default defineAppConfig({
  ui: {
    container: {
      base: 'w-full max-w-(--ui-container) mx-auto p-6 bg-gray-700/40 backdrop-blur-sm border border-gray-700 rounded-lg mb-4',
    },
    colors: {
      primary: 'purple'
    },
    button: {
      slots: {
        base: 'cursor-pointer'
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: 'text-white'
        },
        {
          color: 'primary',
          variant: 'outline',
          class: 'text-white'
        },
        {
          color: 'neutral',
          variant: 'subtle',
          class: 'bg-gray-800/50 hover:bg-gray-700'
        },
      ],
    },
    select: {
      slots: {
        base: 'cursor-pointer',
        content: 'bg-gray-800/90 border border-gray-700',
        item: 'cursor-pointer hover:bg-gray-700 hover:text-purple-500 data-[state=checked]:text-purple-500 data-[highlighted]:bg-inherit data-[highlighted]:text-white'
      },
      variants: {
        variant: {
          outline: 'bg-transparent',
          subtle: 'bg-gray-800/50 hover:bg-gray-700'
        }
      }
    },
    tabs: {
      slots: {
        list: '!bg-gray-900/50 border border-gray-700',
        trigger: '!text-white data-[state=inactive]:!text-gray-400 cursor-pointer',
      },
    },
  },
  uiPro: {
    pageCard: {
      slots: {
        title: 'text-xl',
      },
      variants: {
        variant: {
          subtle: {
            root: 'bg-gray-700/40 backdrop-blur-sm border border-gray-700',
            description: 'text-gray-400',
          },
          outline: {
            root: 'bg-gray-900/50 border border-gray-700',
            description: 'text-gray-400',
          },
          soft: {
            root: 'border border-gray-700'
          }
        },
        to: {
          true: {
            root: 'hover:!bg-gray-700/40',
          }
        }
      },
    },
  }
})
