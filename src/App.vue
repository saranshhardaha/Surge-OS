<template>
  <div>
    <MinAlert />
    <LoginScreen />

    <main
      id="Main"
      class="hidden max-h-screen h-screen flex flex-col justify-between"
    >
      <TaskBar />
      <TaskMenu />

      <Home />
    </main>
  </div>
</template>

<script>
import TaskBar from "@/components/TaskBar.vue";
import TaskMenu from "@/components/TaskMenu.vue";
import MinAlert from "@/components/MinAlert.vue";
import LoginScreen from "@/components/LoginScreen.vue";

import Home from "@/views/Home.vue";

export default {
  name: "App",
  components: {
    Home,
    TaskBar,
    TaskMenu,
    MinAlert,
    LoginScreen,
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
}
.no-click {
  pointer-events: none;
  user-select: none;
}
</style>
