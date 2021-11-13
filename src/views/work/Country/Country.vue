<template>
  <header>
    <h3>Where in the world?</h3>
    <div v-if="darkMode" @click="toggleDarkMode" class="theme">
      <img src="@/assets/Country/icon-moon.svg" alt="" />
      <span>Dark Mode</span>
    </div>
    <div v-else @click="toggleDarkMode" class="theme">
      <img id="icon-sun" src="@/assets/Country/icon-sun.svg" alt="" />
      <span>Light Mode</span>
    </div>
  </header>
  <main>
    <div class="user">
      <div class="search">
        <img v-if="darkMode" src="@/assets/Country/icon-search.svg" alt="" />
        <img
          id="icon-search"
          v-else
          src="@/assets/Country/icon-search.svg"
          alt=""
        />
        <form @submit="filteredCountries">
          <input
            type="text"
            placeholder="Search for a country..."
            v-model="searchCountry"
          />
        </form>
      </div>
      <div @click="toggleFilter" class="filter">
        <span>Filter by Region</span>
        <img
          v-if="darkMode"
          src="@/assets/Country/icon-arrow-down.svg"
          alt=""
        />
        <img
          id="icon-filter"
          v-else
          src="@/assets/Country/icon-arrow-down.svg"
          alt=""
        />
      </div>
      <div v-if="filterOptions" class="filter-options">
        <div @click="filRegion('Africa')" class="option">Africa</div>
        <div @click="filRegion('Americas')" class="option">Americas</div>
        <div @click="filRegion('Asia')" class="option">Asia</div>
        <div @click="filRegion('Europe')" class="option">Europe</div>
        <div @click="filRegion('Oceania')" class="option">Oceania</div>
        <div @click="filRegion('')" class="option">Clear Filter</div>
      </div>
    </div>
    <div class="countries">
      <div
        v-show="index <= indexShow"
        v-for="(item, index) in filteredCountries"
        :key="index"
        class="country-item"
        @click="handleCountry(item.code)"
      >
        <img class="flag" :src="item.flag" alt="" />
        <div class="info">
          <h5>{{ item.name }}</h5>
          <p><span>Population:</span> {{ item.population }}</p>
          <p><span>Region:</span> {{ item.region }}</p>
          <p><span>Capital:</span> {{ item.capital }}</p>
        </div>
      </div>
    </div>
    <div @click="handleLoadMore" class="load-more">
      <span>Load more</span>
      <img src="@/assets/Country/icon-arrow-down.svg" alt="" />
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "Country",
  components: {},
  data() {
    return {
      filterOptions: null,
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
      indexShow: 7,
      countries: [],
      showCountryInfo: false,
      countryInfo: {
        code: "Unknown",
        name: "Unknown",
        population: "Unknown",
        region: "Unknown",
        capital: "Unknown",
        flag: "Unknown",
      },
      searchCountry: "",
      regionCountry: "",
    };
  },
  created() {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        res.data.forEach((country) => {
          this.countryInfo = {
            code: country.cca3,
            name: country.name.common,
            population: country.population,
            region: country.region,
            capital: country.capital,
            flag: country.flags.svg,
          };
          this.countries.push(this.countryInfo);
        });
      } catch (err) {
        alert(err);
      }
    };
    fetchData();
  },
  methods: {
    toggleFilter() {
      this.filterOptions = !this.filterOptions;
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },

    handleLoadMore() {
      this.indexShow += 8;
    },
    handleCountry(countryCode) {
      this.$router.push({
        name: "CountryInfo",
        params: { code: countryCode },
      });
    },
    filRegion(value) {
      this.regionCountry = value;
      this.filterOptions = !this.filterOptions;
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
    filteredCountries() {
      if ((this.searchCountry !== "") & (this.regionCountry !== "")) {
        return this.countries.filter(
          (country) =>
            country.name.toLowerCase().includes(this.searchCountry) &&
            country.region === this.regionCountry
        );
      } else if (this.searchCountry === "" && this.regionCountry !== "") {
        return this.countries.filter(
          (country) => country.region == this.regionCountry
        );
      } else if (this.searchCountry !== "" && this.regionCountry === "") {
        return this.countries.filter((country) =>
          country.name.toLowerCase().includes(this.searchCountry)
        );
      }
      return this.countries;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

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
  cursor: default;
  transition: 400ms ease all;

  #icon-sun {
    filter: invert(100%) sepia(0%) saturate(7436%) hue-rotate(22deg)
      brightness(114%) contrast(113%);
  }

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
  widows: 100%;
  height: 92vh;
  background: $bg-color;
  padding: 20px 60px;
  overflow: auto;
  transition: 400ms ease all;
  .user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .search {
      width: 500px;
      height: 50px;
      display: flex;
      align-items: center;
      gap: 16px;
      background: $ele-color;
      border-radius: 8px;
      padding-left: 20px;
      box-shadow: 0px 5px 15px 5px rgba($color: #000000, $alpha: 0.1),
        0px 10px 15px -5px rgba($color: #000000, $alpha: 0.07);

      img {
        width: 20px;
        height: 20px;
        filter: invert(99%) sepia(0%) saturate(598%) hue-rotate(300deg)
          brightness(118%) contrast(100%);
      }

      #icon-search {
        filter: invert(0%) sepia(95%) saturate(20%) hue-rotate(19deg)
          brightness(94%) contrast(106%);
      }

      input {
        background: none;
        height: 30px;
        width: 200px;
        border: none;
        font-size: 17px;
        color: $txt-color;
      }

      input:focus {
        outline: none;
      }
      ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: $txt-color;
        opacity: 0.7; /* Firefox */
      }
    }

    .filter {
      margin-right: 30px;
      background: $ele-color;
      border-radius: 8px;
      display: flex;
      gap: 24px;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 200px;
      cursor: pointer;
      box-shadow: 0px 5px 15px 5px rgba($color: #000000, $alpha: 0.1),
        0px 10px 15px -5px rgba($color: #000000, $alpha: 0.07);

      img {
        width: 20px;
        height: 20px;

        filter: invert(99%) sepia(0%) saturate(598%) hue-rotate(300deg)
          brightness(118%) contrast(100%);
      }

      #icon-filter {
        filter: invert(0%) sepia(95%) saturate(20%) hue-rotate(19deg)
          brightness(94%) contrast(106%);
      }
    }

    .filter-options {
      position: absolute;
      border-radius: 8px;
      background: $ele-color;
      width: 200px;
      right: 30px;
      top: 53px;

      .option {
        padding: 6px 12px;
        border: 1px solid rgba($color: #fff, $alpha: 0.3);
        border-color: $txt-color;
        border-width: 0 0px 1px 0px;
        font-size: 15px;
      }

      .option:first-child {
        border-radius: 8px 8px 0 0;
      }

      .option:last-child {
        border: none;
        border-radius: 0 0 8px 8px;
      }

      .option:hover {
        background: hsl(208, 21%, 34%);
      }
    }
  }

  .countries {
    width: 90%;
    margin: 30px auto;
    display: grid;
    gap: 35px 20px;

    grid-template-columns: repeat(4, 1fr);

    .country-item {
      width: 240px;
      height: 270px;
      background: $ele-color;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: 400ms ease all;
      box-shadow: 0px 5px 15px 5px rgba($color: #000000, $alpha: 0.1),
        0px 10px 15px -5px rgba($color: #000000, $alpha: 0.07);

      .flag {
        width: 100%;
        height: 50%;
        border-radius: 12px 12px 0 0;
        flex: 1;
        object-fit: cover;
      }

      .info {
        flex: 1;
        padding-top: 12px;
        padding-left: 12px;

        h5 {
          margin-bottom: 12px;
          font-size: 18px;
        }

        p {
          font-size: 15px;
          margin-bottom: 6px;

          span {
            font-weight: 600;
          }
        }
      }
    }

    .country-item:hover {
      transform: scale(1.02);
    }
  }

  .load-more {
    left: 46%;
    bottom: 12px;
    position: fixed;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: 20px;
      height: 20px;
      filter: invert(99%) sepia(0%) saturate(598%) hue-rotate(300deg)
        brightness(118%) contrast(100%);
    }
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
