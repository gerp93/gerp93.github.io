	add=function() {
  			var task=document.getElementById("tasks");
  			
  			
  			
  			var item=document.createElement("li");
  			
  			task.appendChild(item);
  			
  			var tn=document.createTextNode(task.value);
  			var box=document.createElement("input");
  			box.setAttribute("type", "checkbox");
  			box.onclick=check; 
  			item.appendChild(box);
  			item.appendChild(tn);
  		
  			var priority=document.getElementById("newpriority").value;
  		
  			item.setAttribute("className", priority)	
  		
  			alert(priority); 
  		
  			localSave("tasks");
		}
		
		
		choosepri = function(priority) {
			if (priority=="High") {
  				var list=document.querySelector("#highp");
  			} else if (priority=="Medium") {
  				var list=document.querySelector("#mediump");
			} else {
  				var list=document.querySelector("#lowp");
  			}
  		
  			return list;
		}
		
		check = function() {
			if (this.checked) {
			this.parentNode.classList.add("done"); 
			} else {
				this.parentNode.classList.remove("done");
			}
			localSave("tasks");
		}
		
		window.onload = function() {
			
			restoreList("tasks", check);
			
		}
	
	
	
		
		
		
		
		
	
		
