import CAccordion from '~/components/Accordion.vue'

export default {
  title: 'Components/Accordion',
  component: CAccordion,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CAccordion },
  template: '<c-accordion v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {}
