<template>
    <v-row justify="space-around">
        <v-color-picker @input="setColor" class="ma-2" hide-mode-switch v-model="color"/>
    </v-row>
</template>

<script>
    import rgbToHsv from './rgbToHue.js';
    export default {
        data: () => ({
            color: '',
            mode: 'rgba',
            modes: ['hsla', 'rgba', 'hexa'],
        }),
        methods:{
            setColor(){
                const red = parseInt(this.color.substr(1, 2), 16);
                const green = parseInt(this.color.substr(3, 2), 16);
                const blue = parseInt(this.color.substr(5, 2), 16);

                const PHILIPS_HUE_MAX_VALUE = 65535;

                let hsvColor = rgbToHsv(red, green, blue);
                let hue = Math.round(hsvColor[0] * (PHILIPS_HUE_MAX_VALUE / 360));
                console.log(hue);
            }
        }
    }
</script>
