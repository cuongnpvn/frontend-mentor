<template>
  <router-view :key="$route.fullPath" />
</template>

<script>
export default {};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

::-webkit-scrollbar {
  display: none;
}
</style>
