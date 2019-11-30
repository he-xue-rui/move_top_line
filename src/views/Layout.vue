<template>
  <div class="container">
    <van-nav-bar
      fixed
      title="黑马头条"
      right-text="搜索"
      @click-right="$router.push('/search')"
    />
    <div class="my-wrapper">
      <router-view></router-view>
    </div>
    <van-tabbar route>
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/question" icon="search">问答</van-tabbar-item>
      <van-tabbar-item to="/video" icon="friends-o">视频</van-tabbar-item>
      <van-tabbar-item to="/user" icon="setting-o">用户</van-tabbar-item>
    </van-tabbar>
    <!-- <router-view></router-view>
    <router-link to="/home">首页</router-link>
    <router-link to="/question">问答</router-link>
    <router-link to="/search">视频</router-link>
    <router-link to="/user">用户</router-link>-->
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
    }
  },
  methods: {
  },
  watch: {
  }
}
</script>

<style lang="less" scoped>
// div {
//   font-size: 1rem/2;
// }
.container {
  width: 100%;
  height: 100%;
  position: relative;
  .my-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 46px;
    padding-bottom: 50px;
    box-sizing: border-box;
    &.noTop {
      padding-top: 0;
    }
  }
}
</style>
