<template>
  <div class="usuario">
    <h1>Cadastro de usuário</h1>
    <VcUsuario/>
  </div>
</template>
<script>
  import VcUsuario from '../components/Usuario'
  export default {
    name: 'usuario',
    components: {
      VcUsuario
    }
}
</script>
