<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <my-menu />
      </el-col>
      <el-col :span="19">
        <my-life />
      </el-col>
    </el-row>
    <el-row>
      <my-container :nav="iStyle" />
      <my-container :nav="recomment" />
    </el-row>
  </div>
</template>

<script>
import MyMenu from "@/components/index/menu.vue";
import MyLife from "@/components/index/life.vue";
import myContainer from "@/components/index/container.vue";
export default {
  data() {
    return {
      iStyle: {
                class: 'istyle',
                title: '有格调',
                list: [{
                    text: '全部',
                    tab: 'all'
                }, {
                    text: '约会聚餐',
                    tab: 'food'
                }, {
                    text: '丽人SPA',
                    tab: 'spa'
                }, {
                    text: '电影演出',
                    tab: 'movie'
                }, {
                    text: '品质出游',
                    tab: 'travel'
                }]
            },
            recomment: {
                class: 'youhui',
                title: '很优惠',
                list: [{
                    text: '全部',
                    tab: 'all'
                }, {
                    text: '美食',
                    tab: 'food'
                }, {
                    text: '休闲',
                    tab: 'xiuxian'
                }]
            }
    };
  },
  components: {
    MyMenu,
    MyLife,
    myContainer
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
