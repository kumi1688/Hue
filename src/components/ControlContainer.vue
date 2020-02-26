<template>
    <v-container>
    <v-switch class="switch"  v-model="powerOn" label="전원 끄기"></v-switch>
<!--    <bri-slider/>-->
<!--    <sat-slider/>-->
<!--    <temp-slider/>-->
    <slider v-bind:type="'temperature'" v-bind:target="'ct'" v-bind:min='153' v-bind:max='500'/>
        <slider v-bind:type="'saturation'" v-bind:target="'sat'" v-bind:min='0' v-bind:max='254'/>
        <slider v-bind:type="'bright'" v-bind:target="'bri'" v-bind:min='1' v-bind:max='254'/>
    <color-picker/>
    </v-container>
</template>

<script>
    import ColorPicker from './ColorPicker';
    import Slider from './Slider';
    import axios from 'axios';

    const hueUrl = 'http://210.107.205.200:8080/api/wkcBD-lTULsGrCJ2hqZZqgeQsfathjs6zc3Rul1O/lights/10/state';

    export default {
        name: 'ControlContainer',
        components:{
            'slider': Slider,
            'color-picker': ColorPicker,
        },
        data(){
            return {
                powerOn: false
            }
        },
        watch:{
            powerOn(){
                this.turnOff();
                console.log(this.powerOn);
            }
        },
        methods:{
            turnOff(){
                    axios.put(`${hueUrl}`,
                        {on: !this.powerOn}).then(result=>console.log(result));
            }
        }
    }
</script>

<style scoped>
    .switch{
        padding-left: 20px;
    }
</style>
