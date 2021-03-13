<template>
  <div>
    <Header />
    <div class="container mx-auto mb-20">
      <div class="container mx-auto">
        <div class="flex mb-8 py-24 justify-center">
          <div class="p-12 text-center max-w-2xl">
            <h1 class="font-medium font-dm text-5xl mb-12">
              Nos pièces
            </h1>
            <p class="text-xl font-light mt-4 lg:px-20">
              Découvrez des pièces soigneusement fabriquées au Mexique, et conçu
              avec amour.
            </p>
          </div>
        </div>
      </div>

      <div class="lg:flex justify-between">
        <div class="w-full lg:mr-12 mb-12">
          <nuxt-link to="/product/category/mask" class="cursoir-pointer">
            <h2 class="font-dm text-6xl mb-4">Mask</h2>
            <img
              class="bw-img"
              src="https://res.cloudinary.com/dyhiu8zse/image/upload/v1599011734/mask_yczka9.jpg"
            />
          </nuxt-link>
        </div>
        <div class="w-full lg:ml-12">
          <nuxt-link to="/product/category/Bag" class="cursor=pointer">
            <img
              class="bw-img"
              src="https://res.cloudinary.com/dyhiu8zse/image/upload/v1599012152/photo-1566150905458-1bf1fc113f0d_cmeaqe.jpg"
            />
            <h2 class="font-dm text-6xl text-right mt-4">Bag</h2>
          </nuxt-link>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Nos pièces",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "All of products handcrafted with care."
      }
    ]
  },
  async asyncData({ $content, params }) {
    const products = await $content("products", params.slug)
      .only(["title", "description", "img", "slug", "category"])
      .sortBy("createdAt", "desc")
      .fetch();
    return {
      products
    };
  }
};
</script>

<style>
#products_line line {
  stroke: #555555;
  stroke-width: 2;
}
</style>
