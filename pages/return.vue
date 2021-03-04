<template>
  <div>
    <Header />
    <div>
      <h1 class="font-dm font-medium text-4xl mt-20">
        Politique de retour.
      </h1>

      <p class="mt-6 text-xs">
        Notre politique dure 30 jours. Si 30 jours se sont écoulés depuis votre
        achat, nous ne pouvons malheureusement pas vous offrir un remboursement
        ou un échange.
      </p>

      <p class="mt-6 text-xs">
        Pour pouvoir bénéficier d’un retour, votre article doit être inutilisé
        et dans le même état où vous l’avez reçu. Il doit être également dans
        l’emballage d’origine.
      </p>

      <p class="mt-6 text-xs">
        Plusieurs types de produits ne peuvent pas être retournés. Les
        marchandises périssables telles que la nourriture, les fleurs ou les
        magazines ne peuvent pas être retournées. Nous n’acceptons pas non plus
        de produits à usage intime ou sanitaire, de produits dangereux ou de gaz
        ou de liquides inflammables.
      </p>

      <p class="mt-6 text-xs">
        Pour effectuer un retour, vous devez nous présenter un reçu ou une
        preuve d’achat.
      </p>
      <p class="mt-6 text-xs">
        Tout article qui n’est pas dans son état d’origine, qui est endommagé ou
        qui présente certaines pièces manquantes pour des raisons qui ne sont
        pas dues à une erreur de notre part.
      </p>
      <p class="mt-6 text-xs">
        Tout article qui est retourné plus de 30 jours après la livraison.
        Remboursements (le cas échéant) Une fois que nous aurons reçu et
        inspecté l’article retourné, nous vous enverrons un e-mail pour vous
        confirmer que nous l’avons bien reçu. Nous vous informerons également de
        notre décision quant à l’approbation ou au rejet de votre demande de
        remboursement.
      </p>
      <p class="mt-6 text-xs">
        Si votre demande est approuvée, alors votre remboursement sera traité,
        et un crédit sera automatiquement appliqué à votre carte de crédit ou à
        votre méthode originale de paiement, dans un délai d’un certain nombre
        de jours. Remboursements en retard ou manquants (le cas échéant) Si vous
        n’avez pas encore reçu votre remboursement, veuillez d’abord consulter
        votre compte bancaire à nouveau. Ensuite, contactez l’entité émettrice
        de votre carte de crédit, car il pourrait y avoir un délai avant que
        votre remboursement ne soit officiellement affiché. Ensuite, contactez
        votre banque. Il y a souvent un délai de traitement nécessaire avant
        qu’un remboursement ne soit affiché. Si après avoir effectué toutes ces
        étapes, vous n’avez toujours pas reçu votre remboursement, veuillez s’il
        vous plait nous contacter à service.client@maisongratziano.com.
      </p>
      <h1 class="font-dm font-medium text-4xl mt-20">
        Expédition
      </h1>
      <p class="mt-6 text-xs">
        Pour retourner un produit, vous devez l’envoyer par la poste à: 101-1615
        RUE KENT, Longueuil, QC, J4J4K1, Canada. Il vous incombera de payer vos
        propres frais d’expédition pour retourner votre article. Les coûts
        d’expédition ne sont pas remboursables. Si vous recevez un
        remboursement, les frais de retour seront déduits de celui-ci. En
        fonction de l’endroit où vous vivez, le délai nécessaire pour recevoir
        votre produit échangé peut varier. Si vous expédiez un article d’une
        valeur supérieure à $75, vous devriez envisager d’utiliser un service de
        livraison qui vous permet de suivre l’envoi ou de souscrire à une
        assurance de livraison. Nous ne garantissons pas que nous recevrons
        l’article que vous nous retournez.
      </p>
      <h1 class="font-dm font-medium text-4xl mt-20">
        Procédure à suivre
      </h1>
      <p class="mt-6 text-xs">
        Afin que nous traitons votre demande de retour, veuillez envoyer un
        courriel à :
        <Mailto
          mail="retours@maisongratziano.com"
          subject="Demande de retour"
          body="Expliquez les raisons du retour"
          title="Demande de retour"
          class="mt-6 text-xs"
        >
          retours@maisongratziano.com
        </Mailto>
      </p>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  head: {
    title: "Politique de retour",
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
