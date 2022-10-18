<template>
    <!-- register vuetify with icon -->
    <v-container class="hero">
        <div>
        <Header/>
        </div>
        <v-row>
            <v-col cols="12" sm="8" md="6">
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
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="register">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import Header from '@/components/Header.vue';
export default {
    data: () => ({ 
        components: [
            {
                Header,
            }
        ]
    }),
  }

</script>

<style scoped>
.hero {
    background: url('./../../assets/bg.jpg') center center no-repeat;
    background-size: cover;
    height: 100%;
  }
</style>