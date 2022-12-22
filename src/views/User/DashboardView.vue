<template>
  <v-app id="inspire">
    <v-app-bar
    color="primary"
    dark
    app
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Menu Makan Receh</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      
    >
    <v-list>
      <Profile/>
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

      <div class="mt-4 ml-4">  
        <v-btn color="primary"> Cari </v-btn>  
      </div>

      <div class="ml-2">
        <v-container>
          <v-row>
            <v-col
              v-for="food in foods"
              :key="food"
            >
              <v-card height="300" width="400">
                <v-img
                  :src="food.img"
                  height="170"
                  width="400"
                ></v-img>
                <v-card-title>
                  {{ food.name }}
                </v-card-title>
                <v-card-subtitle>
                  <h5>Rp. {{ food.price }}</h5>
                </v-card-subtitle>
                  <v-btn class="ml-2" color="primary" @click="addToCart(food)"><v-icon>mdi-cart</v-icon> Add to Cart</v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
  </v-app>
</template>

<script>
import Profile from '../../components/Profile.vue';

  export default {
    data: () => ({ 
      name: 'app',
      components:{
        Profile
      },
      drawer: null,
      // items with random id, title, icon, to
      items: [
        { id: 1, title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/user/dashboard' },
        { id: 2, title: 'Users', icon: 'mdi-account-multiple', to: '/user/users' },
        { id: 3, title: 'Settings', icon: 'mdi-cog', to: '/user/setting' },
      ],
      foods: [
        // random food name, price, img,
        { id: 1, name: 'Nasi Padang', price: 10000, img: 'https://assets-pergikuliner.com/uploads/bootsy/image/18948/Nasi_Padang__pergikuliner.com_.jpeg' },
        { id: 2, name: 'Nasi Uduk', price: 15000, img: 'https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/2022/08/03/765351270.png' },
        { id: 3, name: 'Nasi Goreng', price: 14000, img: 'https://assets.pikiran-rakyat.com/crop/75x53:675x478/750x500/photo/2022/06/06/2861416974.jpg' },
        ],
    }),
  }
</script>