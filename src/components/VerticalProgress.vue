<!-- VerticalProgress.vue -->
<template>
  <div
    class="vpv"
    :style="{
      '--vpv-height': height + 'px',
      '--vpv-thickness': thickness + 'px',
      '--vpv-color': color || 'var(--v-theme-primary)'
    }"
    role="progressbar"
    :aria-valuemin="0" :aria-valuemax="100" :aria-valuenow="clamped"
  >
    <div class="vpv__track" :class="{ 'vpv--rounded': rounded }">
      <div
        class="vpv__bar"
        :class="{ 'vpv--rounded': rounded, 'vpv--reverse': reverse }"
        :style="{ height: clamped + '%' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  modelValue: number,      // 0 → 100
  height?: number,         // px
  thickness?: number,      // px
  color?: string,          // ex: "var(--v-theme-primary)" | "#398064"
  rounded?: boolean,
  reverse?: boolean        // true = remplit de haut vers bas
}>(), {
  height: 200,
  thickness: 10,
  color: 'var(--v-theme-primary)',
  rounded: true,
  reverse: false
})

const clamped = computed(() => Math.max(0, Math.min(100, props.modelValue ?? 0)))
</script>

<style scoped>
.vpv {
  /* conteneur réservé (garde un vrai layout vertical) */
  width: var(--vpv-thickness);
  height: var(--vpv-height);
  display: inline-block;
}
.vpv__track {
  position: relative;
  width: 100%;
  height: 100%;
  background: color-mix(in srgb, var(--vpv-color) 15%, transparent);
  border-radius: 5px 5px 5px 5px;
  overflow: hidden;
}
.vpv__bar {
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;               /* bas → haut par défaut */
  background: var(--vpv-color);
  transition: height .2s ease;
}
.vpv__bar.vpv--reverse {
  top: 0;                  /* haut → bas */
  bottom: auto;
}
.vpv--rounded {
  border-radius: 999px;
}
</style>
