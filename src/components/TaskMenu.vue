<template>
  <div
    id="TaskMenu"
    class="hidden z-40 w-auto absolute left-2 bottom-14 rounded-lg bg-gray-800 bg-opacity-10 backdrop-blur-lg backdrop-filter"
  >
    <div class="group">
      <!-- User -->
      <div
        class="rounded-full h-24 w-24 absolute left-1/2 transform -translate-x-1/2 -top-12 flex justify-center flex-col items-center"
      >
        <img
          src="https://github.com/5tupidbrain.png"
          class="rounded-full trans group-hover:scale-75 transform"
          alt=""
        />
        <p
          class="text-white text-opacity-60 absolute top-24 trans group-hover:opacity-100 opacity-0"
        >
          5tupidBrain
        </p>
      </div>

      <!-- TopBar -->
      <div class="flex py-6 px-4 pt-8 justify-between">
        <div>
          <button
            class="p-4 text-white text-opacity-30 hover:text-opacity-80 outline-none focus:outline-none trans cursor-default"
            v-on:click="CreateWin('settingsWin')"
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
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
          <button
            class="p-4 text-white text-opacity-30 hover:text-opacity-80 outline-none focus:outline-none trans cursor-default"
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
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
        <!-- Logout -->
        <div>
          <button
            v-on:click="LogInOut(2)"
            class="p-4 text-white text-opacity-30 hover:text-opacity-80 outline-none focus:outline-none trans cursor-default"
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
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Search -->
    <div
      class="w-96 mx-auto flex flex-row focus-within:bg-opacity-30 focus-within:bg-black hover:bg-black hover:bg-opacity-20 text-gray-400 border-2 border-white border-opacity-20  rounded items-center"
    >
      <span class="px-2 border-r-2 border-opacity-10 border-white"
        ><svg
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          /></svg
      ></span>
      <input
        type="text"
        placeholder="Search here!"
        class=" bg-transparent  w-full px-3 text-sm py-2 text-gray-200 outline-none focus:outline-none"
      />
    </div>

    <div class="flex-col w-full flex h-full ">
      <!-- Start Tiles -->
      <div
        class="p-2 py-3 grid justify-center grid-cols-4 items-start text-white w-full gap-y-2"
      >
        <button
          id="item"
          v-on:click="CreateWin('CalcWin')"
          class="p-4 focus:outline-none outline-none cursor-default hover:opacity-60 w-28 trans flex flex-col gap-2  rounded items-center justify-center"
        >
          <img
            src="@/../public/icons/icons8-calculator.png"
            class="h-10 no-click"
            alt=""
            srcset=""
          />
          <span class="no-click text-xs opacity-80">Calculator</span>
        </button>
        <button
          class="p-4 focus:outline-none outline-none cursor-default hover:opacity-60 w-28 trans flex flex-col gap-2  rounded items-center justify-center"
        >
          <img
            src="@/../public/icons/icons8-chrome.svg"
            class="h-10"
            alt=""
            srcset=""
          />
          <span class="text-xs opacity-80">Browser</span>
        </button>
        <button
          class="p-4 focus:outline-none outline-none cursor-default hover:opacity-60 w-28 trans flex flex-col gap-2  rounded items-center justify-center"
        >
          <img
            src="@/../public/icons/icons8-notepad.png"
            class="h-10"
            alt=""
            srcset=""
          />
          <span class="text-xs opacity-80">Notepad</span>
        </button>
        <button
          class="p-4 focus:outline-none outline-none cursor-default hover:opacity-60 w-28 trans flex flex-col gap-2  rounded items-center justify-center"
        >
          <img
            src="@/../public/icons/icons8-control-panel.png"
            class="h-10"
            alt=""
            srcset=""
          />
          <span class="text-xs opacity-80">Advance Settings</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { LogInOut, CreateWin } from "@/mixins/winFunctions";

export default {
  setup() {
    return {
      LogInOut,
      CreateWin,
    };
  },
};
</script>
