<template>
  <div class="blog">
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
          >resumé</router-link
        >
      </nav>
    </header>
    <main>
      <img src="@/assets/Blog/icon-coming-soon.svg" alt="" />
      <h2>Coming Soon!</h2>
      <p>
        Thanks for visiting, I'm working hard to give you the best experience.
      </p>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.blog {
  height: 100vh;
  background: linear-gradient(
    to bottom right,
    rgba($color: #ce8af6, $alpha: 0.5),
    #7788d400
  );
  cursor: default;

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
        font-size: 26px;
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

      .nav-link:nth-child(2) {
        border-color: rgba($color: #000060, $alpha: 1);
      }

      .nav-link:hover {
        border-color: rgba($color: #000060, $alpha: 1);
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 18vh;
    font-family: "Merriweather", serif;
    color: #000060;

    img {
      widows: 225px;
      height: 225px;
    }

    h2 {
      margin-top: 30px;
      font-size: 28px;
    }

    p {
      margin-top: 28px;
      font-size: 20px;
    }
  }
}
</style>
