import React from 'react'
import $ from 'jquery';

export default function form(){

    const myFunction=async()=>{

    {/* $("#name").one('oneInput', function () { 
        // executes only once
    
         $("#form").append('<section id="nextractor" class="five"> </section>');  
        }); 
    */}

      
    const f=document.getElementById("text").value
    var firstchar=f.charAt(0)
    var txt1 = "<p>Text.</p>"; 
    if($('#text').val() === firstchar && $('#text').val() !== "" ){
       
           
        const node = document.createElement("input");
        const textnode = document.createTextNode("");
        node.appendChild(textnode);
        document.getElementById("form").appendChild(node);
    }
    else{

    }
      
        
        
        
    };





  return (
    <div>
    <form id="form">
    <label>
    <br/>
    <input type="text" name="name" id="text" placeholder='Type here to compare' onInput={myFunction}></input> 
    </label>
    <button>Compare</button>
    </form>

    </div>
  )
}








