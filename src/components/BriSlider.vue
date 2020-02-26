<template>
    <v-container>

        <v-card-text>
            <v-row>
                <v-col>
                <h2>밝기(bright)</h2>
                </v-col>
                <v-col class="pr-4">
                    <v-slider
                            @end="setBright"
                            v-model="bright"
                            class="align-center"
                            :max=254
                            :min=1
                            hide-details
                            thumb-label="always"
                    >
                    </v-slider>
                </v-col>
            </v-row>
        </v-card-text>
    </v-container>
</template>

<script>
    import axios from 'axios'
    const hueUrl = 'http://210.107.205.200:8080/api/wkcBD-lTULsGrCJ2hqZZqgeQsfathjs6zc3Rul1O/lights/10/state';

    export default {
        data(){
            return{
                bright: 1
            }
        },
        watch:{
            bright(){
                // console.log(this.bright)
            }
        },
        methods:{
            setBright(){
                console.log(this.bright);
                axios.put(`${hueUrl}`, {
                    on: true,
                    bri: this.bright
                })
            }
        }
    }
</script>
