<template>
  <div>
    <Header />
    <div class="container mx-auto">
      <div class="py-20">
        <h1 class="font-medium font-dm text-5xl text-center my-12">
          Nous joindre
        </h1>
      </div>
      <div class="flex justify-center align-center w-full">
        <div class="mb-6">
          <h2 class="text-4xl text-center">Facebook</h2>
          <p class="text-lg text-center mt-4">Du lundi au vendredi</p>
          <a
            class="flex justify-center w-full mt-6 border border-black p-4 hover:bg-beige-100 hover:border-transparent"
            href="https://www.facebook.com/maisongratziano/"
            target="_blank"
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="chat-alt2 w-6 h-6"
            >
              <path
                d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
              ></path>
              <path
                d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
              ></path>
            </svg>
            <span class="ml-4">Envoyer un message</span>
          </a>
        </div>
        <div class="ml-10">
          <h2 class="text-4xl text-center">Instagram</h2>
          <p class="text-lg text-center mt-4">Du lundi au vendredi</p>
          <a
            class="flex justify-center w-full mt-6 border border-black p-4 hover:bg-beige-100 hover:border-transparent"
            href="https://www.instagram.com/maisongratziano/"
            target="_blank"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span class="ml-4">Suivez-nous</span>
          </a>
        </div>

        <div class="ml-10">
          <h2 class="text-4xl text-center">Courriel</h2>
          <p class="text-lg text-center mt-4">Du lundi au vendredi</p>
          <Mailto
            class="flex justify-center w-full mt-6 border border-black p-4 hover:bg-beige-100 hover:border-transparent"
            mail="contact@maisongratziano.com"
            subject="Sujet de votre courriel"
            body="Décrivez votre sujet"
            title="Envoyez-nous un courriel"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span class="ml-4">Envoyez-nous un courriel</span>
          </Mailto>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  head: {
    title: "Contact",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Contact us with your feedback and suggestions."
      }
    ]
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 5000);
    });
  }
};
</script>
