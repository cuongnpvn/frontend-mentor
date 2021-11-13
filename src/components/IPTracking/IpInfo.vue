<template>
  <div class="ip-info">
    <div class="info">
      <h5>Ip Address</h5>
      <h3>{{ IpInfo.ip }}</h3>
    </div>
    <div class="vline"></div>
    <div class="info">
      <h5>location</h5>
      <h3>{{ IpInfo.location.region }}, {{ IpInfo.location.country }}</h3>
    </div>
    <div class="vline"></div>
    <div class="info">
      <h5>Time zone</h5>
      <h3>UTC {{ IpInfo.timezone }}</h3>
    </div>
    <div class="vline"></div>
    <div class="info">
      <h5>isp</h5>
      <h3>{{ IpInfo.isp }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "IpInfo",
  props: ["IpInfo"],
  created() {
    console.log(this.IpInfo);
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.ip-info {
  border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  width: 900px;
  height: 150px;
  background: #fff;
  border-radius: 12px;
  padding: 0 12px;

  .info {
    flex-basis: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    position: relative;

    h5 {
      position: absolute;
      top: 30px;
      text-transform: uppercase;
      color: hsl(0, 0%, 59%);
      font-weight: 500;
    }

    h3 {
      margin-top: 20px;
      color: hsl(0, 0%, 17%);
      font-size: 22px;
      font-size: 500;
    }
  }

  .info:first-child {
    padding-left: 16px;
  }

  .vline {
    margin: auto 0;
    width: 1px;
    height: 100px;
    background: hsl(0, 0%, 59%);
  }
}
</style>
