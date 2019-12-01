<template>
  <div>
    <p>这是用户页面</p>
    <router-link to="/user/profile">编辑资料</router-link>
    <router-link to="/user/chat">小智同学</router-link>
  </div>
</template>

<script>
export default {
  name: 'user'
}
</script>

<style lang="less" scoped>
</style>
