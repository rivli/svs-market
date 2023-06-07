<template>
  <div class="linksBlock">
    <a href="https://vk.com/svsmarket102" target="_blank">
      <icon-v-k style="color: #009aff" />
      ВКонтакте
    </a>
    <a href="https://instagram.com/svs__market?igshid=MmIzYWVlNDQ5Yg==" target="_blank">
      <icon-instagram style="color: pink" />
      Instagram
    </a>
    <a href="https://t.me/svsmarketufa102" target="_blank">
      <icon-telegram style="color: #009aff" />
      Telegram
    </a>
    <a href="https://wa.me/79373000238" target="_blank">
      <icon-whats-app style="color: green" />
      WhatsApp
    </a>
    <a href="tel:+79373000238" target="_blank">
      <iconic :icon="mdiPhone" size="24" />
      Телефон
    </a>
  </div>
</template>

<script setup>
import { mdiPhone } from '@mdi/js'
import IconVK from './icons/social/IconVK.vue'
import IconTelegram from './icons/social/IconTelegram.vue'
import IconWhatsApp from './icons/social/IconWhatsApp.vue'
import IconInstagram from './icons/social/IconInstagram.vue'
</script>

<style lang="scss" scoped>
.linksBlock {
  width: 100%;
  font-size: 18px;
  text-align: center;
  margin-top: 2rem;
  a {
    display: inline-flex;
    padding: 0 0.5rem;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  @media (max-width: 375px) {
    a {
      display: flex;
      border: 0;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
