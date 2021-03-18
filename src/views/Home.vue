<template>
  <div class="page">
    <div class="page__header">
      <v-image
        class="page__header-img"
        src="cat.jpg"
        size="cover"
        style="height: 50vh"
      ></v-image>
      <div class="page__header-content">
        <h1>Cat Trash</h1>
        <p>Providing the highest quality trash for your cats needs</p>
        <button @click="checkout" type="button">SHOP TRASH</button>
      </div>
    </div>
    <div class="page__body">
      <ul class="page__cards">
        <li class="page__cards-card" v-for="(item, i) in items" :key="i">
          <card v-bind="item" />
        </li>
      </ul>
    </div>
    <div class="page__footer">
      This website was made by Nathan Birus out of&nbsp;<i>spite</i>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import VImage from "@/components/Image";

export default {
  name: "Home",
  components: {
    Card,
    VImage,
  },
  data() {
    return {
      items: [
        {
          id: "noodle",
          label: "Dry Noodle",
          imgSrc: "",
          price: "0.99",
        },
        {
          id: "hdmi-cover",
          label: "HDMI Cover",
          imgSrc: "",
          price: "0.99",
        },
        {
          id: "drywall-screw",
          label: "Drywall Screw",
          imgSrc: "",
          price: "0.99",
        },
        {
          id: "breadtie",
          label: "Bread Tie",
          imgSrc: "",
          price: "0.99",
        },
        {
          id: "pastic-hook",
          label: "Pastic Hook",
          imgSrc: "",
          price: "0.99",
        },
        {
          id: "loose-food",
          label: "Loose Bits of Food",
          imgSrc: "",
          price: "0.99",
        },
        {
          id: "string",
          label: "String",
          imgSrc: "",
          price: "0.99",
        },
        {
          id: "ribbon",
          label: "Ribbon",
          imgSrc: "",
          price: "0.99",
        },
        {
          id: "plastic-bag",
          label: "Plastic Bag",
          imgSrc: "",
          price: "0.99",
        },
      ],
    };
  },
  methods: {
    async checkout() {
      await getScript("https://js.stripe.com/v3/");
      let stripe = Stripe(
        "pk_test_51IW7J0Gz8jyxp7dtne434Jve6qNCHIVcHNFcvo0NSGgxRqcmiIPWZ321FwJpxEtAinF6AQlwCZWHLQ9bLkuaqF0P00sbe8K5kC"
      );
      fetch("http://localhost:3000/create-checkout-session", {
        method: "POST",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (session) {
          return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then(function (result) {
          // If redirectToCheckout fails due to a browser or network
          // error, you should display the localized error message to your
          // customer using error.message.
          if (result.error) {
            alert(result.error.message);
          }
        })
        .catch(function (error) {
          console.error("Error:", error);
        });
    },
  },
};

function getScript(src) {
  return new Promise((resolve) => {
    let script = document.createElement("script");
    script.onload = () => {
      resolve();
    };
    script.async = true;
    script.src = src;
    document.head.appendChild(script);
  });
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__header {
    flex: 0 0 50vh;
    background-color: black;
    position: relative;

    &-img {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }
    &-content {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      color: white;
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 1rem;
    }
  }
  &__body {
    flex: 0 1 100%;
    padding: 5rem 3rem;
  }
  &__cards {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 0 1rem;

    &-card {
      width: 300px;
      height: 350px;
    }
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    font-size: 0.9em;
  }
}
</style>
