import MyButton from '~/components/Button.vue'
import ExploreButton from '~/components/ExploreButton.vue'

export default {
  title: 'Components/Buttons',
  component: MyButton,
  ExploreButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
  // decorators: [
  //   () => ({
  //     template: '<v-app><v-main><story /></v-main></v-app>',
  //   }),
  // ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button v-bind="$props" />',
})

export const PrimaryPlusIcon = Template.bind({})
PrimaryPlusIcon.args = {
  label: 'Add the button to chrome',
  icon: 'mdi mdi-heart',
}

const Textbutton = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ExploreButton },
  template: '<explore-button v-bind="$props" />',
})

export const TextButton = Textbutton.bind({})
TextButton.args = {
  label: 'Explore Button',
}
