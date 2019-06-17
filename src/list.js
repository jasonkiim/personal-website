module.exports = {
  experienceList: [
    {
      img: require('./assets/formlabs.png'),
      companyName: 'Formlabs',
      jobTitle: 'Full Stack Developer Intern',
      fromTo: 'Sep 2018 - Sep 2019',
      description_1:
        'Shipped Formlabs Developer API as containerized service - designed Django based REST API, created multi-environment server settings for OAuth 2, rate limit, and memcaching, and configured Kubernetes models for pod connections, Ingress, and load balancing ',
      description_2:
        'Shipped remote print feature for Formlabs API - developed data pipeline between printers, the API, and in-house software services, as well created custom Python based AWS Lambda operator to automate print job uploads and validations to AWS S3',
      description_3:
        'Integrated Kafka into core web infrastructure - streamlined printer requests into multiple Kafka topics, created core consumer group for data consumption to the API, as well centralized Kafka Connect instance from Kafka to production Amazon RDS database'
    },
    {
      img: require('./assets/ecobee.png'),
      companyName: 'ecobee',
      jobTitle: 'Full Stack Developer Intern',
      fromTo: 'Jan 2018 - April 2018',
      description_1:
        'Developed advanced filter feature for ElasticSearch based search engine, enabling pre-filtered data streams from Kafka clusters to in-house microservices via Kafka Stream',
      description_2:
        'Integrated OAuth 2 flow between high-traffic microservices and created secured data pipelines to AWS S3 via signed URLs in Java',
      description_3:
        'Implemented metrics monitoring system by constructing JMX, Prometheus, and Grafana instances as part of Docker containers'
    },
    {
      img: require('./assets/chefhero.png'),
      companyName: 'ChefHero',
      jobTitle: 'Full Stack Developer Intern',
      fromTo: 'May 2017 - Aug 2017',
      description_1:
        'Designed and developed an interactive sign-up page for new customers in React.js & Redux from scratch, reducing customer onboarding process by 67%',
      description_2:
        'Created and modified necessary API endpoints to provide a 26% faster front-end to back-end communication',
      description_3:
        'Refactored the company website UI using React.js by minifying and componentizing a Jinja based legacy codebase',
      description_4:
        'Integrated analytics architecture using Google Analytics, and a live Intercom chatbot to provide interactive user feedback'
    },
    {
      img: require('./assets/roguewave.png'),
      companyName: 'Rogue Wave Software',
      jobTitle: 'Automation QA Developer Intern',
      fromTo: 'Sep 2016 - Dec 2016',
      description_1:
        'Optimized error triggering points in automation tests written in C++ and Python to decrease its execution time by 23%',
      description_2:
        'Developed 7 new virtual test machines of Mac OSX, Solaris, and AIX, increasing test coverage and product stability ',
      description_3:
        'Architected test failure per-build comparison tool using TestLink API, currently in use by 20+ employees',
      description_4: ''
    }
  ],
  projectList: [
    {
      img: require('./assets/emotiontunes.png'),
      title: 'EMOTION TUNES',
      dialogTitle: 'EmotionTunes',
      technologies: 'React, Material-UI, HTML5/CSS3, Meteor.js',
      description:
        "A web application that uses Microsoft's Cognitive Service: Emotion API to recognize emotions in images and play a song depending on the emotions detected. Uses Material UI as a main UI framework, as well is built using React for front-end, and Meteor.js for back-end",
      projectLink: 'https://github.com/jasonkiim/emotion-tunes'
    },
    {
      img: require('./assets/ootc.png'),
      title: '#OOTC',
      dialogTitle: '#OOTC',
      technologies: 'React, Bootstrap, HTML5/CSS3, Meteor.js',
      description:
        'A web platform that shows celebrity outfits, with customizable header where brand logos are added as search filters. This project was built using React.js and Redux, with Meteor.js back-end support'
    },

    {
      img: require('./assets/FinalProject1A/1.png'),
      title: 'COLOR SORTER',
      dialogTitle: 'Color Sorter',
      technologies: 'Lego NXT, Robot C',
      description:
        'Final first-year group project at the University of Waterloo. The objective of the robot is to detect different coloured balls and sort them by dispensing them into the corresponding bins. Our group used motion sensors, colour sensor, as well as two servo motors to create this robot. The sensor feedback created from the sensors were integrated to map the rotation of the robot as well to adjust the locations of the bins correspondingly, programmed in Robot C.'
    },

    {
      img: require('./assets/Fuelcell/Preview.png'),
      title: 'FUEL CELL PROJECT',
      dialogTitle: 'Fuel Cell Project',
      technologies: 'TI LaunchPad, Code Blocks',
      description:
        'A car powered by hydrogen fuel-cells. This was a school project that combines three of the core courses, Digital Computation, Chemistry, and Mechatronics Engineering, collaborated with two other cohorts. This car was programmed on a TI LaunchPad, and has a line-following algorithm that allows the car to follow the black line in a maze. This project involved lots of trial and error because the maze had various types of barriers the car needed to avoid using integrated sensors.',
      projectLink: 'https://github.com/jasonkiim/Autonomous-Fuel-Cell'
    },
    {
      img: require('./assets/MindBound/Preview.png'),
      title: 'MEMORY BOUND',
      dialogTitle: 'Memory Bound (Calendar Application)',
      technologies: 'Java, Object-Oriented Programming, Eclipse IDE',
      description:
        'This project is a user-friendly calender application built using Object-Oriented Programming techniques in Java that allows personal log-in credentials via data encryption with a real-time built-in reminder function accomplished by multithreading. Each users are able to create events by a to-do-list addon on the calendar. This was approached via LinkedLists and Inheritance. The calendar itself was designed using hitboxes of 2D arrays, and the calendar data, such as Years, Months, were approached via Inheritance, LinkedLists, and manipulation of text files.'
    },
    {
      img: require('./assets/PushBox/Preview.png'),
      title: 'PUSHBOX',
      dialogTitle: 'Remake of famous classic game, PushBox',
      technologies: 'Java, Eclipse IDE',
      description:
        'The PushBox was my final project for Grade 11 Computer Science. This project was completed in two months, and it is essentially a remake of a famous online classic game, "PushBox". The project was redesigned, and completed on Java, using Ready to Program IDE. This project is graphics based, and all the maps were made with 2D arrays with hitboxes. The maps were dividing into square tiles, and each tiles represented different elements of the map.',
      projectLink: 'https://github.com/jasonkiim/PushBox'
    },
    {
      img: require('./assets/Bonkers/Preview.png'),
      title: 'BONKERS',
      dialogTitle: 'Price is Right, Bonkers',
      technologies: 'Java, Eclipse IDE',
      description:
        'This was my very second Java game that I created for my Grade 11 Computer Science course (ICS3U). This game is a remake of a famous game from a TV show "The Price is Right", redesigned by myself. The game involves user input and interaction, where the player is shown an incorrect price and is given a chance to correctly deicde whether each digit in the correct price is higher or lower than the one shown. If they get all four digits right, they win a prize.'
    },
    {
      img: require('./assets/Dice/Preview.png'),
      title: 'DICE GAME',
      dialogTitle: 'Price is Right, Dice Game',
      technologies: 'Java, Eclipse IDE',
      description:
        'This game is a remake of a famous game from a tv show "The Price is Right", redesigned by myself. The player is shown the first digit in the price of a car on a game board with eight screens, and is presented with four oversized dice on a gaming table. The contestant rolls the first die; if the number rolled matches the second digit, the digit is revealed and shown on both screens. Otherwise, the contestant must decide whether the digit is higher or lower than the roll and his or her selection is marked with an outline of lights. If the player gets all guesses right for the digits, they win a prize.'
    }
  ]
};
