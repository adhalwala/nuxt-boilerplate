<template>
  <v-col class="flex-grow-1 text-center counter-wrape counter-text-wrapper">
    <v-card class="pa-2" dark>
      <h3>{{ number }}</h3>
      <span> {{ description }}</span>
    </v-card>
  </v-col>
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
