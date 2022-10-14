<template>
 <!-- vuetify login form desgin -->
 <div class="circular" v-bind:style="{ 'background-image': 'url(https://vuejs.org/images/logo.png)' }">
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title><v-icon>mdi-food</v-icon> Makan Receh</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-btn flat href="#">Register</v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="account_circle" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div> 
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
