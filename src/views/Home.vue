<template>
  <div class="home">
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
      <div class="greet">
        <h2>Hello!</h2>
      </div>
      <div class="name">
        <h1>I'm Cuong Nguyen</h1>
      </div>
      <div class="describe">
        <p>I'm a Fronend Developer specialized in VueJS.</p>
        <p>I'm also interested Data Science and Machine Learning.</p>
      </div>
      <div class="contact">
        <p>I'm currently looking for a job...</p>
        <div class="contact-links">
          <div class="column">
            <div class="contact-item">
              <img src="@/assets/Home/logo-mail.svg" alt="" />
              <span>tommynguyen.pc99@gmail.com</span>
            </div>
            <div class="contact-item">
              <img src="@/assets/Home/logo-linkedin.svg" alt="" />
              <span>linkedin.com/in/cuong-nguyen-a5bab71ba/</span>
            </div>
          </div>
          <div class="column">
            <div class="contact-item">
              <img src="@/assets/Home/logo-github.svg" alt="" />
              <span>github.com/cuongnpvn</span>
            </div>
            <div class="contact-item">
              <img src="@/assets/Home/logo-facebook.svg" alt="" />
              <span>fb.com/cuongnguyen</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Poppins:wght@400;500;600&display=swap");

img {
  width: 20px;
  height: 20px;
}

.home {
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

      .nav-link:hover {
        border-color: rgba($color: #000060, $alpha: 1);
      }
    }
  }

  main {
    display: flex;
    justify-content: center;
    position: relative;
    font-family: "Merriweather", serif;
    color: #000060;

    .greet {
      position: absolute;
      top: 22vh;
      left: 8.7vw;
      h2 {
        font-size: 36px;
      }
    }

    .name {
      position: absolute;
      top: 30vh;
      left: 11vw;
      font-size: 22px;
    }

    .describe {
      position: absolute;
      top: 39vh;
      left: 46vh;
      font-size: 30px;
      line-height: 60px;
    }

    .contact {
      width: 55vw;
      height: 20vh;
      margin-top: 72vh;
      background: #f7f7f7;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: "Poppins", sans-serif;
      border: 1px solid #000060;
      border-radius: 12px 12px 0 0;

      p {
        margin-bottom: 12px;
        font-size: 18px;
        font-weight: 600;
      }

      .contact-links {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .column {
          padding: 10px 40px;
          display: flex;
          flex-direction: column;

          .contact-item {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>
