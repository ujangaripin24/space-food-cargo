<template>
<!-- sidebar vuetify -->
    <v-app>
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
        <v-app-bar
        app
        clipped-left
        color="primary"
        dark
        >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>My App</v-toolbar-title>
        </v-app-bar>
        <v-main>
        <router-view></router-view>
        </v-main>
    </v-app>
</template>
<script>
export default {
    setup() {
        const drawer = ref(false)
        return { drawer }
    },
}
</script>