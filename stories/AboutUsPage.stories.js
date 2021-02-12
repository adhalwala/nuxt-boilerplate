import AboutUsPage from '~/components/AboutUsPage'

export default {
  title: 'Layouts/AboutUsPage',
  component: AboutUsPage,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AboutUsPage },
  template: '<about-us-page />',
})
export const Default = Template.bind({})
Default.args = {}
