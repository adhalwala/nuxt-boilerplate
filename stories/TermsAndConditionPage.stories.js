import TermsAndConditionPage from '~/components/TermsAndConditionPage'

export default {
  title: 'Layouts/TermsAndConditionPage',
  component: TermsAndConditionPage,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TermsAndConditionPage },
  template: '<terms-and-condition-page />',
})
export const Default = Template.bind({})
Default.args = {}
