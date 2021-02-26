<template>
  <div class="text-center c-primary-btn">
    <v-btn
      class="primary-theme button--ripple"
      :class="size"
      :rounded="true"
      v-ripple="{ class: 'ripple-class' }"
      ><i style="" class="mr-3 ml-n2" :class="icon"></i>
      {{ label }}
    </v-btn>
  </div>
</template>
<style>
.c-primary-btn .primary-theme.small {
  color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.4px;
  line-height: 16px;
  height: 34px !important;
}
.c-primary-btn .primary-theme.small i {
  font-size: 20px !important;
  margin-right: 10px !important;
}
.ripple-class {
  color: #2d597d !important;
  caret-color: #2d597d !important;
}
</style>
<style lang="scss" scoped>
.c-primary-btn {
  position: relative;
  z-index: 1;
}
.banner-btn {
  i {
    color: #ffffff !important;
    margin-right: 5px;
    // left: -10px;
    position: relative;
    font-size: 26px;
  }
}
.c-primary-btn {
  i {
    font-size: 26px;
  }
}
</style>
<script>
import '~/assets/button.css'
export default {
  name: 'MyButton',
  data() {
    return {
      ripple: [
        {
          rippleOptions: {
            time: 1.2,
            ease: 'linear',
            color: 'rgb(102, 148, 177)',
            startingOpacity: 1,
          },
        },
      ],
    }
  },
  props: {
    label: {
      default: '',
      type: String,
    },
    icon: {
      default: '',
      type: String,
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large'].includes(value)
      },
    },
    backgroundColor: {
      type: String,
      default: '',
    },
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size}`]: true,
      }
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      }
    },
  },

  methods: {
    onClick() {
      this.$emit('onClick')
    },
  },
}
</script>
