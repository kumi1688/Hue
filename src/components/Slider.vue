<template>
    <v-container>
        <v-card-text>
            <v-row>
                <v-col>
                    <h2>{{type}}</h2>
                </v-col>
                <v-col class="pr-4">
                    <v-slider
                            @end="setValue"
                            v-model="value"
                            class="align-center"
                            :max=max
                            :min=min
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
        props: ['type', 'min', 'max', 'target', 'initialValue'],
        created() {
            this.value = this.initialValue;
        },
        data(){
            return{
                value: 0,
            }
        },
        watch:{
            bright(){
                // console.log(this.bright)
            }
        },
        methods:{
            setValue(){
                var data;
                if(this.type === 'temperature'){
                    data = {
                        on: true,
                        ct: this.value
                    }
                }else if(this.type === 'saturation'){
                    data = {
                        on: true,
                        sat: this.value
                    }
                }else {
                    data = {
                        on: true,
                        bri: this.value
                    }
                }
                axios.put(`${hueUrl}`, data)
            }
        }
    }
</script>
