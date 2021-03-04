<template>
  <div>
    <Header />
    <div class="container mx-auto">
      <div class="flex mb-8 py-24 justify-center">
        <div class="p-12 text-center max-w-2xl">
          <h1 class="font-medium font-dm text-5xl mb-12">
            Notre histoire
          </h1>
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
