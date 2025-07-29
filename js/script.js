let inputName = document.getElementById("inputName");
let inputDesignation = document.getElementById("inputDesignation");
let btn = document.getElementById("btn");
let cardMake = document.getElementById("cardMake");

let arr = [];

function display() {
    cardMake.innerHTML="";
  arr.map((item) => {
    
    cardMake.innerHTML += `
        
         <div class="text-2xl lg:text-4xl bg-[#1a5c4974] lg:px-[30px] lg:py-[15px] px-[15px] py-[8px] rounded-2xl text-white pt-4 pb-4">
                    <h3>Name: ${item.name}</h3>
                    <h3>Designation: ${item.Designation}</h3>
                </div>
        
        `;
  });
};

btn.addEventListener("click",()=>{
      
      arr.push({
        name:inputName.value,
        Designation:inputDesignation.value
      }) 
      display();
      inputName.value="";
      inputDesignation.value="";
})
