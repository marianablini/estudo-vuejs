import Vue from 'vue'
export default new Vue({
    methods: {
        close(index){
            this.$emit('close', index)
        },
        onClose(callback){
            this.$on('close', callback)
        },
        pending(index){
            this.$emit('pending', index)
        },
        onPending(callback){
            this.$on('pending', callback)
        }
    }
})