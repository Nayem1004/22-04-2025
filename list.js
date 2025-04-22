function addEntry() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const status = document.getElementById("status").value;
  
    const newEntry = document.createElement("div");
    newEntry.textContent = `Name: ${name}, Age: ${age}, Status: ${status}`;
  
    const list = document.getElementById("list");
    list.appendChild(newEntry);
  
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("status").value = "";
  }