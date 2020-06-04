<template>
  <v-content class="pa-5">
      <v-card class="mb-4 text-center">
        <v-card-text>
          <v-row>
            <v-col>
              <h2>Jogador</h2>
              <div class="life-bar">
                <div class="life" :class="{ danger: Jogador < 20 }" :style="{ width: Jogador + '%'}">
                  <span>{{ Jogador }}</span>
                </div>
              </div>
            </v-col>
            <v-col>
              <h2>Monstro</h2>
              <div class="life-bar">
                <div class="life" :class="{ danger: Monstro < 20 }" :style="{ width: Monstro + '%'}">
                  <span>{{ Monstro }}</span>
                </div>
              </div>
            </v-col>
          </v-row>
          
        </v-card-text>
      </v-card>
      <v-card v-if="hasResult" class="mb-4">
        <v-card-text>
          <h2 v-if="Monstro == 0">Você Ganhou!! :)</h2>
          <h2 v-else>Você Perdeu! :(</h2>
        </v-card-text>
      </v-card>
      <v-card class="mb-4">
        <v-card-text class="text-center">
          <template v-if="inicio">
            <v-btn color="red" @click="attack(false)">Ataque</v-btn>
            <v-btn color="orange" @click="attack(true)">Ataque Especial</v-btn>
            <v-btn color="green" @click="heal">Curar</v-btn>
            <v-btn color="gray" @click="inicio = false">Desistir</v-btn>
          </template>
          <v-btn v-else color="blue" @click="start()">Iniciar Jogo</v-btn>
        </v-card-text>
      </v-card>
      <v-card v-if="log.length > 0" class="mb-4">
        <v-card-text>
          <div v-for="(l, i) in log" :key="i">
              <v-alert :color="l.cls+' lighten-2'">{{ l.text }}</v-alert>
          </div>
        </v-card-text>
      </v-card>
    </v-content>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        Jogador: 100,
        Monstro: 100,
        inicio: false,
        log: []
      }
    },
    methods: {
      start(){
        this.inicio = true
        this.Jogador = 100
        this.Monstro = 100
        this.log = []
      },
      attack(especial){
        this.hurt('Monstro', 5, 10, especial, 'Jogador', 'green')
        if (this.Monstro > 0) {
          this.hurt('Jogador', 7, 12, false, 'Monstro', 'red')
        }
      },
      hurt(prop, min, max, especial, prop2, cor){
        let plus = especial ? 5 : 0
        let ataca = this.getRandon(min + plus, max + plus)
        this[prop] = Math.max(this[prop] - ataca, 0)
        this.setLog(prop2+' atingiu '+prop+' com '+ataca, cor)
      },  
      heal(){
        let vida = this.getRandon(10, 15)
        this.Jogador = Math.min(this.Jogador + vida, 100)
        this.setLog('Jogador recuperou '+vida+' de vida!', 'green')
        this.hurt('Jogador', 7, 12, false, 'Monstro', 'red')
      },
      getRandon(min, max){
        let valor = Math.random() * (max - min) + min
        return Math.round(valor)
      },
      setLog(text, cls){
        this.log.unshift({text, cls})
        console.log(this.log)
      }
    },
    computed: {
      hasResult(){
        return this.Jogador == 0 || this.Monstro == 0
      }
    },
    watch: {
      hasResult(v){
        if (v) this.inicio = false
      }
    },
  }
</script>
