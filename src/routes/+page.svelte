<script>
  let count = 0;

  // Function to create a closure
  function createIncrementer(increment) {
    return function () {
      count += increment;
    };
  }

  // Create a closure that increments by 1
  const incrementByOne = createIncrementer(1);

  // Create a closure that increments by 5
  const incrementByFive = createIncrementer(5);

  let counter = 1;

  function updateCounter() {
    counter += 1;
    // Update the URL query parameter without reloading the page
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("counter", counter.toString());
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${urlParams}`
    );
  }
</script>

<div class="flex flex-col items-center mt-20">
  <p class="text-xl font-semibold mb-4">Count: {count}</p>
  <div class="space-x-4">
    <button
      class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
      on:click={incrementByOne}
    >
      Increment by 1
    </button>
    <button
      class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300 ease-in-out"
      on:click={incrementByFive}
    >
      Increment by 5
    </button>
  </div>
</div>
<br />

<hr class="my-8 border-gray-300 w-3/4 mx-auto" />

<div class="flex flex-col items-center mt-8">
  <p class="mx-auto text-center">
    simple example of shallow routing using SvelteKit, where we update the URL
    query parameter (counter) without reloading the entire page. This example
    demonstrates how to implement shallow routing for a counter that increments
    on button click
  </p>
  <h1 class="text-2xl font-bold mb-4">Counter: {counter}</h1>
  <button
    class="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300 ease-in-out"
    on:click={updateCounter}
  >
    Increment Counter
  </button>
</div>
