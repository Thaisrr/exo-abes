<template>
  <div class="card">
    <h3 class="toto" :class="getClass">{{ game.nom }}</h3>
    <p>
      <router-link :to="{name: 'form', params: {id : game.id}}">Modifier</router-link>
    </p>
    <p>
      <button @click="emitDelete">Supprimer</button>
    </p>
  </div>
</template>

<script>

export default {
  name: "Card",
  props: {
    game: {
      type: Object,
      required: true
    }
  },
  methods: {
    emitDelete() {
      // nom,..... args
      this.$emit('delete', this.game.id);
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