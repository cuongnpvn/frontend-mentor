<template>
  <img class="bg" src="@/assets/SpaceTourism/background-crew.jpg" alt="" />
  <Heading />
  <main>
    <div class="steps">
      <h3>02 <span>Meet your crew</span></h3>
    </div>
    <div class="wrap">
      <div class="info">
        <div class="role">
          <span>{{ getCrewInfo.role }}</span>
        </div>
        <div class="name">
          <h1>{{ getCrewInfo.name }}</h1>
        </div>
        <div class="bio">
          <p>
            {{ getCrewInfo.bio }}
          </p>
        </div>
        <div class="nav-links">
          <div
            @click="handleCrew(0)"
            class="nav-item"
            :class="{ isSelected: currentShow == 0 }"
          ></div>
          <div
            @click="handleCrew(1)"
            class="nav-item"
            :class="{ isSelected: currentShow == 1 }"
          ></div>
          <div
            @click="handleCrew(2)"
            class="nav-item"
            :class="{ isSelected: currentShow == 2 }"
          ></div>
          <div
            @click="handleCrew(3)"
            class="nav-item"
            :class="{ isSelected: currentShow == 3 }"
          ></div>
        </div>
      </div>
      <img :src="getCrewInfo.image" alt="" />
    </div>
  </main>
</template>

<script>
import Heading from "@/components/SpaceTourism/Heading.vue";
export default {
  name: "Crew",
  components: {
    Heading,
  },
  data() {
    return {
      crewList: this.$store.state.crew,
      currentShow: 0,
    };
  },
  created() {
    this.getCrewInfo;
  },
  methods: {
    handleCrew(value) {
      this.currentShow = value;
    },
  },
  computed: {
    getCrewInfo() {
      return this.crewList[this.currentShow];
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
    height: 100%;
    margin-top: 30vh;
    display: flex;
    justify-content: center;
    gap: 100px;

    .info {
      height: 60vh;
      margin: auto 0;
      margin-right: 40px;
      width: 40vw;
      padding-left: 8.7vw;

      .role {
        margin-bottom: 30px;

        span {
          font-family: "Forum", cursive;
          color: rgba($color: #fff, $alpha: 0.7);
          font-size: 28px;
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 4px;
        }
      }

      .name {
        width: 500px;
        margin: 30px 0;

        h1 {
          font-family: "Forum", cursive;
          font-size: 45px;
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 4px;
        }
      }

      .bio {
        width: 80%;
        height: 180px;

        p {
          color: rgba($color: #fff, $alpha: 0.7);
          font-weight: 300;
          letter-spacing: 1.1px;
          line-height: 26px;
        }
      }

      .nav-links {
        width: 30%;
        height: 10px;
        display: flex;
        justify-content: space-between;

        .nav-item {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba($color: #fff, $alpha: 0.2);
          transition: 400ms ease all;
        }

        .nav-item:hover {
          background: rgba($color: #fff, $alpha: 1);
        }

        .isSelected {
          background: rgba($color: #fff, $alpha: 1);
        }
      }
    }

    img {
      width: 540px;
      height: 540px;
    }
  }
}
</style>
