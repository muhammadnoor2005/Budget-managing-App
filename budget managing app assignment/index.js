
const dateDiv = document.getElementById("dateDiv");
const settingBudget = document.getElementById("settingBudget");
const availableBalanceDiv = document.getElementById("availableBalanceDiv");
const enterBudgetBox = document.getElementById("enterBudgetBox");
const addExpenseForm = document.getElementById("addExpenseForm");
const dueDateField = document.getElementById("dueDate");
const totalAmountField = document.getElementById("totalAmount");
const categoryField = document.getElementById("category");
const descriptionField = document.getElementById("description");
const paymentDateField = document.getElementById("paymentDate");
const noOfTransactions = document.getElementById("noOfTransactions");
const addExpenseButton = document.getElementById("addExpenseButton");
const budgetDiv = document.getElementById("budgetUL");
let budgetDivinner;
let addedBudget; 
let budget;


const todayDate = new Date();
const monthsarr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const months = monthsarr[todayDate.getMonth()];
const date = todayDate.getDate();
const year = todayDate.getFullYear();
switch(+date){
    case 1:
        dateDiv.innerText = `${months}, ${date}st ${year}`;
        break;
    case 2:
        dateDiv.innerText = `${months}, ${date}nd ${year}`;
        break;
    case 3:
        dateDiv.innerText = `${months}, ${date}rd ${year}`;
        break;
    default:
        dateDiv.innerText = `${months}, ${date}th ${year}`;
}

function balanceUpdate(){
    availableBalanceDiv.innerText = `Available Balance: ${+budget}  Rupees` ;
}

function addBudgetBox(){
    enterBudgetBox.className = "enterBudgetBoxNewClass";
    settingBudget.value = "";
}


function cancelSubmit(){
    enterBudgetBox.className = "enterBudgetBoxPrevClass";
}


function submitBudget(event){
    event.preventDefault();
    enterBudgetBox.className = "enterBudgetBoxPrevClass";
    budget = settingBudget.value;
    balanceUpdate();
    addExpenseButton.className = "addExpenseNewButton";
}


function cancelSettingBudget(){
    enterBudgetBox.className = "enterBudgetBoxPrevClass";
}


function addExpenseFormCall(){
    addExpenseForm.className = "addExpenseFormNewClass";
    dueDateField.value = "";
    totalAmountField.value = "";
    categoryField.value = "";
    descriptionField.value = "";
    paymentDateField.value = "";
}


const expensesObj = {};
let expensesObjKeys = Object.keys(expensesObj).length;

function budgetCheck(){
    if (budget === 0){
        addExpenseButton.className = "addExpensePrevButton";
    } else{
        addExpenseButton.className = "addExpenseNewButton";
    }
}

function noOfTransac(){
    if (expensesObjKeys < 10) {
        noOfTransactions.innerHTML = `No. of Transactions: 0${expensesObjKeys}`;
    } else {
        noOfTransactions.innerHTML = `No. of Transactions: ${expensesObjKeys}`;
    } 
}  
 

function addExpenseFormSubmitCall(event){

    addExpenseForm.className = "addExpenseFormPrevClass";
    event.preventDefault();


    class ExpensesInfoObj  {
        constructor(dueDateField, totalAmountField, categoryField, descriptionField, paymentDateField){
            this.dueDateObjKey = dueDateField.value;
            this.totalAmountObjKey = +totalAmountField.value;
            this.categoryObjKey = categoryField.value;
            this.descriptionObjKey = descriptionField.value;
            this.paymentDateObjKey = paymentDateField.value;
        }
        
    }
    if(+totalAmountField.value > budget){
        totalAmountField.value = "";
        alert("Budget can't be greater than Available Balance.");
        addExpenseFormCall();
    }
    else if(+totalAmountField.value <= 0){
        alert("Budget can't be less than or equal to 0.");
        addExpenseFormCall();
    }
    else{
        let newObj = new ExpensesInfoObj(dueDateField, totalAmountField, categoryField, descriptionField, paymentDateField);
        let uniqueId = Math.random() + Math.random();
        expensesObj[uniqueId] = newObj;
        

        
        budgetDivinner = document.createElement("div");
        budgetDivinner.classList.add("budgetDivinner");
        budgetDivinner.id = `budgetDivinner-${uniqueId}`;
        let expensesListDef;
        
        
        
        expensesListDef = `<span class='visibleCategory'>${newObj.categoryObjKey}</span><br>` +
        `<span class='visiblePaymentDate'>${newObj.paymentDateObjKey}</span>` +
        `<span class='visibleTotalAmount'>Rs: ${newObj.totalAmountObjKey}.00</span>` +
        `<input type='button' name='deleteList' class='xButton' value='x' onclick='deleteList(${uniqueId})'>`;
        addedBudget = +newObj.totalAmountObjKey;
            
        expensesObjKeys = Object.keys(expensesObj).length;
        noOfTransac();
    
        budgetDiv.appendChild(budgetDivinner);
        budgetDivinner.innerHTML += expensesListDef; 


        budget = +budget - +addedBudget;
        balanceUpdate();
        budgetCheck();
       
    }
}
 

let expense;

function deleteList(uniqueId) {

    expense = +expensesObj[uniqueId].totalAmountObjKey;
    budget = expense + +budget;
    

    delete expensesObj[uniqueId];

    let budgetDivinner = document.getElementById(`budgetDivinner-${uniqueId}`);
    budgetDiv.removeChild(budgetDivinner);
    
    expensesObjKeys = Object.keys(expensesObj).length;
    noOfTransac();
    balanceUpdate(); 
    budgetCheck();
}
  

function addExpenseFormCancelCall(){
    addExpenseForm.className = "addExpenseFormPrevClass";
}