<template>
  <!-- vuetify dashboard -->
  <v-app>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>My App</v-toolbar-title>
    </v-app-bar> -->
    <v-main>
            <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
export default {
  setup() {
    
  },
}
</script>