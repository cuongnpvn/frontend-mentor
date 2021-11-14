<template>
  <img
    class="bg"
    src="@/assets/SpaceTourism/background-destination.jpg"
    alt=""
  />
  <Heading />
  <main>
    <div class="steps">
      <h3>01 <span>Pick your destination</span></h3>
    </div>
    <div class="wrap">
      <img :src="getDestinationInfo.images.png" alt="" />
      <div class="info">
        <div class="nav-planets">
          <div
            @click="handleDestination(0)"
            :class="{ isSelected: currentShow == 0 }"
            class="nav-item"
          >
            <span>Moon</span>
          </div>
          <div
            @click="handleDestination(1)"
            :class="{ isSelected: currentShow == 1 }"
            class="nav-item"
          >
            <span>Mars</span>
          </div>
          <div
            @click="handleDestination(2)"
            :class="{ isSelected: currentShow == 2 }"
            class="nav-item"
          >
            <span>Europa</span>
          </div>
          <div
            @click="handleDestination(3)"
            :class="{ isSelected: currentShow == 3 }"
            class="nav-item"
          >
            <span>Titan</span>
          </div>
        </div>
        <div class="info-name">
          <h1>{{ getDestinationInfo.name }}</h1>
        </div>
        <div class="info-desc">
          <p>
            {{ getDestinationInfo.description }}
          </p>
        </div>
        <div class="vline"></div>
        <div class="numbers">
          <div class="num-item">
            <span>Avg. Distance</span>
            <h4>{{ getDestinationInfo.distance }}</h4>
          </div>
          <div class="num-item">
            <span>Est. Travel time</span>
            <h4>{{ getDestinationInfo.travel }}</h4>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Heading from "@/components/SpaceTourism/Heading.vue";
export default {
  name: "Destination",
  components: {
    Heading,
  },
  data() {
    return {
      desList: this.$store.state.destinations,
      currentShow: 0,
    };
  },
  created() {
    this.getDestinationInfo;
  },
  methods: {
    handleDestination(value) {
      this.currentShow = value;
    },
  },
  computed: {
    getDestinationInfo() {
      return this.desList[this.currentShow];
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Oswald", sans-serif;
  color: #fff;
}

.bg {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  object-fit: cover;
}

main {
  margin-top: 5vh;
  width: 100%;
  height: 80vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;

  .steps {
    position: absolute;
    top: 6vh;
    left: 15vw;

    h3 {
      font-size: 24px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 4px;
      color: rgba($color: #fff, $alpha: 0.5);
      span {
        font-weight: 300;
        margin-left: 20px;
        color: rgba($color: #fff, $alpha: 0.8);
      }
    }
  }

  .wrap {
    margin-top: 30px;
    margin-right: 20px;
    display: flex;
    gap: 150px;

    img {
      margin-top: 30px;
      flex: 1;
      width: 410px;
      height: 410px;
      transition: 500ms ease all;
      animation: fade ease 2s;
    }

    .info {
      flex: 1;
      display: flex;
      flex-direction: column;

      .nav-planets {
        margin-bottom: 40px;
        display: flex;
        gap: 55px;

        .nav-item {
          border: 2px solid rgba($color: #fff, $alpha: 0);
          border-width: 0 0 2px 0;
          height: 36px;
          cursor: pointer;
          transition: 400ms ease all;

          span {
            font-weight: 300;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: rgba($color: #fff, $alpha: 0.6);
          }
        }

        .nav-item:hover {
          border-color: #fff;

          span {
            color: #fff;
          }
        }

        .isSelected {
          border-color: #fff;
          transition: 400ms ease all;
        }
      }

      .info-name {
        h1 {
          font-family: "Forum", cursive;
          font-size: 100px;
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 10px;
        }
      }

      .info-desc {
        margin-top: 30px;
        p {
          width: 380px;
          color: rgba($color: #fff, $alpha: 0.5);
          font-size: 16px;
          font-weight: 100;
          line-height: 24px;
          letter-spacing: 1px;
        }
      }

      .vline {
        margin: 30px 0;
        width: 390px;
        height: 1px;
        background: rgba($color: #fff, $alpha: 0.15);
      }

      .numbers {
        display: flex;
        gap: 70px;

        .num-item {
          display: flex;
          flex-direction: column;
          gap: 12px;

          span {
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 12px;
            color: rgba($color: #fff, $alpha: 0.6);
          }

          h4 {
            font-family: "Forum", cursive;
            font-size: 26px;
            font-weight: 300;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
        }
      }
    }
  }
}
</style>
