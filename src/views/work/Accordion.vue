<template>
  <div class="container">
    <div class="accordion">
      <div class="left">
        <img src="@/assets/Accordion/bg-pattern-desktop.svg" alt="" />
        <img src="@/assets/Accordion/illustration-box-desktop.svg" alt="" />
        <img
          src="@/assets/Accordion/illustration-woman-online-desktop.svg"
          alt=""
        />
      </div>
      <div class="right">
        <h2>FAQ</h2>
        <div class="question-wrap">
          <div
            class="question"
            :class="{ selectQuestion: showAnswer[0] }"
            @click="handleQuestion(0)"
          >
            <label>How many team members can I invite?</label>
            <img src="@/assets/Accordion/icon-arrow-down.svg" alt="" />
            <p class="answer" :class="{ showAnwer: showAnswer1 }">
              You can invite up to 2 additional users on the Free plan. There is
              no limit on team members for the Premium plan.
            </p>
          </div>
          <div
            class="question"
            :class="{ selectQuestion: showAnswer[1] }"
            @click="handleQuestion(1)"
          >
            <label>What is the maximum file upload size?</label>
            <img src="@/assets/Accordion/icon-arrow-down.svg" alt="" />
            <p class="answer" :class="{ showAnwer: showAnswer2 }">
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </p>
          </div>
          <div
            class="question"
            :class="{ selectQuestion: showAnswer[2] }"
            @click="handleQuestion(2)"
          >
            <label>How do I reset my password?</label>
            <img src="@/assets/Accordion/icon-arrow-down.svg" alt="" />
            <p class="answer" :class="{ showAnwer: showAnswer3 }">
              Click “Forgot password” from the login page or “Change password”
              from your profile page. A reset link will be emailed to you.
            </p>
          </div>
          <div
            class="question"
            :class="{ selectQuestion: showAnswer[3] }"
            @click="handleQuestion(3)"
          >
            <label>Can I cancel my subscription?</label>
            <img src="@/assets/Accordion/icon-arrow-down.svg" alt="" />
            <p class="answer" :class="{ showAnwer: showAnswer4 }">
              Yes! Send us a message and we’ll process your request no questions
              asked.
            </p>
          </div>
          <div
            class="question"
            :class="{ selectQuestion: showAnswer[4] }"
            @click="handleQuestion(4)"
          >
            <label>Do you provide additional support?</label>
            <img src="@/assets/Accordion/icon-arrow-down.svg" alt="" />
            <p class="answer" :class="{ showAnwer: showAnswer5 }">
              Chat and email support is available 24/7. Phone lines are open
              during normal business hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {},
  data() {
    return {
      showAnswer: [0, 0, 0, 0, 0],
      question: null,
    };
  },
  methods: {
    handleQuestion(idx) {
      if (this.showAnswer[idx] == 0) {
        this.showAnswer = [0, 0, 0, 0, 0];
        this.showAnswer[idx] = 1;
      } else {
        this.showAnswer = [0, 0, 0, 0, 0];
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");

.container {
  background: linear-gradient(
    to bottom,
    hsl(273, 75%, 66%),
    hsl(240, 73%, 65%)
  );

  .accordion {
    width: 65%;
    height: 65%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    box-shadow: 0 30px 20px -10px rgba($color: #000000, $alpha: 0.25);
    font-family: "Kumbh Sans", sans-serif;
    position: relative;

    .left {
      flex: 1;
      position: relative;

      img {
        position: absolute;
      }

      img:nth-child(1) {
        z-index: 1;
        width: 600px;
        height: 700px;
        top: -380px;
        left: -220px;
      }

      img:nth-child(2) {
        z-index: 3;
        width: 200px;
        height: 200px;
        top: -60px;
        left: -100px;
      }
      img:nth-child(3) {
        z-index: 2;
        width: 480px;
        height: 400px;
        top: -200px;
        left: -80px;
      }
    }
    .right {
      flex: 1;
      display: block;
      flex-direction: column;
      margin-right: 80px;
      margin-left: 60px;
      cursor: default;
      color: hsl(237, 12%, 33%);

      h2 {
        top: 70px;
        position: absolute;
        margin-bottom: 28px;
        font-size: 30px;
        font-weight: 700;
      }

      .question-wrap {
        top: 30%;
        position: absolute;
        .question {
          display: flex;
          flex-direction: column;
          margin-bottom: 18px;
          border: 1px solid hsl(233, 5%, 63%);
          border-width: 0 0 1px 0;
          position: relative;
          overflow: hidden;
          max-height: 30px;
          transition: 500ms ease all;
          width: 80%;

          label {
            font-size: 16px;
            margin-bottom: 8px;
            font-weight: 400;
            cursor: pointer;
          }

          input {
            display: none;
          }

          img {
            cursor: pointer;
            position: absolute;
            width: 16px;
            height: 12px;
            right: 0;
            top: 4px;
            transition: 600ms ease all;
          }

          .answer {
            font-size: 12px;
            margin-bottom: 8px;
            color: hsl(237, 12%, 33%);
          }

          .showAnswer {
            display: block;
          }
        }

        .selectQuestion {
          max-height: 100px;
          color: hsl(14, 88%, 65%);

          img {
            transform: rotateZ(-180deg);
          }
        }
      }
    }
  }
}
</style>
