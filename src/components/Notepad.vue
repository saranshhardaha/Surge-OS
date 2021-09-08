<template>
  <div
    id="NoteWin"
    class="absolute focus-within:z-20 overflow-auto min-w-max resize hidden z-10 rounded-md text-black bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl"
  >
    <!-- TopBar -->
    <div
      id="NoteTop"
      class="cursor-move w-full resize z-0 rounded-t-md bg-black bg-opacity-40 flex items-center py-1 justify-between h-10 px-1"
    >
      <!-- Left Side -->
      <div class="flex ">
        <span
          class="rounded cursor-default w-10 py-1 flex justify-center opacity-75 hover:opacity-100 text-white outline-none focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </div>
      <!-- Title -->
      <div class="no-click text-opacity-80 text-white">
        Notepad
      </div>
      <!-- Right Side -->
      <div class="flex">
        <button
          disabled
          class="rounded cursor-default p-1 text-opacity-40 text-white outline-none focus:outline-none"
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
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
        <button
          v-on:click="DestroyWin('NoteWin')"
          class="rounded p-1 text-opacity-80 text-white hover:text-opacity-100 hover:bg-white hover:bg-opacity-10 outline-none focus:outline-none"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- MainContent -->
    <div class="flex hc-40 resize " id="NoteMain">
      <!-- SideBar -->
      <div
        class="flex flex-col items-center  w-14 text-white bg-black bg-opacity-40"
      >
        <button
          class="opacity-75 hover:opacity-100 trans p-2 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          class="opacity-75 hover:opacity-100 trans p-2 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
              clip-rule="evenodd"
            />
            <path
              d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
            />
          </svg>
        </button>
        <button
          class="opacity-75 hover:opacity-100 trans p-2 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"
            />
          </svg>
        </button>
      </div>
      <textarea
        class="bg-white scrollbar antialiased leading-normal align-top h-full hc-400 w-full px-5 py-4 outline-none bg-transparent backdrop-filter backdrop-blur-md"
        name="notepad"
        id="NoteArea"
        cols="auto"
        rows="auto"
        placeholder="Write here!"
      >
      </textarea>
    </div>
  </div>
</template>
<script>
import { DragWin, DestroyWin } from "@/mixins/winFunctions";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      DragWin("NoteTop", "NoteWin");
    });
    return {
      DestroyWin,
    };
  },
};
</script>
<style scoped>
textarea {
  scrollbar-width: thin;
}
#NoteWin {
  min-height: 425px;
  min-width: 425px;
  overflow: hidden;
}
*::-webkit-resizer {
  background: transparent;
}
.hc-40 {
  height: calc(100% - 40px);
}
.hc-400 {
  min-height: 400px;
}
</style>
