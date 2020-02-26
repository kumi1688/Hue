<template>
    <v-container>
        <v-card-text>
            <v-row>
                <v-col>
                    <h2>색 온도(temperature)</h2>
                </v-col>
                <v-col class="pr-4">
                    <v-slider
                            @end="setTemperature"
                            v-model="temperature"
                            class="align-center"
                            :max=500
                            :min=153
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
                temperature: 0
            }
        },
        watch:{
            temperature(){
                // console.log(this.bright)
            }
        },
        methods:{
            setTemperature(){
                console.log(this.temperature);
                axios.put(`${hueUrl}`, {
                    on: true,
                    ct: this.temperature
                })
            }
        }
    }
</script>
