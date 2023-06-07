<template>
  <div>
    <b>Оптом дешевле</b>

    <table class="saleTable">
      <tr>
        <td class="redBold">-20%</td>
        <td class="desc">при покупке 10-ти жидкостей</td>
      </tr>
      <tr>
        <td class="redBold">-30%</td>
        <td class="desc">при покупке 20-ти жидкостей</td>
      </tr>
      <tr>
        <td class="redBold">-15%</td>
        <td class="desc">при покупке 10-ти картриджей/испарителей</td>
      </tr>
      <tr>
        <td class="redBold">-20%</td>
        <td class="desc">при покупке 20-ти картриджей/испарителей</td>
      </tr>
    </table>
    <div class="verysmall">Действует при единоразовой покупке</div>
  </div>
</template>

<style lang="scss" scoped>
.saleTable {
  font-size: 15px;
  line-height: 1.3rem;
  text-align: left;
  .redBold {
    font-size: 20px;
    color: red;
    font-weight: bold;
    padding-right: 10px;
  }
}
</style>
