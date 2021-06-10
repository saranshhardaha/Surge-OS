<template>
  <div
    id="LoginWin"
    class="max-h-screen relative h-screen hidden bg-black bg-opacity-60 backdrop-filter backdrop-blur-3xl lg:flex flex-col gap-6 items-center justify-center"
  >
    <div class="relative h-44 w-44 flex items-center justify-center">
      <img
        src="https://github.com/5tupidbrain.png"
        class="rounded-full h-36 w-36 z-10"
        alt=""
      />
      <!-- BG Circle morph -->
      <div
        class="absolute bg-black bg-opacity-20 filter blur-sm top-0 left-0 shape h-44 w-44"
      ></div>
    </div>
    <div class="flex flex-col gap-2 items-center">
      <div class="px-3 py-1 rounded bg-white bg-opacity-5 flex items-center justify-center  transition-all duration-300 ease-in-out text-white hover:bg-opacity-10 focus:bg-opacity-10 focus-within:bg-opacity-10">
        <input
          type="password"
          id="Password"
          v-on:keyup.enter="LogInOut(1)"
          class="bg-transparent  focus:outline-none outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-white text-opacity-50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      </div>
      <div class="flex items-center w-full justify-center text-white">
        <button
          class="rounded flex items-center gap-1 text-white max-w-max text-opacity-70 transition-all duration-300 ease-in-out hover:text-opacity-100 p-2 text-xs tracking-wide outline-none focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
            />
          </svg>
          Forgot Password!
        </button>
        <!-- <button class="text-opacity-70 hover:text-opacity-100 outline-none focus:outline-none text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button> -->
      </div>
      <p class="no-click text-sm text-white text-opacity-50">Password : root</p>
    </div>
    <div class="absolute cursor-default no-click text-gray-100 text-opacity-20 tracking-wide text-sm font-semibold bottom-4">
        Cube OS
    </div>
  </div>
</template>
<script>
import { LogInOut } from "@/mixins/winFunctions";

export default {
  setup() {
    return { LogInOut };
  },
};
</script>
<style scoped>
.shape {
  animation: morph 2s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  transition: all 1s ease-in-out;
  z-index: 5;
}

@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }

  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }

  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}
</style>
