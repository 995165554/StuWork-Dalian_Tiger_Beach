$(function(){
  var tab = $(".navLi");
  var tab2 = $(".navLi2");
  var _this;

  var ii=0;
  str = window.location.hash; //这是一字符串 
  var strs= new Array(); //定义一数组
  strs=str.split("#page"); //字符分割 
  ii =strs[1];
  var signWidth = 0;
  var signWidthPre = 0;

  

  ct2=window.setInterval(show2,400)
  function show2(){
      // $(".top").animate({"padding-bottom":"0px",bottom:"50px"},500);
      // _this.find(".twoNav").stop().slideUp(500);

    window.clearInterval(ct2)
  }


  tab.mouseenter(function(){
    var ii=0;
    str = window.location.hash; //这是一字符串 
    var strs= new Array(); //定义一数组
    strs=str.split("#"); //字符分割 
    ii =strs[1];

    _this = $(this);
    ct=window.setInterval(show,200);
    function show(){
      // $(".top").animate({"padding-bottom":"50px",bottom:"0px"},300);

      $(".twoNav").stop().slideUp(100)
      _this.find(".twoNav").stop().slideDown(200);

      _this.find(".twoNavLi").last().css({background:"none"})
      var signWidth = 0;
      var signWidthPre = 0;


      for(i=_this.index()-1;i>-1;i--){
        signWidthPre = signWidth; 
        signWidth = $(".navLi").eq(i).width();
        signWidth = signWidthPre+signWidth; 
      }

      if(ii=="page1"){
        $(".top").animate({"padding-bottom":"40px"},300)
        signWidth = $(".navLi").eq(_this.index()).find(".item").width()/2+signWidth-13;
      }
      else if(ii==undefined){
        $(".top").animate({"padding-bottom":"40px"},300)
        signWidth = $(".navLi").eq(_this.index()).find(".item").width()/2+signWidth-13;
      }
      else{
        signWidth = $(".navLi").eq(_this.index()).find(".item").width()/2+signWidth-17;
      }
      $(".sign").stop().animate({left:signWidth},300)

    }
    window.clearInterval(ct2)
  }).mouseleave(function(){
      ct2=window.setInterval(show2,400)
      function show2(){
        // $(".top").animate({"padding-bottom":"0px",bottom:"50px"},500);
        _this.find(".twoNav").stop().slideUp(500);

      var signWidth = 0;
      var signWidthPre = 0;

      for(i=$(".zhong").parent().index()-1;i>-1;i--){
        signWidthPre = signWidth; 
        signWidth = $(".navLi").eq(i).width();
        signWidth = signWidthPre+signWidth; 
      }

      if(ii=="page1"){
        $(".top").animate({"padding-bottom":"0px"},300)
        signWidth = $(".zhong").width()/2+signWidth-13;
      }
      else if(ii==undefined){
        $(".top").animate({"padding-bottom":"0px"},300)
      }
      else{
        $(".top").animate({"padding-bottom":"0px"},300)
        signWidth = $(".zhong").width()/2+signWidth-17;
      }
      $(".sign").stop().animate({left:signWidth},300)

      }
      window.clearInterval(ct)
      ii=0
  });
  // tab.hover(
  //   function(){
  //     var ii=0;
  //     str = window.location.hash; //这是一字符串 
  //     var strs= new Array(); //定义一数组
  //     strs=str.split("#"); //字符分割 
  //     ii =strs[1];

  //     //_this = $(this);
  //     // ct=window.setInterval(show,200);
  //     // function show(){
  //       // $(".top").animate({"padding-bottom":"50px",bottom:"0px"},300);

  //       $(".twoNav").stop().slideUp(100)
  //       $(this).find(".twoNav").stop().slideDown(200);

  //       $(this).find(".twoNavLi").last().css({background:"none"})
  //       var signWidth = 0;
  //       var signWidthPre = 0;


  //       for(i=$(this).index()-1;i>-1;i--){
  //         signWidthPre = signWidth; 
  //         signWidth = $(".navLi").eq(i).width();
  //         signWidth = signWidthPre+signWidth; 
  //       }

  //       if(ii=="page1"){
  //         $(".top").stop().animate({"padding-bottom":"40px"},300)
  //         signWidth = $(".navLi").eq($(this).index()).find(".item").width()/2+signWidth-13;
  //       }
  //       else if(ii==undefined){
  //         $(".top").stop().animate({"padding-bottom":"40px"},300)
  //         signWidth = $(".navLi").eq($(this).index()).find(".item").width()/2+signWidth-13;
  //       }
  //       else{
  //         signWidth = $(".navLi").eq($(this).index()).find(".item").width()/2+signWidth-17;
  //       }
  //       $(".sign").stop().animate({left:signWidth},300)

  //     // }
  //     // window.clearInterval(ct2)
  //   },
  //   function(){
  //     // ct2=window.setInterval(show2,400)
  //     // function show2(){
  //       // $(".top").animate({"padding-bottom":"0px",bottom:"50px"},500);
  //       $(this).find(".twoNav").stop().slideUp(500);

  //     var signWidth = 0;
  //     var signWidthPre = 0;


  //     if(ii=="page1"){
  //       $(".top").animate({"padding-bottom":"0px"},300)
  //       signWidth = $(".zhong").width()/2+signWidth-13;
  //     }
  //     else if(ii==undefined){
  //       $(".top").animate({"padding-bottom":"0px"},300)
  //     }
  //     else{
  //       $(".top").animate({"padding-bottom":"0px"},300)
  //       signWidth = $(".zhong").width()/2+signWidth-17;
  //     }
  //     $(".sign").stop().animate({left:signWidth},300)

  //     // }
  //     // window.clearInterval(ct)
  //     ii=0
  //   }
  // )

  if(tab2.length>0){
    var signWidth = 0;
    var signWidthPre = 0;
    for(i=$(".navLi2").find(".zhong").parent().index()-1;i>-1;i--){
        signWidthPre = signWidth; 
        signWidth = $(".navLi2").eq(i).width();
        signWidth = signWidthPre+signWidth; 
      }
    signWidth = $(".navLi2").find(".zhong").width()/2+signWidth-20;
    $(".sign").stop().animate({left:signWidth},300);

    tab2.hover(
      function(){
        $(".twoNav").stop().slideUp(100)
        $(this).find(".twoNav").stop().slideDown(200);

        var signWidth = 0;
        var signWidthPre = 0;


        for(i=$(this).index()-1;i>-1;i--){
          signWidthPre = signWidth; 
          signWidth = $(".navLi2").eq(i).width();
          signWidth = signWidthPre+signWidth; 
        }

          signWidth = $(".navLi2").eq($(this).index()).find(".item").width()/2+signWidth-20;

        $(".sign").stop().animate({left:signWidth},300)

      },
      function(){
        $(this).find(".twoNav").stop().slideUp(500);
        var signWidth = 0;
        var signWidthPre = 0;


        for(i=$(".nav").find(".zhong").parent().index()-1;i>-1;i--){
          signWidthPre = signWidth; 
          signWidth = $(".navLi2").eq(i).width();
          signWidth = signWidthPre+signWidth; 
        }
          signWidth = $(".zhong").width()/2+signWidth-20;

        $(".sign").stop().animate({left:signWidth},300)

       
      }
    )

    // tab2.mouseenter(function(){

    //   _this = $(this);
    //   ct=window.setInterval(show,200);
    //   function show(){
    //     // $(".top").animate({"padding-bottom":"50px",bottom:"0px"},300);

    //     $(".twoNav").stop().slideUp(100)
    //     _this.find(".twoNav").stop().slideDown(200);

    //      _this.find(".twoNavLi").last().css({background:"none"})

    //     var signWidth = 0;
    //     var signWidthPre = 0;


    //     for(i=_this.index()-1;i>-1;i--){
    //       signWidthPre = signWidth; 
    //       signWidth = $(".navLi2").eq(i).width();
    //       signWidth = signWidthPre+signWidth; 
    //     }

    //       signWidth = $(".navLi2").eq(_this.index()).find(".item").width()/2+signWidth-20;

    //     $(".sign").stop().animate({left:signWidth},300)

    //   }
    //   window.clearInterval(ct2)
    // }).mouseleave(function(){
    //     ct2=window.setInterval(show2,400)
    //     function show2(){

    //       _this.find(".twoNav").stop().slideUp(500);

    //     var signWidth = 0;
    //     var signWidthPre = 0;

    //     for(i=$(".zhong").parent().index()-1;i>-1;i--){
    //       signWidthPre = signWidth; 
    //       signWidth = $(".navLi2").eq(i).width();
    //       signWidth = signWidthPre+signWidth; 
    //     }

    //       $(".top").animate({"padding-bottom":"0px"},300)
    //       signWidth = $(".zhong").width()/2+signWidth-20;

    //     $(".sign").stop().animate({left:signWidth},300)

    //     }
    //     window.clearInterval(ct)
    //     ii=0
    // });

  }
}) 

