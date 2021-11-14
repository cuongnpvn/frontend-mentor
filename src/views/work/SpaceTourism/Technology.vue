<template>
  <img
    class="bg"
    src="@/assets/SpaceTourism/background-technology.jpg"
    alt=""
  />
  <Heading />
  <main>
    <div class="steps">
      <h3>03 <span>Space launch 101</span></h3>
    </div>
    <div class="wrap">
      <div class="content">
        <div class="nav-links">
          <div
            @click="handleTech(0)"
            class="nav-item"
            :class="{ isSelected: currentShow == 0 }"
          >
            <span>1</span>
          </div>
          <div
            @click="handleTech(1)"
            class="nav-item"
            :class="{ isSelected: currentShow == 1 }"
          >
            <span>2</span>
          </div>
          <div
            @click="handleTech(2)"
            class="nav-item"
            :class="{ isSelected: currentShow == 2 }"
          >
            <span>3</span>
          </div>
        </div>
        <div class="details">
          <span>The terminology...</span>
          <h1 class="name">{{ getTechInfo.name }}</h1>
          <p class="desc">{{ getTechInfo.description }}</p>
        </div>
      </div>
      <img :src="getTechInfo.image" alt="" />
    </div>
  </main>
</template>

<script>
import Heading from "@/components/SpaceTourism/Heading.vue";
export default {
  name: "Technology",
  components: {
    Heading,
  },
  data() {
    return {
      techList: this.$store.state.technology,
      currentShow: 0,
    };
  },
  created() {
    this.getTechInfo;
  },
  methods: {
    handleTech(value) {
      this.currentShow = value;
    },
  },
  computed: {
    getTechInfo() {
      return this.techList[this.currentShow];
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
    width: 100%;
    height: 40vh;
    position: relative;

    .content {
      margin-left: 15vw;
      width: 50vw;
      display: flex;

      .nav-links {
        flex-basis: 20%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px;

        .nav-item {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #fff;
          background: transparent;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          transition: 400ms ease all;
          cursor: pointer;

          span {
            color: #fff;
            font-size: 24px;
            font-weight: 300;
          }
        }

        .nav-item:hover {
          background: rgba($color: #fff, $alpha: 0.9);
          box-shadow: 0 0 10px 10px rgba($color: #fff, $alpha: 0.1);

          span {
            color: #000;
          }
        }

        .isSelected {
          background: #fff;
          span {
            color: #000;
          }
        }
      }

      .details {
        width: 500px;
        span {
          text-transform: uppercase;
          font-size: 18px;
          font-weight: 300;
          color: rgba($color: #fff, $alpha: 0.4);
        }

        .name {
          font-family: "Forum", cursive;
          margin: 20px 0;
          font-size: 58px;
          font-weight: 300;
          text-transform: uppercase;
        }

        .desc {
          width: 70%;
          height: 200px;
          color: rgba($color: #fff, $alpha: 0.8);
          font-weight: 300;
          letter-spacing: 1.1px;
          line-height: 26px;
        }
      }
    }

    img {
      height: 530px;
      width: 500px;
      position: absolute;
      right: 0;
      bottom: -120px;
      object-fit: cover;
    }
  }
}
</style>
