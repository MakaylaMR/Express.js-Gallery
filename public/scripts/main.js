'use strict'
//array of image objects
const jeeps = [
  {
    id: 1,
    title: 'Two Jeeps',
    description: '2003 brown/gold Jeep TJ on the left and a 2008 Jeep JK on the right. Both chilling in a field somewhere in Calgary, AB.',
    width: 1024,
    height: 683,
    pathURL:'assets/images/couple-jeeps-medium.jpg', 
    credit: 'Nathan Strome',
    creditLink: 'https://www.instagram.com/evolution_jk/',
    alt: 'Two Jeeps'
  },
  {
    id: 2,
    title: 'Jeep TJ',
    description: '2003 brown/gold Jeep TJ out and about in it\'s natural habitat, probably somewhere in Waiparous.',
    width: 1024,
    height: 683,
    pathURL:'assets/images/jeep-background-medium.jpg',
    credit: 'Nathan Strome',
    creditLink: 'https://www.instagram.com/evolution_jk/',
    alt: 'Two Jeeps'
  },
  {
    id: 3,
    title: 'Jeep TJ profile',
    description: '2003 brown/gold Jeep TJ in a field being super photogenic, with a tad bit of saturation, my pride and joy.',
    width: 1024,
    height: 683,
    pathURL:'assets/images/jeep-profile-makayla-medium.jpg',
    credit: 'Nathan Strome',
    creditLink: 'https://www.instagram.com/evolution_jk/',
    alt: 'jeeps'
  },
  {
    id: 4,
    title: 'Jeep JK profile',
    description: '2007 black Jeep JK in the wild with a wide stance. Owner of the vehicle is Nathan Strome, also his pride and joy.',
    width: 1024,
    height: 683,
    pathURL:'assets/images/jeep-profile-nathan-medium.jpg',
    credit: 'Nathan Strome',
    creditLink: 'https://www.instagram.com/evolution_jk/',
    alt: 'jeeps'
  },
  {
    id: 5,
    title: 'Jeep JK in BC',
    description: '2007 black Jeep JK going for a stroll in the mountains of British Columbia, carrying a whole lot of camping equipment.',
    width: 1024,
    height: 683,
    pathURL:'assets/images/jeepjk-bctrip-medium.jpg',
    credit: 'Nathan Strome',
    creditLink: 'https://www.instagram.com/evolution_jk/',
    alt:'jeeps in bc'
  },
  {
    id: 6,
    title: 'Two Jeeps airing down',
    description: 'Two jeeps, as you may have already guessed a 2003 brown/gold Jeep TJ and a 2007 black Jeep JK airing down their tires before taking these beauties rock crawling.',
    width: 1024,
    height: 683,
    pathURL:'assets/images/jeepjk-jeeptj-airdown-medium.jpg',
    credit: 'Nathan Strome',
    creditLink: 'https://www.instagram.com/evolution_jk/',
    alt:'jeeps'
  },
  {
    id: 7,
    title: 'Jeep TJ airing down',
    description: '2003 Jeep TJ airing down solo, along with a Tim Hortons coffee on the right flare.',
    width: 1024,
    height: 683,
    pathURL:'assets/images/jeeptj-airdown-medium.jpg',
    credit: 'Nathan Strome',
    creditLink: 'https://www.instagram.com/evolution_jk/',
    alt:'jeeps'
  },
  {
    id: 8,
    title: 'Jeep TJ going down a hill',
    description: '2003 Jeep TJ attempting to go down a very steep hole, the picture does not do the hole justice.',
    width: 1024,
    height: 682,
    pathURL:'assets/images/jeeptj-hole-medium.jpg',
    credit: 'Nathan Strome',
    creditLink: 'https://www.instagram.com/evolution_jk/',
    alt:'jeeps'
  },
  {
    id: 9,
    title: 'Jeep TJ side profile',
    description: '2003 Jeep TJ admiring the sunrise after being freshly washed. Jeep had to wake up at 5:00AM sharp to capture this image.',
    width: 1024,
    height: 683,
    pathURL:'assets/images/jeeptj-sideprofile-medium.jpg',
    credit: 'Nathan Strome',
    creditLink: 'https://www.instagram.com/evolution_jk/',
    alt:'jeeps'
  }
];

const section = document.querySelector('section');
//append is used to nest elements into other elements. Eg: section.appendChild(figure), the figure element will become nested into the section element. HTML terms:
//<section>
//  <figure></figure>
//</section>
jeeps.forEach( function(jeep){
  //Creating a set of figure elements for each object inside array list.
    const figure = document.createElement('figure');
    section.appendChild(figure);
  
  //Creating h2 element to nest into the figures, this is the title.
    const title = document.createElement('h2');
    title.innerHTML = jeep.title;
    figure.appendChild(title);
  
  //Creating img element, this is where the image, the alt, its source, height and width will be located (these become the image attributes)
    const img = document.createElement('img');
    img.src = jeep.pathURL;
    img.alt = jeep.description;
    img.width = jeep.width;
    img.height = jeep.height;
    figure.appendChild(img);

  //Creating a anchor element, this displays the photographers name and attached is a link to his "portfolio". (instagram)
    const creditLink = document.createElement('a');
    creditLink.href = jeep.creditLink;
    creditLink.innerHTML = `Photo by ${jeep.credit}`;
    figure.appendChild(creditLink);

  //Creating a figcaption element this includes the image description. 
    const figCaption = document.createElement('figcaption')
    figCaption.innerHTML = `${jeep.description}`;
    figure.appendChild(figCaption);
  });