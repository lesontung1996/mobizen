<template>
  <div class="text-center">
    <div class="mb-8 pt-4">
      <h2 class="text-3xl font-bold uppercase text-gradient mb-4">Cơ hội tích điểm</h2>
      <p>Nhận thêm voucher giảm giá</p>
      <p class="inline-flex items-center my-2">lên tới <span class="text-4xl font-mono text-gradient ml-2">500k</span></p>
      <p> của Hệ Thống MOBIZEN</p>
    </div>
    <div class="px-4 py-8 rounded-lg bg-gradient text-white">
      <h3 class="mb-6 font-bold uppercase">Ưu đãi chỉ còn kéo dài trong</h3>
      <div class="text-6xl text-center flex w-full items-center justify-center">
        <div class="w-24 mx-1 p-2 bg-white text-blue-mobizen rounded-lg">
          <div class="font-mono leading-none">{{ hours }}</div>
          <div class="font-mono uppercase text-sm leading-none">Giờ</div>
        </div>
        <div class="w-24 mx-1 p-2 bg-white text-blue-mobizen rounded-lg">
          <div class="font-mono leading-none">{{ minutes }}</div>
          <div class="font-mono uppercase text-sm leading-none">Phút</div>
        </div>
        <div class="w-24 mx-1 p-2 bg-white text-blue-mobizen rounded-lg">
          <div class="font-mono leading-none">{{ secounds }}</div>
          <div class="font-mono uppercase text-sm leading-none">Giây</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const hours = ref('00');
const minutes = ref('00');
const secounds = ref('00');

const now = new Date();
const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);

onMounted(() => {
  setInterval(() => {
    const remaining = midnight.getTime() - new Date().getTime();
    hours.value = Math.floor(remaining / (1000 * 60 * 60)).toString().padStart(2, '0');
    minutes.value = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    secounds.value = Math.floor((remaining % (1000 * 60)) / 1000).toString().padStart(2, '0');
  }, 1000);
})

</script>
