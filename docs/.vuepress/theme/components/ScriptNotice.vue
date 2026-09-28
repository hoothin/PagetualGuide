<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const notice = ref(null);
const ready = ref(false);
let observer;

onMounted(() => {
  const content = notice.value.parentElement;
  const check = () => {
    if (content.querySelector('#configCon')) {
      ready.value = true;
      observer.disconnect();
    }
  };
  observer = new MutationObserver(check);
  observer.observe(content, { childList: true, subtree: true });
  check();
});
onUnmounted(() => observer && observer.disconnect());
</script>

<template>
  <div v-if="!ready" ref="notice" class="custom-container warning" role="status">
    <slot />
  </div>
</template>
