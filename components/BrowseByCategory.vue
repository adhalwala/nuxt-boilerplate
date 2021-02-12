<template>
  <div class="c-browse-category">
    <v-container>
      <v-row>
        <v-col sm="3" class="popular_block">
          <ul>
            <li>All</li>
            <li>
              Most Popular
              <v-rating
                class="popular-rating"
                length="5"
                size="20"
                :readonly="true"
                :value="5"
              ></v-rating>
            </li>
            <li>New Store <i class="mdi mdi-heart"></i></li>
          </ul>
        </v-col>
        <v-col sm="9">
          <ul class="category_filter">
            <li class="">Animals</li>
            <li class="">Arts and Culture</li>
            <li class="">Children and Youth Development</li>
            <li class="">Arts and Culture</li>
            <li class="">Children and Youth Development</li>
            <li class="">Children and Youth Development</li>
            <li class="">Arts and Culture</li>
            <li class="">Children and Youth Development</li>
            <li class="">Children and Youth Development</li>
            <li class="">Arts and Culture</li>
            <li class="">Children and Youth Development</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
.c-browse-category .v-icon.v-icon.v-icon--link {
  padding: 0px;
  margin-left: 0px;
  color: #a5d6fe !important;
}
</style>
<style lang="scss" scoped>
.c-browse-category {
  background-color: #0c1831;
  padding: 40px 0 30px 0;
  .popular_block {
    ul {
      padding: 0px !important;
      list-style: none;
      li {
        color: #a5d6fe;
        font-family: Roboto;
        font-size: 18px;
        letter-spacing: 0.56px;
        line-height: 28px;
        margin-bottom: 20px;
        .popular-rating {
          button {
            padding: 0px;
          }
        }
      }
    }
  }
  .category_filter {
    list-style: none;
    padding: 0px;
    margin: 0px;
    li {
      color: #ffffff;
      font-family: Roboto;
      font-size: 18px;
      font-weight: 300;
      letter-spacing: 0.56px;
      line-height: 28px;
      width: 33.33%;
      float: left;
      display: inline-block;
      padding: 0 12px;
      margin-bottom: 15px;
    }
  }
}
</style>
<script>
export default {
  name: 'BrowseByCategory',
}
</script>
