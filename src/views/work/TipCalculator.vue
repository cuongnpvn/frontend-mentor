<template>
  <div class="container">
    <div class="calculator">
      <div class="left">
        <div class="bill">
          <h5>Bill</h5>
          <img src="@/assets/TipCalculator/icon-dollar.svg" alt="" />
          <input type="number" placeholder="0" v-model="bill" />
          <span v-if="billError">Input must be a number</span>
        </div>
        <div class="tip">
          <h5>Select Tip %</h5>
          <div class="item-wrap">
            <div @click="selectTip(0.05)" class="tip-item">
              <span>5%</span>
            </div>
            <div @click="selectTip(0.1)" class="tip-item">
              <span>10%</span>
            </div>
            <div @click="selectTip(0.15)" class="tip-item">
              <span>15%</span>
            </div>
            <div @click="selectTip(0.25)" class="tip-item">
              <span>25%</span>
            </div>
            <div @click="selectTip(0.5)" class="tip-item">
              <span>50%</span>
            </div>
            <div class="tip-item custom">
              <input type="text" placeholder="Custom" v-model="tip" />
            </div>
          </div>
        </div>
        <div class="people">
          <h5>Number of People</h5>
          <img src="@/assets/TipCalculator/icon-person.svg" alt="" />
          <input type="number" placeholder="0" v-model="numOfPeople" />
          <span v-if="peopleError">Input must be a number</span>
        </div>
      </div>
      <div class="right">
        <div class="amount">
          <div class="wrap">
            <h4>Tip Amount</h4>
            <p>/ person</p>
          </div>
          <div class="number">${{ getTipAmount }}</div>
        </div>
        <div class="total">
          <div class="wrap">
            <h4>Total</h4>
            <p>/ person</p>
          </div>
          <div class="number">${{ getTotal }}</div>
        </div>
        <button @click="handleReset" class="reset-btn">reset</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TipCalculator",
  data() {
    return {
      bill: null,
      tip: 0,
      numOfPeople: null,
      billError: null,
      peopleError: null,
    };
  },
  methods: {
    selectTip(value) {
      this.tip = value;
    },
    handleReset() {
      this.bill = 0;
      this.tip = "Custom";
      this.numOfPeople = 0;
    },
  },
  computed: {
    getTipAmount() {
      if (this.tip == "Custom") {
        return "0.00";
      }
      return (this.bill * this.tip).toFixed(2);
    },
    getTotal() {
      if (this.tip == "Custom") {
        return "0.00";
      }
      return ((this.bill * this.tip).toFixed(2) * this.numOfPeople).toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap");
.container {
  background: hsl(185, 41%, 84%);
  font-family: "Space Mono", monospace;

  .calculator {
    background: #fff;
    width: 50%;
    height: 50%;
    border-radius: 20px;
    padding: 25px;
    display: flex;
    cursor: default;

    .left {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 8px 0;
      color: hsl(184, 14%, 56%);

      .bill {
        display: flex;
        flex-direction: column;
        position: relative;
        margin-bottom: 30px;

        h5 {
          margin-bottom: 4px;
        }

        img {
          position: absolute;
          width: 10px;
          height: 16px;
          color: hsl(184, 14%, 56%);
          top: 36px;
          left: 12px;
        }

        input {
          height: 36px;
          text-align: right;
          color: hsl(184, 14%, 56%);
          padding-right: 12px;
          background: hsl(189, 41%, 97%);
          border: none;
          border-radius: 6px;
          font-family: "Space Mono", monospace;
          font-size: 22px;
          cursor: pointer;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input:focus {
          outline: none;
          border: 2px solid rgb(36, 167, 154);
          border-radius: 6px;
        }

        input:hover {
          outline: none;
        }
      }

      .tip {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;

        h5 {
          margin-bottom: 8px;
        }

        .item-wrap {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;

          .tip-item {
            height: 40px;
            border-radius: 6px;
            background: rgb(0, 71, 75);
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            cursor: pointer;
            font-weight: 700;
          }

          .tip-item:last-child {
            background: hsl(189, 41%, 97%);
            color: hsl(183, 100%, 15%);
            font-weight: 700;
            justify-content: right;

            input {
              height: 40px;
              width: 103px;
              text-align: right;
              font-size: 18px;
              color: hsl(186, 14%, 43%);
              font-family: "Space Mono", monospace;
              font-weight: 700;
              padding-right: 8px;
              border: none;
              background: none;
              cursor: pointer;
            }

            input:focus {
              background: hsl(172, 67%, 45%);
              color: hsl(183, 100%, 15%);
              outline: none;
              border-radius: 6px;
              caret-color: transparent;
            }
          }

          .tip-item:hover {
            background: hsl(172, 67%, 45%);
            color: hsl(183, 100%, 15%);
          }
        }
      }

      .people {
        margin-top: 30px;
        position: relative;

        h5 {
          margin-bottom: 4px;
        }

        img {
          position: absolute;
          top: 30px;
          left: 9px;
        }

        input {
          width: 100%;
          height: 36px;
          text-align: right;
          color: hsl(184, 14%, 56%);
          padding-right: 12px;
          background: hsl(189, 41%, 97%);
          border: none;
          font-family: "Space Mono", monospace;
          font-size: 22px;
          cursor: pointer;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input:focus {
          outline: none;
          border: 2px solid rgb(36, 167, 154);
          border-radius: 6px;
        }
      }
    }

    .right {
      flex: 0.9;
      margin-left: 20px;
      border-radius: 12px;
      background: rgb(0, 71, 75);
      padding-left: 20px;
      display: flex;
      flex-direction: column;

      .amount,
      .total {
        margin-top: 40px;
        display: flex;

        .wrap {
          width: 70%;
          display: flex;
          flex-direction: column;

          h4 {
            font-size: 20px;
            color: #fff;
          }

          p {
            font-size: 14px;
            color: hsl(184, 14%, 56%);
            font-weight: 700;
          }
        }

        .number {
          margin-right: 20px;
          height: 60px;
          background: none;
          border: none;
          font-size: 40px;
          font-family: "Space Mono", monospace;
          color: rgb(36, 167, 154);
          font-weight: 700;
        }
      }

      .total {
        margin-bottom: 90px;
      }

      .reset-btn {
        margin-right: 20px;
        height: 36px;
        background: rgb(36, 167, 154);
        border-radius: 6px;
        border: none;
        font-size: 18px;
        font-family: "Space Mono", monospace;
        font-weight: 700;
        color: #fff;
        cursor: pointer;
        transition: 300ms ease all;
      }

      .reset-btn:hover {
        transform: scale(0.98);
      }
    }
  }
}
</style>
