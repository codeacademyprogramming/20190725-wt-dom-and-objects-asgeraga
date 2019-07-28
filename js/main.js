"use strict";

////////////bootsrtap write with js lets go dude




// function myFunction() {
//     let x = document.createElement("LINK");
//     x.setAttribute("rel", "stylesheet");
//     x.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
//     document.head.appendChild(x);
//   }
//   let liNk = document.createElement("link")





// let element = document.createElement("link");

// let node = document.createTextNode(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
// ."`);
// para.appendChild(node);
// let element = document.getElementsByTagName("head");
// element.appendChild(element);


//////////student inputs


  //   var body = document.getElementsByTagName('body')[0],
  //   newdiv = document.createElement('div');   //create a div
  //   newdiv.id = 'newid';                      //add an id
  //   body.appendChild(newdiv);                 //append to the doc.body
  //   body.insertBefore(newdiv,body.firstChild) /


  //  function createElementHtml(id,tagname){
  //   var containerdiv = document.createElement('div'),
  //       nwtag = document.createElement(tagname);
  //   nwtag.id = id;
  //   containerdiv.appendChild(nwtag);
  //   return containerdiv.innerHTML;
  // }
  // //usage
  // createElementHtml('id1','div');

  ///////////////button


  ///// new all again
  let students = [];
  let inputs = document.getElementsByClassName("form-control");

  function Student(ad, soyad, email, dogumgunu){
    this.Name = ad;
    this.Surname = soyad;
    this.Email = email;
    this.Birthday = dogumgunu;
    this.info = function(){
        return this.Name + " " + this.Surname + " " + this.Email + " " + this.Birthday;
    };
}
function addStudent(){
     let s = new Student(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
     students.push(s);
     reset();
     showStudents();
  
}

function reset(){
  for(let i = 0; i < inputs.length; i++){
      inputs[i].value = "";
  }
}

function showStudents(){
  let rows = "";

  for(let i = 0; i < students.length; i++){
      rows += `<tr>
          <th scope="row">${i+1}</th>
          <td>${students[i].Name}</td>
          <td>${students[i].Surname}</td>
          <td>${students[i].Email}</td>
          <td>${students[i].Birthday}</td>
      </tr>`
  }

  document.getElementById("table-body").innerHTML = rows;
}


function sort(property){
  students.sort(function(a, b){
      let avalue = a[property].toLowerCase();
      let bvalue = b[property].toLowerCase();

      if(avalue > bvalue){
          return 1;
      } else if(avalue < bvalue){
          return -1;
      } else {
          return 0;
      }
  });

  showStudents();
}






 
