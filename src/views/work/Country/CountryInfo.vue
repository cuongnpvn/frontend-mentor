<template>
  <header>
    <h3>Where in the world?</h3>
    <div @click="toggleDarkMode" class="theme">
      <img src="@/assets/Country/icon-moon.svg" alt="" />
      <span>Dark Mode</span>
    </div>
  </header>
  <main>
    <div v-if="!countryInfo" class="loading"></div>
    <div v-else class="container">
      <button @click="handleBack" class="back-btn">
        <img
          v-if="darkMode"
          src="@/assets/Country/icon-arrow-left.svg"
          alt=""
        />
        <img
          id="icon-back"
          v-else
          src="@/assets/Country/icon-arrow-left.svg"
          alt=""
        />
        <span>Back</span>
      </button>
      <div class="flag">
        <img :src="countryInfo.flag" alt="" />
      </div>
      <div class="info">
        <div class="name">
          <h3>{{ countryInfo.name }}</h3>
        </div>
        <div class="details">
          <div class="col">
            <p><span>Native Name: </span>{{ countryInfo.nativeName }}</p>
            <p><span>Population: </span>{{ countryInfo.population }}</p>
            <p><span>Region: </span>{{ countryInfo.region }}</p>
            <p><span>Sub Region: </span>{{ countryInfo.subRegion }}</p>
            <p><span>Capital: </span>{{ countryInfo.capital }}</p>
          </div>
          <div class="col">
            <p><span>Top Level Domain: </span>{{ countryInfo.tld }}</p>
            <p><span>Currencies: </span>{{ countryInfo.currencies }}</p>
            <p><span>Languages: </span>{{ countryInfo.languagues }}</p>
          </div>
        </div>
        <div class="border-countries">
          <p>Border countries:</p>
          <div
            v-for="(item, index) in countryInfo.borders"
            :key="index"
            class="wrap"
            @click="handleCountry(item)"
          >
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "CountryInfo",
  data() {
    return {
      darkMode: true,
      darkTheme: {
        element: "hsl(209, 23%, 22%)",
        background: "hsl(207, 26%, 17%)",
        text: "hsl(0, 0%, 100%)",
        inputBG: "hsl(209, 23%, 22%)",
      },
      lightTheme: {
        element: "hsl(0, 0%, 100%)",
        background: "hsl(0, 0%, 98%)",
        text: "hsl(200, 15%, 8%)",
        inputBG: "hsl(0, 0%, 52%)",
      },
      countryCode: this.$route.params.code.toLowerCase(),
      countryInfo: null,
    };
  },
  created() {
    const fecthData = async () => {
      const res = await axios.get(
        `https://restcountries.com/v2/alpha/${this.countryCode}`
      );
      const info = res.data;
      this.countryInfo = {
        name: info.name,
        nativeName: info.nativeName,
        population: info.population,
        region: info.region,
        subRegion: info.subregion,
        capital: info.capital,
        tld: info.topLevelDomain[0],
        currencies: info.currencies[0].name,
        languagues: info.languages[0].name,
        flag: info.flag,
        borders: info.borders,
      };
    };
    fecthData();
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
    handleBack() {
      this.$router.push({ name: "Country" });
    },
    handleCountry(countryCode) {
      this.$router.replace({
        name: "CountryInfo",
        params: { code: countryCode },
      });
      this.$forceUpdate();
    },
  },
  computed: {
    getCurrentBG() {
      if (this.darkMode) {
        return this.darkTheme.background;
      } else {
        return this.lightTheme.background;
      }
    },
    getCurrentTxt() {
      if (this.darkMode) {
        return this.darkTheme.text;
      } else {
        return this.lightTheme.text;
      }
    },
    getCurrentEle() {
      if (this.darkMode) {
        return this.darkTheme.element;
      } else {
        return this.lightTheme.element;
      }
    },
    getCurrentIB() {
      if (this.darkMode) {
        return this.darkTheme.inputBG;
      } else {
        return this.lightTheme.inputBG;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$bg-color: v-bind(getCurrentBG);
$ele-color: v-bind(getCurrentEle);
$txt-color: v-bind(getCurrentTxt);
$in-color: v-bind(getCurrentIB);

* {
  font-family: "Nunito Sans", sans-serif;
  color: $txt-color;
}

header {
  width: 100%;
  height: 8vh;
  background: $ele-color;
  display: flex;
  justify-content: space-between;
  padding: 20px 60px;

  h3 {
    font-size: 22px;
    letter-spacing: 1px;
  }

  .theme {
    display: flex;
    gap: 12px;
    cursor: pointer;

    span {
      font-size: 18px;
      font-weight: 600;
    }
  }
}

main {
  .container {
    widows: 100%;
    height: 92vh;
    background: $bg-color;
    padding: 20px 60px;
    overflow: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    transition: 400ms ease all;
    .back-btn {
      position: absolute;
      top: 5vh;
      left: 15vw;
      display: flex;
      gap: 8px;
      background: $ele-color;
      border-radius: 6px;
      border: none;
      padding: 8px 20px;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 5px 15px 5px rgba($color: #000000, $alpha: 0.1),
        0px 10px 15px -5px rgba($color: #000000, $alpha: 0.06);
      cursor: pointer;

      img {
        width: 20px;
        height: 20px;
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(296deg)
          brightness(107%) contrast(102%);
      }

      #icon-back {
        filter: invert(0%) sepia(95%) saturate(20%) hue-rotate(19deg)
          brightness(94%) contrast(106%);
      }

      span {
        font-size: 18px;
        padding-right: 6px;
      }
    }

    .flag {
      flex: 1;
      height: 340px;
      width: 100px;
      transform: translateY(-40px);

      img {
        margin-left: 155px;
        width: 470px;
        height: 100%;
        object-fit: cover;
        box-shadow: 0px 15px 15px 10px rgba($color: #000000, $alpha: 0.1),
          0px 10px 15px -5px rgba($color: #000000, $alpha: 0.06);
      }
    }
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding-left: 100px;
      transform: translateY(-30px);

      .name {
        margin-bottom: 20px;
        h3 {
          font-size: 26px;
          letter-spacing: 1px;
        }
      }

      .details {
        margin-bottom: 50px;
        display: flex;
        justify-content: space-between;
        padding-right: 30px;

        .col {
          display: flex;
          flex-direction: column;
          gap: 6px;

          p {
            font-size: 18px;

            span {
              font-weight: 600;
            }
          }
        }
      }

      .border-countries {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        width: 100px;
        gap: 6px;
        align-items: center;
        position: relative;
        padding-left: 140px;

        p {
          font-weight: 600;
          position: absolute;
          width: 130px;
          top: 5px;
        }

        .wrap {
          background: $ele-color;
          padding: 4px 10px;
          border-radius: 6px;
          cursor: pointer;
          box-shadow: 0px 5px 15px 5px rgba($color: #000000, $alpha: 0.1),
            0px 10px 15px -5px rgba($color: #000000, $alpha: 0.06);

          span {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
