<template>
    <tp-breadcrumb separator="/">
        <tp-breadcrumb-item :to="{ path: '/' }">首页</tp-breadcrumb-item>
        <tp-breadcrumb-item>活动管理</tp-breadcrumb-item>
        <tp-breadcrumb-item>活动列表</tp-breadcrumb-item>
        <tp-breadcrumb-item>活动详情</tp-breadcrumb-item>
    </tp-breadcrumb>
</template>
<script>
      import { getDataById } from "@/page-modules/travel/test/testModule";
export default {

    data(){
        return {}
    },
    mounted(){
        this.$TP.$alert("pc端")
        getDataById()
    }
}
</script>