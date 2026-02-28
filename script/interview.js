let currentTab = "all";
const tabActive =["bg-navy" ,"border-blue", "text-white"];
const tabInactive =["bg-transparent", "text-slate-700","border-state-200","text-black"];
const allContainer = document.getElementById("all-container");
const interviewContainer =document.getElementById("interview-container");
const rejectContainer = document.getElementById("reject-container");
const emptyState =document.getElementById ("empty-state");


function switchTab(tab){
    const tabs = ["all" , "interview" ,"rejected"];
    currentTab = tab;
    
    for(const t of tabs){

        const tabName = document.getElementById("tab-"+ t);
        if(t === tab){
          
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);

        }
        else {
            tabName.classList .remove(...tabActive);
            tabName.classList.add(...tabInactive);   
             }
    }

        const pages = [allContainer, interviewContainer, rejectContainer];

        for (const section of pages) {
            section.classList.add("hidden");
            
        }
        emptyState.classList.add("hidden");

     if(tab === "all") {
        allContainer.classList.remove("hidden");
        if(allContainer.children.length < 1){
            emptyState.classList.remove("hidden");
        }
     }
     else if(tab === "interview") {
        interviewContainer.classList.remove("hidden");
        if(interviewContainer.children.length < 1){
            emptyState.classList.remove("hidden");
        }
     }
     else {
        rejectContainer.classList.remove("hidden");
           if(rejectContainer.children.length < 1){
            emptyState.classList.remove("hidden");
        }
     }
   

}

//stat_update 
const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectStat = document.getElementById("stat-reject");
const availableStat =document.getElementById("available");

totalStat.innerText = allContainer.children.length;

switchTab(currentTab);
document.getElementById("jobs-container") .addEventListener("click",function(event)
{
   const clickedElement =  event.target;
   const card =clickedElement.closest(".card"); 
   const status = card.querySelector(".stat");
  const parent =card.parentNode;

   if(clickedElement.classList.contains("interview")){

    status.innerText ="Interviewed";
    interviewContainer.appendChild(card);
    updateStat();
     
   }
     if(clickedElement.classList.contains("rejected")){
            status.innerText ="Rejected";
    rejectContainer.appendChild(card);
    updateStat();
   }
     
     if(clickedElement.classList.contains("delete")){
            parent.removeChild(card);
            updateStat();
      
   }
});

function updateStat(){
    const count={
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectContainer.children.length,

       };

       totalStat.innerText = count["all"];
       interviewStat.innerText = count["interview"];
       rejectStat.innerText = count["rejected"];
      availableStat.innerText = count["currentTab"];

       

       if(count["currentTab"] <1) {
         emptyState.classList.remove("hidden");

       }
       else {
         emptyState.classList.add("hidden");
       }
}

updateStat();