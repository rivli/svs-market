<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IconLogo from './components/icons/IconLogo.vue'
import LinksBlock from './components/LinksBlock.vue'
</script>

<template>
  <header>
    <icon-logo />
    <div class="logo">SVS MARKET</div>
    <div class="sublogo">Smoke Vape Steam</div>

    <links-block />

    <div v-if="false" class="wrapper">
      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/about">Товары</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .redCircle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: red;
  }

  .logo {
    margin-top: 30px;
    font-size: 40px;
    font-weight: bold;
    line-height: 0.8;
    color: var(--color-heading);
  }

  .sublogo {
    font-size: 20px;
    line-height: 1;
  }
}

nav {
  width: 100%;
  font-size: 18px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
