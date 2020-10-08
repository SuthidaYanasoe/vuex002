<template>
  <v-data-table
    :headers="this.$store.state.headers"
    :items="this.$store.state.data"
    :items-per-page="5"
    class="elevation-1"
  />
</template>
