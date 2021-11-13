<template>
  <div class="container" :class="{ lightTheme: currentTheme }">
    <img
      v-if="currentTheme"
      class="bg"
      src="@/assets/Todo/bg-desktop-dark.jpg"
      alt=""
    />
    <img v-else class="bg" src="@/assets/Todo/bg-desktop-light.jpg" alt="" />
    <div class="todo">
      <header>
        <h2>Todo</h2>
        <img
          @click="toggleTheme"
          v-if="currentTheme"
          src="@/assets/Todo/icon-moon.svg"
          alt=""
        />
        <img
          @click="toggleTheme"
          v-else
          src="@/assets/Todo/icon-sun.svg"
          alt=""
        />
      </header>
      <div class="input-wrap" :class="{ lightTheme: currentTheme }">
        <div class="circle"></div>
        <form @submit.prevent="addTodo">
          <input
            type="text"
            placeholder="Create new item..."
            v-model="newTodo"
          />
        </form>
      </div>
      <div
        @dragenter.prevent
        @dragover.prevent
        :class="{ lightTheme: currentTheme }"
        class="todo-wrap"
      >
        <div
          @drop="onDrop($event, item)"
          v-for="(item, idx) in filteredTodos"
          :key="idx"
          :class="{ lightTheme: currentTheme }"
          class="item-wrap"
          draggable="true"
          @dragstart="startDrag($event, item)"
        >
          <input
            @click="handleCheck(item.id)"
            type="checkbox"
            :id="item.id"
            :checked="item.completed"
          />
          <label
            :class="{ isCompleted: item.completed, lightTheme: currentTheme }"
            :for="item.id"
            >{{ item.name }}</label
          >
          <img
            @click="removeTodo(item.id)"
            src="@/assets/Todo/icon-cross.svg"
            alt=""
          />
        </div>
        <div class="actions">
          <span class="left">{{ filteredTodos.length }} items left</span>
          <div class="filter">
            <span
              @click="handleFilter(0)"
              :class="{ currentFilter: filterAll }"
              class="all"
              >All</span
            >
            <span
              @click="handleFilter(1)"
              :class="{ currentFilter: filterActive }"
              class="active"
              >Active</span
            >
            <span
              @click="handleFilter(2)"
              :class="{ currentFilter: filterCompleted }"
              class="completed"
              >Completed</span
            >
          </div>
          <span @click="clearCompleted" class="clear">Clear Completed</span>
        </div>
      </div>
      <div class="notes">
        <span>Drag and drop to reorder list</span>
      </div>
    </div>
  </div>
</template>

<script>
import { uid } from "uid";

