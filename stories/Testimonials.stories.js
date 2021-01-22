import Testimonials from '~/components/Testimonials.vue'

export default {
  title: 'Components/Testimonials',
  component: Testimonials,
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
  components: { Testimonials },
  template: '<testimonials v-bind="$props" />',
})

export const Testimonial = Template.bind({})
Testimonial.args = {}
