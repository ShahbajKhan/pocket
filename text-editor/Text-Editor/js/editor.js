// document.getElementById('bold-btn').addEventListener('click', function(){
//     document.getElementById('editor').style.fontWeight ='bold';
// })
// document.getElementById('italic-btn').addEventListener('click', function(){
//     document.getElementById('editor').style.fontStyle ='italic';
// })

function changeTextStyle(style) {
  console.log(style);
  const editor = document.getElementById("editor");
  if (style === "bold") {
    editor.style.fontWeight = style;
  } else if (style === "italic") {
    editor.style.fontStyle = style;
  } else {
    editor.style.textDecoration = style;
  }
}

function changeColor(field) {
//   console.log(value.value);
  editor.style.color = field.value;
}

// document.getElementById('pick-color').addEventListener('change', function(e){
//     console.log(e.target.value);
//     editor.style.color = e.target.value
// })
