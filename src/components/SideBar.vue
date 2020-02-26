<template>
    <v-list dense>
        <v-list-item link>
            <v-list-item-action>
                <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>전원 관리</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item link>
            <v-list-item-action>
                <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>온도 조절</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item link>
            <v-list-item-action>
                <v-icon>mdi-settings</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>색상 조절</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
    export default {
        name: 'SideBar'
    }
</script>
