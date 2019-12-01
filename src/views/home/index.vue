<template>
  <div class="container">
    <van-tabs swipeable>
      <van-tab v-for="index in 8" :key="index" :title="'标签 ' + index">
        <div class="scroll-wrapper">
          <van-list v-model="upLoading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell v-for="item in activeList" :key="item">
              <div class="article_item">
                <h3 class="van-ellipsis">PullRefresh下拉刷新PullRefresh下拉刷新下拉刷新下拉刷新</h3>
                <div class="img_box">
                  <van-image class="w33" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                  <van-image class="w33" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                  <van-image class="w33" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                </div>
                <div class="info_box">
                  <span>你像一阵风</span>
                  <span>8评论</span>
                  <span>10分钟前</span>
                  <span class="close">
                    <van-icon name="cross"></van-icon>
                  </span>
                </div>
              </div>
            </van-cell>
          </van-list>
        </div>
      </van-tab>
    </van-tabs>
    <span class="bar_btn" slot="nav-right">
      <van-icon name="wap-nav"></van-icon>
    </span>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      activeList: [], // 当前文章列表
      upLoading: false, // 当前
      finished: false
    }
  },
  created () {
    this.onLoad()
  },
  methods: {
    onLoad () {
      window.setTimeout(() => {
        // 模拟加载数据
        const data = []
        for (
          let i = this.activeList.length;
          i < this.activeList.length + 15;
          i++
        ) {
          data.push(i + 1)
        }
        this.activeList.push(...data)
        // 结束加载效果
        this.upLoading = false
        // 模拟全部加载完毕情况
        if (this.activeList.length >= 60) {
          this.finished = true
        }
      }, 2000)
    }
    // onLoad () {
    //   // 异步更新数据
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.activeList.push(this.activeList.length + 1)
    //     }
    //     // 加载状态结束
    //     this.loading = false

    //     // 数据全部加载完成
    //     if (this.activeList.length >= 40) {
    //       this.finished = true
    //     }
    //   }, 2500)
    // }
  }
}
</script>

<style lang="less" scoped>
.van-tabs {
  height: 100%;
  display: flex;
  flex-direction: column;
  /deep/ .van-tabs__wrap {
    height: 36px;
    padding-right: 36px;
    .van-tab {
      line-height: 36px;
    }
    .van-tabs__line {
      background-color: #3296fa;
      height: 2px;
    }
  }
  /deep/.van-tabs__content {
    flex: 1;
    overflow: hidden;
  }
  /deep/.van-tab__pane {
    height: 100%;
    .scroll-wrapper {
      height: 100%;
      // overflow: hidden;
      overflow-y: auto;
    }
  }
}
.bar_btn {
  width: 36px;
  height: 35px;
  position: absolute;
  top: 0px;
  right: 0;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 999;
    box-shadow: 0 0 10px #999;
    transform: scale(1, 0.6);
  }
  .van-icon-wap-nav {
    width: 100%;
    height: 100%;
    background: #fff;
    text-align: center;
    line-height: 35px;
    position: relative;
    z-index: 1000;
    &::before {
      font-size: 20px;
    }
  }
}
.article_item{
  h3{
    font-weight: normal;
    line-height: 2;
  }
  .img_box{
    display: flex;
    justify-content: space-between;
    .w33{
      width: 33%;
      height: 90px;
    }
    .w100{
      width: 100%;
      height: 180px;
    }
  }
  .info_box{
    color: #999;
    line-height: 2;
    position: relative;
    font-size: 12px;
    span{
      padding-right: 10px;
      &.close{
        border: 1px solid #ddd;
        border-radius: 2px;
        line-height: 15px;
        height: 12px;
        width: 16px;
        text-align: center;
        padding-right: 0;
        font-size: 8px;
        position: absolute;
        right: 0;
        top: 7px;
      }
    }
  }
}
</style>
