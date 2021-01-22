import ModalPopup from '~/components/ModalPopup.vue'
import ModalSuccess from '~/components/SuccessMessage.vue'

export default {
  title: 'Components/Modal Popup',
  component: ModalPopup,
  ModalSuccess,
  // decorators: [
  //   () => ({
  //     template: '<v-app><v-main><story /></v-main></v-app>',
  //   }),
  // ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ModalPopup },
  template: '<modal-popup v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  message: 'Be the first one to know when the Cause Button launches!',
  label: "Email me when it's ready",
  icon: 'mdi mdi-heart',
}

const SuccessPopup = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ModalSuccess },
  template: '<modal-success v-bind="$props" />',
})

export const SuccessMessage = SuccessPopup.bind({})
SuccessMessage.args = {
  message: 'Big success message!',
  label: 'Email added!',
  icon: 'mdi mdi-heart',
}
