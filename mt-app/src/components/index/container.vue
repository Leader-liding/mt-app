<template>
  <div class="m-istyle">
    <dl :class="nav.class" @mouseover="over">
      <dt>{{nav.title}}</dt>
      <dd
        :class="{active:kind==item.tab}"
        v-for="(item,index) in nav.list"
        :key="index"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>

    <ul class="ibody">
      <li v-for="(item,index) in resultData[kind]" :key="index">
        <el-card class="el-card" >
          <img
            :src="item.image"
            class="image"
          />
          <div class="cbody">
            <div class="title">{{item.title}} </div>
            <div class="sub-title">
              <!-- <span v-for="(subitem,subindex) in item.subtitle" :key="'v'+'_'+subindex">{{subitem}} </span> -->
             <span>{{item.subTitle}}</span>
            </div>
            <div class="price-info">
              <p class="current-price">
                <span class="price-icon">￥</span>{{item.price}}
              </p>
            </div>
          </div>
        </el-card>
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import api from "@/api/index.js"
export default {
  props: ["nav"],
  data() {
    return {
      kind: "all",
      resultData:{},
      // list:[{
      //     img: "http://p0.meituan.net/iphoenix/75b176b9abde3cb58202c3a983534484170947.jpg@740w_416h_1e_1c",
      //     title: "景观大床一室套 南京南站雨花客厅 地铁1号线1号出口 直达新街口夫子庙",
      //     subtitle: ["整套1居室·", "可住2人", "安德门/小行"],
      //     price: "199"
      // },
      // {
      //     img: "https://img.meituan.net/phoenix/f97ba92a3e72802f7e74f3da1156e75d399826.jpg@740w_416h_1e_1c",
      //     title: "仙林大学城/万达茂/仙林湖/极米百寸巨幕投影/慵懒榻榻米风/2.4号线双地铁直达",
      //     subtitle: ["整套1居室·", "可住2人", "安德门/小行"],
      //     price: "199"
      // },
      // ]
    };
  },
  created(){
     api.getResultdata().then(res => {
         this.resultData= res.data.data
     })
  },
  methods: {
    over(e) {
      let ele = e.target;
      let tagName = ele.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = ele.getAttribute("data-type");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>