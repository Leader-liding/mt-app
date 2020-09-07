<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur" @input="input"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="ishotplace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotplaceList" :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="issearch">
            <dt>火锅</dt>
            <dd v-for="(item,indexs) in searchList" :key="indexs">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="/s" v-for="(item,index) in suggestList" :key="index">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js"
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      hotplaceList: [],
      searchList: [],
      suggestList: []
    };
  },
  created(){
     api.gethotplaceList().then(res =>{
       this.hotplaceList = res.data.data
       this.suggestList = res.data.data
     })
  },
  computed: {
    ishotplace: function() {
      return this.isFocus && !this.searchWord;
    },
    issearch: function() {
      return this.isFocus && this.searchWord;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false;
      }, 200);
    },
    input(){
     api.getsearchList().then(res =>{
       let reslist = res.data.data.list
        this.searchList=reslist.filter((item,index)=>{
           return item.indexOf(this.searchWord)>-1
       })

      })

    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>
