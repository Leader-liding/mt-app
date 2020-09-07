<template>
  <dl class="s-item">
    <dt>
      <img :src="itemlist.image" alt />
    </dt>
    <dd>
      <h3>{{itemlist.title}}</h3>
      <p>
        <el-rate v-model="itemlist.score" disabled text-color="#ff9900" score-template="{value}"></el-rate>
        <span v-if="itemlist.score> 4.5">很好</span>
        <span v-else-if="itemlist.score>4">好</span>
        <span v-else-if="itemlist.score>3.5">不错</span>
        <span v-else-if="itemlist.score>3">不错</span>
        <span v-else>很差</span>
        <span>{{itemlist.score }}分</span>
        <span class="s-item-comment-total">{{itemlist.commentNum }}人评论</span>
      </p>
      <p>
        <span class="s-item-tab">
          <span
            v-for="(v, i) in itemlist.tab"
            :key="v"
          >{{v + (i < itemlist.tab.length - 1 ? '|' : '')}}</span>
        </span>
        <span class="s-item-addr">{{itemlist.address}}</span>
        <span>
          <a href="#">
            <i class="el-icon-location"></i>
            查看地图
          </a>
        </span>
      </p>
      <p>
        <span class="s-item-price">人均￥{{itemlist.avgPrice}}</span>
      </p>
      <ul class="deal-items">
        <li class="items" v-for="(item,index) in itemlist.dealItems" :key="index">
          <p class="deal-title">{{item.title }}</p>
          <p>
              <span class="deal-price">￥{{item.price }}{{item.price_type }}</span>
              <span class="deal-old-price">门市价：{{item.counter_price}}{{item.price_type }}</span>
              <span class="deal-sales">已售：{{item.saleNum}}</span>
          </p>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script>
export default {
  props: ["itemlist"]
};
</script>