<template>
    <!-- register vuetify with icon -->
    <v-container class="hero">
        <div>
        <Header/>
        </div>
        <v-row>
            <v-col cols="12" sm="8" md="6">
                <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                >
                <v-card>
                    <v-card-title>
                        <v-icon>mdi-account-plus</v-icon>
                        <span class="headline ml-1">Register Disini</span>
                    </v-card-title>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                                v-model="name"
                                :rules="nameRules"
                                label="Name"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="password"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="passwordRules"
                                :type="showPassword ? 'text' : 'password'"
                                label="Password"
                                required
                                @click:append="showPassword = !showPassword"
                            ></v-text-field>
                            <v-text-field
                                v-model="confPassword"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="passwordConfRules"
                                :type="showPassword ? 'text' : 'password'"
                                label="Conf Password"
                                required
                                @click:append="showPassword = !showPassword"
                            ></v-text-field>
                            <v-text-field
                                v-model="number"
                                :rules="numberRules"
                                label="Number"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="role"
                                :rules="roleRules"
                                label="Roles"
                                required
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="register">Register</v-btn>
                    </v-card-actions>
                </v-card>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import Header from '@/components/Header.vue';
import axios from 'axios';
export default {
    name: "createUser",
    data () {
        return {
          nameRules: "",
          emailRules: "",
          passwordRules: "",
          passwordConfRules: "",
          numberRules: "",
          roleRules: "",
        };
    },
    methods:{
        async register(){
            try{
                await axios.post("http://localhost:5500/user", {
                    name: this.nameRules,
                    email: this.emailRules,
                    password: this.passwordRules,
                    confPassword: this.passwordConfRules,
                    number: this.numberRules,
                    role: this.roleRules
                });
                this.nameRules;
                this.emailRules;
                this.passwordRules;
                this.passwordRules;
                this.numberRules;
                this.roleRules;
                this.$router.push("/user");
            } catch (err){
                console.log(err);
            }
        },
    },
  };

</script>

<style scoped>
.hero {
    background: url('./../../assets/bg.jpg') center center no-repeat;
    background-size: cover;
    height: 100%;
  }
</style>