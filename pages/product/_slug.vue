<template>
  <article id="app">
    <Header />

    <div class="mx-32 mt-10">
      <div class="flex sm:flex-none relative justify-betewen">
        <div class="w-full image-wrapper">
          <img :src="product.img" :alt="product.alt" class="w-full mb-16" />
          <img :src="product.img" :alt="product.alt" class="w-full mb-16" />
          <img :src="product.img" :alt="product.alt" class="w-full mb-16" />
        </div>
        <div
          class="flex flex-col justify-center h-screen top-0 mx-10 pl-12 xl:pl-20 w-11/12 sticky"
        >
          <div class="mb-8 pt-10">
            <h1
              class="font-dm font-medium font-butler text-3xl md:text-4xl lg:text-4.5xl"
            >
              {{ product.title }}
            </h1>
            <p>
              <span class="text-xs uppercase"
                >{{ `${product.price}` }} Dollars Canadiens</span
              >
            </p>
          </div>
          <p class="text-xs">{{ product.description }}</p>
          <button
            class="buy-button snipcart-add-item bg-beige-300 text-white text-xs font-medium font-dm uppercase w-5/12 py-4 lg:my-10"
            :data-item-id="product.id"
            :data-item-name="product.title"
            :data-item-price="product.price"
            :data-item-description="product.description"
            :data-item-has-taxes-included="true"
            :data-item-image="product.img"
            :data-item-weight="product.weight"
            :data-item-url="`https://beta-mg.netlify.app/product/${product.id}`"
          >
            Commander
          </button>

          <div class="my-20">
            <div class="flex-col">
              <div class="mr-16 mb-6">
                <h2 class="text-xs uppercase mb-4 font-semibold">
                  Composition
                </h2>
                <div>
                  <p class="text-xs">{{ product.details }}</p>
                  <p class="text-xs">{{ product.composition }}</p>
                </div>
              </div>
              <div class="mb-6">
                <h2 class="text-xs uppercase mb-4 font-semibold">
                  Style et coupe
                </h2>
                <div>
                  <p class="text-xs">{{ product.sizefit }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full bg-beige-300 py-16 px-64">
        <h1 class="text-center text-white text-3xl font-medium">
          Inscrivez-vous au Journal
        </h1>
        <p class="text-center text-sm text-white mt-6 mb-10">
          Soyez le premier à découvrir des nouvelles pièces exclusives. Aucun
          spam.
        </p>
        <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup">
          <form
            action="https://maisongratziano.us2.list-manage.com/subscribe/post?u=17ecf72d57bc404f690896cbf&amp;id=78f1e88129"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <div class="mc-field-group">
                <label for="mce-EMAIL" class="block text-sm text-white"
                  >Adresse courriel
                </label>
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  class="required block w-full p-2 email rounded-none"
                  id="mce-EMAIL"
                />
              </div>
              <div id="mce-responses" class="w-full text-sm text-white mb-6">
                <div
                  class="response"
                  id="mce-error-response"
                  style="display:none bg-red-600 text-sm"
                ></div>
                <div
                  class="response"
                  id="mce-success-response"
                  style="display:none bg-green-600 text-sm"
                ></div>
              </div>

              <div
                style="position: absolute; left: -5000px;"
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_17ecf72d57bc404f690896cbf_78f1e88129"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
                />
              </div>
            </div>
          </form>
        </div>
        <script
          type="text/javascript"
          src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        ></script>
        <script type="text/javascript">
          (function($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0] = "EMAIL";
            ftypes[0] = "email";
            fnames[1] = "FNAME";
            ftypes[1] = "text";
            fnames[2] = "LNAME";
            ftypes[2] = "text";
            fnames[3] = "ADDRESS";
            ftypes[3] = "address";
            fnames[4] = "PHONE";
            ftypes[4] = "phone";
          })(jQuery);
          var $mcj = jQuery.noConflict(true);
        </script>
        <!--End mc_embed_signup-->
      </div>

      <Footer />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const product = await $content("products", params.slug).fetch();
    return {
      product
    };
  }
};
</script>
