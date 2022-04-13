<template>
    <form @submit.prevent="createGame">
      <p>
        <label for="name">Nom</label>
        <input v-model="game.nom" id="name" required/>
      </p>
      <button type="submit">Save</button>
    </form>
</template>

<script>
import {VideoGame} from "../models/VideoGame";
import axios from "axios";
import {API_URL} from "../utils/constantes/API_URL";

export default {
  name: "Form",
  data: function () {
    return {
      game: new VideoGame('', false),
      is_modified : false
    }
  },
  methods: {
    createGame() {
      if(!this.is_modified) {
        axios.post(API_URL + '/videogames', this.game)
            .then(() => {
              console.log('Sauvegardé avec succès !');
              this.redirect();
            })
            .catch(err => console.error(err))
      } else {
        axios.put(API_URL + '/videogames/' + this.game.id, this.game)
            .then(() => {
              console.log('Modifié avec succès !');
              this.redirect();
            })
            .catch(err => console.error(err))
      }
    },
    redirect() {
      this.$router.push({name: 'library'})
    }
  },
  mounted() {
    const params = this.$route.params; // Objet de paramétres
    if(params.id) {
      axios.get(API_URL + /videogames/ + params.id)
          .then(res => {
            this.game = res.data;
            this.is_modified = true;
          })
          .catch(err => {
            console.error(err);
          })
    }
  }
}
</script>

<style scoped>

</style>