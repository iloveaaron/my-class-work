// This is a comment


// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'Aaron Chotzen-Jenner: MaxPreps', 		// this is the TITLE place in the class
				'http://www.maxpreps.com/athlete/aaron-chotzen-jenner/HyFemvP5EeaT-Oz0u-e-FA/gendersport/soccer-stats.htm',	// this is the LINK place in the class
				'Aaron Chotzen-Jenner',			// this is the AUTHOR place in the class
				'https://unsplash.it/200',	// this is the IMAGE place in the class
				'This showcases the Aaron Soccer Experience.' // this is the BODY place in the class
				),

			new Post(
				'Aaron Chotzen-Jenner: Vine',
				'https://vine.co/v/heFUw7wgLHt',
				'Aaron Chotzen-Jenner',
				'Screen Shot 2017-05-05 at 11.52.44 AM.png', // this is a local image in the same folder as the js script
				'This introduces the Aaron Vine. '
				),

			new Post (
				'Search Up Aaron',
				'https://google.com',
				'Yvonne',
				'https://www.fresnostate.edu/csm/ees/images/earth.jpg',
				'Find my boy, Aaron. He needs to go to prom with London.'
				)
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});



