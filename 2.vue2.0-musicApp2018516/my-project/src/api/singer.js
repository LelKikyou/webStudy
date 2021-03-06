import jsonp from "../common/js/jsonp.js"

export function getSinger() {
  const url = "https://c.y.qq.com/v8/fcg-bin/v8.fcg";
  return jsonp(url, {
    g_tk: 1928093487,
    inCharset: "utf-8",
    outCharset: "utf-8",
    notice: 0,
    format: "jsonp",
    channel: "singer",
    page: "list",
    key: "all_all_all",
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: "yqq",
  }, {
    param: 'jsonpCallback'
  })
}

export function getSingerDetails(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, {
    g_tk: 1928093487,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'jsonp'
  }, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 80,
    songstatus: 1,
    singermid: singerId
  });
  return jsonp(url, data, {
    param: 'jsonpCallback'
  })
}
