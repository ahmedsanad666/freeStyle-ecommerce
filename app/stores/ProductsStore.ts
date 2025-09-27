import { defineStore } from "pinia";
import { reactive } from "vue";

export const useProductsStore = defineStore("products", () => {
  // app\assets\images\products\tshirt\white\basic\pro1
  const products = reactive([
    // tshirt
    {
      id: 1,
      categoryIds: [1, 3],
      name: "Basic T-SHIRT",
      description: "bayaz ve siyah T-Shirt",
      variants: [
        // basic white tshirt
        {
          id: 1,
          name: "SİYAH BASIC T-SHIRT",
          description:
            "SOL ÖN GÖĞÜS BASKI LOGO ÖLÇÜSÜ : 7,50cm X 10,00cm SIRT BASKI LOGO ÖLÇÜSÜ : 25,00cm X 25,00cm",
          price: "175₺",
          sizes: [
            {
              id: 1,
              name: "S",
            },
            {
              id: 2,
              name: "M",
            },
            {
              id: 3,
              name: "L",
            },
          ],
          Images: [
            {
              id: 1,
              url: "/images/products/tshirt/basic/white/pro1.png",
            },
            {
              id: 2,
              url: "/images/products/tshirt/basic/white/pro2.png",
            },
          ],
        },
        // basic black tshirt
        {
          id: 1,
          name: "SİYAH BASIC T-SHIRT",
          description:
            "SOL ÖN GÖĞÜS BASKI LOGO ÖLÇÜSÜ : 7,50cm X 10,00cm SIRT BASKI LOGO ÖLÇÜSÜ : 25,00cm X 25,00cm",
          price: "175₺",
          sizes: [
            {
              id: 1,
              name: "S",
            },
            {
              id: 2,
              name: "M",
            },
            {
              id: 3,
              name: "L",
            },
          ],
          Images: [
            {
              id: 1,
              url: "/images/products/tshirt/basic/black/back.png",
            },
            {
              id: 2,
              url: "/images/products/tshirt/basic/black/back.png",
            },
          ],
        },
      ],
    },

    // hoodie
    {
      id: 2,

      categoryIds: [2],
      name: "3 İPLİK KAPÜŞONLU SWEATSHIRT",
      description: "bayaz ve siyah Hoodie",

      variants: [
        // basic white tshirt
        {
          id: 1,
          name: "BEYAZ 3 İPLİK KAPÜŞONLU SWEATSHIRT",
          description:
            "SOL ÖN GÖĞÜS BASKI LOGO ÖLÇÜSÜ : 7,50cm X 10,00cm SIRT BASKI LOGO ÖLÇÜSÜ : 25,00cm X 25,00cm",
          price: "400₺",
          sizes: [
            {
              id: 1,
              name: "M",
            },
          ],
          Images: [
            {
              id: 1,
              url: "/images/products/hoddie/white/front.png",
            },
            {
              id: 2,
              url: "/images/products/hoddie/white/back.png",
            },
          ],
        },
        // basic black tshirt
        {
          id: 1,
          name: "SİYAH 3 İPLİK KAPÜŞONLU SWEATSHIRT",
          description:
            "SOL ÖN GÖĞÜS BASKI LOGO ÖLÇÜSÜ : 7,50cm X 10,00cm SIRT BASKI LOGO ÖLÇÜSÜ : 25,00cm X 25,00cm Total Pieces",
          price: "400₺",
          sizes: [
            { id: 1, name: "M" },
            { id: 2, name: "L" },
          ],
          Images: [
            {
              id: 1,
              url: "/images/products/hoddie/black/front.png",
            },
            {
              id: 2,
              url: "/images/products/hoddie/black/back.png",
            },
          ],
        },
      ],
    },

    // oversize tshirt

    {
      id: 3,
      name: "Oversize T-SHIRT",
      description: "bayaz ve siyah Oversize T-Shirt",
      categoryIds: [1, 4],

      variants: [
        // basic white tshirt
        {
          id: 1,
          name: "SİYAH OVERSIZE T-SHIRT",
          description:
            "SOL ÖN GÖĞÜS BASKI LOGO ÖLÇÜSÜ : 7,50cm X 10,00cm SIRT BASKI LOGO ÖLÇÜSÜ : 25,00cm X 25,00cm",
          price: "220₺",
          sizes: [
            {
              id: 1,
              name: "S",
            },
            {
              id: 2,
              name: "M",
            },
          ],
          Images: [
            {
              id: 1,
              url: "/images/products/tshirt/oversize/black/front.png",
            },
            {
              id: 2,
              url: "/images/products/tshirt/oversize/black/back.png",
            },
          ],
        },
        // basic black tshirt
        {
          id: 1,
          name: "BEYAZ OVERSIZE T-SHIRT",
          description:
            "SOL ÖN GÖĞÜS BASKI LOGO ÖLÇÜSÜ : 7,50cm X 10,00cm SIRT BASKI LOGO ÖLÇÜSÜ : 25,00cm X 25,00cm",
          price: "220₺",
          sizes: [
            { id: 1, name: "S" },
            { id: 2, name: "M" },
          ],
          Images: [
            {
              id: 1,
              url: "/images/products/tshirt/oversize/white/front.png",
            },
            {
              id: 2,
              url: "/images/products/tshirt/oversize/white/back.png",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Oversize T-SHIRT INSTAGRAM",
      description: "bayaz Oversize T-Shirt",
      categoryIds: [1, 4],

      variants: [
        // basic white tshirt
        {
          id: 1,
          name: "SİYAH OVERSIZE T-SHIRT",
          description:
            "SOL ÖN GÖĞÜS BASKI LOGO ÖLÇÜSÜ : 7,50cm X 10,00cm SIRT BASKI LOGO ÖLÇÜSÜ : 25,00cm X 25,00cm",
          price: "220₺",
          sizes: [
            {
              id: 1,
              name: "S",
            },
          ],
          Images: [
            {
              id: 1,
              url: "/images/products/tshirt/oversize/whiteInsta/front.png",
            },
            {
              id: 2,
              url: "/images/products/tshirt/oversize/whiteInsta/back.png",
            },
          ],
        },
      ],
    },
  ]);

  const categories = reactive([
    {
      id: 1,
      name: "Tshirt",
      parent_id: null,
    },
    {
      id: 2,
      name: "Hoodie",
      parent_id: null,
    },

    // Tshirt categories
    {
      id: 3,
      name: "Basic",
      parent_id: 1,
    },
    {
      id: 4,
      name: "Oversize",
      parent_id: 1,
    },
    // color categories
    {
      id: 5,
      name: "White",
      parent_id: 1,
    },
    {
      id: 6,
      name: "Black",
      parent_id: 1,
    },
  ]);

  const sizes = reactive([
    {
      id: 1,
      name: "Small",
    },
    {
      id: 2,
      name: "Medium",
    },

    {
      id: 3,
      name: "Large",
    },
  ]);

  const colors = reactive([
    {
      id: 1,
      name: "White",
    },
    {
      id: 2,
      name: "Black",
    },
  ]);

  return {
    products,
    categories,
    sizes,
    colors,
  };
});
