import BrowseStorePage from '~/components/BrowseStorePage'

export default {
  title: 'Layouts/BrowseStorePage',
  component: BrowseStorePage,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BrowseStorePage },
  template: '<browse-store-page />',
})
export const Default = Template.bind({})
Default.args = {}
