import ExploreButton from '~/components/ExploreButton.vue'

export default {
  title: 'Example/TextButton',
  component: ExploreButton,
  // decorators: [
  //   () => ({
  //     template: '<v-app><v-main><story /></v-main></v-app>',
  //   }),
  // ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ExploreButton },
  template: '<explore-button v-bind="$props" />',
})

export const Ebutton = Template.bind({})
Ebutton.args = {
  label: 'Explore Button',
}
