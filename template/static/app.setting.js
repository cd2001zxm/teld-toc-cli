  /**
   * 运行时项目个性化属性设置
   */
 window.appSetting = {

    //关键应用的英文简写
    appCode:'travel',

    //自定义用户中心地址
    UserCenterUrl:null,
    //是否使用高德地图.*设置为true，为了性能，框架不会直接加载高德地图，只是进行预加载
    UseGaoDeMap:false,
    //是否使用高德地图UI，为了性能，框架不会直接加载高德地图，只是进行预加载
    UseGaoDeMapUI:false,
    //是否引入容器相关的sdk，目前支持特来电app，微信，支付宝
    LoadContainerSdk:true,

    /**
     * 如果LoadContainerSdk设置为true,需要提供认证appid
     * 多租户的场合,需要在url上加上具体区分，比如：taid=cs
     * @todo:目前只支持微信端，其他端后续开放
     */
    WX_APPID:{
      // travel:{
      //   cs:"wxd1cbe7a8806bda75",
      //   sm:"wxd1cbe7a8806bda75",
      // },
      travel:"wxd1cbe7a8806bda75"
    },
    Alipay_APPID:{
      travel:{
        cs:"wxd1cbe7a8806bda75",
        sm:"wxd1cbe7a8806bda75",
      },
      ecms:"XXXXXXXXXXXXXX"
    },
    Dingtalk_APPID:{

    }


  }