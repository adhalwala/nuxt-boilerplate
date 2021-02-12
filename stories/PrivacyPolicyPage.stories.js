import PrivacyPolicyPage from '~/components/PrivacyPolicyPage'

export default {
  title: 'Layouts/PrivacyPolicyPage',
  component: PrivacyPolicyPage,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PrivacyPolicyPage },
  template: '<privacy-policy-page />',
})
export const Default = Template.bind({})
Default.args = {}
