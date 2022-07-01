<script lang="ts" setup>
//   eslint-disable-next-line
const doLogin = () => {
  window.JVerificationInterface.init({
  // 极光官网中创建应用后分配的 appkey，必填
    appkey: 'db7721aeb991c9bd57dfe3b9',
    // 设置是否开启 debug 模式。true 则会打印更多的日志信息。设置 false 则只会输出 w、e 级别的日志。
    debugMode: true,
    success(data) {
      const isSuccess = window.JVerificationInterface.isInitSuccess();
      console.log('初始化是否成功', isSuccess);
      const verifyEnable = window.JVerificationInterface.checkVerifyEnable();
      if (!verifyEnable) {
      // eslint-disable-next-line
      alert('当前网络环境不支持认证');
        console.log(data);
        return;
      }
      window.JVerificationInterface.loginAuth({
        success(data2) {
          console.log(data2);
          // TODO 一键登录获取 token 成功回调
          console.log(data2);
          // eslint-disable-next-line
            alert('登陆成功');
        },
        fail(data3) {
          console.log(data3);
          // eslint-disable-next-line
            alert('登陆成功');
          // TODO 一键登录获取 token 失败回调
        },
      });
    },
    fail(data) {
    // eslint-disable-next-line
    alert("初始化失败",JSON.stringify(data))
    // TODO 初始化失败回调
    },
  });
};
</script>
<template>
  <div>
    <button @click="doLogin">
      测试
    </button>
  </div>
</template>

