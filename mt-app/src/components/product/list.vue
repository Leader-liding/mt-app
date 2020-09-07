<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active': item.active}">{{item.name}}</li>
    </ul>
    <el-row>
      <my-item v-for="(item,index) in productList" :key="index" :itemlist="item"/>
    </el-row>
  </div>
</template>

<script>
import MyItem from "./item";
import api from "@/api/index.js"
export default {
  components: {
    MyItem
  },

  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productList:[],
      // productList: [
      //   {
      //     image:
      //       "//p1.meituan.net/tdctraveldark/3741450b656edd463807b1dab679a54b245381.jpg@220w_125h_1e_1c",
      //     title: "青岛海底世界",
      //     type: "food",
      //     score: "5",
      //     commentNum: "169",
      //     comment: [
      //       {
      //         username: "口感不错",
      //         evalaute: "好吃"
      //       }
      //     ],
      //     tab: ["沙河", "火锅"],
      //     address: "市南区香港中路71号秀尔韩国服装城2楼",
      //     avg_price: 64,
      //     deal_item: [
      //       {
      //         title: "久久小聚双人餐，提供免费WiFi",
      //         price: "99",
      //         counter_price: "143",
      //         saleNum: 0,
      //         price_type: "元"
      //       }
      //     ]
      //   }
      // ]
    };
  },
  created(){
    api.getProductList().then(res =>{
    this.productList = res.data.data
    })
  },
};
</script>