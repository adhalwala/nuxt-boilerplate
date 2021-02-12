import Pagination from '~/components/Pagination.vue'

export default {
  title: 'Components/Pagination',
  component: Pagination,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Pagination },
  template: '<pagination v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {}
