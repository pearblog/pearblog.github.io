function page(num,m){
  var text='';
  if(m=='0'){
    text='\
    <style>\
    .back{\
      background: rgba(0,0,0,0);\
      margin: -4%;\
      margin-top: 0;\
    }\
    \
    </style>\
    <nav class="top-bar" data-topbar>\
      <ul class="title-area">\
        <li class="name">\
          <h1><a href="#">PearBlog</a></h1>\
        </li>\
        <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>\
      </ul>\
    \
      <section class="top-bar-section">\
        <ul class="left" id="main">\
          <li><a href="index.html">主页</a></li>\
          <li class="active"><a href="page.html">文章</a></li>\
          <li><a href="about.html">关于</a></li>\
          <li><a href="say.html">留言墙</a></li> \
        </ul>\
      </section>\
    </nav>\
    \
    \
    <div style="padding:20px;">\
    ';
  }
  if(m=='1') text+='<div style="padding:20px;">';
    if(num=='2021102201'){
        text+='<h3 style="font-family: 站酷仓耳渔阳体-W01;">随便说说</h3>\
        <h5 style="font-family: 站酷仓耳渔阳体-W01;">这个博客是新版，老版博客我也不知道放在哪里了。也仅仅只是一个日记本，随便记一下事情就行了<br/>\
        应该以后会支持投稿</h5>\
        <h5 style="font-family: 站酷仓耳渔阳体-W01;">这个页面是一个文章流，会显示比较好的文章</h5>';
    }

    if(m=='0') text+='<button class="back" onclick="location.reload()"><span class="to-left" title="返回"></span></button></div>';
    if(m=='1') text+='</div>';
    if(m=='0') document.body.innerHTML=text;
    if(m=='1')  document.body.innerHTML+=text;
}