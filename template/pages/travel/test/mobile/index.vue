<template>
  
  <tm-row>
    <tm-action-sheet v-model="show" :actions="actions" @select="onSelect"></tm-action-sheet>
    <tm-button type="default">默认按钮</tm-button>
    <tm-circle v-model="currentRate" :rate="30" :speed="100" text="123" />
    <tm-rate v-model="value" />
    
    <!-- <t-chart :data="chartData" prevent-default>
      <t-scale :options="yOptions" />
     <t-tooltip disabled />
     <t-pie :radius="0.85" series-field="name" />
     <t-legend :options="legendOptions" />
    </t-chart> -->

    <tm-draggable v-model="myList" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in myList" :key="element.id" style="height:30px">{{element.name}}</div>
    </tm-draggable>
  </tm-row>
    
</template>
<script>
const map = {
  '芳华': '40%',
  '妖猫传': '20%',
  '机器之血': '18%',
  '心理罪': '15%',
  '寻梦环游记': '5%',
  '其他': '2%'
}
  import { getDataById } from "@/page-modules/travel/test/testModule";
export default {


  data() {
    return {
      show: false,
       currentRate: 0,
       value:3,
      actions: [
        { name: '选项' },
        { name: '选项' },
        { name: '选项', subname: '描述信息' },
      ],
      chartData:[
       { name: '芳华', percent: 0.4, a: '1' },
        { name: '妖猫传', percent: 0.2, a: '1' },
        { name: '机器之血', percent: 0.18, a: '1' },
        { name: '心理罪', percent: 0.15, a: '1' },
        { name: '寻梦环游记', percent: 0.05, a: '1' },
        { name: '其他', percent: 0.02, a: '1' }
      ],
      legendOptions: {
        position: 'right',
        itemFormatter (val) {
          return val + '  ' + map[val]
        }
      },
      yOptions: {
        formatter (val) {
          return val * 100 + '%'
        }
      },
      map,
      myList :[
  {
    "name": "Joao",
    "id": 1
  },
  {
    "name": "John",
    "id": 0
  },
  {
    "name": "Jean",
    "id": 2
  }
]
    };
  },
  methods: {
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      this.$TM.Toast(item.name);
    },
  },
  mounted(){
    getDataById()

    console.log("-----------------------------根据环境获取的定位：")
    window.envApi.getLocation((data)=>{
      console.dir(data)
    })

    console.log("-----------------------------vuex数据存取：")
    this.$store.commit("increment")
    console.log("loadDataFromVuex:"+this.$store.state.counter)
    this.$store.commit("increment")
    console.log("loadDataFromVuex:"+this.$store.state.counter)

    // let {getServiceUrl} = require('@teld/api-proxy/lib/common')
    // let sgApi = require('@teld/api-proxy/lib/ajax')
    var postData ={
      "BusUnitID":'1111',
      "ComapnyID":'2222'
    }
    let sgUrl = this.$utils.common.getServiceUrl("ASC-GetBusUnitCountInfo")
    console.log("sgUrl========="+sgUrl)
    console.log("-----------------------------sg服务调用：")
    this.$utils.sgApi.getDataAsync({
        url: sgUrl,
        data: postData,
        sucCallbackFunc:function (result) {
            console.dir(result)
        }
      }
    )
  }
}
</script>