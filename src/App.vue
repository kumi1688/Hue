<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
    >
    <side-bar></side-bar>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Hue Control</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <control-container></control-container>
    </v-content>
  </v-app>
</template>

<script>
  import SideBar from "./components/SideBar";
  import ControlContainer from './components/ControlContainer';

  export default {
    props: {
      source: String,
    },
    components:{
      'side-bar': SideBar,
      'control-container': ControlContainer,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = false;
    },
  }
</script>
