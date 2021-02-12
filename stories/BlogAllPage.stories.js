import BlogAllPage from '~/components/BlogAllPage'

export default {
  title: 'Layouts/BlogAllPage',
  component: BlogAllPage,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BlogAllPage },
  template: '<blog-all-page />',
})
export const Default = Template.bind({})
Default.args = {}
