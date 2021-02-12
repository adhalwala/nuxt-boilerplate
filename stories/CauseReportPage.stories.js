import CauseReportPage from '~/components/CauseReportPage'

export default {
  title: 'Layouts/CauseReportPage',
  component: CauseReportPage,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CauseReportPage },
  template: '<cause-report-page />',
})
export const Default = Template.bind({})
Default.args = {}
