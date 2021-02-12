import CCategory from '~/components/BrowseByCategory.vue'

export default {
  title: 'Components/BrowseByCategory',
  component: CCategory,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CCategory },
  template: '<c-category v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {}
