export async function getDataAsync(dap) {
   //dap就是sg请求的入参，可以根据参数返回不同的值
   console.dir(dap)
   console.log("mock getDataAsync")
   dap.sucCallbackFunc.call(this,{cd:11})
  }
  