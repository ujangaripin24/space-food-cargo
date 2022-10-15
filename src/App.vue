<template>
 <!-- vuetify login form desgin -->
  <v-app>
    <v-content>
      <v-container fluid fill-height class="hero">
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title><v-icon>mdi-food</v-icon> Makan Receh</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <!-- input form login vuetify -->
                  <v-text-field prepend-icon="mdi-account" name="username" label="Email" type="email" v-model="username"></v-text-field>
                  <v-text-field prepend-icon="mdi-lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <!-- btn login with link to api -->
                <v-btn style="width: 100%;" color="success" @click="login">Masuk</v-btn>
              </v-card-actions>
              <!-- label login with -->
              <v-card-text justify-center>
                <v-divider></v-divider>
                <v-layout justify-center>
                  <v-spacer></v-spacer>
                  <v-btn style="width: 100%;" color="primary"><v-icon>mdi-upload</v-icon> Daftar Baru</v-btn>
                </v-layout>
              </v-card-text>
              <!-- label login with google, facebok, apple to row button -->
              <v-card-text justify-center>
                <label>--Atau Login Dengan--</label>
                <v-layout justify-center>
                  <v-spacer></v-spacer>
                  <v-btn style="width: 35%;" outlined color="primary"><v-icon>mdi-google</v-icon> Google</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn style="width: 35%;" outlined color="primary"><v-icon>mdi-facebook</v-icon> Facebook</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn style="width: 35%;" outlined color="primary"><v-icon>mdi-apple</v-icon> Apple</v-btn>
                  <v-spacer></v-spacer>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    password: '',
    showPassword: false
  }),
  methods: {
    login () {
      // username && password is admin if true forwrd to /dashboard page if false alert
      if (this.username === 'admin' && this.password === 'admin') {
        this.$router.push('/dashboard')
      } else {
        alert('Username atau Password Salah')
      }
    }
  }
}
</script>

<style scoped>
.hero {
  background: url('./assets/bg.jpg') center center no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>