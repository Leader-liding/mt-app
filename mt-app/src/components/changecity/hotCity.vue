<template>
    <div class="m-hcity ">
        <dl>
            <dt>{{value}}：</dt>
            <dd v-for="(item,index) in hotlist" :key="index">{{item.name}} </dd>
        </dl>
    </div>
</template>

<script>
export default {
    props:["hotlist","value"]

}
</script>

<style lang="scss">
@import "@/assets/css/changecity/hot.scss"
</style>