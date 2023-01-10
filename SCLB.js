function $(id) {
    return document.getElementById(id);
}
	var arr=[
		{"img":"img/奇幻/qh0.jpg","name":"关于我转生变成史莱姆这档事 转生史莱姆日记","count":"831.5万","type":"奇幻"},
		{"img":"img/奇幻/qh1.jpg","name":"Re：从零开始的异世界生活 第二季 后半","count":"856.4万","type":"奇幻"},
		{"img":"img/奇幻/qh2.jpg","name":"关于我转生变成史莱姆这档事 第二季","count":"902.4万","type":"奇幻"},
		{"img":"img/奇幻/qh3.jpg","name":"国王排名","count":"915.7万","type":"奇幻"},
		{"img":"img/奇幻/qh4.jpg","name":"咒术回战","count":"1155.9万","type":"奇幻"},
		{"img":"img/奇幻/qh5.jpg","name":"鬼灭之刃","count":"1214万","type":"奇幻"},
		{"img":"img/奇幻/qh6.jpg","name":"鬼灭之刃 无限列车篇","count":"1309.3万","type":"奇幻"},
		{"img":"img/奇幻/qh7.jpg","name":"鬼灭之刃 游郭篇","count":"1398.5万","type":"奇幻"},
		{"img":"img/搞笑/gx0.jpg","name":"间谍过家家","count":"1159.6万","type":"搞笑"},
		{"img":"img/搞笑/gx1.jpg","name":"辉夜大小姐想让我告白 -究极浪漫-","count":"925.7万","type":"搞笑"},
		{"img":"img/搞笑/gx2.jpg","name":"小林家的龙女仆 第二季","count":"860.9万","type":"搞笑"},
		{"img":"img/搞笑/gx3.jpg","name":"工作细胞 第二季","count":"836.1万","type":"搞笑"},
		{"img":"img/搞笑/gx4.jpg","name":"工作细胞","count":"811.4万","type":"搞笑"},
		{"img":"img/搞笑/gx5.jpg","name":"小林家的龙女仆","count":"806.2万","type":"搞笑"},
		{"img":"img/搞笑/gx6.jpg","name":"埃罗芒阿老师","count":"733.1万","type":"搞笑"},
		{"img":"img/搞笑/gx7.jpg","name":"在下坂本，有何贵干？","count":"590.8万","type":"搞笑"},
		{"img":"img/治愈/zy0.jpg","name":"紫罗兰永恒花园","count":"819.8万","type":"治愈"},
		{"img":"img/治愈/zy1.jpg","name":"夏目友人帐 唤石者与怪异的访客","count":"567.9万","type":"治愈"},
		{"img":"img/治愈/zy2.jpg","name":"Charlotte","count":"534.1万","type":"治愈"},
		{"img":"img/治愈/zy3.jpg","name":"我们仍未知道那天所看见的花的名字。","count":"452.2万","type":"治愈"},
		{"img":"img/治愈/zy4.jpg","name":"名侦探柯南：零的日常","count":"428.3万","type":"治愈"},
		{"img":"img/治愈/zy5.jpg","name":"天使降临到我身边","count":"388.5万","type":"治愈"},
		{"img":"img/治愈/zy6.jpg","name":"月色真美","count":"381.6万","type":"治愈"},
		{"img":"img/治愈/zy7.jpg","name":"CLANNAD","count":"377.1万","type":"治愈"},
		{"img":"img/恋爱/la0.jpg","name":"冰菓","count":"762.8万","type":"恋爱"},
		{"img":"img/恋爱/la1.jpg","name":"堀与宫村","count":"730.9万","type":"恋爱"},
		{"img":"img/恋爱/la2.jpg","name":"约会大作战 第四季","count":"586.9万","type":"恋爱"},
		{"img":"img/恋爱/la3.jpg","name":"徒然喜欢你","count":"580.8万","type":"恋爱"},
		{"img":"img/恋爱/la4.jpg","name":"四月是你的谎言","count":"578万","type":"恋爱"},
		{"img":"img/恋爱/la5.jpg","name":"我的青春恋爱物语果然有问题。完","count":"567.1万","type":"恋爱"},
		{"img":"img/恋爱/la6.jpg","name":"总之就是非常可爱","count":"524.9万","type":"恋爱"},
		{"img":"img/恋爱/la7.jpg","name":"Angels of Death","count":"521.7万","type":"恋爱"},
		{"img":"img/美食/ms0.jpg","name":"卫宫家今天的饭","count":"371万","type":"美食"},
		{"img":"img/美食/ms1.jpg","name":"食戟之灵 贰之皿","count":"226.2万","type":"美食"},
		{"img":"img/美食/ms2.jpg","name":"请问您今天要来点兔子吗？","count":"203.8万","type":"美食"},
		{"img":"img/美食/ms3.jpg","name":"异世界食堂","count":"202.4万","type":"美食"},
		{"img":"img/美食/ms4.jpg","name":"异想食堂 / 异世界食堂 第二季","count":"193.1万","type":"美食"},
		{"img":"img/美食/ms5.jpg","name":"爱吃拉面的小泉同学","count":"150.9万","type":"美食"},
		{"img":"img/美食/ms6.jpg","name":"粗点心战争","count":"110.8万","type":"美食"},
		{"img":"img/美食/ms7.jpg","name":"迷糊餐厅 WORKING!!","count":"75.6万","type":"美食"}
	];
window.onload =	function(){ //初始化番剧收藏列表
	let a=0;
	let b=0;
	let c="";
	 for(let i=0;i<arr.length;i++){
		 let ge=localStorage.getItem("can"+i) //利用键名获取相应储存的数据
	if(ge!=null){
	$("g").style.display="none"
	 let gw=document.createElement("div")
	 let img=document.createElement("img")
	 let p=document.createElement("p")
	 let span=document.createElement("span")
	 let spantow=document.createElement("span")
	 let button=document.createElement("button")
	gw.appendChild(img);
	gw.appendChild(p);
	gw.appendChild(span);
	gw.appendChild(spantow);
	gw.appendChild(button);
	document.body.appendChild(gw);
	img.src=arr[i].img;
	p.innerHTML=arr[i].name;
	span.innerHTML=arr[i].type;
	gw.className="shang"
	spantow.innerHTML=arr[i].count + "人";
	button.innerHTML="取消追番";
	button.onclick=function(){//追番删除操作
		localStorage.removeItem("can"+i) //删除相应键名的数据
	    location.reload(false); //这个可以重新加载当前页面
	}
	
     for(let a=1;a<arr[i].count.length;a++)
	 {
		 c+=arr[i].count[a];
	 }
	b=Number(c)+Number(b)
	c="";
	a++;
    }
	 }
	 let button1 = document.createElement("button");
	 button1.innerHTML = "返回首页";
	 button1.onclick = function(){
	     window.location.href = "aikandm.html";
	 }
	 document.body.appendChild(button1);
   }
