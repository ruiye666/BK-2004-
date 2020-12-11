/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...
$(function () {
    var arr = [];
    function load() {
      $("#donelist, #todolist").empty();
      for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var li = $("<li></li>");
        if (item.done) {
          var doneStr =
            '<input type="checkbox" index="'+ i +'" checked><p>'+ item.info +'</p>';
  
          li.html(doneStr);
          $("#donelist").append(li);
        }
       
        else {
          var todoStr =
            '<input type="checkbox" index="'+ i +'"><p>'+ item.info +'</p><a href="javascript:;">×</a>';
          li.html(todoStr);
          $("#todolist").append(li);
        }
      }
      $("#todocount").text($("#todolist li").length);
      $("#donecount").text($("#donelist li").length);
    }
   

    
  });
  