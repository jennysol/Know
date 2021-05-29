<template>
    <footer class="footer"> 
        <span><strong>Know</strong>2021</span>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: #DDD;
        color: #333;

        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 10px
    }
</style>