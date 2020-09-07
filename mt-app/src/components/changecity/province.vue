<template>
  <div>
    <span class="name">按省份选择:</span>
    <my-select
      :list="provinceList"
      :value="province"
      title="省份"
      :showWarpperActive="provinceActive"
      @chang_active="changeProvincActive"
      @change="changeprovince"
       className="province"
    />
    <my-select
      :list="cityList"
      :value="city"
      title="城市"
      :showWarpperActive="cityActive"
      @chang_active="changeCityActive"
      @change="changecity"
      :disable="cityDisable"
      className="city"
    />
    <span>直接搜索：</span>
    <el-select
      v-model="selectWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in selectCity" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import api from "@/api/index.js";
import MySelect from "./select";
export default {
  data() {
    return {
      provinceList: [],
      cityList: [],
      province: "省份",
      city: "城市",
      provinceActive: false,
      cityActive: false,
      loading: false,
      selectWord: "",
      selectCity: ["青岛", "济南", "威海", "潍坊", "德州"],
      cityDisable:true
    };
  },
  created() {
    api.getProvinceList().then(res => {
      this.provinceList = res.data.data.map((item) => {
        item.name = item.provinceName
       return item
      })

    });
  },

  components: {
    MySelect
  },
  methods: {
    changeProvincActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeprovince(item) {
      this.cityDisable = false;
       this.cityList = item.cityInfoList
      this.province = item.name;
    },
    changecity(item) {
      this.city = item.name;
       this.$store.dispatch('setPosition', item);
       this.$router.push({name: 'index'})
    },
    remoteMethod(e) {
      console.log(e); //这里输出的是在文本框输入的内容，需要传给后台，然后返回数据
      this.loading = true;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>