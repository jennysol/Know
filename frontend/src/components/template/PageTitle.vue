<template>
    <div class="page-title">
        <h1><i v-if="icon" :class="icon"></i> {{ main }} </h1>
        <h2>{{ sub }}</h2>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: ['icon', 'main', 'sub']
}
</script>

<style>
    .page-title h1 {
        margin: 0px;
        color: white;

    }

    .page-title h2 {
        color: rgb(190, 189, 189);
        margin-top: 5px;
        font-size: 1.3rem;
    }
</style>
