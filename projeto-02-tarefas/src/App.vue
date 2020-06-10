<script>
import TaskGrid from './components/TaskGrid'
import NewTask from './components/NewTask'
import TaskProgress from './components/TaskProgress'
import eventBus from './eventBus'
export default {
  name: 'App',
  data() {
    return {
      tasks: []
    }
  },
  components: {
    TaskGrid, NewTask, TaskProgress
  },
  computed: {
    progress(){
      let total = this.tasks.length
      let done = this.tasks.filter(t => !t.pending).length
      return Math.round(done / total * 100) || 0
    }
  },
  watch: {
    tasks: {
      deep: true,
      handler(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    }
  },
  created(){
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
    eventBus.onClose(i => {
        this.tasks.pop(i, 1)
      })
    eventBus.onPending(i => {
        this.tasks[i].pending = !this.tasks[i].pending
      })
  },
  methods: {
    addTask(task){
      let sameName = t => t.name === task.name
      let reallyNew = this.tasks.filter(sameName).length == 0
      if(reallyNew) {
        this.tasks.push({
          name: task.name,
          pending: task.pending || true
        })
      }
    }
  }
};
</script>

<template>
  <v-app class="body" fluid>
    <div id="app">
      <h1>Tarefas</h1>
      <TaskProgress :progress="progress" />
      <NewTask @taskAdded="addTask" />
      <TaskGrid :tasks="tasks" />
    </div>
  </v-app>
</template>

<style>
  .body {
    /* font-family: 'Lato', sans-serif!important; */
    background: linear-gradient(to right, #4b79a1, #283e51)!important; 
    color: white!important;
  }

  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
</style>

