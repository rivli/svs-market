<template>
  <div class="block-title">Мы на карте</div>
  <div class="ymap">
    <a
      href="https://yandex.ru/maps/172/ufa/?utm_medium=mapframe&utm_source=maps"
      style="color: #eee; font-size: 12px; position: absolute; top: 0px"
      >Уфа</a
    ><a
      href="https://yandex.ru/maps/172/ufa/house/ulitsa_lyotchikov_18/YUwYfgFoSkQFQFtufXt4dH1qbA==/?ll=55.868165%2C54.795047&utm_medium=mapframe&utm_source=maps&z=17"
      style="color: #eee; font-size: 12px; position: absolute; top: 14px"
      >Улица Лётчиков, 18 — Яндекс Карты</a
    ><iframe
      src="https://yandex.ru/map-widget/v1/?ll=55.868165%2C54.795047&mode=whatshere&whatshere%5Bpoint%5D=55.867719%2C54.795120&whatshere%5Bzoom%5D=17&z=17"
      width="100%"
      height="400"
      frameborder="1"
      allowfullscreen="true"
      style="position: relative"
    ></iframe>
  </div>
  <div class="address">
    Республика Башкортостан, город Уфа
    <br />
    улица Лётчиков, 18
  </div>
</template>

<style lang="scss" scoped>
.ymap {
  position: relative;
  overflow: hidden;
  margin-top: 30px;
}
</style>
