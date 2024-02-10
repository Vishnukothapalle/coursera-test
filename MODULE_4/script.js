function jd(is)
{
   var name1=is
    for(var i=0;i<name1.length;i++)
    {
        var firstletter = name1[i].charAt(0).toLowerCase();
        if(firstletter === "j")
        {
        console.log("Good bye "+name1);
        break;
        }
        else{
            console.log("Hello "+name1);
            break;
        }
    }
}
jd("Yakkov");
jd("Jhon");
jd("Jen");
jd("Jhanson");
jd("Paule")
jd("Frank");
jd("Larry");
jd("paula');
jd("Laura");
jd("jim");
