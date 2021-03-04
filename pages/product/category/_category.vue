<template>
  <div>
    <Header />
    <div class="mx-auto sm:block xl:mx-64">
      <div class="flex mb-8 py-24 justify-center">
        <div class="py-12 px-12 text-center max-w-2xl">
          <h1 class="font-bold font-dm text-5xl text-center my-12">
            {{ products[0].category.name }}
          </h1>
          <div class="text-xl font-dm font-thin mt-4">
            <p>{{ products[0].category.bio }}</p>
          </div>
        </div>
      </div>

      <div>
        <ul
          class="md:grid lg:grid xl:grid 2xl:grid grid-cols-2 place-items-auto"
        >
          <li
            v-for="product in products"
            :key="product.slug"
            class="w-full px-12 xs:mb-6 md:mb-24"
          >
            <NuxtLink
              :to="{ name: 'product-slug', params: { slug: product.slug } }"
              class="w-full xxlmax:flex-col"
            >
              <img
                v-if="product.img"
                class="h-5/6 w-full object-cover bw-img"
                :src="product.img"
                :alt="product.alt"
              />

              <div class="py-6 flex flex-col justify-center text-center">
                <h2 class="font-dm text-3xl font-medium mb-2">
                  {{ product.title }}
                </h2>
                <p class="text-sm font-light mt-2">{{ product.price }} CAD</p>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const products = await $content("products", params.slug)
      .where({
        "category.name": {
          $regex: [params.category, "i"]
        }
      })
      .without("body")
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      products
    };
  }
};
</script>
