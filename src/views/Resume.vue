<template>
  <div class="resume">
    <header>
      <div class="logo">
        <router-link class="logo-item" :to="{ name: 'Home' }"
          >npcuong.com</router-link
        >
      </div>
      <nav>
        <router-link class="nav-link" :to="{ name: 'Work' }">work</router-link>
        <router-link class="nav-link" :to="{ name: 'Blog' }">blog</router-link>
        <router-link class="nav-link" :to="{ name: 'Resume' }"
          >resume</router-link
        >
      </nav>
    </header>
    <main>
      <div @click="handleBack" class="back-cover">
        <img ref="details" src="@/assets/Resume/resume.jpg" alt="" />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Resume",
  components: {},
  data() {
    return {};
  },
  methods: {
    handleBack(e) {
      if (e.target !== this.$refs.details) {
        this.$router.go(-1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.resume {
  height: 100vh;
  background: linear-gradient(
    to bottom right,
    rgba($color: #ce8af6, $alpha: 0.5),
    #7788d400
  );
  cursor: default;
  overflow: auto;

  header {
    width: 100%;
    height: 8vh;
    border: 1px solid #1182d4;
    border-width: 0 0 1px 0;
    display: flex;
    align-items: center;
    font-family: "Poppins", sans-serif;

    .logo {
      flex: 1;
      margin-left: 50px;

      .logo-item {
        font-size: 24px;
        color: #000060;
        text-decoration: none;
        font-weight: 600;
      }
    }

    nav {
      margin-right: 100px;
      flex: 1;
      display: flex;
      justify-content: space-evenly;

      .nav-link {
        text-decoration: none;
        color: #000060;
        padding: 4px 10px;
        border: 1px solid rgba($color: #000060, $alpha: 0);
        border-width: 0 0 1px 0;
        transition: 500ms ease all;
      }

      .nav-link:first-child {
        border-color: rgba($color: #000060, $alpha: 1);
      }

      .nav-link:hover {
        border-color: rgba($color: #000060, $alpha: 1);
      }
    }
  }
  main {
    position: relative;

    .back-cover {
      position: absolute;
      top: -8vh;
      width: 100vw;
      height: 120vh;
      background: rgba($color: #000000, $alpha: 0.4);
      display: flex;
      justify-content: center;

      img {
        object-fit: scale-down;
        width: 50vw;
      }
    }
  }
}
</style>
