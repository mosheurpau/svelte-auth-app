<script>
  export let data = null;

  const { product } = data;

  console.log(product);
</script>

{#if product.title}
  <div class="card shadow-xl border-2 max-w-sm mx-auto my-8">
    <figure class="overflow-hidden">
      <img
        class="h-96 w-full object-cover"
        src={product.images[0]}
        alt="product"
      />
    </figure>
    <div class="card-body p-4">
      <div class="text-center">
        <h2 class="text-2xl font-bold mb-2">{product.title}</h2>
        <p class="text-lg mb-1">
          Price: <span class="font-semibold">${product.price}</span>
        </p>
        <p class="text-lg mb-1">
          Rating: <span class="font-semibold">{product.rating}</span>
        </p>
        <p class="text-lg mb-1">
          Stock: <span class="font-semibold">{product.stock}</span>
        </p>
        <p class="text-base mt-4">{product.description}</p>
      </div>
    </div>
  </div>
{:else}
  <p class="text-center text-gray-500 mt-8">Loading product data...</p>
{/if}
