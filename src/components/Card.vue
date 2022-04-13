<template>
  <div class="card">
    <h3 class="toto" :class="getClass">{{ game.nom }}</h3>
    <p>
      <button @click="emitDelete">Supprimer</button>
    </p>
  </div>
</template>

<script>
import {VideoGame} from "../models/VideoGame";

export default {
  name: "Card",
  props: {
    game: {
      type: VideoGame,
      required: true
    }
  },
  methods: {
    emitDelete() {
      // nom,..... args
      this.$emit('delete', this.game);
    }
  },
  computed: {
    /* pour retourner des valeurs calculées
    // A utiliser pour éviter de mettre de la logique complexe dans le template
     Ou dans des méthodes.. */
    getClass() {
      return (this.game.is_started)? 'started': 'notstarted';
    }
  }
}
</script>

<style scoped>
  .card {
    width: 24%;
    padding: 20px;
    text-align: center;
    box-sizing: border-box;
    box-shadow: 2px 2px 5px rgba(128, 128, 128, 0.4);
    border-radius: 10px;
  }

  .started {
    color: teal;
  }

  .notstarted {
    color: darkslategrey;
  }
</style>