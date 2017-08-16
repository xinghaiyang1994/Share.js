/*
 * @Author: Sea 
 * @Date: 2017-08-16 14:26:19 
 * @Last Modified by: Sea
 * @Last Modified time: 2017-08-16 15:54:50
 */
 

(function(window,document){

	var $;
	
	if((typeof jQuery === 'undefined') && (typeof Zepto === 'undefined')){
		throw ReferenceError('未引入jQuery或未引入Zepto');
	}else if(typeof Zepto === 'undefined'){
		$=jQuery;
	}else if(typeof jQuery === 'undefined'){
		$=Zepto;
	}
	
	function Share(obj){
		if(!obj.dom)return;
		this.dom=obj.dom
		this.obj=obj||{};
		
		//分享信息
		this.info={
			url:this.obj.url || window.location.href,
			title:$(this.obj.title).text() || document.title,
			content:$(this.obj.contentDom).text() 
		};
		
		//窗口信息
		this.width=630;
		this.height=580;
		this.top=(window.screen.availHeight - 30 - this.height) / 2;
		this.left=(window.screen.availWidth - 10 - this.width) / 2;
				
		this.shareUrl={
			qzone:'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+encodeURIComponent(this.info.url)+'&title='+encodeURIComponent(this.info.title)+'&summary='+encodeURIComponent(this.info.content),
			weibo:'http://service.weibo.com/share/share.php?url='+encodeURIComponent(this.info.url)+'&title='+encodeURIComponent(this.info.title)+'&searchPic=false',
			tweibo:'http://share.v.t.qq.com/index.php?c=share&a=index&url='+encodeURIComponent(this.info.url)+'&title='+encodeURIComponent(this.info.title)+'&appkey=801cf76d3cfc44ada52ec13114e84a96',
			douban:'https://www.douban.com/share/service?href='+encodeURIComponent(this.info.url)+'&name='+encodeURIComponent(this.info.title)+'&text='+encodeURIComponent(this.info.content),
			people:'http://widget.renren.com/dialog/share?resourceUrl='+encodeURIComponent(this.info.url)+'&srcUrl='+encodeURIComponent(this.info.url)+'&title='+encodeURIComponent(this.info.title)+'&description='+encodeURIComponent(this.info.content)
		}

		this.init();
	
	}
	
	Share.prototype.init=function(){

		var self=this;
		
		for(var i=0;i<this.dom.length;i++){
			$(this.dom[i]).on('click',function(e){
				var type=$(this).data('share');
				self.openUrl(type);
				e.preventDefault();
			})
		}
		
	};
	
	Share.prototype.openUrl=function(type){
		window.open(this.shareUrl[type], "", "height=" + this.height + ", width=" + this.width + ", top=" + this.top + ", left=" + this.left + "" + ",toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
	};
	
	window.Share=Share;
		
})(window,document);