export default {
  name: "Todo",
  data() {
    return {
      todoList: [
        { id: uid(4), name: "Complete online JavaScript", completed: false },
        { id: uid(4), name: "Jog around the park 3x", completed: false },
        { id: uid(4), name: "10 minutes meditation", completed: false },
        { id: uid(4), name: "Read for 1 hour", completed: false },
        { id: uid(4), name: "Pick up groceries", completed: false },
        { id: uid(4), name: "Complete Todo App", completed: false },
      ],
      newTodo: "",
      filterAll: true,
      filterActive: null,
      filterCompleted: null,
      // current theme: false for day, true for night
      currentTheme: true,
    };
  },
  methods: {
    handleCheck(id) {
      this.todoList.forEach((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      });
      console.log(this.todoList);
    },
    addTodo() {
      this.todoList.unshift({
        id: uid(4),
        name: this.newTodo,
        completed: false,
      });
      this.newTodo = "";
      console.log(this.todoList);
    },
    removeTodo(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },
    handleFilter(option) {
      // all todos
      if (option == 0) {
        this.filterAll = true;
        this.filterActive = false;
        this.filterCompleted = false;
      } else if (option == 1) {
        this.filterAll = false;
        this.filterActive = true;
        this.filterCompleted = false;
      } else if (option == 2) {
        this.filterAll = false;
        this.filterActive = false;
        this.filterCompleted = true;
      }
    },
    clearCompleted() {
      this.todoList = this.todoList.filter((todo) => todo.completed == false);
    },
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", item.id);
    },
    onDrop(evt, item) {
      // remove old position
      let itemID = evt.dataTransfer.getData("itemID");
      let dragItem = this.todoList.find((todo) => todo.id == itemID);
      this.todoList = this.todoList.filter((todo) => todo.id !== dragItem.id);

      // add to new position
      let idx = this.todoList.map((todo) => todo.id).indexOf(item.id);
      this.todoList.splice(idx, 0, dragItem);
    },
    toggleTheme() {
      this.currentTheme = !this.currentTheme;
      console.log(this.currentTheme);
    },
  },
  computed: {
    filteredTodos() {
      // all todos
      if (this.filterActive == true) {
        return this.todoList.filter((todo) => todo.completed == false);
      } else if (this.filterCompleted == true) {
        return this.todoList.filter((todo) => todo.completed == true);
      } else {
        return this.todoList;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");

.container {
  background: hsl(235, 21%, 11%);
  position: relative;
  cursor: default;
  transition: 400ms ease all;

  .bg {
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .todo {
    z-index: 2;
    width: 40%;
    height: 75%;
    font-family: "Josefin Sans", sans-serif;

    header {
      margin-bottom: 40px;
      display: flex;
      justify-content: space-between;

      h2 {
        margin-top: 10px;
        font-size: 50px;
        color: #fff;
        letter-spacing: 10px;
        text-transform: uppercase;
        font-weight: 400;
      }

      img {
        margin-top: 16px;
        margin-right: 24px;
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }

    .input-wrap {
      width: 100%;
      display: flex;
      align-items: center;
      background: hsl(235, 24%, 19%);
      height: 50px;
      border-radius: 8px;
      box-shadow: 0 20px 10px -5px rgba($color: #000000, $alpha: 0.2);
      transition: 400ms ease all;

      .circle {
        width: 20px;
        height: 20px;
        border: 1px solid hsl(237, 14%, 26%);
        border-radius: 50%;
        margin: 0 12px;
      }

      input {
        width: 400px;
        height: 30px;
        background: none;
        border: none;
        font-size: 18px;
        color: hsl(234, 39%, 85%);
        font-family: "Josefin Sans", sans-serif;
      }

      input:focus {
        outline: none;
      }
    }

    .lightTheme {
      background: #fff;
    }

    .todo-wrap {
      margin-top: 20px;
      border-radius: 8px;
      background: hsl(235, 24%, 19%);
      display: flex;
      flex-direction: column;
      gap: 4px;
      transition: 400ms ease all;

      .item-wrap {
        width: 575px;
        height: 50px;
        border: 1px solid hsl(237, 14%, 26%);
        border-width: 0 0 1px 0;
        display: flex;
        align-items: center;
        position: relative;
        background: hsl(235, 24%, 19%);

        input[type="checkbox"] {
          display: none;
        }

        .isCompleted {
          text-decoration: line-through;
          color: hsl(235, 19%, 35%);
        }

        label {
          color: hsl(234, 39%, 85%);
          margin-left: 45px;
          cursor: pointer;
          font-size: 18px;
        }

        .lightTheme {
          color: hsl(235, 19%, 35%);
        }

        label::before {
          position: absolute;
          content: "";
          width: 20px;
          height: 20px;
          border: 1px solid hsl(237, 14%, 26%);
          border-radius: 50%;
          margin: 0 12px;
          left: 0px;
          top: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input:checked + label::before {
          content: url("../../assets/Todo/icon-check.svg");
          width: 20px;
          height: 20px;
          background: linear-gradient(
            to bottom right,
            hsl(192, 100%, 67%),
            hsl(280, 87%, 65%)
          );
        }

        img {
          position: absolute;
          right: 25px;
          cursor: pointer;
        }
      }
      .lightTheme {
        background: #fff;
        border-color: hsl(236, 33%, 92%);
      }

      .item-wrap:first-child {
        border-radius: 8px 8px 0 0;
      }

      .actions {
        display: flex;
        justify-content: space-between;
        height: 40px;
        align-items: center;

        .left {
          color: hsl(235, 19%, 35%);
          margin-left: 12px;
        }

        .filter {
          display: flex;
          gap: 12px;
          color: hsl(235, 19%, 35%);

          .all,
          .active,
          .completed {
            cursor: pointer;
          }

          .all:hover,
          .active:hover,
          .completed:hover {
            color: hsl(234, 39%, 85%);
          }

          .currentFilter {
            color: rgb(38, 38, 255);
          }
        }

        .clear {
          margin-right: 12px;
          cursor: pointer;
          color: hsl(235, 19%, 35%);
        }

        .clear:hover {
          color: hsl(234, 39%, 85%);
        }
      }
    }

    .notes {
      margin-top: 30px;
      text-align: center;
      color: hsl(233, 14%, 35%);
      font-size: 18px;
    }

    .lightTheme {
      background: #fff;
    }
  }
}

.lightTheme {
  background: hsl(236, 33%, 92%);
}
</style>
