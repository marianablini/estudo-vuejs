<template>
  <div class="usuario">
    <v-card class="mx-auto" outlined>
      <v-list-item >
        <v-list-item-content>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

            <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item" required></v-select>

            <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>

            <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
              Validate
            </v-btn>
          </v-form>
        </v-list-item-content>
      </v-list-item> 
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'usuario',
}
</script>

<style scoped lang="scss">
.usuario{
  padding: 5rem;
}
</style>
