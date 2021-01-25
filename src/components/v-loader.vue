<template>
    <div class="main__loader">
        <v-progress-circular :size="70" indeterminate class="primary--text"/>
    </div>
</template>

<script>
export default {
}
</script>

<style>
  .main__loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }
</style>
