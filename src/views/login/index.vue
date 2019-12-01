<template>
  <div class="page-login">
    <van-nav-bar title="登陆" left-arrow @click-left="$router.back()" />
    <van-cell-group>
      <van-field
        @blur="validMobile"
        :error-message="errorMsg.mobile"
        v-model.trim="userForm.mobile"
        label="手机号"
        placeholder="请输入手机号"
      />
      <van-field
        @blur="validCode"
        :error-message="errorMsg.code"
        v-model.trim="userForm.code"
        label="验证码"
        placeholder="请输入验证码"
      >
        <van-button class="p10" slot="button" size="mini" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="btn_box">
      <van-button type="info" @click="login" block round>登 录</van-button>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      // 表单数据
      userForm: {
        mobile: '',
        code: ''
      },
      // 错误信息
      errorMsg: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    // 校验手机号
    validMobile () {
      const value = this.userForm.mobile
      if (!value) {
        this.errorMsg.mobile = '请输入手机号'
      } else if (!/^1[3-9]\d{9}$/.test(value)) {
        this.errorMsg.mobile = '手机号格式不对'
      } else {
        this.errorMsg.mobile = ''
      }
    },
    // 校验验证码
    validCode () {
      const value = this.userForm.code
      if (!value) {
        this.errorMsg.code = '请输入验证码'
      } else if (!/^\d{6}$/.test(value)) {
        this.errorMsg.code = '验证码6位数字'
      } else {
        this.errorMsg.code = ''
      }
    },
    ...mapMutations(['setUser']),
    // 登录时候  整体校验
    async login () {
      // 对表单进行整体校验
      this.checkMobile()
      this.checkCode()
      // 判断是否校验成功
      // 当errorMsg对象中mobile 和 code 没有值
      if (!this.errorMsg.mobile && !this.errorMsg.code) {
        // 发请求去登录
        // 1. 需要发登录请求的API函数
        // 2. 导入函数
        // 3. 调用即可
        // 4. 成功：更新vuex中用户信息  进行跳转（redirectUrl|个人中心）
        // 5. 失败：提示错误
        try {
          const data = await login(this.userForm)
          // 成功
          this.setUser(data)
          // 跳转
          this.$router.push(this.$route.query.redirectUrl || '/user')
          // 成功提示
          this.$toast.success('登录成功')
        } catch (e) {
          // 错误提示
          this.$toast.fail('用户名或验证码错误')
        }
      }
    }

  }
}
</script>

<style lang="less" scoped>
.p5 {
  padding: 0 5px;
}
.btn_box {
  padding: 10px;
  .van-button {
    height: 32px;
    line-height: 30px;
  }
}
</style>
