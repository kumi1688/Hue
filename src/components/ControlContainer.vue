<template>
    <v-container>
    <v-switch class="switch" @change="turnOff" v-model="powerOn" :label="`현재 전원: ${this.getCurrentPowerState()}`"/>
        <slider v-bind:type="'temperature'" v-bind:target="'ct'" v-bind:min='153' v-bind:max='500'
            v-bind:initialValue="this.currentState.ct"/>
        <slider v-bind:type="'saturation'" v-bind:target="'sat'" v-bind:min='0' v-bind:max='254'
            v-bind:initialValue="this.currentState.sat"/>
        <slider v-bind:type="'bright'" v-bind:target="'bri'" v-bind:min='1' v-bind:max='254'
            v-bind:initialValue="this.currentState.bri"/>
    <color-picker v-bind:initialValue="this.currentState"/>
    </v-container>
</template>

<script>
    import ColorPicker from './ColorPicker';
    import Slider from './Slider';
    import axios from 'axios';

    const hueUrl = 'http://210.107.205.200:8080/api/wkcBD-lTULsGrCJ2hqZZqgeQsfathjs6zc3Rul1O/lights/10';

    export default {
        name: 'ControlContainer',
        components:{
            'slider': Slider,
            'color-picker': ColorPicker,
        },
        data(){
            return {
                powerOn: false,
                currentState: null
            }
        },
        created() {
            this.getCurrentStatus();
        },
        methods:{
            turnOff(){
                    axios.put(`${hueUrl}/state`,
                        {on: !this.powerOn}).then(result=>console.log(result));
            },
            getCurrentPowerState(){
                return this.powerOn ? '켜짐' : '꺼짐'
            },
            promiseTest(data){
              return new Promise((resolve, reject)=>{
                  try{
                      this.currentState = data.data.state;
                      this.powerOn = this.currentState.on;
                      resolve();
                  }catch(e){
                      reject(e);
                  }
              })
            },
            async getCurrentStatus(){
                const result = await axios.get(`${hueUrl}`);
                await this.promiseTest(result);
                console.log(this.currentState);
            }
        }
    }
</script>

<style scoped>
    .switch{
        padding-left: 20px;
    }
</style>
