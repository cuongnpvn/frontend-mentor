<template>
  <header>
    <img class="logo" src="@/assets/SpaceTourism/logo.svg" alt="" />
    <div class="vline"></div>
    <div class="nav-wrap">
      <nav>
        <router-link
          :class="{ isSelected: getCurrentStage == 0 }"
          class="nav-link"
          :to="{ name: 'SpaceTourism' }"
          ><span>00</span>Home</router-link
        >
        <router-link
          :class="{ isSelected: getCurrentStage == 1 }"
          class="nav-link"
          :to="{ name: 'SpaceTourismDestination' }"
          ><span>01</span>Destination</router-link
        >
        <router-link
          :class="{ isSelected: getCurrentStage == 2 }"
          class="nav-link"
          :to="{ name: 'SpaceTourismCrew' }"
          ><span>02</span>Crew</router-link
        >
        <router-link
          :class="{ isSelected: getCurrentStage == 3 }"
          class="nav-link"
          :to="{ name: 'SpaceTourismTechnology' }"
          ><span>03</span>Technology</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Heading",
  data() {
    return {
      currentStage: this.$route.name,
    };
  },
  created() {
    this.getCurrentStage;
  },

  computed: {
    getCurrentStage() {
      if (this.currentStage === "SpaceTourismDestination") {
        return 1;
      } else if (this.currentStage === "SpaceTourismCrew") {
        return 2;
      } else if (this.currentStage === "SpaceTourismTechnology") {
        return 3;
      } else {
        return 0;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  color: #fff;
}
header {
  width: 100vw;
  height: 15vh;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-top: 70px;
  padding-left: 80px;
  cursor: default;

  .logo {
    position: absolute;
    left: 70px;
    width: 50px;
    height: 50px;
  }

  .vline {
    position: absolute;
    left: 190px;
    width: 510px;
    height: 2px;
    background: rgba($color: #fff, $alpha: 0.2);
    z-index: 99;
  }

  .nav-wrap {
    background: linear-gradient(
      to right,
      rgba($color: #fff, $alpha: 0.03),
      rgba($color: #fff, $alpha: 0.3)
    );
    backdrop-filter: blur(15px);
    height: 80px;
    display: flex;
    align-items: center;
    padding-left: 110px;

    nav {
      margin-right: 100px;
      display: flex;
      gap: 70px;
      height: 100%;

      .nav-link {
        height: 100%;
        text-decoration: none;
        text-transform: uppercase;
        height: 100%;
        display: flex;
        align-items: center;
        border: 2px solid transparent;
        border-width: 0 0 2px 0;
        transition: 400ms ease all;
        font-weight: 300;
        cursor: pointer;

        span {
          margin-right: 18px;
          font-weight: 600;
        }
      }

      .nav-link:hover {
        border-color: rgba($color: #fff, $alpha: 0.8);
      }

      .isSelected {
        border-color: rgba($color: #fff, $alpha: 1);
      }
    }
  }
}
</style>
