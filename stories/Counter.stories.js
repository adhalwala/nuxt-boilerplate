import Counter from '~/components/Counter.vue'

export default {
  title: 'Example/Counter',
  component: Counter,
  // decorators: [
  //   () => ({
  //     template: '<v-app><v-main><story /></v-main></v-app>',
  //   }),
  // ],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Counter },
  template: '<counter v-bind="$props" />',
})

export const CounterPrimary = Template.bind({})
CounterPrimary.args = {
  number: '$44.72',
  description: 'Charities on Cause',
  bottomtext:
    'Average Donation Opportunity based on 20 leading store partners Average Order Value as at Q4 2020',
}
