/**
 * Created by 87831 on 2017/11/26/0026.
 */


function opendetail(orderid) {
    curorderid = orderid;
    $.ajax({
        url:orderdetailurl,
        type:"GET",
        success:function(data){
            $("#mainbody").html(data);
        },
        error:function(XmlHttpRequest, textStatus, errorThrown){
            alert("error:");
            $("#mainbody").html("error");
        }
    });
}
