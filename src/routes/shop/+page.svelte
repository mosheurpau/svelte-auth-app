<script>
  import { onMount } from "svelte";
  let products = null;

  async function fetchData() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    products = data.products; // Access the array of products
  }

  onMount(() => {
    fetchData();
  });

  $: {
    console.log(products);
  }
</script>

{#if products}
  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-auto">
    {#each products as product, index}
      <div class="card bg-base-100 w-96 shadow-xl border-2 mx-auto">
        <figure>
          <a class="hover:underline" href="/shop/{product.id}">
            <img class="h-96" src={product.images[0]} alt="product" />
          </a>
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            <a class="hover:underline" href="/shop/{product.id}"
              >{product.title}</a
            >
          </h2>
          <p>{product.category}</p>
        </div>
      </div>
    {/each}
  </div>
{:else}
  <p class="text-center text-gray-500 mt-8">Loading product data...</p>
{/if}
