<template>
  <div class="work">
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
      <div class="describe">
        <p>
          To become better at coding (or any thing) the only way is try to
          pratice with lots of Projects, so these are some projects that I’ve
          built so far. They’re not so complicated but I’ve learned a lot from
          it.
        </p>
      </div>
      <div class="project-wrap">
        <div
          @click="openProject(item.code)"
          v-show="index <= currentShow"
          v-for="(item, index) in projects"
          :key="index"
          class="project-card"
        >
          <div class="title">
            <h3>{{ item.name }}</h3>
          </div>
          <div class="description">
            <h4>{{ item.description }}</h4>
          </div>
          <img :src="item.cover" alt="" />
        </div>
      </div>
      <div
        v-if="currentShow < projects.length"
        @click="handleLoadMore"
        class="load-more"
      >
        <span>Load more...</span>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Work",
  data() {
    return {
      projects: [
        {
          code: "Accordion",
          name: "Simple Accordion FAQ page",
          description: "I built a FAQ page in accordion style using VueJS.",
          cover: require("@/assets/Work/faq-cover.jpg"),
        },
        {
          code: "Todo",
          name: "Todo app with themes",
          description:
            "A begineer’s project, I tried to add more style and theme’s switching.",
          cover: require("@/assets/Work/todo-cover.jpg"),
        },
        {
          code: "IPTracking",
          name: "IP Address Tracker project.",
          description:
            "I built an IP Tracker that can track and locate your IP on the map.",
          cover: require("@/assets/Work/ip-tracker-cover.jpg"),
        },
        {
          code: "Country",
          name: "REST Countries API project.",
          description:
            "A country app that we can search information about countries.",
          cover: require("@/assets/Work/countries-cover.jpg"),
        },
        {
          code: "TipCalculator",
          name: "Tip Calculator.",
          description: "I built a tip calculator with VueJS, HTML&CSS",
          cover: require("@/assets/Work/tip-calculator-cover.jpg"),
        },
        {
          code: "SpaceTourism",
          name: "Space Tourism.",
          description:
            "A simple Space Tourism website, the project based on FrontEnd Mentor website.",
          cover: require("@/assets/Work/space-tourism-cover.jpg"),
        },
      ],
      currentShow: 3,
    };
  },
  methods: {
    handleLoadMore() {
      this.currentShow += 2;
    },
    openProject(code) {
      this.$router.push({ name: code });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Poppins:wght@400;500;600&display=swap");

img {
  width: 50px;
  height: 50px;
}

.work {
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

      .nav-link:first-child {
        border-color: rgba($color: #000060, $alpha: 1);
      }

      .nav-link:hover {
        border-color: rgba($color: #000060, $alpha: 1);
      }
    }
  }

  main {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    color: #000060;
    padding-bottom: 50px;

    .describe {
      font-family: "Merriweather", serif;
      font-size: 22px;
      width: 80%;
      margin: 0 auto;
      text-align: center;
      line-height: 40px;
    }

    .project-wrap {
      font-family: "Poppins", sans-serif;
      margin-top: 80px;
      display: grid;
      gap: 50px;
      grid-template-columns: repeat(2, 1fr);
      padding: 0 30px;
      overflow: auto;

      .project-card {
        margin: auto;
        width: 500px;
        height: 200px;
        padding-left: 20px;
        border-radius: 12px;
        background: #fff;
        display: flex;
        flex-direction: column;
        position: relative;
        cursor: pointer;
        transition: 400ms ease all;

        .title {
          margin-top: 20px;
          margin-bottom: 20px;
          font-size: 18px;
          width: 50%;
        }

        .description {
          width: 40%;
          font-size: 16px;
        }

        img {
          position: absolute;
          width: 200px;
          height: 200px;
          right: 0;
          object-fit: cover;
          border-radius: 0 12px 12px 0;
        }
      }

      .project-card:hover {
        transform: scale(1.02);
      }
    }

    .load-more {
      position: fixed;
      left: 50%;
      bottom: 10px;
      width: 100px;
      height: 30px;
      transform: translateX(-50px);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
}
::-webkit-scrollbar {
  width: 0; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
</style>
