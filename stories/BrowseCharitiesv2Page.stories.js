import BrowseCharitiesv2Page from '~/components/BrowseCharitiesv2Page'

export default {
  title: 'Layouts/BrowseCharitiesv2Page',
  component: BrowseCharitiesv2Page,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BrowseCharitiesv2Page },
  template: '<browse-charitiesv2-page />',
})
export const Default = Template.bind({})
Default.args = {}