$(document).ready(function() {
  var bannerInfo = $(".box_skitter ul").text().replace(/[ ]/g,""); 
  var bannerArr = new Array();
  bannerArr = bannerInfo.split("|");
  var bannerList = "";
  for (i=0;i<bannerArr.length-1;i++ ){    
      var banneroneArr = new Array();
      banneroneArr = bannerArr[i].split(",");
      for (ii=0; ii<banneroneArr.length-1; ii++){
          bannerList = bannerList +"<li><img src='"+banneroneArr[0]+"' class='cubeRandom' ></li>"
      }
  }
  $(".box_skitter ul").html(bannerList);
        
  $(".banner").css({"margin-left":-(1920-$(window).width())/2});
  $(".insideBanner").find("img").css({"margin-left":-(1920-$(window).width())/2});

  //新闻时间修改
  for(i=0;i<$(".newsLi").length;i++){
     var yearNum;
    yearNum = $(".newsLi").eq(i).find(".num").html().split("-");
    timeNum = "<strong>"+yearNum[2]+"</strong><br/>"+yearNum[0]+"."+yearNum[1];
    $(".newsLi").eq(i).find(".num").html(timeNum);
  }

  $(".navLi").last().css({background:"none"})
  $(".navLi2").last().css({background:"none"})

  $(".newsLi").hover(
    function(){
      $(this).find(".newsLiBg").stop().animate({left:"0px"},800)
      $(this).find(".newsItem").stop().css({color:"#fff"})
      $(this).find(".newsItem .title").stop().css({color:"#fff"})
      $(this).find(".timeBg2").stop().animate({width:0,height:0,top:"50%",left:"50%"},500)
    },
    function(){
      $(this).find(".newsLiBg").stop().animate({left:"-1000px"},800)
      $(this).find(".newsItem").stop().css({color:"#666"})
      $(this).find(".newsItem .title").stop().css({color:"#BA292D"})
      $(this).find(".timeBg2").stop().animate({width:"100%",height:"100%",top:"0%",left:"0%"},500)
    }
    )

    $(".news li").hover(
        function(){
          $(".news li").find(".imgBg").stop().fadeIn("500")
          $(this).stop().addClass("zhong");
        },
        function(){
          $(this).stop().removeClass("zhong");
          $(".news li").find(".imgBg").stop().fadeOut("500")
        }
      )

    $(".moreCont").rotate({ 
       bind: 
         { 
            mouseover : function() { 
                $(this).find(".img2").rotate({animateTo:-45});
                $(this).find(".img2").stop().animate({left:"32px",top:"3px"},300)
                $(this).find(".img3").rotate({animateTo:45});
                $(this).find(".img3").stop().animate({left:"28px",bottom:"3px"},300)
            },
            mouseout : function() { 
                $(this).find(".img2").rotate({animateTo:0});
                $(this).find(".img2").stop().animate({left:"40%",top:"0px"},300)
                $(this).find(".img3").rotate({animateTo:0});
                $(this).find(".img3").stop().animate({left:"40%",bottom:"0px"},300)
            }
          } 
    });

  $.fn.fullpage({
    slidesColor: ['#222222', '#222222', '#f8f8f8', '#222222', '#f8f8f8', '#222222', '#BA292E'],
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
    // navigation: true,
    afterLoad: function(anchorLink, index){
      if(index == 1){
        $(".top").stop().animate({bottom:"0px"},500,function(){
          $(".top").stop().find(".item").animate({padding:"25px 32px"},300,function(){
            $(".logo").stop().animate({top:"10%"},200);
            $(".logo").find("img").animate({width:"248px"},300);
            $(".sign").animate({left:15},300)
            $(".item").removeClass("zhong")
            $(".item").eq(0).addClass("zhong")
                var signWidth = 0;
                var signWidthPre = 0;

                for(i=$(".zhong").parent().index()-1;i>-1;i--){
                  signWidthPre = signWidth; 
                  signWidth = $(".navLi").eq(i).width();
                  signWidth = signWidthPre+signWidth; 
                }

                if(ii=="page1"){
                  $(".top").animate({"padding-bottom":"0px"},300)
                  signWidth = $(".zhong").width()/2+signWidth-13;
                }
                else if(ii==undefined){
                  $(".top").animate({"padding-bottom":"0px"},300)
                }
                else{
                  $(".top").animate({"padding-bottom":"0px"},300)
                  signWidth = $(".zhong").width()/2+signWidth-17;
                }
                $(".sign").stop().animate({left:signWidth},300)
          })
        })

      }
      if(index == 2){
        $(".item").removeClass("zhong")
        $(".item").eq(1).addClass("zhong")
        var signWidth = 0;
        var signWidthPre = 0;

        for(i=$(".zhong").parent().index()-1;i>-1;i--){
          signWidthPre = signWidth; 
          signWidth = $(".navLi").eq(i).width();
          signWidth = signWidthPre+signWidth; 
        }

        if(ii=="page1"){
          $(".top").animate({"padding-bottom":"0px"},300)
          signWidth = $(".zhong").width()/2+signWidth-13;
        }
        else if(ii==undefined){
          $(".top").animate({"padding-bottom":"0px"},300)
        }
        else{
          $(".top").animate({"padding-bottom":"0px"},300)
          signWidth = $(".zhong").width()/2+signWidth-17;
        }
        $(".sign").stop().animate({left:signWidth},300)

        var superTop = $("#superContainer").css("top");
        $(".mod1 .wire").stop().animate({width:"100%"},300,function(){
          if($("#superContainer").css("top")==superTop){
            $(".mod1Li1 .icon").fadeIn("slow",function(){
                if($("#superContainer").css("top")==superTop){
                  $(".mod1Li1 .icon").addClass("iconAnim");
                  $(".mod1Li1 .img").css({"display":"block"});
                  $(".mod1Li1 .img").addClass("imgShow",function(){
                    if($("#superContainer").css("top")==superTop){
                      $(".mod1Li1 .mod1LiTop").fadeIn("slow",function(){
                        if($("#superContainer").css("top")==superTop){
                          $(".mod1Li1 .describe").fadeIn("slow",function(){
                            if($("#superContainer").css("top")==superTop){
                              $(".mod1Li2 .icon").fadeIn("slow",function(){
                                if($("#superContainer").css("top")==superTop){
                                  $(".mod1Li2 .icon").addClass("iconAnim");
                                  $(".mod1Li2 .img").css({"display":"block"});
                                  $(".mod1Li2 .img").addClass("imgShow",function(){
                                    if($("#superContainer").css("top")==superTop){
                                      $(".mod1Li2 .mod1LiTop").fadeIn("slow",function(){
                                        if($("#superContainer").css("top")==superTop){
                                          $(".mod1Li2 .describe").fadeIn("slow",function(){
                                            if($("#superContainer").css("top")==superTop){
                                              $(".mod1Li3 .icon").fadeIn("slow",function(){
                                                if($("#superContainer").css("top")==superTop){
                                                  $(".mod1Li3 .icon").addClass("iconAnim");
                                                  $(".mod1Li3 .img").css({"display":"block"});
                                                  $(".mod1Li3 .img").addClass("imgShow",function(){
                                                  if($("#superContainer").css("top")==superTop){
                                                    $(".mod1Li3 .mod1LiTop").fadeIn("slow",function(){
                                                      if($("#superContainer").css("top")==superTop){
                                                        $(".mod1Li3 .describe").fadeIn("slow",function(){
                                                          if($("#superContainer").css("top")==superTop){
                                                            $(".mod1Li4 .icon").fadeIn("slow",function(){
                                                              if($("#superContainer").css("top")==superTop){
                                                                $(".mod1Li4 .icon").addClass("iconAnim");
                                                                $(".mod1Li4 .img").css({"display":"block"});
                                                                $(".mod1Li4 .img").addClass("imgShow",function(){
                                                                  if($("#superContainer").css("top")==superTop){
                                                                    $(".mod1Li4 .mod1LiTop").fadeIn("slow",function(){
                                                                      if($("#superContainer").css("top")==superTop){
                                                                        $(".mod1Li4 .describe").fadeIn("slow",function(){
                                                                          if($("#superContainer").css("top")==superTop){
                                                                            $(".mod1Li5 .icon").fadeIn("slow",function(){
                                                                              if($("#superContainer").css("top")==superTop){
                                                                                $(".mod1Li5 .icon").addClass("iconAnim");
                                                                                $(".mod1Li5 .img").css({"display":"block"});
                                                                                $(".mod1Li5 .img").addClass("imgShow",function(){
                                                                                  if($("#superContainer").css("top")==superTop){
                                                                                    $(".mod1Li5 .mod1LiTop").fadeIn("slow",function(){
                                                                                        if($("#superContainer").css("top")==superTop){
                                                                                          $(".mod1Li5 .describe").fadeIn("slow")
                                                                                        }
                                                                                    })
                                                                                  }
                                                                                })
                                                                              }
                                                                            })
                                                                          }
                                                                        })
                                                                      }
                                                                    })
                                                                  }
                                                                })
                                                              }
                                                            })
                                                          }
                                                        })
                                                      }
                                                    })
                                                  }
                                                })
                                                }
                                              })
                                            }
                                          })
                                        }
                                      })
                                    }
                                  })
                                }
                              })
                            }
                          });
                        }
                      })
                    }
                  });
                }
            });
          }
        })

      }
      if(index == 3){
        $(".item").removeClass("zhong")
        $(".item").eq(2).addClass("zhong")

        var signWidth = 0;
        var signWidthPre = 0;

        for(i=$(".zhong").parent().index()-1;i>-1;i--){
          signWidthPre = signWidth; 
          signWidth = $(".navLi").eq(i).width();
          signWidth = signWidthPre+signWidth; 
        }

        if(ii=="page1"){
          $(".top").animate({"padding-bottom":"0px"},300)
          signWidth = $(".zhong").width()/2+signWidth-13;
        }
        else if(ii==undefined){
          $(".top").animate({"padding-bottom":"0px"},300)
        }
        else{
          $(".top").animate({"padding-bottom":"0px"},300)
          signWidth = $(".zhong").width()/2+signWidth-17;
        }
        $(".sign").stop().animate({left:signWidth},300)


        var superTop = $("#superContainer").css("top");
        var i=0;
        var animation = setInterval(function(){

          if($("#superContainer").css("top")==superTop){

            if(i==0){
              if($("#superContainer").css("top")==superTop){
                $(".mod2").css({"background-position":"-696px  0"});
              }
            }
            if(i==1){
              if($("#superContainer").css("top")==superTop){
                $(".mod2").css({"background-position":"-1392px  0"});
              }
            }
            if(i==2){
              if($("#superContainer").css("top")==superTop){
                $(".mod2").css({"background-position":"-1392px  0"});
              }
            }
            if(i==3){
              if($("#superContainer").css("top")==superTop){
                $(".mod2").css({"background-position":"-2088px  0"});
              }
            }
            if(i==4){
              if($("#superContainer").css("top")==superTop){
                $(".mod2").css({"background-position":"-2784px  0"});
              }
            }
            if(i==5){
              if($("#superContainer").css("top")==superTop){
                $(".mod2").css({"background-position":"-3480px  0"});
              }
            }
            if(i==6){
              window.clearInterval(animation)
              $(".mod2 .icon1").fadeIn("200",function(){
                if($("#superContainer").css("top")==superTop){
                  $(".mod2 .icon2").fadeIn("200",function(){
                    if($("#superContainer").css("top")==superTop){
                      $(".mod2 .icon3").fadeIn("200",function(){
                        if($("#superContainer").css("top")==superTop){
                          $(".diff1").fadeIn("200",function(){
                            if($("#superContainer").css("top")==superTop){
                              $(".diff2").fadeIn("200",function(){
                                if($("#superContainer").css("top")==superTop){
                                  $(".diff3").fadeIn("200",function(){
                                    if($("#superContainer").css("top")==superTop){
                                      $(".diff").hover(
                                        function(){
                                          $(".mod2 .diff").stop().removeClass("zhong")
                                          $(this).stop().addClass("zhong");
                                          $(".mod2 .des").stop().fadeOut("200");
                                          $(this).stop().find(".des").fadeIn("200");
                                        },
                                        function(){}
                                      )
                                    }
                                  })
                                }
                              })
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
            i++;
          }
          else{
            window.clearInterval(animation)
          }

        },200);
      
      }
      if(index == 4){
        $(".item").removeClass("zhong")
        $(".item").eq(3).addClass("zhong")
        var signWidth = 0;
        var signWidthPre = 0;

        for(i=$(".zhong").parent().index()-1;i>-1;i--){
          signWidthPre = signWidth; 
          signWidth = $(".navLi").eq(i).width();
          signWidth = signWidthPre+signWidth; 
        }

        if(ii=="page1"){
          $(".top").animate({"padding-bottom":"0px"},300)
          signWidth = $(".zhong").width()/2+signWidth-13;
        }
        else if(ii==undefined){
          $(".top").animate({"padding-bottom":"0px"},300)
        }
        else{
          $(".top").animate({"padding-bottom":"0px"},300)
          signWidth = $(".zhong").width()/2+signWidth-17;
        }
        $(".sign").stop().animate({left:signWidth},300)
        $(".do1").fadeIn("500");

        var superTop = $("#superContainer").css("top");
        var i=0;
        var animation = setInterval(function(){
          if($("#superContainer").css("top")==superTop){
            if(i==0){
              if($("#superContainer").css("top")==superTop){
                $(".do2").fadeIn("500",function(){
                  if($("#superContainer").css("top")==superTop){
                    $(".servicesBg").css({"background-position":"0px 0px"})
                  }
                });
              };
            }
          }
          if($("#superContainer").css("top")==superTop){
            if(i==1){
              $(".do3").fadeIn("500",function(){
                if($("#superContainer").css("top")==superTop){
                  $(".servicesBg").css({"background-position":"0px -103px"});
                  $(".do4").fadeIn("500")
                }
              })
            }
          } 
          if($("#superContainer").css("top")==superTop){
            if(i==2){
              $(".servicesBg").css({"background-position":"0px -206px"});
              if($("#superContainer").css("top")==superTop){
                $(".mod3 .icon2").fadeIn("500",function(){
                  if($("#superContainer").css("top")==superTop){
                    $(".mod3 .icon1").fadeIn("500",function(){
                      if($("#superContainer").css("top")==superTop){
                        $(".do5").fadeIn("500")
                      }
                    })
                  }
                })
              }
            }
          } 
          if($("#superContainer").css("top")==superTop){
            if(i==3){
              window.clearInterval(animation)
            }
          }
           i++;
           
        },1000);

      }
      if(index == 5){
        $(".item").removeClass("zhong")
        $(".item").eq(4).addClass("zhong")
        var signWidth = 0;
        var signWidthPre = 0;

        for(i=$(".zhong").parent().index()-1;i>-1;i--){
          signWidthPre = signWidth; 
          signWidth = $(".navLi").eq(i).width();
          signWidth = signWidthPre+signWidth; 
        }

        if(ii=="page1"){
          $(".top").animate({"padding-bottom":"0px"},300)
          signWidth = $(".zhong").width()/2+signWidth-13;
        }
        else if(ii==undefined){
          $(".top").animate({"padding-bottom":"0px"},300)
        }
        else{
          $(".top").animate({"padding-bottom":"0px"},300)
          signWidth = $(".zhong").width()/2+signWidth-17;
        }
        $(".sign").stop().animate({left:signWidth},300)

        $(".mod4 .banner2").animate({bottom:"-50px"},500)
      }
      if(index == 6){
        $(".item").removeClass("zhong");
        $(".item").eq(5).addClass("zhong");
        var signWidth = 0;
        var signWidthPre = 0;

        for(i=$(".zhong").parent().index()-1;i>-1;i--){
          signWidthPre = signWidth; 
          signWidth = $(".navLi").eq(i).width();
          signWidth = signWidthPre+signWidth; 
        }

        if(ii=="page1"){
          $(".top").animate({"padding-bottom":"0px"},300)
          signWidth = $(".zhong").width()/2+signWidth-13;
        }
        else if(ii==undefined){
          $(".top").animate({"padding-bottom":"0px"},300)
        }
        else{
          $(".top").animate({"padding-bottom":"0px"},300)
          signWidth = $(".zhong").width()/2+signWidth-17;
        }
        $(".sign").stop().animate({left:signWidth},300)

        $(".leftPant").animate({"margin-left":"10px"},500)
        $(".rightPant").animate({"margin-right":"0px"},500)

        $(".inviteMod").hover(
          function(){
            $(this).find(".title").animate({bottom:"0px"},500)
          },
          function(){
            $(this).find(".title").animate({bottom:"-40px"},500)
          }
        )
      }
      if(index == 7){
        $(".item").removeClass("zhong")
        $(".item").eq(6).addClass("zhong")

        $(".mod6").find("img").fadeIn(500)
        $(".mod6").find("img").addClass("zhong")

        $(".mod6").find(".zhong").fadeIn(500)

        $(".mouseTop").find("img").attr({ src: "/Templates/biezhilang/images/mouseTop2.png"})
        $(".mouseCont").find("img").attr({ src: "/Templates/biezhilang/images/mouse2.png"})
        $(".mouseBottom").find("img").attr({ src: "/Templates/biezhilang/images/mouseBottom2.png"})
      }
    },
    onLeave: function(index, direction){
      if(index == '1'){
        $(".top").stop().find(".item").animate({padding:"25px 25px"},1000,function(){
          $(".logo").stop().animate({top:"20px"},500);
          $(".logo").find("img").animate({width:"140px"},500);
        })
        $(".top").stop().animate({bottom:$(window).innerHeight()-80},1000);
        $(".item").eq(0).removeClass("zhong")
      }
      if(index == '2'){
        $(".mod1Li5 .icon").fadeOut("slow",function(){
          $(".mod1Li5 .icon").removeClass("iconAnim");
            $(".mod1Li5 .img").css({"display":"none"});
            $(".mod1Li5 .img").removeClass("imgShow");
            $(".mod1Li5 .mod1LiTop").fadeOut("slow");
            $(".mod1Li5 .describe").fadeOut("slow")
        })
        $(".mod1Li4 .icon").fadeOut("slow",function(){
          $(".mod1Li4 .icon").removeClass("iconAnim");
            $(".mod1Li4 .img").css({"display":"none"});
            $(".mod1Li4 .img").removeClass("imgShow");
            $(".mod1Li4 .mod1LiTop").fadeOut("slow");
            $(".mod1Li4 .describe").fadeOut("slow")
        })
        $(".mod1Li3 .icon").fadeOut("slow",function(){
          $(".mod1Li3 .icon").removeClass("iconAnim");
            $(".mod1Li3 .img").css({"display":"none"});
            $(".mod1Li3 .img").removeClass("imgShow");
            $(".mod1Li3 .mod1LiTop").fadeOut("slow");
            $(".mod1Li3 .describe").fadeOut("slow")
        })
        $(".mod1Li2 .icon").fadeOut("slow",function(){
          $(".mod1Li2 .icon").removeClass("iconAnim");
            $(".mod1Li2 .img").css({"display":"none"});
            $(".mod1Li2 .img").removeClass("imgShow");
            $(".mod1Li2 .mod1LiTop").fadeOut("slow");
            $(".mod1Li2 .describe").fadeOut("slow")
        })
        $(".mod1Li1 .icon").fadeOut("slow",function(){
          $(".mod1Li1 .icon").removeClass("iconAnim");
            $(".mod1Li1 .img").css({"display":"none"});
            $(".mod1Li1 .img").removeClass("imgShow");
            $(".mod1Li1 .mod1LiTop").fadeOut("slow");
            $(".mod1Li1 .describe").fadeOut("slow")
        })
        $(".mod1 .wire").animate({width:"0"},1000);

      }
      if(index == '3'){
        $(".section3 .mod2 .icon1").fadeOut(0);
        $(".section3 .mod2 .icon2").fadeOut(0);
        $(".section3 .mod2 .icon3").fadeOut(0);
        $(".mod2 .diff1").fadeOut(0);
        $(".mod2 .diff2").fadeOut(0);
        $(".mod2 .diff3").fadeOut(0);
        $(".mod2").css({"background-position":"0px  0"});

      }
      if(index == '4'){
        $(".mod3 .do1").fadeOut("500");
        $(".mod3 .do2").fadeOut("500");
        $(".mod3 .do3").fadeOut("500");
        $(".mod3 .do4").fadeOut("500");
        $(".mod3 .do5").fadeOut("500");
        $(".mod3 .icon1").fadeOut("500");
        $(".mod3 .icon2").fadeOut("500");
        $(".servicesBg").css({"background-position":"0px 103px"});
      }
      if(index == 5){
        $(".mod4 .banner2").animate({bottom:"-90px"},500)
      }
      if(index == 6){
        $(".leftPant").animate({"margin-left":"-318px"},500)
        $(".rightPant").animate({"margin-right":"-660px"},500)
      }
      if(index == 7){
        $(".mod6").find("img").removeClass("zhong")
        $(".mod6").find("img").fadeOut(500)

        $(".mouseTop").find("img").attr({ src: "/Templates/biezhilang/images/mouseTop.png"})
        $(".mouseCont").find("img").attr({ src: "/Templates/biezhilang/images/mouse.png"})
        $(".mouseBottom").find("img").attr({ src: "/Templates/biezhilang/images/mouseBottom.png"})
      }
    }
  });  

  $('.box_skitter_large').skitter();
});
