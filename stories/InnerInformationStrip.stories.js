import InnerInformationStrip from '~/components/InnerInformationStrip.vue'

export default {
  title: 'Components/InformationStrip',
  component: InnerInformationStrip,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InnerInformationStrip },
  template: '<inner-information-strip v-bind="$props" />',
})

export const InnerPageStrip = Template.bind({})
InnerPageStrip.args = {
  infotext: 'ABN 12 345 678 901',
  weburl: 'www.redcross.org.au',
  hasUrl: true,
  isRate: true,
}
