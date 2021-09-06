<template>
  <div
    id="NoteWin"
    class="absolute overflow-auto min-w-max resize hidden z-10 rounded-md text-white bg-black bg-opacity-70 backdrop-filter backdrop-blur-sm"
  >
    <!-- TopBar -->
    <div
      id="NoteTop"
      class="w-full resize z-0 rounded-t-md bg-black bg-opacity-40 flex items-center py-1 justify-between h-10 px-1"
    >
      <!-- Left Side -->
      <div class="flex ">
        <span
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
              d="M18 12H6"
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
    <div class="flex hc-40 resize flex-col" id="NoteMain">
      <textarea
        class="leading-normal align-top h-full hc-400 w-full px-5 py-4 outline-none bg-transparent backdrop-filter backdrop-blur-md"
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
textarea{
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
