let form = {name : "Samy ", age:32, native : " Ariyalur", alive:false, 
    education:{tenth:419, twelth:919, ug:70},
    biodata:function(){console.log(this.name +this.age + this.native)}

}
form.biodata()
console.log(form.education.ug)
console.log(form.native)