var bio = {
    "name" : "Sean O'Dell",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "678-662-8888",
        "email" : "amsean.odell@gmail.com",
        "github" : "https://github.com/FurtiveNeptune",
        "location" : "Atlanta, GA"
    }
    "welcomeMessage": "Welcome to my Resume!",
    "skills": [
      "Web Development", "Programming", "JS", "Java", "Cisco Networking"
    ],
    "bioPic" : "images/neela.jpg",

    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
        $("#topContacts").append(formattedMobile);
}
}


var education = {
    "schools": [
    {
        "name": "Alexander High School",
        "city": "Atlanta, GA, US",
        "degree": "High School Diploma",
        "dates": "string",
        "url": "string",
        "display": "function"
    }
  ],
  "onlinecourses": [
    {
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "dates": 2016,
        "url": "https://www.udacity.com/"
    }
  ]
}

var work = {
    "jobs": [
    {
        "employer": "Graham Spray Equipment",
        "title": "Installation Technician",
        "dates": "February 2015-Present",
        "description": "Install and repair spray trucks and units."
    },
    {
        "employer": "Todd Vanvekoven",
        "title": "Audio/Visual Technician",
        "dates": "2013-2014"
        "description": "Install speakers, power boxes, touch screens, and projecters in classrooms for schools across the Atlanta area."

    }
  ]
}

var projects = {
    "projects": [
    {
        "title": "About Me Project",
        "dates": 2016,
        "description": "A simple introduction to HTML"
        "images": [
            "URLHERE",
            "URLHERE"
      ]
    },
    {
        "title": "Mockup to Article",
        "dates": 2016,
        "description": "Change the existing website to be more responsive and have a clean layout."
        "images": [
            "URLHERE",
            "URLHERE"
        ]
    },
    {
        "title": "Portfolio Website",
        "dates": 2016,
        "description": "Build a little demo site based off of a mock up provided.",
        "images":
            "URLHERE",
            "URLHERE"
    }
  ]
}