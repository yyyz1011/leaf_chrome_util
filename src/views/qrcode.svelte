<script lang="ts">
  import QRCode from "qrcode";
  import { TextField, Button, Loading } from "attractions";
  import BreadHeader from "@/components/BreadHeader.svelte";

  let qrUrl: string = "";
  let qrUrlErrorMsg: string = "";
  let QRImgUrl: string = "";

  let qrFrontColor: string = "000000";
  let qrFrontColorErrorMsg: string = "";
  let qrBackgroundColor: string = "FFFFFF";
  let qrBackgroundColorErrorMsg: string = "";

  function begoreGetQRcode() {
    let isApprove: boolean = true;

    if (!qrUrl) {
      qrUrlErrorMsg = "二维码网址不能为空";
      isApprove = false;
    } else {
      qrUrlErrorMsg = "";
    }

    const RegExp = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    if (!RegExp.test(`#${qrFrontColor}`)) {
      qrFrontColorErrorMsg = "前景色不符合hex规则";
      isApprove = false;
    } else {
      qrFrontColorErrorMsg = "";
    }
    if (!RegExp.test(`#${qrBackgroundColor}`)) {
      qrBackgroundColorErrorMsg = "后景色不符合hex规则";
      isApprove = false;
    } else {
      qrBackgroundColorErrorMsg = "";
    }

    return isApprove;
  }

  function getQRcode() {
    const isApprove = begoreGetQRcode();
    if (!isApprove) {
      QRImgUrl = "";
      return;
    }

    let opts = {
      errorCorrectionLevel: "H", //容错级别
      type: "image/png", //生成的二维码类型
      quality: 0.3, //二维码质量
      margin: 2, //二维码留白边距
      width: 256, //宽
      height: 256, //高
      text: "http://www.xxx.com", //二维码内容
      color: {
        dark: `#${qrFrontColor}`, //前景色
        light: `#${qrBackgroundColor}`, //背景色
      },
    };
    QRCode.toDataURL(qrUrl, opts, (err: any, url: string) => {
      if (err) throw err;
      QRImgUrl = url;
    });
  }
</script>

<main>
  <BreadHeader />
  <TextField
    outline
    label="二维码网址"
    withItem
    bind:value={qrUrl}
    error={qrUrlErrorMsg}
  />
  <TextField
    outline
    label="二维码前景色"
    withItem
    bind:value={qrFrontColor}
    error={qrFrontColorErrorMsg}
  >
    <span class="item">#</span>
  </TextField>
  <TextField
    outline
    label="二维码背景色"
    withItem
    bind:value={qrBackgroundColor}
    error={qrBackgroundColorErrorMsg}
  >
    <span class="item">#</span>
  </TextField>
  <div class="qr-button">
    <Button disabled={!qrUrl} filled on:click={getQRcode}>生成二维码</Button>
  </div>

  <div class="qrcode">
    {#if !QRImgUrl}
      <Loading />
    {:else}
      <img src={QRImgUrl} alt="qr-code" />
    {/if}
  </div>
</main>

<style>
  .qr-button {
    display: flex;
    justify-content: center;
    margin-top: 8px;
  }

  .qrcode {
    display: flex;
    justify-content: center;
    margin-top: 8px;
  }
</style>
