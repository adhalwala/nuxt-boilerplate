import ForCharityPage from '~/components/ForCharityPage'

export default {
  title: 'Layouts/ForCharityPage',
  component: ForCharityPage,
  // decorators: [
  //   () => ({
  //     template: '<v-app><v-main><story /></v-main></v-app>',
  //   }),
  // ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ForCharityPage },
  template: '<for-charity-page />',
})
export const Default = Template.bind({})
Default.args = {}
