export let TestHTML = `
    <div
    id="win"
    class="absolute window z-10 rounded text-white bg-black bg-opacity-90 backdrop-filter backdrop-blur-sm"
  >
    <!-- TopBar -->
    <div
    id="winTop"
      class="w-full z-0 bg-black bg-opacity-80 flex items-center py-1 justify-between h-8"
    >
      <!-- Left Side -->
      <div class="flex">
        <span
          class="rounded p-1 hover:bg-white hover:bg-opacity-10 outline-none focus:outline-none"
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
      <!-- Right Side -->
      <div class="flex">
        <button
          class="rounded p-1 hover:bg-white hover:bg-opacity-10 outline-none focus:outline-none"
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
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            /></svg
        ></button>
        <button
        v-on:click="DestroyWin('win')"
          class="rounded p-1 hover:bg-white hover:bg-opacity-10 outline-none focus:outline-none"
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
    <div class="p-4 no-click">
      asdfasdfasdfads
    </div>
  </div>
  `;
