<template>
  <div class="m-header-topbar m-header">
    <el-row>
      <el-col :span="10">
        <geo />
      </el-col>
      <el-col :span="14">
        <m-nav />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import geo from './geo'
import MNav from './nav'
export default {
  components: {
    geo,
    MNav
  }
}
</script>

<style lang="scss">
   @import '@/assets/css/public/header/topBar.scss'
</style>
