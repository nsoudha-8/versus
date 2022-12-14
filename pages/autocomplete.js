import React from 'react'
import {useEffect} from "react";

export default function form(){
  var search_terms = ['apple', 'apple watch', 'apple macbook', 'apple macbook pro', 'iphone', 'iphone 12'];

  function autocompleteMatch(input) {
    if (input == '') {
      return [];
    }
    var reg = new RegExp(input)
    return search_terms.filter(function(term) {
      if (term.match(reg)) {
        return term;
      }
    });
  }
  
  function showResults(val) {
    res = document.getElementById("result");
    res.innerHTML = '';
    let list = '';
    let terms = autocompleteMatch(val);
    for (i=0; i<terms.length; i++) {
      list += '<li>' + terms[i] + '</li>';
    }
    res.innerHTML = '<ul>' + list + '</ul>';
  }

        
   

    return (
    <div>
        <form autocomplete="off"><input type="text" name="q" id="q" onKeyUp={showResults(this.value)} />
          <div id="result"></div>
        </form>

    </div>
  )
 }




