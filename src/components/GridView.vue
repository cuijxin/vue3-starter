<template>
    <div><slot/></div>
</template>

<script>
export default {
    props: {
        crossAxisCount: { type: Number, required: true, validator: (count) => count % 1 === 0 && count >= 2 },
        crossAxisSpacing: String,
        mainAxisSpacing: String,
    }
}
</script>