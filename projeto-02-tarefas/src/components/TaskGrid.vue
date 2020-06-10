<script>
import Task from './Task'
export default {
    props: {
        tasks: { type: Array, required: true }
    },
    components: { Task }
}
</script>

<template>
      <div class="task-grid">
          <template v-if="tasks.length">
              <Task v-for="(task, i) in tasks" :key="task.name" :task="task" :index="i" />
          </template>
          <p v-else> Sua vida está em dia! </p>
      </div>
</template>

<style>
.task-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.task-grid .task{
    margin: 5px;
}
</style>