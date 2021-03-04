<template>
  <div>
    <nav
      class="flex justify-between flex-wrap relative w-full h-24 flex justify-between items-center"
    >
      <div>
        <Logo />
      </div>
      <div>
        <div class=" flex w-full items-center text-sm">
          <nuxt-link
            to="/story"
            class="block mt-4 font-dm font-medium lg:inline-block lg:mt-0 text-black mr-8 hover:text-beige-300"
          >
            Histoire
          </nuxt-link>
          <nuxt-link
            to="/contact"
            class="block mt-4 font-dm font-medium lg:inline-block lg:mt-0 text-black hover:text-beige-300"
          >
            Contact
          </nuxt-link>
          <nuxt-link
            to="/products"
            class="block mt-4 font-dm font-medium lg:inline-block lg:mt-0 text-black ml-8 hover:text-beige-300"
          >
            Boutique
          </nuxt-link>
          <div class="snipcart-checkout ml-8 flex">
            <p
              class="block mt-4 font-dm font-medium lg:inline-block lg:mt-0 text-black hover:text-beige-300"
            >
              Panier
            </p>
            <span class="snipcart-items-count text-xs ml-1"></span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
