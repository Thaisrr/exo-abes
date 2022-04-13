<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{name: 'library'}">Library</router-link>
      </li>
      <li>
        <router-link :to="{name: 'form'}">New Game</router-link>
      </li>
    </ul>
  </nav>
  <main>
    <router-view/>
  </main>
</template>

<script>
  export default {
  name: 'App',

  }
</script>