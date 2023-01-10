function $(id) {
    return document.getElementById(id);
}
function $$(qs){
    return document.querySelector(qs);
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
const map = (array, fn) => { 
    let results = [];
    for (const value of array) { 
        results.push(fn(value)) 
    }
    return results;
}

const filter = (array, fn) => {//筛选
    let results = [];
    for (let arr of array) {
        fn(arr) && results.push(arr)
    }
    return results;
}
var input = $("ss");
var eprev = $$('.prev');
var enext = $$('.next');
var esico = $('icolist').getElementsByTagName("li");
var eicolist = $$('#icolist');
var eimglist = $$('#imgt');
var eimglist1 = $$('#imgn');
var wuhu = $("wuhu");
var left = 0;
var biaoji = 0;
var timer;

window.onload = function() {//窗体加载事件
    setInterval(getTime,1000);//显示时间
    run();
    initialization();
    all();
    input.style.color = "#ccc";
    if(localStorage.length > 0){
        $("dlu").innerHTML = localStorage.getItem("name");
    }else{
        $("dlu").innerHTML = "登录";
    }
};

function initialization(){//初始化
    var div = document.createElement("div");
    div.id = "tupian";
    for(let i = 0;i < arr.length;i++){
        let div1 = document.createElement("div");
        div1.setAttribute("id", "d" + i);
        div1.setAttribute("class","shang");
        let img = document.createElement("img");
        img.setAttribute("id","a" + i);
        let p = document.createElement("p");
        p.setAttribute("class", "PP");
        p.setAttribute("id", "b" + i);
        let span1 = document.createElement("span");
        span1.setAttribute("class", "type");
        span1.innerHTML = "类型:";
        let span2 = document.createElement("span");
        span2.setAttribute("class", "type1");
        span2.setAttribute("id", "e" + i);
        let span3 = document.createElement("span");
        span3.setAttribute("class", "pp2");
        span3.setAttribute("id", "c" + i);
        let span4 = document.createElement("span");
        span4.innerHTML = "人追番";
        let button = document.createElement("button");
        button.setAttribute("class", "bt");
        button.innerHTML = "收藏";
        button.onclick = function(){
            panduan(i);
        }
        div1.appendChild(img);
        div1.appendChild(p);
        div1.appendChild(span1);
        div1.appendChild(span2);
        div1.appendChild(span3);
        div1.appendChild(span4);
        div1.appendChild(button);
        div.appendChild(div1);
        
    }
    document.body.appendChild(div);
}
$("dlu").onclick = function() {//判断是否登录，弹出退出登录
    if(localStorage.length > 0){
        $("logOut").style.display = "block";
        $("message").innerHTML = "你好！" + localStorage.getItem("name") + "，欢迎使用本站。";
    }else{
        $("denglu").style.display = "block";
    }
}

$("out").onclick = function(){//退出登录
    localStorage.clear(); //清除所有localStorage中的数据
    alert("退出成功！欢迎您的下次使用！");
    location.reload(false);
}

$("gbi").onclick = function(){
    $("logOut").style.display = "none";
}
$("regist").onclick = function() {  //隐藏
    $("zhuce").style.display = "block";
    $("denglu").style.display = "none";
}

function imgChange(n){//切换图片
    let It = -(n * 1080);
    eimglist.style.marginLeft = It + 'px';
    left = It;
}

eimglist1.onmouseover = function(){//鼠标移入，停止轮播
    clearTimeout(timer);
}

eimglist1.onmouseout = function(){//鼠标离开，继续轮播
    run();
}

function icoChange(m){//切换右下角数字图标样式
    for(let index = 0;index < esico.length;index++){
        esico[index].style.backgroundColor = '';
    }
    if(m < esico.length){
        esico[m].style.backgroundColor = "red";
    }
}

function titleChange(c){//切换标题
    if(c == 0){
        wuhu.innerHTML = "鬼灭之刃 游郭篇";
    }else if(c == 1){
        wuhu.innerHTML = "间谍过家家";
    }else if(c == 2){
        wuhu.innerHTML = "紫罗兰永恒花园";
    }else if(c == 3){
        wuhu.innerHTML = "冰菓";
    }
}

eicolist.onclick = function(){
    var tg = event.target;
    let ico = tg.innerHTML - 1;
    imgChange(ico);
    icoChange(ico);
    titleChange(ico);
}

eprev.onclick=function(){//轮播图切换上一张
    let prevgo = Math.floor(-left / 1080) - 1;
    if(prevgo == -1){
        prevgo = 3;
    }
    imgChange(prevgo);
    titleChange(prevgo);
}
enext.onclick=function(){//轮播图切换下一张
    let nextgo = Math.floor(-left / 1080) + 1;
    if(nextgo == 4){
        nextgo = 0;
    }
    imgChange(nextgo);
    titleChange(nextgo);
}

function run(){//实现轮播
    if(left <= -4320){
        left = 0;
    }
    var m = Math.floor(-left / 1080);
    eimglist.style.marginLeft = left + 'px';
    var n = (left % 1080 == 0) ? 2000 : 10;
    left -= 10;
    timer = setTimeout(run,n);
    icoChange(m);
    titleChange(m);
}

function closed(){//关闭注册窗口
    $("zhuce").style.display = "none";
    $("denglu").style.display = "block";
}

function closed1(){//关闭登录窗口
    $("denglu").style.display= "none";
}
function checkUser(){
    let user = $("zhang").value;
    let user_prompt = $("user");
    let regExp = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
    if(regExp.test(user)){
      user_prompt.innerHTML = "格式正确";
      return true;
    }
    else{
      user_prompt.innerHTML = "错误，由英文字母和数字组成的4-16位字符，以字母开头";
      return false;
    }
  }
 
  function checkNiChen(){
    let nichen = $("ni").value;
    let nichen_prompt = $("name");
    let regExp = /^[\u4e00-\u9fa5]{2,3}$/;
    if(regExp.test(nichen)){
      nichen_prompt.innerHTML = "格式正确";
      return true;
    }
    else{
      nichen_prompt.innerHTML = "错误，由2~3个汉字组成";
      return false;
    }
  }
  
  function checkPwd(){
     let Pwd = $("mi").value;
     let pwd_prompt = $("Pwd");
     let regExp = /^[a-zA-Z0-9]{4,10}$/;
     if(regExp.test(Pwd)){
        pwd_prompt.innerHTML = "格式正确";
        return true;
     }else{
        pwd_prompt.innerHTML = "错误,密码由4-10位英文字母和数字字符组成";
        return false;
     }
  }
  
  function checkRepwd(){
     let pwd = $("mi").value;
     let repwd = $("mi2").value;
     let repwd_prompt = $("rePwd");
     if(pwd==repwd){
        repwd_prompt.innerHTML = "密码正确";
        return true;
     }else{
        repwd_prompt.innerHTML = "错误,两次密码不一致";
        return false;
     }
  }
$("zc").onclick = function() {  //注册
    let mi = $("mi").value;
    let mi2 = $("mi2").value;
    let  ni = $("ni").value;
    let zhang = $("zhang").value;
    if (checkRepwd() && checkPwd() && checkNiChen() && checkUser()) {
    localStorage.setItem("name",ni)     //把创建的名称存到数据里方便判断有没有登录
    localStorage.setItem("zhanghao",zhang);
    localStorage.setItem("mima",mi);
    alert("注册成功！");
   $("zhuce").style.display = "none";
   $("denglu").style.display="inline-block"
    }
}
$("dl").onclick = function(){//登录
	if( $("zhanghao").value==localStorage.getItem("zhanghao")&&$("mima").value==localStorage.getItem("mima")){
	    alert("登陆成功！" + localStorage.getItem("name") + ",欢迎使用本站！")
			$("dlu").innerHTML = localStorage.getItem("name");
			 $("denglu").style.display="none"
	}else{
		alert("账号或密码错误");
	}
}


input.onfocus = function(){//输入框获取焦点
    if(this.value == "输入关键字进行查找"){
        input.value = "";
        input.style.color = "block";
    }
}
input.onblur = function(){//输入框失去焦点
    if(this.value == ""){
        input.value = "输入关键字进行查找";
        input.style.color = "#ccc";
    }
}

function getTime(){//获取系统时间
        var lblTime = $("si");
        var act = new Date();
        var y = act.getFullYear();
        var m = act.getMonth()+1;
        var d = act.getDate();
        var h = act.getHours() > 9 ? act.getHours() : "0" +act.getHours();
        var min = act.getMinutes() > 9 ? act.getMinutes() : "0" +act.getMinutes();
        var s = act.getSeconds() > 9 ? act.getSeconds() : "0" + act.getSeconds();
        lblTime.innerHTML = "当前时间:"+y + "-" + m + "-" + d + " "+h+":"+min+":"+s;
     }

	
function sty(){
    $("dm0").style="font-weight:400;";
    $("dm1").style="font-weight:400;";
	$("dm2").style="font-weight:400;";
	$("dm3").style="font-weight:400;";
	$("dm4").style="font-weight:400;";
	$("dm5").style="font-weight:400;";
}
function all(){//渲染全部动漫
    for (let i = 0; i < arr.length; i++) {
	        $("a" +i).setAttribute("src",arr[i].img);
			$("b"+i).innerHTML=arr[i].name;
			$("c"+i).innerHTML=arr[i].count;
			$("d"+i).style.display="inline-block"
			$("e"+i).innerHTML=arr[i].type;
	    }
	$("dm0").style="font-weight:800;"
    $("biao").innerHTML="全部动漫"
}

function xs(){  //为把每个动漫div变成不透明的防止有的div变成透明的
	for(let i=0;i< arr.length;i++){
		$("d"+i).style.display="inline-block"
	}
}
function xr(n,type){//类型切换
    xs();
    sty();
    biaoji = n;
   if(n==0){
       all();
   }else{
    let results = filter(arr,(dm)=> dm.type == type);
    for(let i = 0;i < results.length;i++){
        $("a" +i).setAttribute("src",results[i].img);
		$("b"+i).innerHTML=results[i].name;
		$("c"+i).innerHTML=results[i].count;
		$("e"+i).innerHTML=results[i].type;
    }
    for(let i = results.length;i < arr.length;i++){
        $("d"+i).style.display="none";
    }
    $("dm"+n).style="font-weight:800;";
    $("biao").innerHTML=type + "动漫列表";
    }
}


$("btnss").onclick=function(){   //搜索功能
    xs();
	let ss=$("ss").value;
	if(ss === "输入关键字进行查找"){
	    if(biaoji == 0){
	        $("biao").innerHTML = "全部动漫";
	        all();
	    }
	    if(biaoji == 1){
	        $("biao").innerHTML = "奇幻动漫列表";
	    }
	    if(biaoji == 2){
	        $("biao").innerHTML = "搞笑动漫列表";
	    }
	    if(biaoji == 3){
	        $("biao").innerHTML = "治愈动漫列表";
	    }
	    if(biaoji == 4){
	        $("biao").innerHTML = "恋爱动漫列表";
	    }
	    if(biaoji == 5){
	        $("biao").innerHTML = "美食动漫列表";
	    }
	    return;
	}
	let re = new RegExp(ss);
	let a = filter(arr,(dm)=>re.test(dm.name));//筛选
	if(a.length > 0){
	    for(let i =0;i < a.length;i++){//渲染筛选结果
	        $("a"+i).setAttribute("src",a[i].img);
		    $("b"+i).innerHTML=a[i].name;
		    $("c"+i).innerHTML=a[i].count;
		    $("e"+i).innerHTML=a[i].type;
	    }
	    for(let i = arr.length - 1;i > a.length - 1;i--){
	    $("d"+i).style.display="none";
	    }
	    $("biao").innerHTML=ss+"搜索结果:"+a.length+"条";
	}else{
	    for(let i = 0;i < arr.length;i++){
	    $("d"+i).style.display="none";
	    }
	    $("biao").innerHTML="啊呀！没有找到" + ss + "这部动漫呢，试试别的吧";
	}
}
	
$("sc").onclick =function(){  //跳转到收藏列表
	  if($("dlu").innerHTML == localStorage.getItem("name")){    //先判断有没有登录
		  window.location.href="sclb.html";
	  }else{
		  alert("请先登录!");
	  }
} 
function panduan(can){  //判断收藏的是哪一部动漫
	if($("dlu").innerHTML == localStorage.getItem("name")){
	    let yi=$("b"+can).innerHTML;
	    for(let i=0;i<arr.length;i++){
		    let er=arr[i].name;
		    if(yi==er){
		        localStorage.setItem("can"+i,i) //把这个i传到数据中
		        alert("已成功收藏"+yi);
		    }
	    } 
	}else{
		alert("请先登录!")
    }
}
