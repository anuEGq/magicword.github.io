/**Function to open dropdown lists in sidebar */
function openDropdown(id){
    const listItems = document.getElementById("sub_"+id);
    listItems.classList.toggle("hide");

    const caretElm = document.getElementById('caret_'+id);
    if(listItems.classList.contains("hide")){
        caretElm.classList.toggle("fa-caret-down");
    }
    else{
        caretElm.classList.toggle("fa-caret-up");
    }
}

/**Function to select doc elements */
function selectElement(id, event){
    const clickedElmId = event.target.getAttribute('id');
    if(clickedElmId !== "check_"+id){
        const checkBoxElm = document.getElementById("check_"+id);
        const section = document.getElementById("sec_"+id);
        checkBoxElm.checked = checkBoxElm.checked ? false : true;
        section.classList.toggle("selected");
    }
}

function clearAllSelections(){
    Swal.fire({
        icon: 'question',
        title: 'Are you sure?',
        text: 'Do you want remove all selections'
      });
    console.log(swal.isConfirmed);
}

document.addEventListener('DOMContentLoaded', function () {
    NavTree.createBySelector("#nav-tree", {
      searchable: false,
      showEmptyGroups: true,

      groupOpenIconClass: "fas",
      groupOpenIcon: "fa-chevron-down",

      groupCloseIconClass: "fas",
      groupCloseIcon: "fa-chevron-right",

      linkIconClass: "fas",
      linkIcon: "fa-link",

      searchPlaceholderText: "Search",

      iconPlace: "start"
    });
  });