<template>
    <v-row justify="space-around">
        <v-color-picker @input="setColor" class="ma-2" hide-mode-switch v-model="color"/>
    </v-row>
</template>

<script>
import Hue from './rgbToHue.js';
import axios from 'axios';
const hueUrl = 'http://210.107.205.200:8080/api/wkcBD-lTULsGrCJ2hqZZqgeQsfathjs6zc3Rul1O/lights/10/state';

    export default {
        data: () => ({
            color: '',
            mode: 'rgba',
            modes: ['hsla', 'rgba', 'hexa'],
        }),
        created() {
            const result = Hue.HSBToRGB({h: this.initialValue.hue, s: this.initialValue.sat, b: this.initialValue.bri});
            console.log(result);
        },
        props: ['initialValue'],
        methods:{
            setColor(){
                const red = parseInt(this.color.substr(1, 2), 16);
                const green = parseInt(this.color.substr(3, 2), 16);
                const blue = parseInt(this.color.substr(5, 2), 16);
                // console.log(red, green, blue);
                const result = Hue.rgbToHsv(red, green, blue);
                console.log(parseInt(result, 10));
                // console.log(result);
                axios.put(`${hueUrl}`, {
                    on: true,
                    hue: parseInt(result[0],10),
                    sat: parseInt(result[1], 10),
                    bri: parseInt(result[2], 10)
                });
            }
        }
    }
</script>
