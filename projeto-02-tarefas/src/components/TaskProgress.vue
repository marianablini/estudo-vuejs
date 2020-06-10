<script>
export default {
    props: {
        progress: { type: Number, default: 0 }
    },
    data() {
        return {
            valor: 90,
        }
    },
}
</script>

<template>
  <div class="task-progress">
     <v-progress-linear v-model="progress" height="25" color="green">
         <strong>{{ progress }}%</strong>
     </v-progress-linear>
  </div>
</template>

<style>
.task-progress{
    display: flex;
    margin: 15px 5%;
}
</style>