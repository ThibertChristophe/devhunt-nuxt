export default defineAppConfig({
  ui: {
    container: {
      base: 'w-full max-w-(--ui-container) mx-auto sm:p-6 lg:p-8 bg-gray-700/40 backdrop-blur-sm border border-gray-700 rounded-lg mb-4',
    },
    colors: {
      primary: 'purple',
      neutral: 'neutral'
    },
    button: {
      slots: {
        base:
          'cursor-pointer text-white'
      },
    }
  }
})
