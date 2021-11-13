<template>
  <div class="container">
    <img class="bg" src="@/assets/IPTracking/pattern-bg.png" alt="" />
    <div class="iptracking">
      <h2>IP Address Tracker</h2>
      <div class="input-wrap">
        <input
          type="text"
          placeholder="Search for any IP address"
          v-model="userip"
        />
        <div @click="handleSearch" class="search">
          <img src="@/assets/IPTracking/icon-arrow.svg" alt="" />
        </div>
      </div>
      <IpInfo v-if="IpInfo" :IpInfo="IpInfo" />
    </div>
    <div id="mapContainer"></div>
  </div>
</template>

<script>
import IpInfo from "../../components/IPTracking/IpInfo.vue";
import leaflet from "leaflet";
import axios from "axios";
export default {
  name: "IPTracking",
  components: {
    IpInfo,
  },
  data() {
    return {
      center: [21.0245, 105.84117],
      userip: null,
      api_key: "at_66ejNjkHFGTxkvOG13mvkNPpzlgng",
      IpInfo: null,
      myMap: null,
      myIcon: null,
    };
  },
  methods: {
    setupMap() {
      this.myMap = leaflet.map("mapContainer").setView(this.center, 13);
      leaflet
        .tileLayer(
          "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWItbmd1eWVuOTkiLCJhIjoiY2t2dWI0eHV3OHR5cDJ1cTE5YjFqeXhqdyJ9.fZ0iEQNCLxxNyRkolbXCLw",
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
              "pk.eyJ1IjoibWItbmd1eWVuOTkiLCJhIjoiY2t2dWI0eHV3OHR5cDJ1cTE5YjFqeXhqdyJ9.fZ0iEQNCLxxNyRkolbXCLw",
          }
        )
        .addTo(this.myMap);
    },
    async handleSearch() {
      const res = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${this.api_key}&ipAddress=${this.userip}`
      );
      this.IpInfo = {
        ip: res.data.ip,
        location: res.data.location,
        timezone: res.data.location.timezone,
        isp: res.data.isp,
      };
      let mark = [res.data.location.lat, res.data.location.lng];
      leaflet.marker(mark).addTo(this.myMap);
      this.myMap.setView(mark, 13);
    },
  },
  mounted() {
    this.setupMap();
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");
.container {
  flex-direction: column;
  justify-content: left;
  position: relative;
  .bg {
    top: 0;
    z-index: -1;
  }

  .iptracking {
    z-index: 2;
    margin-top: 30px;
    font-family: "Rubik", sans-serif;
    text-align: center;
    color: #fff;
    position: absolute;

    h2 {
      margin-bottom: 30px;
      font-size: 36px;
      letter-spacing: 2px;
      font-weight: 500;
    }

    .input-wrap {
      display: flex;
      justify-content: center;
      height: 50px;
      margin-bottom: 40px;

      input {
        height: 100%;
        width: 470px;
        border: none;
        border-radius: 12px 0 0 12px;
        background: #fff;
        box-shadow: 0 15px 10px -5px rgba($color: #000000, $alpha: 0.2);
        font-size: 18px;
        font-family: "Rubik", sans-serif;
        padding-left: 12px;
      }

      input:focus {
        outline: none;
      }

      .search {
        height: 100%;
        width: 50px;
        background: #000;
        border-radius: 0 12px 12px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 5px 15px 10px -5px rgba($color: #000000, $alpha: 0.2);
        cursor: pointer;
        transition: 400ms ease all;
      }

      .search:hover {
        transform: scale(0.96);
      }
    }
  }

  #mapContainer {
    width: 100%;
    height: 100%;
    z-index: 0;
  }
}
</style>
