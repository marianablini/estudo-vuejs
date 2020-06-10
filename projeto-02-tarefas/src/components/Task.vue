<script>
import eventBus from '../eventBus'
export default {
    props: {
        task: { type: Object, required: true },
        index: Number
    },
    computed: {
        stateClass(){
            return{
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    },
    methods: {
        close(){
            eventBus.close(this.index)
        },
        pending(){
            eventBus.pending(this.index)
        }
    }
}
</script>

<template>
      <div @click="pending" class="task" :class="stateClass">
          <v-btn @click.stop="close" class="close" small icon><v-icon style="font-size: 0.9rem">mdi-close</v-icon></v-btn>
          <p>{{ task.name }}</p>
      </div>
</template>

<style>
.task{
    position: relative;
    box-sizing: border-box;
    width: 240px;
    height: 90px;
    font-size: 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
}
.pending {
    border-left: 10px solid #C62828;
    background-color: #F44336;
}
.done {
    color: rgb(206, 207, 207);
    border-left: 10px solid #388E3C;
    background-color: #4CAF50;
    text-decoration: line-through;
}
.close{
    position: absolute!important; 
    right: 10px; 
    top: 10px;
}
</style>