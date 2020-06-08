var _nginxsg_ = '//sgi.wyqcd.cn:7777'

export function getServiceUrl(sid) {
  return _nginxsg_+"/api/invoke?SID="+sid
}

export function getUserCenterUrl() {
  return "//user" + domain
}