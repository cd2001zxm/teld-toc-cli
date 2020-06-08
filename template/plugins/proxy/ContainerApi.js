var throwMethodNoExist = function(methodName){
    console.warn("未实现方法" + methodName )
}

var AbstractContainerApi = function(){
    this.setup()
}

//安装脚本
AbstractContainerApi.prototype.setup = function(){
    throwMethodNoExist("setup")
}
AbstractContainerApi.prototype.getLocation = function(){
    throwMethodNoExist("getLocation")
}
AbstractContainerApi.prototype.navigateTo = function(){
    throwMethodNoExist("navigateTo")
}
AbstractContainerApi.prototype.startRecord = function(){
    throwMethodNoExist("startRecord")
}
AbstractContainerApi.prototype.playVoice = function(){
    throwMethodNoExist("playVoice")
}
AbstractContainerApi.prototype.onMenuShareAppMessage = function(){
    throwMethodNoExist("onMenuShareAppMessage")
}


var WxContainerApi = function(AbstractContainerApi){

    function WxContainerApi(){
        var that = this;
        AbstractContainerApi.call(this);
    }

    if ( AbstractContainerApi ) WxContainerApi.__proto__ = AbstractContainerApi;
    WxContainerApi.prototype = Object.create( AbstractContainerApi && AbstractContainerApi.prototype );
    WxContainerApi.prototype.constructor = WxContainerApi;

    WxContainerApi.prototype.setup = function(){
    }

    WxContainerApi.prototype.getLocation = function(param){
        wx.getLocation()
    }
    WxContainerApi.prototype.navigateTo = wx.navigateTo

    WxContainerApi.prototype.startRecord = wx.startRecord

    WxContainerApi.prototype.playVoice = wx.playVoice

    WxContainerApi.prototype.onMenuShareAppMessage = wx.onMenuShareAppMessage

    return WxContainerApi

}(AbstractContainerApi)

var AlipayContainerApi = function(AbstractContainerApi){ 

    Alipay.prototype.getLocation = function(param){
        ap.getLocation()
    }
    return AlipayContainerApi

}(AbstractContainerApi)

var TeldContainerApi = function(AbstractContainerApi){ 
}(AbstractContainerApi)



