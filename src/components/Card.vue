<template>
  <div class="card">
    <div class="card__img">
      <img :src="imgSrc" :alt="`Image of ${label}`" />
    </div>
    <div class="card__info">
      <div class="card__info-text">
        <strong class="text" v-text="label"></strong>
        <span class="text secondary" v-text="`$${price}`"></span>
      </div>
      <div class="card__info-action">
        <button>SELECT</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["id", "label", "imgSrc", "price"],
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
  border: solid thin lightgray;
  display: flex;
  border-radius: 4px;
  flex-direction: column;

  &__img {
    flex: 0 0 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__info {
    height: 100%;
    flex: 0 1 auto;
    border-top: solid thin lightgray;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;

    &-text {
      flex: 1 1 100%;
      text-align: left;
      display: flex;
      flex-direction: column;

      strong {
        margin-bottom: 0.35rem;
        font-size: 1em;
      }
      span {
        font-size: 0.85em;
      }
    }
    &-action {
      flex: 0 0 auto;
    }
  }
}
</style>