	add=function() {
  			var task=document.getElementById("newtask");
  			
  			var box=document.createElement("input");
  			box.setAttribute("type", "checkbox");
  			box.onclick=strike; 
  	
  			var tn=document.createTextNode(task.value);
  			var item=document.createElement("li");
  			
  			item.appendChild(box);
  			item.appendChild(tn);
  			item.setAttribute("id", tn);
  			
  			var priority=document.getElementById("newpriority").value;
  			
			list=choosepri(priority);
 
  			list.appendChild(item);
		}
		
		
		choosepri = function(priority) {
			if (priority=="High") {
  				var list=document.querySelector(".highp");
  			} 
  			
  			else if (priority=="Medium") {
  				var list=document.querySelector(".mediump");
			}
  			
  			else {
  				var list=document.querySelector(".lowp");
  			}
  			
  			return list;
			
		}
		
		strike = function() {
		
			alert("hi");
			
			this.parentNode.classList.add("done"); 

			alert("hi");
		}
