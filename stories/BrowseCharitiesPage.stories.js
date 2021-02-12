import BrowseCharitiesPage from '~/components/BrowseCharitiesPage'

export default {
  title: 'Layouts/BrowseCharitiesPage',
  component: BrowseCharitiesPage,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BrowseCharitiesPage },
  template: '<browse-charities-page />',
})
export const Default = Template.bind({})
Default.args = {}
