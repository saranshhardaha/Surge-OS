<template>
  <footer
    class="h-12 w-full bg-opacity-5 relative bg-red-50 flex items-center justify-between"
  >
    <div
      id="TaskMenu"
      class="hidden flex-row flex absolute left-0 bottom-12 max-w-max h-96 bg-black bg-opacity-90 backdrop-filter backdrop-blur-xs "
    >
      <!-- Sidebar -->
      <div
        class="w-14 h-full flex flex-col items-center justify-end bg-white bg-opacity-5"
      >
        <div class="p-4 text-white hover:bg-white hover:bg-opacity-10">
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div class="p-4 text-white  hover:bg-white hover:bg-opacity-10">
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
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div class="p-4 text-white hover:bg-white hover:bg-opacity-10">
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
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div class="p-4 text-white  hover:bg-white hover:bg-opacity-10">
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
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </div>
      </div>
      <!-- Start Tiles -->
      <div
        class="p-2 grid  justify-center grid-cols-2 text-white w-full gap-1 gap-y-1.5"
      >
        <button
          id="item"
          v-on:click="CreateWin('CalcWin')"
          class="p-4 focus:outline-none outline-none cursor-default  bg-gray-200 bg-opacity-5 w-28  flex flex-col gap-2 hover:bg-opacity-10 rounded items-center justify-center"
        >
          <img
            src="@/../public/icons/icons8-calculator.png"
            class="h-8 no-click"
            alt=""
            srcset=""
          />
          <span class="no-click text-xs opacity-80">Calculator</span>
        </button>
        <button
          class="p-4 focus:outline-none outline-none cursor-default bg-gray-200 bg-opacity-5 w-28  flex flex-col gap-2 hover:bg-opacity-10 rounded items-center justify-center"
        >
          <img
            src="@/../public/icons/icons8-chrome.svg"
            class="h-8"
            alt=""
            srcset=""
          />
          <span class="text-xs opacity-80">Chrome</span>
        </button>
        <button
          class="p-4 focus:outline-none outline-none cursor-default bg-gray-200 bg-opacity-5 w-28  flex flex-col gap-2 hover:bg-opacity-10 rounded items-center justify-center"
        >
          <img
            src="@/../public/icons/icons8-notepad.png"
            class="h-8"
            alt=""
            srcset=""
          />
          <span class="text-xs opacity-80">Notepad</span>
        </button>
        <button
          class="p-4 focus:outline-none outline-none cursor-default bg-gray-200 bg-opacity-5 w-28  flex flex-col gap-2 hover:bg-opacity-10 rounded items-center justify-center"
        >
          <img
            src="@/../public/icons/icons8-control-panel.png"
            class="h-8"
            alt=""
            srcset=""
          />
          <span class="text-xs opacity-80">ControlPanel</span>
        </button>
        <a
          href="#"
          class="p-4 focus:outline-none outline-none cursor-default bg-gray-200 bg-opacity-5 w-28  flex flex-col gap-2 hover:bg-opacity-10 rounded items-center justify-center"
        >
          <img
            src="@/../public/icons/icons8-github.svg"
            class="h-8"
            alt=""
            srcset=""
          />
          <span class="text-xs opacity-80">View Source</span>
        </a>
      </div>
    </div>
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
                d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
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
  </footer>
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
