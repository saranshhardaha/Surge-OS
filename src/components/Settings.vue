<template>
  <div
    id="settingsWin"
    class="absolute  focus-within:z-20 overflow-auto min-w-max resize  z-10 rounded-md text-white bg-gray-800 bg-opacity-5 backdrop-filter backdrop-blur-lg"
  >
    <!-- TopBar -->
    <div
      id="SettingTop"
      class="w-full cursor-move resize z-0 rounded-t-md bg-black bg-opacity-40 flex items-center py-1 justify-between h-10 px-1"
    >
      <!-- Left Side -->
      <div class="flex ">
        <span
          class="rounded cursor-default p-1 text-opacity-80 text-white hover:text-opacity-100 hover:bg-white hover:bg-opacity-10 outline-none focus:outline-none"
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
        Settings
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
          v-on:click="DestroyWin('settingsWin')"
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
    <div class="flex w-auto min-h-max">
      <!-- SideBar -->
      <div class="flex bg-black bg-opacity-40 flex-col min-w-max max-w-max">
        <button
          class="px-4 text-left py-4 pr-12 outline-none focus:outline-none hover:bg-black hover:bg-opacity-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 inline-block mr-2 opacity-80"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13 7H7v6h6V7z" />
            <path
              fill-rule="evenodd"
              d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
              clip-rule="evenodd"
            /></svg
          >System
        </button>
        <button
          class="px-4 text-left py-4 pr-12  outline-none focus:outline-none hover:bg-black hover:bg-opacity-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 inline-block mr-2 opacity-80"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            /></svg
          >Account
        </button>
        <button
          class="px-4 text-left py-4 pr-12  outline-none focus:outline-none hover:bg-black hover:bg-opacity-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 inline-block mr-2 opacity-80"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
            /></svg
          >Personalization
        </button>
        <button
          class="px-4 text-left py-4 pr-12  outline-none focus:outline-none hover:bg-black hover:bg-opacity-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 inline-block mr-2 opacity-80"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clip-rule="evenodd"
            /></svg
          >Background
        </button>
        <button
          class="px-4 text-left py-4 pr-12  outline-none focus:outline-none hover:bg-black hover:bg-opacity-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 inline-block mr-2 opacity-80"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            /></svg
          >About
        </button>
        <button
          class="px-4 text-left py-4 pr-12  outline-none focus:outline-none hover:bg-black hover:bg-opacity-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 inline-block mr-2 opacity-80"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
              clip-rule="evenodd"
            /></svg
          >Exp. Features
        </button>
      </div>
      <!-- ExpandedView -->
      <div class="flex overflow-auto scrollbar bg-black bg-opacity-75 w-full">
        <div class="p-6 flex flex-col items-center justify-between w-full">
          <div class="flex flex-col items-center w-full">
            <div class="flex flex-col">
              <img src="" alt="" />
              <h2>
                CueSys v0.1
              </h2>
            </div>
            <div class="p-4">
              <p>{{ browser }}</p>
              <p class="opacity-70">{{ os }}</p>
            </div>
          </div>
          <div
            class="grid text-base pt-4 grid-cols-2 gap-x-12 gap-y-4 text-left w-full"
          >
            <div>
              Hostname: <span class="opacity-75">{{ hostname }}</span>
            </div>
            <div>
              IpAddress: <span class="opacity-75">{{ IpAddr }}</span>
            </div>
            <div>
              Screen size: <span class="opacity-75">{{ Screen }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { DragWin, DestroyWin } from "@/mixins/winFunctions";
import { HostOS, ipAdress, ScreenSize } from "@/mixins/infoFuntions";
import { onMounted, ref } from "@vue/runtime-core";
export default {
  setup() {
    let { os, hostname, browser } = HostOS();
    let Screen = ScreenSize();
    const IpAddr = ref("----.----.----.----");
    onMounted(() => {
      DragWin("SettingTop", "settingsWin");
      ipAdress().then(async (data) => await (IpAddr.value = data));
      console.log(IpAddr.value);
    });

    return {
      DestroyWin,
      os,
      hostname,
      browser,
      Screen,
      IpAddr,
    };
  },
};
</script>
