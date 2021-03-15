const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTask: '',
            listVisibility: true
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },
        toggleVisibility() {
            this.listVisibility = !this.listVisibility;
        }
    },
});
app.mount('#assignment');