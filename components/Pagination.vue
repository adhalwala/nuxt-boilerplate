<template>
  <div class="c-pagination">
    <ul>
      <li class="ripple_c" v-ripple>
        <i class="mdi mdi-chevron-double-left"></i>
      </li>
      <li class="ripple_c" v-ripple>1</li>
      <li class="active">2</li>
      <li class="ripple_c" v-ripple>3</li>
      <li class="ripple_c" v-ripple>4</li>
      <li class="ripple_c" v-ripple>5</li>
      <li class="ripple_c" v-ripple>
        <i class="mdi mdi-chevron-double-right"></i>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.v-application .ripple_c {
  // color: #ffffff !important;
  caret-color: #0c1831 !important;
}
.c-pagination {
  ul {
    list-style: none;
    display: inline-flex;
    margin: 0px;
    li {
      box-sizing: border-box;
      height: 38px;
      width: 38px;
      border: 1px solid #f3f9ff;
      background-color: #ffffff;
      color: #0c1831;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 300;
      letter-spacing: 0.5px;
      line-height: 28px;
      margin-bottom: 0px;
      text-align: center;
      line-height: 38px;
      cursor: pointer;
      &:hover,
      &.active {
        background-color: #0c1831;
        color: #ffffff;
      }
    }
  }
}
</style>
<script>
export default {
  name: 'Pagination',
}
</script>
