<script lang="ts">
    export let data;
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
</svelte:head>

<section class="container">
    <h1>Edit {data.donut.name}</h1>

    <form method="POST" action="?/update">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" value="{data.donut.name}">

        <label for="price">Price</label>
        <input type="number" name="price" id="price" value="{data.donut.price}">

        <label for="description">Description</label>
        <textarea name="description" id="description">{data.donut.description}</textarea>

        <button type="submit">Save</button>
    </form>
</section>