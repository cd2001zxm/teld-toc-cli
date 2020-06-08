/***
 * jest ddp 上报
 * chendong 2020/05/27
 */
class DDPReporter {
    constructor(globalConfig, options) {
      this._globalConfig = globalConfig;
      this._options = options;
    }
  
    /***
     * override
     */
    onRunComplete(contexts, results) {
      console.log('准备上报ddp:');
      //console.log('GlobalConfig: ', this._globalConfig);
      //let arr = Array.from(contexts)
      //console.dir(arr[0].config.globals);
      //console.dir(global)
      let ciParam = this._getCIParam()
      //非CI环境，不需要上报
      if(!ciParam) return console.log('本地开发环境不需要上报！');

      this.ciParam = ciParam

      for(let index in results.testResults){
          let testSuite = results.testResults[index]
         
          for(let i in testSuite.testResults){
            let testCase = testSuite.testResults[i]
            this._reportDDP(testSuite,testCase)
          }
      }
    }

    _reportDDP(testSuite,testCase){

      let context = {testSuite:testSuite,testCase:testCase}
      
      context.ciParam = this.ciParam

      //获取测试元数据
      let metaData = this._getTestMetaData(testSuite.testFilePath)
      
      if(!metaData){
        return
      }
      context.metaData = metaData

      //组织上报数据
      let reportData = this._assembleReportData(context)

      //上报
      this._uploadData(context,reportData)

    }
    _uploadData(context,reportData){
        const axios = require('axios')
        const qs = require('qs')
        axios({
          url:this.ciParam.DDPReportUrl,
          method: 'post',
          data:qs.stringify(reportData),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          retry : 3,
          retryDelay : 1000,
          responseType: 'json',
          validateStatus: function (status) {
            return true;
          }
        }).then(function (response) {
          //console.dir(response.data)
          if(response.data && response.data.state==1){
            console.info('['+context.testCase.title+']:单测结果上报成功');
          } else {
            console.error('[' + context.testCase.title + ']:单测结果上报失败：');
            console.error(response.data.exception)
          }
        }).catch(function (err) {
          console.error(err)
        })
    }

    _assembleReportData(context){
      let title = context.testCase.title
      let methodInfo = title.split('-')
      let methodName = methodInfo[0]
      let no = methodInfo[1]
      let devName = methodInfo[2]
      // console.dir(context.testSuite)
      // console.dir(context.testCase)
      let postData = {
        "unitTestCase":
          JSON.stringify({
          "Code": "",
          "ChangeSource": context.ciParam.ChangeSource,//变更源
          "SequenceNumber": no,
          "UnitTestName": methodName,
          "UnitTestType": 0,
          "Description": methodName,
          "ServiceType": 1, //需要调整
          "ServiceID": context.metaData.webpackChunkName,//写死 功能编号webpackChunkName
          "Tag": "",
          "UserName": devName,
          "TestSuiteCode": context.metaData.testSuiteCode,
          "UnitTestAssembly": context.metaData.webpackChunkName,//webpackChunkName
          "UnitTestClass": context.metaData.vueFilePath,//vueFilePath
          "UnitTestMethod": "",
          "HostName": context.ciParam.HostName,
          "Passed": context.testCase.status=='passed'?true:false,
          "Duration": context.testCase.duration,
          "ExecuteTime": this._GMTToStr(context.testSuite.perfStats.start),
          "CertInfo": null,
          "BatchID": context.ciParam.BatchID,
          "IsJustDefine": false,
          "TestFile": {
            "FileName": null,
            "FileMD5": '临时必填字段'
          },
          "TenantID": context.ciParam.TenantID,
          "MethodContent":context.testCase.status=='failed'?context.testSuite.failureMessage:'',//方法实现
          "CallStackTrace":context.testCase.status=='failed'?context.testCase.failureMessages.join('\n'):'',//错误堆栈
          "ClientType":2 //1,后端 2，前端
        })
      }
      return postData
    }

    _getCIParam(){
      let ciParam
      try{
        ciParam = require('../ci.cd.param')
      }catch(e){
          //console.error(e)
          return null
      }

      if(ciParam && ciParam.hasOwnProperty("DDPReportUrl")){
        return ciParam
      }
      return null
    }

    _getTestMetaData(testFilePath){
      let metaFilePath = testFilePath.replace(".spec.",".metadata.")
      let metaData
      try{
        metaData = require(metaFilePath)
      }catch(e){
          console.error(e)
          return null
      }

      if(metaData.hasOwnProperty('testSuiteCode')==false 
      || metaData.hasOwnProperty('webpackChunkName')==false
      || metaData.hasOwnProperty('vueFilePath')==false){
          throw Error("文件["+metaFilePath+"]参数不全！")
      }
      
      return metaData
    }

    _GMTToStr(time){
      let date = new Date(time)
      let hours = date.getHours()<10?('0'+date.getHours()):date.getHours()
      let minutes = date.getMinutes()<10?('0'+date.getMinutes()):date.getMinutes()
      let seconds = date.getSeconds()<10?('0'+date.getSeconds()):date.getSeconds()
    
      let Str=date.getFullYear() + '-' +
        (date.getMonth() + 1) + '-' +
        date.getDate() + 'T' +
        hours + ':' +
        minutes + ':' +
        seconds
    
      return Str
    }

    /***
     * override
     */
    onTestResult(test,testResult,results) {
      // console.dir(test);
      // console.log('-------------------------------------------');
      // console.dir(testResult);
     // console.log('-------------------------------------------');
      //console.dir(results);
    }
  }
  
  module.exports = DDPReporter;