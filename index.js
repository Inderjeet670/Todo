add = document.querySelector(".submit_button");
tit = document.querySelector(".input_div_title_input");
desc = document.querySelector(".input_div_description_input");
insert = document.querySelector('.table_div_body');

title = ''
description = ''



add.addEventListener("click",update)






function update(){

    if(localStorage.getItem('todolist')== null){
        if(tit.value != null && desc.value != null){

            array = [];
        array.push([tit.value,desc.value])
        localStorage.setItem('todolist', JSON.stringify(array) )



        }
        
    }
    else{
        if(tit.value != null && desc.value != null){
            str = localStorage.getItem('todolist');
        array = JSON.parse(str)
        array.push([tit.value,desc.value])
        localStorage.setItem('todolist', JSON.stringify(array))
        }
    }
    str = localStorage.getItem('todolist')
    array = JSON.parse(str)

    strs = " "

    array.forEach((element,index )=> {
       

        strs += `<tr>
        <td>${index+1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button  class="table_div_table_head_row_data_button" ><h3 style="color:white; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">Delete</h3></button></td></td>
    </tr>`

    
    });


    insert.innerHTML = strs

    


}

function runbegin(){

    str = localStorage.getItem('todolist')
    array = JSON.parse(str)

    strs = " "

    array.forEach((element,index )=> {
       

        if(localStorage.getItem('todolist') != null){
            strs += `<tr>
        <td>${index+1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button  class="table_div_table_head_row_data_button" ><h3 style="color:white; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">Delete</h3></button></td></td>

    </tr>`

        }
    
    });

    insert.innerHTML = strs

}

runbegin()