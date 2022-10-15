<template>
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <Sidebar />
    </v-navigation-drawer>
  
      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>
  
      <v-main>
        <!--  -->
      </v-main>
    </v-app>
  </template>

  <script>
  import Sidebar from '@/components/Sidebar.vue'
    export default {
      data: () => ({ 
        drawer: null,
    }),
    components: {
        Sidebar,
        }
    }
  </script>