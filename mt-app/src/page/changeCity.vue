<template>
  <div class="page-changeCity">
    <el-row>
      <my-province />
    </el-row>
    <el-row>
      <my-hotcity :hotlist="hotcity" value="热门城市" />
    </el-row>
    <el-row>
      <my-hotcity :hotlist="recentvisit" value="最近访问" />
    </el-row>
    <el-row>
      <my-category />
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";
import MyProvince from "@/components/changecity/province.vue";
import MyHotcity from "@/components/changecity/hotCity.vue";
import MyCategory from "@/components/changecity/category.vue";
export default {
  data() {
    return {
      hotcity: [],
      recentvisit: []
    };
  },
  components: {
    MyProvince,
    MyHotcity,
    MyCategory
  },
  created() {
    api.getHotCity().then(res => {
      this.hotcity = res.data.data;
    });
    api.getvisitedCity().then(res => {
        this.recentvisit = res.data.data
    })
  }
};
</script>