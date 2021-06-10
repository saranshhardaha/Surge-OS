<template>
  <div
    id="CalcWin"
    class="absolute hidden window z-10 rounded-md text-white bg-black bg-opacity-80 backdrop-filter backdrop-blur-sm"
  >
    <!-- TopBar -->
    <div
      id="CalcTop"
      class="w-full z-0 rounded-t-md bg-black bg-opacity-40 flex items-center py-1 justify-between h-10 px-1"
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
        Calculator
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
          v-on:click="DestroyWin('CalcWin')"
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
    <div class=" flex flex-col">
      <div>
        <input
          type="text"
          class="px-4 h-16 text-right font-semibold tracking-wider w-full bg-opacity-5 outline-none bg-white"
          id="CalcInp"
          name="CalcInput"
          v-model="CalcVal"
        />
      </div>
      <div class="grid gap-1 p-3">
        <div class="row grid-cols-4 grid gap-1">
          <button
            v-on:click="Clr()"
            class="p-4 text-green-300 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            AC
          </button>
          <button
            v-on:click="Del()"
            class="p-4 text-green-300 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            DEL
          </button>
          <button
            v-on:click="CalcAdd('%')"
            class="p-4 text-green-300 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            %
          </button>
          <button
            v-on:click="CalcAdd('/')"
            class="p-4 text-red-300 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            /
          </button>
        </div>
        <div class="row grid-cols-4 grid gap-1">
          <button
            v-on:click="CalcAdd('7')"
            class="p-4 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            7
          </button>
          <button
            v-on:click="CalcAdd('8')"
            class="p-4 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            8
          </button>
          <button
            v-on:click="CalcAdd('9')"
            class="p-4 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            9
          </button>
          <button
            v-on:click="CalcAdd('*')"
            class="p-4 text-red-300 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            *
          </button>
        </div>
        <div class="row grid-cols-4 grid gap-1">
          <button
            v-on:click="CalcAdd('4')"
            class="p-4 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            4
          </button>
          <button
            v-on:click="CalcAdd('5')"
            class="p-4 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            5
          </button>
          <button
            v-on:click="CalcAdd('6')"
            class="p-4 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            6
          </button>
          <button
            v-on:click="CalcAdd('-')"
            class="p-4 text-red-300 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            -
          </button>
        </div>
        <div class="row grid-cols-4 grid gap-1">
          <button
            v-on:click="CalcAdd('1')"
            class="p-4 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            1
          </button>
          <button
            v-on:click="CalcAdd('2')"
            class="p-4 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            2
          </button>
          <button
            v-on:click="CalcAdd('3')"
            class="p-4 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            3
          </button>
          <button
            v-on:click="CalcAdd('+')"
            class="p-4 text-red-300 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            +
          </button>
        </div>
        <div class="row grid-cols-4 grid gap-1">
          <button
            v-on:click="CalcAdd('0')"
            class="p-4 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            0
          </button>
          <button
            v-on:click="CalcAdd('00')"
            class="p-4 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            00
          </button>
          <button
            v-on:click="CalcAdd('.')"
            class="p-4 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            .
          </button>
          <button
            v-on:click="Calc"
            class="p-4 text-red-300 hover:bg-white hover:bg-opacity-5 focus:outline-none outline-none rounded"
          >
            =
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { DragWin, DestroyWin } from "@/mixins/winFunctions";
import { onMounted, ref } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      DragWin("CalcTop", "CalcWin");
    });
    let CalcVal = ref([]);
    let Calc = () => {
      let rtn = eval(CalcVal.value);
      CalcVal.value = rtn;
    };
    let CalcAdd = (op) => {
      CalcVal.value += op;
    };
    let Clr = () => {
      CalcVal.value = "";
    };
    let Del = () => {
      CalcVal.value = CalcVal.value.slice(0, -1);
    };
    return {
      DestroyWin,
      Calc,
      CalcAdd,
      CalcVal,
      Clr,
      Del,
    };
  },
};
</script>
