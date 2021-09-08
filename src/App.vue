<template>
  <div>
    <MinAlert />
    <LoginScreen />

    <main
      id="Main"
      class="hidden max-h-screen h-screen flex flex-col justify-between"
    >
      <Home />
      <TaskMenu />
      <TaskBar />
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
.scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #556168 #CFD8DC;
}
.scrollbar::-webkit-scrollbar {
  cursor: default !important;
  width: 10px;
}
.scrollbar::-webkit-scrollbar-track{
  border-radius: 12px;
  background: #CFD8DC;
}
.scrollbar::-webkit-scrollbar-thumb {
  background: #8a8a8a;
  border: 3px solid #CFD8DC;
  border-radius: 12px;
}
.trans {
  transition: 0.15s ease-in;
}
.no-click {
  pointer-events: none;
  user-select: none;
}
</style>
