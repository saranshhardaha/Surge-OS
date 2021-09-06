<template>
  <div class="h-full overflow-hidden relative" id="MainWin">

    <!-- AppWindows -->
    <Calculator />
    <Notepad />

    <!--
        Main Icons 
        [Chrome/Calculator/Notepad/ViewSource/VSCode/ControlPanel/FileExplorer]
        App Coming Soon!    
    -->
    <section class="z-10 m-4 grid gap-2 grid-flow-row text-white">
      <button
        id="calc"
        v-on:click="CreateWin('CalcWin')"
        class="p-4 focus:outline-none outline-none cursor-default hover:bg-white w-28 hover:bg-opacity-5 rounded-md flex flex-col gap-2 items-center"
      >
        <img
          src="@/../public/icons/icons8-calculator.png"
          class="h-12 no-click"
          alt=""
          srcset=""
        />
        <span class="no-click text-xs opacity-80">Calculator</span>
      </button>
      <button
        id="chrome"
        class="p-4 focus:outline-none outline-none cursor-default hover:bg-white hover:bg-opacity-5 w-28 rounded-md flex flex-col gap-2 items-center"
      >
        <img
          src="@/../public/icons/icons8-chrome.svg"
          class="h-12 no-click"
          alt=""
          srcset=""
        />
        <span class="text-xs no-click opacity-80">Chrome</span>
      </button>
      <button
        id="notepad"
        v-on:click="CreateWin('NoteWin')"
        class="p-4 focus:outline-none outline-none cursor-default hover:bg-white hover:bg-opacity-5 w-28 rounded-md flex flex-col gap-2 items-center"
      >
        <img
          src="@/../public/icons/icons8-notepad.png"
          class="h-12 no-click"
          alt=""
          srcset=""
        />
        <span class="text-xs no-click opacity-80">Notepad</span>
      </button>
      <button
        id="ctrlPanel"
        class="p-4 focus:outline-none outline-none cursor-default hover:bg-white hover:bg-opacity-5 w-28 rounded-md flex flex-col gap-2 items-center"
      >
        <img
          src="@/../public/icons/icons8-control-panel.png"
          class="h-12 no-click"
          alt=""
          srcset=""
        />
        <span class="text-xs no-click opacity-80">ControlPanel</span>
      </button>
    </section>
    <a
      href="https://github.com/5tupidbrain/CubeOS"
      class="p-4 text-white absolute right-0 bottom-0 focus:outline-none outline-none opacity-70 hover:opacity-100 w-28 rounded-md flex flex-col gap-2 items-center"
    >
      <img
        src="@/../public/icons/icons8-github.svg"
        class="h-12 no-click"
        alt=""
        srcset=""
      />
      <span class="text-xs no-click opacity-80">View Source</span>
    </a>

  </div>
</template>
<script>
import { onMounted } from "@vue/runtime-core";

import { Drag, CreateWin } from "@/mixins/winFunctions";

import Calculator from "@/components/Calculator.vue";
import Notepad from "@/components/Notepad.vue";

export default {
  components: { Calculator,Notepad },
  setup() {
    onMounted(() => {
      Drag("calc");
      Drag("chrome");
      Drag("notepad");
      Drag("ctrlPanel");
    });

    return {
      CreateWin
    };
  },
};
</script>
<style scoped>
* {
  transition: all linear 0.1s;
}

.dragDiv {
  position: absolute;
  z-index: 9;
  text-align: center;
  border: 1px solid #d3d3d3;
  padding: 30px;
  cursor: move;
  z-index: 10;
  background-color: rgb(108, 24, 177);
  color: #fff;
  font-size: 20px;
  font-weight: 500;
}
</style>
