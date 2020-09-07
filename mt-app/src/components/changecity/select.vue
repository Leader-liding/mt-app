<template>
  <div class="choose-wrap" @click="showWrapper" v-document-click="documentClick">
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true,'active':showWarpperActive}">
        <h2>{{title}}</h2>
        <div :class="['wrapper',className]">
          <div class="col" v-for="(listData,index) in redendList" :key=index>
            <span
              :class="{'mt-item':true,'active':item == value}"
              v-for="(item,index) in listData"
              :key="index"
              @click="change(item)"
            >{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["list", "value", "title", "showWarpperActive","disable","className"],
  computed: {
    redendList: function() {
      let col = Math.ceil(this.list.length / 12);
      let rendList = [];
      for (let i = 0; i < col; i++) {
        let data = this.list.slice(i * 12, i * 12 + 12);
        rendList.push(data)
      }
      return rendList
    }
  },
  methods: {
    showWrapper(e) {
      e.stopPropagation();
      if(!this.disable){
         this.$emit("chang_active", true);
      }

    },
    change(item) {
      this.$emit("change", item);
    },
    documentClick() {
      this.$emit("chang_active", false);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>