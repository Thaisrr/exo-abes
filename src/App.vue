<template>
  <h1>Mes Jeux</h1>
  <p>
    <!-- Comme on agit sur la liste, l'ensemble des données : c'est le composant parent
    qui gère
    -->
    <button @click="deleteAll">Tout supprimer</button>
  </p>

    <!-- Le v-for se met dans l'élément qu'on souhaite répéter
          - 1er argument : élément sur lequel on itère
          - 2éme argument : l'index en cours
     -->
  <div v-if="video_games.length === 0" class="alert">Il semble qu'il n'y ait pas de contenu</div>
   <div v-else class="deck">
     <Card
         v-for="(game, index) of video_games"
         :key="index"
         :game="game"
         @delete="deleteMovie"
     />
   </div>
</template>

<script>
  import {VideoGame} from "./models/VideoGame.js";
  import Card from "./components/Card.vue";

  export default {
    name: 'AppComponent',
    components: {Card},
    data() {
      return {
        video_games : [
          new VideoGame('The Witcher', true),
          new VideoGame('Horizon', true),
          new VideoGame('Zelda', false),
          new VideoGame('Mario Bros', true),
        ]
      }
    },
    methods: {
      deleteAll() {
        // Dans la vrai vie, passer plutôt par une modale
        /*
            Créer une modale :
            - Composant intégré dans la page, caché ( display none )
            - On l'affiche en changeant son display
            - La modale contient 2 boutons et retourne un événement $emit contenant
            - se recache
         */
        if( confirm('Etes vous sûr.e ???') ) {
          this.video_games = [];
        }
      },
      deleteMovie(movie) {
        const i = this.video_games.indexOf(movie);
        if(i >= 0) {
          this.video_games.splice(i, 1);
        }
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 80%;
  margin: 60px auto;
}

.deck {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}
</style>
