var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var eight;
var nine;
var ten;
var eleven;
var twelve;
var thirteen;
var fourteen;
var fifteen;
var out = "";
document.getElementById("select").innerHTML = "<h2>Loading ...</h2>";
$.ajax({
    method: "get",
    url: "/analysis",
    success: function (res){
        alert("Connect");
        one =  res.one;
        two = res.two;
        three  = res.three;
        four = res.four;
        five = res.five;
        six = res.six;
        seven = res.seven;
        eight = res.eight;
        nine = res.nine;
        ten = res.ten;
        eleven = res.eleven;
        twelve = res.twelve;
        thirteen = res.thirteen;
        fourteen = res.fourteen;
        fifteen = res.fifteen;
        select();
    },
    error: function (res){
        alert("Error");
    },
});
Report15 = function(){
    //await report();
    var head = Object.keys( fifteen[0] );
    var i;
    var j;
    out = '<table class="table table-bordered">';

    out += "<tr>";
    for(j=0;j<head.length;j++){
        out += "<th>";
        out += head[j];
        out+= "</th>";
        }
    out += "</tr>";
    for(i=0;i<fifteen.length;i++) // row
    {
    out += "<tr>"
        
        for(j=0;j<head.length;j++) // column
        {
            out += "<td>" ;
            out += fifteen[i][ head[j] ];
            out += "</td>"
        }
    out += "</tr>";
    }
    out += "</table>";
    document.getElementById("R15").innerHTML= out;
};
Report14 = function(){
    var head = Object.keys( fourteen[0] );
    var i;
    var j;
    out = '<table class="table table-bordered">';

    out += "<tr>";
    for(j=0;j<head.length;j++){
        out += "<th>";
        out += head[j];
        out+= "</th>";
        }
    out += "</tr>";
    for(i=0;i<fourteen.length;i++) // row
    {
    out += "<tr>"
        
        for(j=0;j<head.length;j++) // column
        {
            out += "<td>" ;
            out += fourteen[i][ head[j] ];
            out += "</td>"
        }
    out += "</tr>";
    }
    out += "</table>";
    document.getElementById("R15").innerHTML= out;
};
Report13 = function(){
    var head = Object.keys( thirteen[0] );
    var i;
    var j;
    out ='<table class="table table-bordered">';

    out += "<tr>";
    for(j=0;j<head.length;j++){
        out += "<th>";
        out += head[j];
        out+= "</th>";
        }
    out += "</tr>";
    for(i=0;i<thirteen.length;i++) // row
    {
    out += "<tr>"
        
        for(j=0;j<head.length;j++) // column
        {
            out += "<td>" ;
            out += thirteen[i][ head[j] ];
            out += "</td>"
        }
    out += "</tr>";
    }
    out += "</table>";
    document.getElementById("R15").innerHTML= out;
};
Report12 = function(){
    var head = Object.keys( twelve[0] );
    var i;
    var j;
    out = '<table class="table table-bordered">';

    out += "<tr>";
    for(j=0;j<head.length;j++){
        out += "<th>";
        out += head[j];
        out+= "</th>";
        }
    out += "</tr>";
    for(i=0;i<twelve.length;i++) // row
    {
    out += "<tr>"
        
        for(j=0;j<head.length;j++) // column
        {
            out += "<td>" ;
            out += twelve[i][ head[j] ];
            out += "</td>"
        }
    out += "</tr>";
    }
    out += "</table>";
    document.getElementById("R15").innerHTML= out;
};
Report11 = function(){
    var head = Object.keys( eleven[0] );
    var i;
    var j;
    out = '<table class="table table-bordered">';

    out += "<tr>";
    for(j=0;j<head.length;j++){
        out += "<th>";
        out += head[j];
        out+= "</th>";
        }
    out += "</tr>";
    for(i=0;i<eleven.length;i++) // row
    {
    out += "<tr>"
        
        for(j=0;j<head.length;j++) // column
        {
            out += "<td>" ;
            out += eleven[i][ head[j] ];
            out += "</td>"
        }
    out += "</tr>";
    }
    out += "</table>";
    document.getElementById("R15").innerHTML= out;
};
Report10 = function(){
    var head = Object.keys( ten[0] );
    var i;
    var j;
    out = '<table class="table table-bordered">';

    out += "<tr>";
    for(j=0;j<head.length;j++){
        out += "<th>";
        out += head[j];
        out+= "</th>";
        }
    out += "</tr>";
    for(i=0;i<ten.length;i++) // row
    {
    out += "<tr>"
        
        for(j=0;j<head.length;j++) // column
        {
            out += "<td>" ;
            out += ten[i][ head[j] ];
            out += "</td>"
        }
    out += "</tr>";
    }
    out += "</table>";
    document.getElementById("R15").innerHTML= out;
};
Report9 = function(){
    var head = Object.keys( nine[0] );
    var i;
    var j;
    out = '<table class="table table-bordered">';

    out += "<tr>";
    for(j=0;j<head.length;j++){
        out += "<th>";
        out += head[j];
        out+= "</th>";
        }
    out += "</tr>";
    for(i=0;i<nine.length;i++) // row
    {
    out += "<tr>"
        
        for(j=0;j<head.length;j++) // column
        {
            out += "<td>" ;
            out += nine[i][ head[j] ];
            out += "</td>"
        }
    out += "</tr>";
    }
    out += "</table>";
    document.getElementById("R15").innerHTML= out;
};
Report8 = function(){
    var head = Object.keys( eight[0] );
    var i;
    var j;
    out ='<table class="table table-bordered">';

    out += "<tr>";
    for(j=0;j<head.length;j++){
        out += "<th>";
        out += head[j];
        out+= "</th>";
        }
    out += "</tr>";
    for(i=0;i<eight.length;i++) // row
    {
    out += "<tr>"
        
        for(j=0;j<head.length;j++) // column
        {
            out += "<td>" ;
            out += eight[i][ head[j] ];
            out += "</td>"
        }
    out += "</tr>";
    }
    out += "</table>";
    document.getElementById("R15").innerHTML= out;
};
Report7 = function(){
    var head = Object.keys( seven[0] );
    var i;
    var j;
    out = '<table class="table table-bordered">';

    out += "<tr>";
    for(j=0;j<head.length;j++){
        out += "<th>";
        out += head[j];
        out+= "</th>";
        }
    out += "</tr>";
    for(i=0;i<seven.length;i++) // row
    {
    out += "<tr>"
        
        for(j=0;j<head.length;j++) // column
        {
            out += "<td>" ;
            out += seven[i][ head[j] ];
            out += "</td>"
        }
    out += "</tr>";
    }
    out += "</table>";
    document.getElementById("R15").innerHTML= out;
};
Report6 = function(){
    var head = Object.keys( six[0] );
    var i;
    var j;
    out = '<table class="table table-bordered">';

    out += "<tr>";
    for(j=0;j<head.length;j++){
        out += "<th>";
        out += head[j];
        out+= "</th>";
        }
    out += "</tr>";
    for(i=0;i<six.length;i++) // row
    {
    out += "<tr>"
        
        for(j=0;j<head.length;j++) // column
        {
            out += "<td>" ;
            out += six[i][ head[j] ];
            out += "</td>"
        }
    out += "</tr>";
    }
    out += "</table>";
    document.getElementById("R15").innerHTML= out;
};
Report5 = function(){
    var head = Object.keys( five[0] );
    var i;
    var j;
    out = '<table class="table table-bordered">';

    out += "<tr>";
    for(j=0;j<head.length;j++){
        out += "<th>";
        out += head[j];
        out+= "</th>";
        }
    out += "</tr>";
    for(i=0;i<five.length;i++) // row
    {
    out += "<tr>"
        
        for(j=0;j<head.length;j++) // column
        {
            out += "<td>" ;
            out += five[i][ head[j] ];
            out += "</td>"
        }
    out += "</tr>";
    }
    out += "</table>";
    document.getElementById("R15").innerHTML= out;
};
Report4 = function(){
    var head = Object.keys( four[0] );
    var i;
    var j;
    out = '<table class="table table-bordered">';
    out += "<tr>";
    for(j=0;j<head.length;j++){
        out += "<th>";
        out += head[j];
        out+= "</th>";
        }
    out += "</tr>";
    for(i=0;i<four.length;i++) // row
    {
    out += "<tr>"
        for(j=0;j<head.length;j++) // column
        {
            out += "<td>" ;
            out += four[i][ head[j] ];
            out += "</td>"
        }
    out += "</tr>";
    }
    out += "</table>";
    document.getElementById("R15").innerHTML= out;
};
Report3 = function(){
    var head = Object.keys( three[0] );
    var i;
    var j;
    out = '<table class="table table-bordered">';

    out += "<tr>";
    for(j=0;j<head.length;j++){
        out += "<th>";
        out += head[j];
        out+= "</th>";
        }
    out += "</tr>";
    for(i=0;i<three.length;i++) // row
    {
    out += "<tr>"
        
        for(j=0;j<head.length;j++) // column
        {
            out += "<td>" ;
            out += three[i][ head[j] ];
            out += "</td>"
        }
    out += "</tr>";
    }
    out += "</table>";
    document.getElementById("R15").innerHTML= out;
};
Report2 = function(){
    var head = Object.keys( two[0] );
    var i;
    var j;
    out = '<table class="table table-bordered">';

    out += "<tr>";
    for(j=0;j<head.length;j++){
        out += "<th>";
        out += head[j];
        out+= "</th>";
        }
    out += "</tr>";
    for(i=0;i<two.length;i++) // row
    {
    out += "<tr>"
        
        for(j=0;j<head.length;j++) // column
        {
            out += "<td>" ;
            out += two[i][ head[j] ];
            out += "</td>"
        }
    out += "</tr>";
    }
    out += "</table>";
    document.getElementById("R15").innerHTML= out;
};
Report1 = function(){
    var head = Object.keys( one[0] );
    var i;
    var j;
    out = '<table class="table table-bordered">';

    out += "<tr>";
    for(j=0;j<head.length;j++){
        out += "<th>";
        out += head[j];
        out+= "</th>";
        }
    out += "</tr>";
    for(i=0;i<one.length;i++) // row
    {
    out += "<tr>"
        
        for(j=0;j<head.length;j++) // column
        {
            out += "<td>" ;
            out += one[i][ head[j] ];
            out += "</td>"
        }
    out += "</tr>";
    }
    out += "</table>";
    document.getElementById("R15").innerHTML= out;
};
var chart
var myfunction = function(){
    var x = document.getElementById("R").value;
    x = parseInt(x)
    switch(x){
        case 0:   document.getElementById("R15").innerHTML= ""; break;
        case 1:   Report1(); document.getElementById("piechart").innerHTML= ""; break;
        case 2:   Report2(); document.getElementById("piechart").innerHTML= "";break;
        case 3:   Report3(); document.getElementById("piechart").innerHTML= "";break;
        case 4:   Report4(); document.getElementById("piechart").innerHTML= ""; break;
        case 5:   Report5(); document.getElementById("piechart").innerHTML= "";break;
        case 6:   Report6(); document.getElementById("piechart").innerHTML= "";break;
        case 7:   Report7(); google.charts.setOnLoadCallback(drawChart);break;
        case 8:   Report8(); google.charts.setOnLoadCallback(drawChart);break;
        case 9:   Report9(); google.charts.setOnLoadCallback(drawChart);break;
        case 10:   Report10(); document.getElementById("piechart").innerHTML= "";break;
        case 11:   Report11(); document.getElementById("piechart").innerHTML= "";break;
        case 12:   Report12(); google.charts.setOnLoadCallback(drawChart);break;
        case 13:   Report13(); document.getElementById("piechart").innerHTML= "";break;
        case 14:   Report14(); google.charts.setOnLoadCallback(drawChart);break;
        case 15:   Report15(); document.getElementById("piechart").innerHTML= "";break;
    }
};
var select = function(){
    var form = '<select id = "R" class="form-control" onchange="myfunction()"> '+
                '<option value="0">Report Analysis' +
                '<option value="1"> 1.) จำนวนรอบการเล่นของ user มากที่สุด 10 อันดับแรก' +
                '<option value="2"> 2.) จำนวนการชนะของ user มากที่สุด 10 อันดับแรก' +
                '<option value="3"> 3. )เวลาที่ใช้ในการเล่นต่อ match นานที่สุด 10 อันดับแรก rank match' +
                '<option value="4"> 4. )เวลาที่ใช้ในการเล่นต่อ match นานที่สุด 10 อันดับแรก normal match'+
                '<option value="5"> 5. )user ที่มีเพื่อนมากที่สุด'+
                '<option value="6"> 6. )user ที่มี rank สูงสุด 10 อันดับแรก'+
                '<option value="7"> 7. )จำนวน Match ที่เล่นในแต่ละเดือน'+
                '<option value="8"> 8. )จำนวนผูเ้ล่นที่อยู่ในแต่ละ Rank'+
                '<option value="9"> 9. )การ์ดที่ได้ร้บความนิยมมากที่สุดในแต่ละสี'+
                '<option value="10"> 10.)ผเู้ล่นที่แจ้งปัญหา เยอะที่สุด'+
                '<option value="11">11.)ประเภทของปัญหาที่เกิดขึ้นมากที่สุดและมีจำนวนเท่าไร'+
                '<option value="12">12.)จำนวนของ Match ในแต่ละประเภทของของการเล่น '+
                '<option value="13">13.)ผู้เล่นที่มีอัตราการแพ้สูงสุด'+
                '<option value="14">14.)จำนวน User ในแต่ละ Role'+
                '<option value="15">15.)ระยะเวลาที่ใชใ้นการเล่นในแต่ละ Match โดยเฉลี่ย'+
            '</select>' ;
        document.getElementById("select").innerHTML = form;
}
