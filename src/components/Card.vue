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
        <button>BUY</button>
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
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 0 8px 3px fade-out(black, 0.95),
      0 3px 5px fade-out(black, 0.9);
    transform: translateY(-4px);

    .card {
      &__info {
        padding: 0 1rem;

        &-action {
          opacity: 1;
        }
      }
    }
  }

  &__img {
    flex: 0 0 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: darken(white, 3);
  }
  &__info {
    height: 100%;
    flex: 0 1 auto;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 0;

    transition: padding 0.2s ease;

    &-text {
      flex: 1 1 100%;
      text-align: left;
      display: flex;
      flex-direction: column;

      strong {
        margin-bottom: 0.35rem;
        font-family: "Open Sans", sans-serif;
        font-size: 0.9em;
        font-weight: 600;
      }
      span {
        font-size: 0.85em;
        font-family: "Open Sans", sans-serif;
      }
    }
    &-action {
      flex: 0 0 auto;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
  }
}
</style>