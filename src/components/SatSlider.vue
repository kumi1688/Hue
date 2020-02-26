<template>
    <v-container>

        <v-card-text>
            <v-row>
                <v-col>
                    <h2>포화도(saturation)</h2>
                </v-col>
                <v-col class="pr-4">
                    <v-slider
                            @end="setSaturation"
                            v-model="saturation"
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
                saturation: 0
            }
        },
        watch:{
            bright(){
                // console.log(this.bright)
            }
        },
        methods:{
            setSaturation(){
                console.log(this.saturation);
                axios.put(`${hueUrl}`, {
                    on: true,
                    sat: this.saturation
                })
            }
        }
    }
</script>
