需要引入jQuery  
分享的节点需要设置data-share属性
# data-share属性值:    
    qzone                   QQ空间
    weibo                   微博
    tweibo                  腾讯微博
    douban                  豆瓣
    people                  人人网
## 实例
    new Share({  
        dom:[],          //数组，必填，存放触发事件的节点
        contentDom:''   //分享的内容节点
        title:''        //分享的标题  
    })