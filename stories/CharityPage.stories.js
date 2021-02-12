import CharityPage from '~/components/CharityPage'

export default {
  title: 'Layouts/CharityPage',
  component: CharityPage,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CharityPage },
  template: '<charity-page />',
})
export const Default = Template.bind({})
Default.args = {}
