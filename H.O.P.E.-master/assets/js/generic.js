var myObject = [
{name:" Udavum Ullangal Orphanage ",phone:"contact : 99400 19962",address:"address: PLOT NO-1352/1359,GOKULAPURAM, SINGA PERUMAL KOVIL -  603 204 , chengalpat",district:"chengalpat", map:""},
{name:" IYVF Children's Home(orphanage) ",phone:"contact : 98419 07422 ",address:"address : No - 5, Hostel St, Urapakkam, Chengalpet, Tamil Nadu 603211 ",district:"chengalpet",map:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d65567.96436878646!2d80.1913452156002!3d12.978977291172905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sudavum%20ullangal%20orphanage!5e0!3m2!1sen!2sin!4v1666519515975!5m2!1sen!2sin"
},
{name:"",phone:"",address:"",district:"",map:""}
];
let Name=''
for(var i = 0;i<myObject.length;i++){
     Name += myObject[i].name
};

 document.querySelector('.arrayDetail').innerHTML=Name
 function search(){
 var searchValue = document.querySelector(".searchVal").value
 let Name=''
 for(var i = 0;i<myObject.length;i++){
     if(myObject[i].district.includes(searchValue)){
     Name += myObject[i].name
 }
 }
 document.querySelector('.arrayDetail').innerHTML=Name
 }

 $(document).ready(function()
 {
   $("#searchVal").on("keyup",function(){
        var value=$(this).val().toLowerCase();
     $("#searchB *").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1)
       
    });
     });
   }); 