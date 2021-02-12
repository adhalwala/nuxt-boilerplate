import BlogPage from '~/components/BlogPage'

export default {
  title: 'Layouts/BlogPage',
  component: BlogPage,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BlogPage },
  template: '<blog-page />',
})
export const Default = Template.bind({})
Default.args = {}
