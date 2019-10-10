<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style>
#app {
  color: #2c3e50;
}
</style>
