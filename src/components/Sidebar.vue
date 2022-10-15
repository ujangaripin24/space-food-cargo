<template>
      <v-card>
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
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
            nav
            dense
          >
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
          </v-list>
      </v-card>
</template>

<script>
    export default {
      data: () => ({ 
        drawer: null,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/user/dashboard' },
          { title: 'Setting', icon: 'mdi-cog', to: '/user/setting' },
          { title: 'Exit', icon: 'mdi-door', to: '/' },
        ],
    }),
    }
  </script>