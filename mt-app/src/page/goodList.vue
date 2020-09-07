<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <my-crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <my-category />
        </el-row>
        <el-row>
          <my-list />
        </el-row>
      </el-col>
      <el-col :span="5">广告</el-col>
    </el-row>
  </div>
</template>

<script>
import MyCrumbs from "@/components/product/crumbs.vue";
import MyCategory from "@/components/product/category.vue"
import MyList from "@/components/product/list.vue"
export default {
  components: {
    MyCrumbs,
    MyCategory,
    MyList
  }
};
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
@import "@/assets/css/products/list.scss"
</style>