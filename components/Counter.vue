<template>
  <v-main class="counter-wrape">
    <v-container>
      <v-row no-gutters style="flex-wrap: nowrap">
        <v-col class="flex-grow-1 text-center counter-text-wrapper">
          <v-card class="pa-2" dark>
            <h3>{{ number }}</h3>
            <span> {{ description }}</span>
          </v-card>
        </v-col>
      </v-row>
      <span class="counter-bottom-line"
        >Average Donation Opportunity based on 20 leading store partners Average
        Order Value as at Q4 2020.
      </span>
    </v-container>
  </v-main>
</template>

<script>
import '~/assets/counter.css'

export default {
  name: 'Counter',

  props: {
    number: String,
    description: String,
    bottomtext: String,
  },
}
</script>
