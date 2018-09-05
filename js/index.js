window.onload=function(){
	let box1=document.querySelector(".box1")
	let box2=document.querySelector(".box2")
	let gg1=document.querySelector(".gg1")
	let gg2=document.querySelector(".gg2")
	let arr1=["1","2","3","4"]
	let arr2=["1","2","3","4"]
	function Updown(){
		box1.innerHTML=""
		box2.innerHTML=""
		gg1.innerText=arr1.length
		gg2.innerText=arr2.length
	arr1.forEach((value,index)=>{
		let div=document.createElement("div")
		div.className="box";
		let input=document.createElement("input");
		input.setAttribute("type","checkbox")
		let p=document.createElement("p")
		p.innerHTML=value;
		let hh=document.createElement("div")
		hh.className="hh"
		div.appendChild(input)
		div.appendChild(p)
		div.appendChild(hh)
		box1.appendChild(div)
		p.ondblclick=function(){
			let input=document.createElement("input")
			input.style=`width:500px;height:28px;margin-top:0;`
			input.value=p.innerText
			p.innerText=""
			p.appendChild(input)
			input.focus();
			input.onblur=function(){
				arr1.splice(index,1,this.value)
				Updown()
			}
		}

		input.onclick=function(){
			arr1.splice(index,1)
			arr2.unshift(value)
			// arr1=""
			Updown()
		}

		hh.onclick=function(){
			arr1.splice(index,1)
			Updown()
		}


		
	})
	arr2.forEach((value,index)=>{
		let div=document.createElement("div")
		div.className="box";
		let input=document.createElement("input");
		input.setAttribute("type","checkbox")
		input.setAttribute("checked","checked")
		let p=document.createElement("p")
		p.innerHTML=value;
		let hh=document.createElement("div")
		hh.className="hh"
		div.appendChild(input)
		div.appendChild(p)
		div.appendChild(hh)
		box2.appendChild(div)


		input.onclick=function(){
			arr2.splice(index,1)
			arr1.unshift(value)
			Updown()
		}

			hh.onclick=function(){
			arr2.splice(index,1)
			Updown()
		}
		
	})
}
Updown();

	let input = document.querySelector("#input");
	input.onkeydown=function(e){
		if(e.keyCode==13&&this.value!=""){
			arr1.unshift(this.value);
			this.value=""
			Updown()
		}
	}
}


	

