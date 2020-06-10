<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        add(){
            if (this.name != '') {
                this.$emit('taskAdded', { name: this.name })
                this.name = ''
            }
        }
    }
}
</script>

<template>
   <v-di class="v-div">
       <v-row class="v-row">
            <v-text-field @keydown.enter="add" v-model="name" color="black" label="Adicionar nova tarefa"></v-text-field>
                <v-btn @click="add" outlined large icon><v-icon>mdi-plus</v-icon></v-btn>
        </v-row>
   </v-di>
</template>

<style>
.v-row{
    flex: none;
    width: 50%!important;
}
.v-div{
    display: flex;
    margin: 0 30%;
}
</style>