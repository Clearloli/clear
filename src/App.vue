<script setup lang="ts"></script>

<template>
  <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.logo {
	padding: 1.5em;
	height: 6em;
	transition: filter 300ms;

	will-change: filter;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}

</style>
