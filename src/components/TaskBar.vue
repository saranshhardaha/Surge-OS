<template>
  <div
    class="h-12 w-full z-40 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg relative flex items-center justify-between"
  >
   
    <!-- Start Button -->
    <button
      v-on:click="openMenu"
      class="outline-none focus:outline-none text-white hover:text-red-400 h-full cursor-default hover:bg-gray-50 hover:bg-opacity-5 px-4"
    >
      <img src="/icons/logo.png" class="h-6 w-6" alt="" />
    </button>
    <div
      class=" px-2 flex w-full h-full justify-between border-r-4 border-gray-50 border-opacity-20"
    >
      <!-- Current Open Tasks -->
      <div class="flex items-center text-white" id="TaskIcons"></div>
      <!-- Right Bar [Wifi,Security,Time,Date] -->
      <div class="flex h-full items-center text-white">
        <!-- Upward Arrow -->
        <button
          class="hover:bg-white hover:bg-opacity-5 focus:outline-none cursor-default outline-none items-center flex h-full px-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
        <!-- icons -->
        <div class="flex items-center  h-full text-white gap-1">
          
          <button
            class="hover:bg-white hover:bg-opacity-5 focus:outline-none cursor-default outline-none h-full px-1"
          >
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
                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
              />
            </svg>
          </button>
          <button
            class="hover:bg-white hover:bg-opacity-5 focus:outline-none cursor-default outline-none h-full px-1"
          >
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
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
            </svg>
          </button>
        </div>
        <!-- Time/Date -->
        <div
          class="flex h-full flex-col px-2 cursor-default items-center justify-center text-white hover:bg-gray-50 hover:bg-opacity-5"
        >
          <span class="text-xs">{{ time }}</span>
          <span class="text-xs">{{ date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { CreateWin } from "@/mixins/winFunctions";

export default {
  setup() {
    let date = ref("");
    let time = ref("");

    let openMenu = () => {
      // let mainWin = document.getElementById("mainWin");
      let TaskMenu = document.getElementById("TaskMenu");
      TaskMenu.classList.toggle("hidden");
    };
    let DateTime = () => {
      let dateO = new Date();
      let dateObj = dateO.toString().split(" ");
      time.value = dateObj[4];
      var H = +time.value.substr(0, 2);
      var h = H % 12 || 12;
      var ampm = H < 12 || H === 24 ? " AM" : " PM";
      time.value = h + time.value.substr(2, 3) + ampm;

      date.value = dateObj[2] + "-" + dateObj[1] + "-" + dateObj[3];
    };
    setInterval(() => {
      DateTime();
    }, 1000);

    return {
      time,
      date,
      openMenu,
      CreateWin,
    };
  },
};
</script>
<style scoped>
* {
  transition: all linear 0.1s;
}
</style>
