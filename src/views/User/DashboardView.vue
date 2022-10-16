<template>
  <v-app id="inspire">
    <v-app-bar
    color="primary"
    dark
    app
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      
    >
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Sandra Adams
          </v-list-item-title>
          <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list
      nav
      dense
    >
      <v-list-item 
        link
        v-for="(item, id) in items" 
        :key="id"
        :to="item.to"
        exact
      >
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{item.title}}</v-list-item-title>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block color="success" to="/">
          Logout
        </v-btn>
      </div>
    </template>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      // items with random id, title, icon, to
      items: [
        { id: 1, title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/user/dashboard' },
        { id: 2, title: 'Users', icon: 'mdi-account-multiple', to: '/user/users' },
        { id: 3, title: 'Settings', icon: 'mdi-cog', to: '/user/setting' },
      ],
      
    }),
  }
</script>