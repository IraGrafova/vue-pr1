new Vue({
  el: "#app",
  data: {
    type: "button",
    isDisabled: false,
    tasks: [
      { text: "Развернуть окружение в Codepen", done: true },
      { text: "Пройти курс по Vue", done: false },
      { text: "Сделать интернет-магазин на Vue", done: false },
    ],
    day: [
      { text: "Поработать", done: true },
      { text: "Забрать дочь из садика", done: false },
      { text: "Отдохнуть", done: false },
    ],
  },
  methods: {
    addTask() {
      this.tasks.push({ text: this.message, done: false });
      this.message = "";
    },
    count() {
      return this.tasks.filter((task) => !task.done).length;
    },

    addTaskForDay() {
      this.day.push({ text: this.message, done: false });
      this.message = "";
    },
    countToday() {
      return this.day.filter((task) => !task.done).length;
    },
  },
});

//почему не вывелся алерт
