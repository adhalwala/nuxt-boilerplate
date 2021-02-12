<template>
  <div class="c-accordion-wrapper">
    <v-expansion-panels accordion :flat="true">
      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate>
          {{ number }}. {{ title }}
          <template v-slot:actions>
            <v-icon> mdi-plus </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ description }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<style lang="scss" scoped>
.c-accordion-wrapper {
  .v-expansion-panel {
    box-sizing: border-box;
    border: 1px solid #3c76a6;
    border-radius: 3px;
    background-color: #ffffff;
    margin-bottom: 30px;
  }
  .v-expansion-panel-header {
    color: #0c1831;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 28px;
    &--active {
      color: #3c76a6;
      .mdi-plus:before {
        content: '\F0374';
      }
    }
    &__icon {
      .v-icon {
        color: #3c76a6 !important;
      }
    }
  }
}
</style>
<script>
export default {
  name: 'CAccordion',
  props: {
    title: {
      default: '',
      type: String,
    },
    number: {
      default: '',
      type: String,
    },
    description: {
      default: '',
      type: String,
    },
  },
}
</script>
