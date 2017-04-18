$(document).ready(function(){	
	var container = $("#container");

	//add title h1
	container.append("<h1>Authentic Chinese Restaurant</h1>");

	//create and add img element
	var img = $("<img>",{
		src: "http://www.thechinesequest.com/wp-content/uploads/2014/08/Chinese-food-facts.jpg",
		alt:"Chiese food",
		id: "image"
	});
	container.append(img);

	//create and add content div
	container.append("<div class=\"content\"></div>");
	var content = $(".content");

    //create and add tabs
    var tabs = $("<ul class=\"tabs\">"
    	+"<li class=\"tab about-tab\"><a>About</a></li>"
    	+"<li class=\"tab menu-tab\"><a>Menu</a></li>"
    	+"<li class=\"tab contact-tab\"><a>Contact</a></li>"
    	+"</ul>")
    content.append(tabs);

	//create "about" div and text
	var about = $("<div class=\"about\"></div>");
	about.append("<p>Authentic Chinese Restaurant is where you are treated like a member of our family, with delicious authentic meals prepared with dedication by our passionate and experienced cooks.</p>"
		+"<p> Enjoy a fantastic feast at our wonderful relaxed venue and soak in the atmosphere and famous hospitality. Come and visit us today!</p>");
    content.append(about);

	//create "menu" div and text
	var menu =$("<div class=\"menu hidden\"><div>");
	menu.append("<ul class=\"menu-list\">"
		+"<li>Sliced Beef with Black Bean Sauce</li>"
		+"<li>Deep Fried Crisp Skin Chicken</li>"
		+"<li>Steamed Duck with Chinese Mushroom</li>"
		+"<li>Lamb Fillet with Black Bean Sauce</li>"
		+"<li>Baked Pork Chop with Salt & Pepper </li>"
		+"<li>Sweet & Sour Pork</li>");
    content.append(menu);

    //create "contact" div and text
    var contact = $("<div class=\"contact hidden\"></div>");
    contact.append("<p>We can be reached at: (555)555-5555.</p>");
    content.append(contact);

    // tab to show content function
    var previousContent = about; //default content view 
    var previousTab = $(".about-tab");
    previousTab.css("color", "#bf3000");

    function clickToShowContent(tab, content){
    	tab.click(function(){
    		previousTab.css("color", "#000");
    		previousContent.addClass("hidden");

    		content.removeClass("hidden");
    		tab.css("color", "#bf3000")
    		previousContent = content;
    		previousTab = tab;
    	})
         
    };
    clickToShowContent($(".about-tab"), about);
    clickToShowContent($(".menu-tab"), menu);
    clickToShowContent($(".contact-tab"),contact)
});