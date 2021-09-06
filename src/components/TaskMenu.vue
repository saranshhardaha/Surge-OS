<template>
  <div
    id="TaskMenu"
    class="hidden z-40 w-96 absolute left-0 top-12 rounded bg-black bg-opacity-60 backdrop-blur-lg backdrop-filter"
  >
    <!-- Search -->
    <div
      class="w-full flex flex-row px-2 text-gray-400 items-center"
    >
      <span class="px-2 border-r-2 border-opacity-10 border-white"
        ><svg
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          /></svg
      ></span>
      <input
        type="text"
        placeholder="Search here!"
        class=" bg-transparent w-full px-3 py-3 text-gray-200 outline-none focus:outline-none"
      />
    </div>

    <div class="flex-col w-full flex h-96 ">
      <!-- TopBar Icons -->
      <div
        class="h-12 w-full flex flex-row items-center justify-center bg-white bg-opacity-5 overflow-hidden"
      >
        <div
          class="p-4 text-white text-opacity-30 hover:text-opacity-80  hover:bg-white hover:bg-opacity-5"
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div
          class="p-4 text-white text-opacity-30 hover:text-opacity-80   hover:bg-white hover:bg-opacity-5"
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
        </div>
        <div
          class="p-4 text-white text-opacity-30 hover:text-opacity-80  hover:bg-white hover:bg-opacity-5"
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
        </div>
        <button
          v-on:click="LogInOut(2)"
          class="p-4 text-white text-opacity-30 hover:text-opacity-80  hover:bg-white hover:bg-opacity-5"
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
      <!-- Start Tiles -->
      <div
        class="p-2 py-3 grid  justify-center grid-cols-3 text-white w-full gap-1 gap-y-3"
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
  </div>
</template>
