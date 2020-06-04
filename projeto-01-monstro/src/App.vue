<template>
  <v-app>
    <Game/>
  </v-app>
</template>

<script>
import Game from './components/Game';

export default {
  name: 'app',
  components: {
    Game,
  }
};
</script>
<style>
  html {
    font-family: 'Montserrat', sans-serif;
  }
  #app{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .life-bar {
    display: flex;
    margin: 0 10%;
    border: 1px solid gray;
  }
  .life-bar .life{
    width: 100%;
    background-color: green;
  }
  .danger {
    background-color: red!important;
  }
  button {
    margin: 5px;
  }
</style>
