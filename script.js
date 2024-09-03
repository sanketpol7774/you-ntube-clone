var menu = document.getElementById('menu');


var leftbar = document.querySelector('.left_bar');

// menu.style.color = 'red';


var midal =document.querySelector('.midal')
menu.addEventListener('click', function() {

    leftbar.style.display = leftbar.style.display === 'none' ? 'block' : 'none';

    midal.style.display = leftbar.style.display === 'block' ? 'none' : 'block';
   
});



var buttun = document.getElementById('sanket');

// buttun.style.color = 'red';

var account = document.querySelector('.account');

buttun.addEventListener('click', function() {

    account.style.display = account.style.display === 'none'? 'block': 'none';
});







var adding = [
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT04Edvunqx2oK0qrLREfMb7yFfgBzld1X_2Q&s",
        head: "Top 5 YouTuber Vloggers Exposed @soravjoshivlogs Reality of YouTubers",
        heading: "GyanGuruj",
        views: "10M Views • 3 Months Ago"
    },
    {
        img:"https://miro.medium.com/v2/resize:fit:1400/1*60RQyL8WeifCvfJX8dQCcQ.jpeg",
        head: "Top 5 YouTuber Vloggers Exposed @soravjoshivlogs Reality of YouTubers",
        heading: "GyanGuruj",
        views: "10M Views • 3 Months Ago"
    },
    {
        img:"https://img.youtube.com/vi/46cXFUzR9XM/maxresdefault.jpg",
        head: "Bella Ciao Full Song | La Casa De Papel | Money Heist | Netflix India",
        heading: "Netflix",
        views: "10M Views • 3 Months Ago"
    },

    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT04Edvunqx2oK0qrLREfMb7yFfgBzld1X_2Q&s",
        head: "Top 5 YouTuber Vloggers Exposed @soravjoshivlogs Reality of YouTubers",
        heading: "GyanGuruj",
        views: "10M Views • 3 Months Ago"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT04Edvunqx2oK0qrLREfMb7yFfgBzld1X_2Q&s",
        head: "Top 5 YouTuber Vloggers Exposed @soravjoshivlogs Reality of YouTubers",
        heading: "GyanGuruj",
        views: "10M Views • 3 Months Ago"
    },
    {
        img:"https://miro.medium.com/v2/resize:fit:1400/1*60RQyL8WeifCvfJX8dQCcQ.jpeg",
        head: "Top 5 YouTuber Vloggers Exposed @soravjoshivlogs Reality of YouTubers",
        heading: "GyanGuruj",
        views: "10M Views • 3 Months Ago"
    },
    {
        img:"https://img.youtube.com/vi/46cXFUzR9XM/maxresdefault.jpg",
        head: "Bella Ciao Full Song | La Casa De Papel | Money Heist | Netflix India",
        heading: "Netflix",
        views: "10M Views • 3 Months Ago"
    },

    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT04Edvunqx2oK0qrLREfMb7yFfgBzld1X_2Q&s",
        head: "Top 5 YouTuber Vloggers Exposed @soravjoshivlogs Reality of YouTubers",
        heading: "GyanGuruj",
        views: "10M Views • 3 Months Ago"
    }, {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT04Edvunqx2oK0qrLREfMb7yFfgBzld1X_2Q&s",
        head: "Top 5 YouTuber Vloggers Exposed @soravjoshivlogs Reality of YouTubers",
        heading: "GyanGuruj",
        views: "10M Views • 3 Months Ago"
    },
    {
        img:"https://miro.medium.com/v2/resize:fit:1400/1*60RQyL8WeifCvfJX8dQCcQ.jpeg",
        head: "Top 5 YouTuber Vloggers Exposed @soravjoshivlogs Reality of YouTubers",
        heading: "GyanGuruj",
        views: "10M Views • 3 Months Ago"
    },
    {
        img:"https://img.youtube.com/vi/46cXFUzR9XM/maxresdefault.jpg",
        head: "Bella Ciao Full Song | La Casa De Papel | Money Heist | Netflix India",
        heading: "Netflix",
        views: "10M Views • 3 Months Ago"
    },

    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT04Edvunqx2oK0qrLREfMb7yFfgBzld1X_2Q&s",
        head: "Top 5 YouTuber Vloggers Exposed @soravjoshivlogs Reality of YouTubers",
        heading: "GyanGuruj",
        views: "10M Views • 3 Months Ago"
    },
];








function creatcard(){

    var searchinput=document.getElementById("searchinput").value;

    var searchvideos =adding.filter(e =>e.head.includes(searchinput));
    
    console.log(searchvideos);




    searchvideos.forEach(a => {

        var video = document.createElement('div');
        video.className = "video";
    
       
        var video__thumbnail = document.createElement("div");
        video__thumbnail.className = "video__thumbnail";
    
        var img = document.createElement('img');
      
        video__thumbnail.appendChild(img);
        video.appendChild(video__thumbnail);
    
        
        var video__details = document.createElement("div");
        video__details.className = "video__details";
        
        var title = document.createElement("div");
        title.className = "title";
    
    
        var head = document.createElement("h3");
        title.appendChild(head);
        
        var heading = document.createElement("a");
    
        heading.href = "#"; 
        title.appendChild(heading);
        
        var views = document.createElement("span");
      
        
        video__details.appendChild(title);
        video__details.appendChild(views);
        
        title.appendChild(views)
    
    
    
        video.appendChild(video__details);
    
      
        var videos__container = document.querySelector(".videos__container");
        
            videos__container.appendChild(video);
        
    
    
        img.src =a.img; 
        head.textContent = a.head;
        heading.textContent = a.heading;
        views.textContent = a.views;
    });
    
}

//creatcard();    