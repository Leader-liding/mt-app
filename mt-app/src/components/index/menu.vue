<template>
  <div class="m-menu">
      <dl class="nav" @mouseleave="menuLeave">
        <dt>全部分类</dt>
        <dd
          v-for="(item,index) in menuList"
          :key="index"
          @mouseenter="menuEnter(item)" 
        >
          <i :class="item.type"></i>
          <span>{{item.name}}</span>
          <i class="arrow"></i>
        </dd>
      </dl>
   
    <div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item,index) in curDetail.items">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="(v,i) in item.items" :key="v +'_'+i">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js"
export default {
  data() {
    return {
      curDetail: null,
      menuList: []
    };
  },
  created(){
       api.getmenuList().then(res => {
         this.menuList= res.data.data
       //  console.log(res.data.data)
       })
  },
  methods: {
    menuEnter(item) {
      this.curDetail = item;
    },
    menuLeave() {
       this.timer = setTimeout(() => {
        this.curDetail = null;
      }, 20);
    },
    detailEnter() {
        clearTimeout(this.timer)
    },
    detailLeave() {
      this.curDetail = null;
    }
  }
};
</script>
