	add=function() {
  			var task=document.getElementById("newtask");
  			
  			var box=document.createElement("input");
  			box.setAttribute("type", "checkbox");
  			box.onclick=check; 
  	
  			var tn=document.createTextNode(task.value);
  			var item=document.createElement("li");
  			
  			item.appendChild(box);
  			item.appendChild(tn);
  			item.setAttribute("id", tn);
  			
  			var priority=document.getElementById("newpriority").value;
  			
			list=choosepri(priority);
			
  			list.appendChild(item);
  			
  			localSave("highp");
			localSave("mediump");
			localSave("lowp");
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
			localSave("highp");
			localSave("mediump");
			localSave("lowp");
		}
		
		
		window.onload = function() {
			
			alert("reloading")
			
			restoreList("highp", check)
			restoreList("mediump", check)
			restoreList("lowp", check)
			
			alert("ok, i'm reloaded")
		}
	
	
	
		
		
		
		
		
	
		
