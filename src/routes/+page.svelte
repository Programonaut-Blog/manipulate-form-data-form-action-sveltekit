<script lang="ts">
    import { enhance } from '$app/forms';
    export let data;
    export let action: undefined | { success: boolean, name: string};
    let closed = false;
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
</svelte:head>

<section class="container">
    <h1>Edit {data.donut.name}</h1>

    <form method="POST" action="?/update" use:enhance={({data: formData}) => {
        formData.append('id', data.donut.id);

        return async ({result}) => {
            action = { success: result.status === 200, name: result.data.name };
        };
    }}>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" value="{data.donut.name}">

        <label for="price">Price</label>
        <input type="number" name="price" id="price" value="{data.donut.price}">

        <label for="description">Description</label>
        <textarea name="description" id="description">{data.donut.description}</textarea>

        <button type="submit">Save</button>
    </form>

    <dialog open={action?.success && !closed}>
        <article>
          <header>
            <a href="#close" aria-label="Close" class="close" on:click={() => closed = true}></a>
            Success
          </header>
          <p>
            Donut with name "{action?.name}" successfully updated!
          </p>
        </article>
    </dialog>
</section>