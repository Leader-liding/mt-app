<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item in menuList" :key="item.type">
        <my-select :name="item.title" :list="item.sublist" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="item in areaList" :key="item.type">
        <my-select :name="item.title" :list="item.sublist" />
      </dd>
    </dl>
  </div>
</template>

<script>
import MySelect from "./select";
export default {
  components: {
    MySelect
  },

  data() {
    return {
      menuList: [
        {
          title: "美食",
          type: "food",
          sublist: [
            { name: "日本菜", id: "riben" },
            { name: "烤肉", id: "kaorou" }
          ]
        },
        {
          title: "时尚购物",
          type: "buy",
          sublist: [
            { name: "本地购物", id: "localbuy" },
            { name: "网上购物", id: "netbuy" },
            { name: "饮品店", id: "drink" },
            { name: "面包甜点", id: "cate" }
          ]
        }
      ],
      areaList: [
        {
          title: "推荐商圈",
          sublist: [
            {
              name: "望京",

              id: 120000
            },

            {
              name: "昌平",

              id: 12222
            }
          ]
        }
      ],

    };
  }
};
</script>