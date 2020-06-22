var movies = [
  "train to busan",
  "coraline",
  "moana",
  "artemis fowl",
  "knives out",
  "the invisible man",
  "Human Nature",
  "Being John Malkovich",
  "Eternal Sunshine of the Spotless Mind",
  "High Life",
  "Oh Brother, Where Art Thou?",
  "Fargo",
  "The Big Lebowski",
  "Hail, Caesar!",
  "Barton Fink",
  "The Man Who Wasn’t There",
  "Inside Llewyn Davis",
  "Jawbreaker",
  "Grandma’s Boy",
  "Tristram Shandy: A Cock & Bull Story",
  "Kung Fu Hustle",
  "Hedwig and the Angry Inch",
  "Robin Hood: Men in Tights",
  "Wayne’s World",
  "Shaun of the Dead",
  "Hot Fuzz",
  "World’s End",
  "Scott Pilgrim vs. The World",
  "Gosford Park",
  "In Time",
  "The Matrix",
  "Jupiter Ascending",
  "V for Vendetta",
  "Blade Runner",
  "Children of Men",
  "Pan’s Labyrinth",
  "Dark City",
  "Vanilla Sky",
  "Donnie Darko",
  "The Princess Bride",
  "The King’s Speech",
  "Fight Club",
  "Metropolitan",
  "Kicking & Screaming",
  "Love & Friendship",
  "Better Luck Tomorrow",
  "Out of Sight",
  "A History of Violence",
  "Twelfth Night (Trevor Nunn version)",
  "Brick",
  "Charlie’s Angels (2001)",
  "Charlie’s Angel: Full Throttle",
  "Paprika",
  "Kiki’s Delivery Service",
  "Princess Mononoke",
  "My Neighbor Totoro",
  "The Wind Rises",
  "Ella Enchanted",
  "The Iron Lady",
  "Mary and the Witch Flower",
  "House of 1000 Corpses",
  "The Devil’s Rejects",
  "The Shining",
  "Black Swan",
  "Saw",
  "Call me by Your name",
  "Tank Girl",
  "The Rocky Horror Picture Show",
  "Rent Les Miserables",
  "A Dirty Shame",
  "Pink Flamingos",
  "Hair Spray",
  "Bound",
  "Prey for Rock & Roll",
  "Jennifer’s Body",
  "Sucker Punch",
  "Velvet Goldmine",
  "The Elephant Man",
  "Blue Velvet",
  "Wild at Heart",
  "Twin Peaks: Fire Walk with Me",
  "Lost Highway",
  "Mulholland Drive",
  "Inland Empire",
  "1917",
  "Little Women",
  "Cats",
  "Queen & Slim",
  "Jumanji",
  "Frozen",
  "Doctor Sleep",
  "Jojo Rabbit",
  "Hunt for the Wilder People",
  "Thor Ragnorak",
  "Parasite",
  "Terminator: Dark Fate",
  "Black and Blue",
  "Hustlers",
  "It",
  "The Farwell",
  "Ready or Not",
  "Dora and the Lost City of Gold",
  "Yesterday",
  "Midsommar",
  "Hereditary",
  "Late Night",
  "The Favourite",
  "The Lobster",
  "Spider-Man: Into the Spider-Verse",
  "Windows",
  "Suspiria",
  "The Hate U Give",
  "A Simple Favor",
  "The Wife",
  "Searching",
  "Crazy Rich Asians",
  "Black KkKlansman",
  "Sorry to Bother You",
  "Mission Impossible",
  "Mission Impossible 2",
  "Mission Impossible 3",
  "Mission Impossible: Ghost Protocol",
  "Mission Impossible : Rogue Nation",
  "Mission Impossible: Fallout",
  "Okja",
  "The Beguiled",
  "Marie Antoinette",
  "Lost in Translation",
  "Lucy",
  "Memento",
  "Batman Begins",
  "The Prestige",
  "The Dark Knight",
  "Inception",
  "The Dark Knight Rises",
  "Cosmopolis",
  "Damsel",
  "Young Adult",
  "Snow White and the Huntsman",
  "Dark Places",
  "Gone Girl",
  "Atomic Blonde",
  "Miracle in Cell No.7",
  "The Fault in Our Stars",
  "The Dvil Wear Prada",
  "A Walk to Remember",
  "Stand and Deliver"
];

$(document).ready(function () {
  // Required for nav bar mobile functionality
  $(".sidenav").sidenav();
  //Required for carousel
  $(document).ready(function () {
    $(".carousel").carousel();
  });

  $(".generateMovie").on("click", function (event) {
    // Prevent default function
    event.preventDefault();

    //   Randomize movies
    var movieIndex = Math.floor(Math.random() * movies.length);
    //  URL for ajax call
    var queryURL =
      "https://www.omdbapi.com/?t=" + movies[movieIndex] + "&apikey=trilogy";

    //   Ajax call
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      // ON click the movie will be shown

      //   See object info in console.
      console.log(response);

      //   Create variables.
      var posterImage = response.Poster;
      var title = response.Title;
      var synopsis = response.Plot;
      var rating = response.Rated;
      var runTime = response.Runtime;
      var genre = response.Genre;
      var releaseDate = response.Released;

      // $('.body-container').text(JSON.stringify(response));
      //   Add attribute for poster.
      $(".poster").attr("src", posterImage);
      //   Add class to main div
      $(".main").addClass("body-container");
      //   Display content.
      $(".movieInfo").removeClass("hide");
      //   Show title
      $('.title').removeClass('hide');
      $(".title").text(title);
      //   Show description
      $(".description").text(synopsis);
      //   Show release date
      $(".release").text(releaseDate);
      //   Show TV rating
      $(".rating").text(rating);
      //   Show Run Time
      $(".runTime").text(runTime);
      //   Show Genre
      $(".genre").text(genre);
    });
  });
});
