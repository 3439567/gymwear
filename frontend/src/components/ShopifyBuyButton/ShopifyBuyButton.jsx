import React, { useEffect } from "react";

const ShopifyBuyButton = () => {
  useEffect(() => {
    const loadShopifyBuyButton = () => {
      if (window.ShopifyBuy && window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        const script = document.createElement("script");
        script.async = true;
        script.src =
          "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
        document.head.appendChild(script);
        script.onload = ShopifyBuyInit;
      }
    };

    function ShopifyBuyInit() {
      const client = window.ShopifyBuy.buildClient({
        domain: "https://admin.shopify.com/store/qyzc9s-i5/settings/domains/115993509954",
      });

      window.ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent("product", {
          id: "YOUR_PRODUCT_ID",
          node: document.getElementById("product-component"),
          moneyFormat: "%E2%82%B9%7B%7Bamount%7D%7D",
        });
      });
    }

    loadShopifyBuyButton();
  }, []);

  return <div id="product-component"></div>;
};

export default ShopifyBuyButton;