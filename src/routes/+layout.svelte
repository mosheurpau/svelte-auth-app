<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
</script>

<Header />
<main class="container mx-auto p-4">
  <slot></slot>
</main>
