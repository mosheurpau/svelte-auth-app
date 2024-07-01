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
</script>

<div class="flex flex-col items-center mt-20">
  <p class="text-xl font-semibold mb-4">Count: {count}</p>
  <div class="space-x-4">
    <button
      class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      on:click={incrementByOne}>Increment by 1</button
    >
    <button
      class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
      on:click={incrementByFive}>Increment by 5</button
    >
  </div>
</div>
