<template>
    <!-- simple sidebar -->
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
        <v-list dense>
            <v-list-item link>
            <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
            <v-list-item link>
            <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>Profile</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
            <v-list-item link>
            <v-list-item-icon>
                <v-icon>mdi-settings</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <!-- simple sidebar -->
</template>