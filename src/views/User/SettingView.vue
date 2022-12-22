<template>
    <div>
        <Header />
        <div class="ml-4 mb-4">
          <h2>Pengaturan</h2>
          <!-- vuetify dark mode button -->
          <div>
            <v-label>Tampilan Aplikasi</v-label>
          <v-switch
            v-model="$vuetify.theme.dark"
            inset
            label="Dark Mode"
            persistent-hint
          ></v-switch>
          </div>
          <v-divider></v-divider>
          <v-label class="mt-4">Pengaturan Akun</v-label>
          <div class="mt-4">
            <h3>Change Password</h3>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                required
                type="password"
              ></v-text-field>
              <v-text-field
                v-model="confirmPassword"
                :rules="confirmPasswordRules"
                label="Confirm Password"
                required
                type="password"
              ></v-text-field>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="changePassword"
              >
                Change Password
              </v-btn>
            </v-form>
            </div>
            <v-divider></v-divider>
            <div class="mt-4">
              <h3>Change Email</h3>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  required
                ></v-text-field>
                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="changeEmail"
                >
                  Change Email
                </v-btn>
              </v-form>
              </div>
              <v-divider></v-divider>
              <div class="mt-4">
                <h3>Change Username</h3>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="username"
                    :rules="usernameRules"
                    label="Username"
                    required
                  ></v-text-field>
                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="changeUsername"
                  >
                    Change Username
                  </v-btn>
                </v-form>
                </div>
                <v-divider></v-divider>
                <div class="mt-4">
                  <h3>Change Phone Number</h3>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                      v-model="phone"
                      :rules="phoneRules"
                      label="Phone Number"
                      required
                    ></v-text-field>
                    <v-btn
                      :disabled="!valid"
                      color="success"
                      class="mr-4"
                      @click="changePhone"
                    >
                      Change Phone Number
                    </v-btn>
                  </v-form>
                  </div>
                  <v-divider></v-divider>
                  <div class="mt-4">
                    <h3>Change Address</h3>
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-text-field
                        v-model="address"
                        :rules="addressRules"
                        label="Address"
                        required
                      ></v-text-field>
                      <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="changeAddress"
                      >
                        Change Address
                      </v-btn>
                    </v-form>
                    </div>
                    <v-divider></v-divider>
                    <div class="mt-4">
                      <h3>Change Profile Picture</h3>
                      <v-form ref="form" v-model="valid" lazy-validation>
                        <v-file-input
                          v-model="file"
                          :rules="fileRules"
                          label="Profile Picture"
                          prepend-icon="mdi-camera"
                          multiple
                          chips
                          accept="image/*"
                          outlined
                        ></v-file-input>
                        <v-btn
                          :disabled="!valid"
                          color="success"
                          class="mr-4">
                          </v-btn>
                      </v-form>
                    </div>
                    <div class="mt-4">
                      <h3>Delete Account</h3>
                      <v-btn color="error" @click="deleteAccount">
                        Delete Account
                      </v-btn>
                    </div>
                  </div>
          <Footer />
        </div>
</template>

<script>
import Header from '../../components/Header.vue';
import Footer from '@/components/Footer.vue';
  export default {
    name: 'app',
    components: {
        Header,
        Footer,
    }
  }
</script>

<style scoped>
.hide {
  visibility: hidden !important;
}
</style>