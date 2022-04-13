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
  import Card from "../components/Card.vue";
  import axios from 'axios';
  import {API_URL} from "../utils/constantes/API_URL";

  export default {
    name: 'AppComponent',
    components: {Card},
    data() {
      return {
        video_games : []
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
      async getGames() {
        try {
          const res = await axios.get(API_URL + '/videogames');
          this.video_games = res.data;
        } catch(err) {
          console.error(err)
        }
      },
      deleteMovie(movie_id) {
        axios.delete(API_URL + '/videogames/' + movie_id)
            .then(() => {
              console.log('Supprimé avec succès');
              this.getGames();
            })
            .catch((err) => console.error(err))
      }
    },
    mounted() {
      this.getGames();
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
