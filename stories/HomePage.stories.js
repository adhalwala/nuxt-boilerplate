import HomePage from '~/components/HomePage'

export default {
  title: 'Layouts/HomePage',
  component: HomePage,
  // decorators: [
  //   () => ({
  //     template: '<v-app><v-main><story /></v-main></v-app>',
  //   }),
  // ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HomePage },
  template: '<home-page />',
})
export const Default = Template.bind({})
Default.args = {}
