import HomeLaunchPage from '~/components/HomeLaunchPage'

export default {
  title: 'Layouts/HomeLaunchPage',
  component: HomeLaunchPage,
  // decorators: [
  //   () => ({
  //     template: '<v-app><v-main><story /></v-main></v-app>',
  //   }),
  // ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HomeLaunchPage },
  template: '<home-launch-page />',
})
export const Default = Template.bind({})
Default.args = {}
