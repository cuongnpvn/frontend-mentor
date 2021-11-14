<template>
  <img src="@/assets/SpaceTourism/background-home.jpg" alt="" />
  <Heading />
  <main>
    <div class="intro">
      <div class="subtitle">
        <h3>So, you want to travel to</h3>
      </div>
      <div class="title">
        <h1>Space</h1>
      </div>
      <div class="description">
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
    </div>
    <div class="explore">
      <h2>Explore</h2>
    </div>
  </main>
</template>

<script>
import Heading from "@/components/SpaceTourism/Heading.vue";

export default {
  name: "Home",
  components: {
    Heading,
  },
  data() {
    return {
      currentStage: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Forum&family=Montserrat:wght@400;500&family=Oswald:wght@300;400&display=swap");
* {
  font-family: "Oswald", sans-serif;
  color: #fff;
  cursor: default;
}

img {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  object-fit: cover;
}

main {
  position: relative;
  width: 100%;
  height: 60vh;
  margin-top: 27vh;

  .intro {
    position: absolute;
    left: 13vw;

    .subtitle {
      h3 {
        font-size: 24px;
        font-weight: 300;
        text-transform: uppercase;
        color: rgba($color: #fff, $alpha: 0.9);
        letter-spacing: 3px;
      }
    }

    .title {
      margin: 25px 0;

      h1 {
        font-family: "Forum", cursive;
        font-size: 140px;
        font-weight: 200;
        text-transform: uppercase;
      }
    }

    .description {
      width: 370px;

      p {
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        color: rgba($color: #fff, $alpha: 0.7);
        font-size: 13px;
        line-height: 24px;
      }
    }
  }

  .explore {
    position: absolute;
    right: 200px;
    top: 120px;
    width: 240px;
    height: 240px;
    background: rgba($color: #fff, $alpha: 1);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 400ms ease all;

    h2 {
      font-family: "Forum", cursive;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 38px;
      font-weight: 300;
      color: #000;
    }
  }

  .explore:hover {
    transform: scale(1.03);
    box-shadow: 0 0 30px 5px rgba($color: #fff, $alpha: 0.5);
  }
}
</style>
