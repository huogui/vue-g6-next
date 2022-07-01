<script lang="ts" setup>
window.JVerificationInterface.init({
  // 极光官网中创建应用后分配的 appkey，必填
  appkey: 'db7721aeb991c9bd57dfe3b9',
  // 设置是否开启 debug 模式。true 则会打印更多的日志信息。设置 false 则只会输出 w、e 级别的日志。
  debugMode: true,
  success(data) {
    const isSuccess = window.JVerificationInterface.isInitSuccess();
    const verifyEnable = window.JVerificationInterface.checkVerifyEnable();
    if (!verifyEnable) {
      // eslint-disable-next-line
      alert('当前网络环境不支持认证');
      console.log(data);
      return;
    }
    window.JVerificationInterface.setCustomUIWithConfig({
      logo: 'https://opencloud.wostore.cn/h5netauth/h5auth_demo/img/logo3.png',
      appName: '测试应用名称',
    });
    window.JVerificationInterface.getToken({
      success(data1) {
        // TODO 获取token成功回调
        // eslint-disable-next-line
        alert('获取token成功');
        console.log(data1);
        window.JVerificationInterface.loginAuth({
          operater: 'CU',
          type: 'full',
          success(data2) {
            console.log(data2);
            // TODO 一键登录获取 token 成功回调
            const { operater } = data2;
            const token = data2.content;
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
      fail(data4) {
        // TODO 获取token失败回调
        console.log(data4);
        // eslint-disable-next-line
        alert('获取token失败');
      },
    });
  },
  fail(data) {
    // eslint-disable-next-line
    alert("初始化失败",JSON.stringify(data))
    // TODO 初始化失败回调
  },
});
</script>
<template>
  <div>测试</div>
</template>

