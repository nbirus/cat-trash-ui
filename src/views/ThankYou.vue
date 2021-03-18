<template>
  <div class="page">
    <h1>Thanks for buying our trash</h1>
    <p>A letter containing the trash will be mailed to you shortly</p>
    <hr />
    <router-link tag="button" to="/">SHOP MORE TRASH</router-link>
  </div>
</template>

<script>
export default {
  name: "thank-you",
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  padding: 0 1rem;
  overflow: hidden;

  h1 {
    margin-bottom: 1.5rem;
    text-align: center;
  }
  p {
    text-align: center;
    margin-bottom: 2rem;
  }
}

hr {
  overflow: visible; /* For IE */
  padding: 0;
  border: none;
  border-top: medium double #333;
  color: #333;
  height: 1px;
  text-align: center;
  width: 100%;
  max-width: 150px;
  margin-bottom: 4rem;
}
hr:after {
  content: "§";
  display: inline-block;
  position: relative;
  top: -0.7em;
  font-size: 1.5em;
  padding: 0 0.25em;
  background: white;
}
</style>