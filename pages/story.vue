<template>
  <div>
    <Header />
    <div class="container mx-auto">
      <div class="flex mb-8 py-24 justify-center">
        <div class="p-12 text-center max-w-6xl">
          <h1 class="font-medium font-dm text-5xl mb-12">
            Notre histoire
          </h1>
          <div class="lg:flex justify-between mt-8 p-16">
            <p class="text-left mr-20 p-10">
              <span class="block text-center mb-8">
                "I think of the woman's body as something to be celebrated and
                embraced rather than changed" — Mary Young
              </span>
              is Canadian founded company, launched in 2014 to fill a gap in the
              intimates market, empowering women to celebrate their natural
              shape. The brand offers lifestyle lingerie - think of a blend of
              traditional 'to wear for your partner' designs blended with
              everyday 'boring, functional' underwear. Every garment is designed
              with comfort in mind with the use of rayon from bamboo material,
              soft mesh and custom elastics to encourage appreciation of the
              natural shape.
            </p>
            <img src="https://via.placeholder.com/400x600" alt="" />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  head: {
    title: "Notre histoire",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ]
  }
};
</script>
