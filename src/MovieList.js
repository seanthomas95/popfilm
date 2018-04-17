import React from 'react';
import DropDown from './Components/DropDown';
import MovieCard from '../src/MovieCard';
import {BrowserRouter, Route, Link} from 'react-router-dom';


//.......................................................................
//...SSSSSSS....TTTTTTTTTTT..AAAA....AATTTTTTTTTTTEEEEEEEEE...ESSSSSS....
//..SSSSSSSSS...TTTTTTTTTTT.AAAAAA...AATTTTTTTTTTTEEEEEEEEE.EEESSSSSSS...
//..SSSSSSSSSS..TTTTTTTTTTT.AAAAAA...AATTTTTTTTTTTEEEEEEEEE.EEESSSSSSS...
//.SSSSS..SSSS.....TTTT.....AAAAAAA......TTTT...TTEE........EEES..SSSSS..
//.SSSSS...........TTTT....AAAAAAAA......TTTT...TTEE........EEES.........
//..SSSSSSS........TTTT....AAAAAAAA......TTTT...TTEEEEEEEE..EEESSSSS.....
//...SSSSSSSSS.....TTTT....AAAA.AAAA.....TTTT...TTEEEEEEEE...EESSSSSSS...
//.....SSSSSSS.....TTTT...TAAAAAAAAA.....TTTT...TTEEEEEEEE.....SSSSSSSS..
//........SSSSS....TTTT...TAAAAAAAAAA....TTTT...TTEE...............SSSS..
//.SSSS....SSSS....TTTT..TTAAAAAAAAAA....TTTT...TTEE.......EEEES...SSSS..
//.SSSSSSSSSSSS....TTTT..TTAA....AAAA....TTTT...TTEEEEEEEEE.EEESSSSSSSS..
//..SSSSSSSSSS.....TTTT..TTAA....AAAAA...TTTT...TTEEEEEEEEE.EEESSSSSSS...
//...SSSSSSSS......TTTT.TTTAA.....AAAA...TTTT...TTEEEEEEEEE...ESSSSSS....
//.......................................................................


class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      scoreFilter: 0,
      upcomingData: [],
      nowPlayingData: [],
      popularData: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleScoreFilter = this.handleScoreFilter.bind(this);
  }



  fetchData(value) {

    // API KEY:                 ea6bf3817358f610e30d1fa5e361922e
    // 'NOW PLAYING':           'https://api.themoviedb.org/3/movie/now_playing?&api_key=ea6bf3817358f610e30d1fa5e361922e'
    // 'UPCOMING':              'https://api.themoviedb.org/3/movie/upcoming?api_key=ea6bf3817358f610e30d1fa5e361922e&language=en&sort_by=vote_average.desc&include_adult=false-US&page=1'
    // 'MOVIE TRAILERS':        'https://api.themoviedb.org/3/movie/{MOVIEID}/videos?api_key=ea6bf3817358f610e30d1fa5e361922e&language=en-US'

    // THE THREE FETCH URLs
    let upcomingURL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=ea6bf3817358f610e30d1fa5e361922e&language=en&sort_by=vote_average.desc&include_adult=false-US&page=1';
    let nowPlayingURL = 'https://api.themoviedb.org/3/movie/now_playing?&api_key=ea6bf3817358f610e30d1fa5e361922e';
    let popularURL = 'https://api.themoviedb.org/3/movie/popular?api_key=ea6bf3817358f610e30d1fa5e361922e&language=en-US';

    // THE ARRAYS WHICH WILL CONTAIN THE FETCHED DATA
    const upcomingArray = [];
    const nowPlayingArray = [];
    const popularArray = [];


    //...........................................................................
    //.FFFFFFFFFF.EEEEEEEEEEE.ETTTTTTTTTT..CCCCCCC....HHHH...HHHH..........1111..
    //.FFFFFFFFFF.EEEEEEEEEEE.ETTTTTTTTTT.CCCCCCCCC...HHHH...HHHH.........11111..
    //.FFFFFFFFFF.EEEEEEEEEEE.ETTTTTTTTTTCCCCCCCCCCC..HHHH...HHHH........111111..
    //.FFFF.......EEEE...........TTTT....CCCC...CCCCC.HHHH...HHHH.......1111111..
    //.FFFF.......EEEE...........TTTT...TCCC.....CCC..HHHH...HHHH.......1111111..
    //.FFFFFFFFF..EEEEEEEEEE.....TTTT...TCCC..........HHHHHHHHHHH.......11.1111..
    //.FFFFFFFFF..EEEEEEEEEE.....TTTT...TCCC..........HHHHHHHHHHH..........1111..
    //.FFFFFFFFF..EEEEEEEEEE.....TTTT...TCCC..........HHHHHHHHHHH..........1111..
    //.FFFF.......EEEE...........TTTT...TCCC.....CCC..HHHH...HHHH..........1111..
    //.FFFF.......EEEE...........TTTT....CCCC...CCCCC.HHHH...HHHH..........1111..
    //.FFFF.......EEEEEEEEEEE....TTTT....CCCCCCCCCCC..HHHH...HHHH..........1111..
    //.FFFF.......EEEEEEEEEEE....TTTT.....CCCCCCCCCC..HHHH...HHHH..........1111..
    //.FFFF.......EEEEEEEEEEE....TTTT......CCCCCCC....HHHH...HHHH..........1111..
    //...........................................................................

    // (FETCH #1)  FETCHING 'UPCOMING' DATA
      fetch(upcomingURL)
      .then(response => {
        if(response.ok) return response.json();
        throw new Error('Request failed.');
      })
      .then(data => {
          console.log(data);
          for (let loop = 0; loop < 20; loop++)
          {
            const upcomingImport = { 
                                    id: data.results[loop].id,
                                    backdrop: data.results[loop].backdrop_path,
                                    title: data.results[loop].original_title,
                                    poster: data.results[loop].poster_path,
                                    overview: data.results[loop].overview,
                                    release_date: data.results[loop].release_date,
                                    vote_average: data.results[loop].vote_average,
                                    vote_count: data.results[loop].vote_count
                                  };
              // PUSHING EACH LOOP INTO THE ARRAY
              upcomingArray.push(upcomingImport);
          }
          
          // ASSIGNING THE FETCHED ARRAY TO THE GLOBAL STATE
          this.setState({upcomingData: upcomingArray});
          console.log(this.state.upcomingData);
      })
      .catch(error => {
        console.log(error);
      });

      //.............................................................................
      //.FFFFFFFFFF.EEEEEEEEEEE.ETTTTTTTTTT..CCCCCCC....HHHH...HHHH........222222....
      //.FFFFFFFFFF.EEEEEEEEEEE.ETTTTTTTTTT.CCCCCCCCC...HHHH...HHHH.......22222222...
      //.FFFFFFFFFF.EEEEEEEEEEE.ETTTTTTTTTTCCCCCCCCCCC..HHHH...HHHH...... 222..2222..
      //.FFFF.......EEEE...........TTTT....CCCC...CCCCC.HHHH...HHHH...... 222..2222..
      //.FFFF.......EEEE...........TTTT...TCCC.....CCC..HHHH...HHHH............2222..
      //.FFFFFFFFF..EEEEEEEEEE.....TTTT...TCCC..........HHHHHHHHHHH...........22222..
      //.FFFFFFFFF..EEEEEEEEEE.....TTTT...TCCC..........HHHHHHHHHHH..........22222...
      //.FFFFFFFFF..EEEEEEEEEE.....TTTT...TCCC..........HHHHHHHHHHH.........22222....
      //.FFFF.......EEEE...........TTTT...TCCC.....CCC..HHHH...HHHH........22222.....
      //.FFFF.......EEEE...........TTTT....CCCC...CCCCC.HHHH...HHHH.......22222......
      //.FFFF.......EEEEEEEEEEE....TTTT....CCCCCCCCCCC..HHHH...HHHH.......2222.......
      //.FFFF.......EEEEEEEEEEE....TTTT.....CCCCCCCCCC..HHHH...HHHH...... 222222222..
      //.FFFF.......EEEEEEEEEEE....TTTT......CCCCCCC....HHHH...HHHH...... 222222222..
      //.............................................................................
      
    // (FETCH #2)  FETCHING 'NOW PLAYING' DATA
      fetch(nowPlayingURL)
      .then(response => {
        if(response.ok) return response.json();
        throw new Error('Request failed.');
      })
      .then(data => {
          console.log(data);
          for (let loop = 0; loop < 20; loop++)
          {
            const nowPlayingImport = { 
                                    id: data.results[loop].id,
                                    title: data.results[loop].original_title,
                                    poster: data.results[loop].poster_path,
                                    overview: data.results[loop].overview,
                                    release_date: data.results[loop].release_date,
                                    vote_average: data.results[loop].vote_average,
                                    vote_count: data.results[loop].vote_count
                                  };
              // PUSHING EACH LOOP INTO THE ARRAY
              nowPlayingArray.push(nowPlayingImport);
          }
          // ASSIGNING THE FETCHED ARRAY TO THE GLOBAL STATE
          this.setState({nowPlayingData: nowPlayingArray});

      })
      .catch(error => {
        console.log(error);
      });

      this.setState({movie: upcomingArray});

  


  //.............................................................................
  //.FFFFFFFFFF.EEEEEEEEEEE.ETTTTTTTTTT..CCCCCCC....HHHH...HHHH........333333....
  //.FFFFFFFFFF.EEEEEEEEEEE.ETTTTTTTTTT.CCCCCCCCC...HHHH...HHHH.......33333333...
  //.FFFFFFFFFF.EEEEEEEEEEE.ETTTTTTTTTTCCCCCCCCCCC..HHHH...HHHH.......33333333...
  //.FFFF.......EEEE...........TTTT....CCCC...CCCCC.HHHH...HHHH...... 333.3333...
  //.FFFF.......EEEE...........TTTT...TCCC.....CCC..HHHH...HHHH...........3333...
  //.FFFFFFFFF..EEEEEEEEEE.....TTTT...TCCC..........HHHHHHHHHHH..........3333....
  //.FFFFFFFFF..EEEEEEEEEE.....TTTT...TCCC..........HHHHHHHHHHH.........333333...
  //.FFFFFFFFF..EEEEEEEEEE.....TTTT...TCCC..........HHHHHHHHHHH...........33333..
  //.FFFF.......EEEE...........TTTT...TCCC.....CCC..HHHH...HHHH............3333..
  //.FFFF.......EEEE...........TTTT....CCCC...CCCCC.HHHH...HHHH...... 333..3333..
  //.FFFF.......EEEEEEEEEEE....TTTT....CCCCCCCCCCC..HHHH...HHHH...... 333333333..
  //.FFFF.......EEEEEEEEEEE....TTTT.....CCCCCCCCCC..HHHH...HHHH.......33333333...
  //.FFFF.......EEEEEEEEEEE....TTTT......CCCCCCC....HHHH...HHHH........333333....
  //.............................................................................


      // (FETCH #3)  FETCHING 'POPULAR' DATA
      fetch(popularURL)
      .then(response => {
        if(response.ok) return response.json();
        throw new Error('Request failed.');
      })
      .then(data => {
          console.log(data);
          for (let loop = 0; loop < 20; loop++)
          {
            const popularImport = { 
                                    id: data.results[loop].id,
                                    title: data.results[loop].original_title,
                                    poster: data.results[loop].poster_path,
                                    overview: data.results[loop].overview,
                                    release_date: data.results[loop].release_date,
                                    vote_average: data.results[loop].vote_average,
                                    vote_count: data.results[loop].vote_count
                                  };
              // PUSHING EACH LOOP INTO THE ARRAY
              popularArray.push(popularImport);
          }
          // ASSIGNING THE FETCHED ARRAY TO THE GLOBAL STATE
          this.setState({popularData: popularArray});

      })
      .catch(error => {
        console.log(error);
      });

  }
  


  //........................................................................................................................
  //....CCCCCCC......OOOOOOO....MMMMMM...MMMMMM.PPPPPPPPP.....OOOOOOO.....NNNN...NNNN..EEEEEEEEEEE.NNNN...NNNN..TTTTTTTTTT..
  //...CCCCCCCCC....OOOOOOOOOO..MMMMMM...MMMMMM.PPPPPPPPPP...OOOOOOOOOO...NNNNN..NNNN..EEEEEEEEEEE.NNNNN..NNNN..TTTTTTTTTT..
  //..CCCCCCCCCCC..OOOOOOOOOOOO.MMMMMM...MMMMMM.PPPPPPPPPPP.OOOOOOOOOOOO..NNNNN..NNNN..EEEEEEEEEEE.NNNNN..NNNN..TTTTTTTTTT..
  //..CCCC...CCCCC.OOOOO..OOOOO.MMMMMMM.MMMMMMM.PPPP...PPPP.OOOOO..OOOOO..NNNNNN.NNNN..EEEE........NNNNNN.NNNN.....TTTT.....
  //.CCCC.....CCC.OOOOO....OOOOOMMMMMMM.MMMMMMM.PPPP...PPPPOOOOO....OOOOO.NNNNNN.NNNN..EEEE........NNNNNN.NNNN.....TTTT.....
  //.CCCC.........OOOO......OOOOMMMMMMM.MMMMMMM.PPPPPPPPPPPOOOO......OOOO.NNNNNNNNNNN..EEEEEEEEEE..NNNNNNNNNNN.....TTTT.....
  //.CCCC.........OOOO......OOOOMMMMMMMMMMMMMMM.PPPPPPPPPP.OOOO......OOOO.NNNNNNNNNNN..EEEEEEEEEE..NNNNNNNNNNN.....TTTT.....
  //.CCCC.........OOOO......OOOOMMMMMMMMMMMMMMM.PPPPPPPPP..OOOO......OOOO.NNNNNNNNNNN..EEEEEEEEEE..NNNNNNNNNNN.....TTTT.....
  //.CCCC.....CCC.OOOOO....OOOOOMMMMMMMMMMMMMMM.PPPP.......OOOOO....OOOOO.NNNNNNNNNNN..EEEE........NNNNNNNNNNN.....TTTT.....
  //..CCCC...CCCCC.OOOOO..OOOOO.MMMM.MMMMM.MMMM.PPPP........OOOOO..OOOOO..NNNN.NNNNNN..EEEE........NNNN.NNNNNN.....TTTT.....
  //..CCCCCCCCCCC..OOOOOOOOOOOO.MMMM.MMMMM.MMMM.PPPP........OOOOOOOOOOOO..NNNN..NNNNN..EEEEEEEEEEE.NNNN..NNNNN.....TTTT.....
  //...CCCCCCCCCC...OOOOOOOOOO..MMMM.MMMMM.MMMM.PPPP.........OOOOOOOOOO...NNNN..NNNNN..EEEEEEEEEEE.NNNN..NNNNN.....TTTT.....
  //....CCCCCCC.......OOOOOO....MMMM.MMMMM.MMMM.PPPP...........OOOOOO.....NNNN...NNNN..EEEEEEEEEEE.NNNN...NNNN.....TTTT.....
  //........................................................................................................................


  componentWillMount() {

    this.fetchData();
    
  }

  //.................................................................................
  //....CCCCCCC....HHHH...HHHH.....AAAAA.....NNNN...NNNN.....GGGGGGG....EEEEEEEEEEE..
  //...CCCCCCCCC...HHHH...HHHH.....AAAAA.....NNNNN..NNNN...GGGGGGGGGG...EEEEEEEEEEE..
  //..CCCCCCCCCCC..HHHH...HHHH....AAAAAA.....NNNNN..NNNN..GGGGGGGGGGGG..EEEEEEEEEEE..
  //..CCCC...CCCCC.HHHH...HHHH....AAAAAAA....NNNNNN.NNNN..GGGGG..GGGGG..EEEE.........
  //.CCCC.....CCC..HHHH...HHHH...AAAAAAAA....NNNNNN.NNNN.GGGGG....GGG...EEEE.........
  //.CCCC..........HHHHHHHHHHH...AAAAAAAA....NNNNNNNNNNN.GGGG...........EEEEEEEEEE...
  //.CCCC..........HHHHHHHHHHH...AAAA.AAAA...NNNNNNNNNNN.GGGG..GGGGGGGG.EEEEEEEEEE...
  //.CCCC..........HHHHHHHHHHH..AAAAAAAAAA...NNNNNNNNNNN.GGGG..GGGGGGGG.EEEEEEEEEE...
  //.CCCC.....CCC..HHHH...HHHH..AAAAAAAAAAA..NNNNNNNNNNN.GGGGG.GGGGGGGG.EEEE.........
  //..CCCC...CCCCC.HHHH...HHHH..AAAAAAAAAAA..NNNN.NNNNNN..GGGGG....GGGG.EEEE.........
  //..CCCCCCCCCCC..HHHH...HHHH.AAAA....AAAA..NNNN..NNNNN..GGGGGGGGGGGG..EEEEEEEEEEE..
  //...CCCCCCCCCC..HHHH...HHHH.AAAA.....AAAA.NNNN..NNNNN...GGGGGGGGGG...EEEEEEEEEEE..
  //....CCCCCCC....HHHH...HHHHHAAAA.....AAAA.NNNN...NNNN.....GGGGGGG....EEEEEEEEEEE..
  //.................................................................................

  handleChange(event) {
    const target = event.target;
    const value = target.value;

    // IF 'UPCOMING' SELECTED, USE 'UPCOMINGDATA'
    if (value === "Upcoming"){
      this.setState({movie: this.state.upcomingData});
      this.render("upcoming");
    }
    // IF 'NOW PLAYING' SELECTED, USE 'NOWPLAYINGDATA'
    else if (value === "Now Playing"){
      this.setState({movie: this.state.nowPlayingData});
      this.render("nowplay");
    }
    // IF 'POPULAR' SELECTED, USE 'POPULARDATA'
    else if (value === "Popular"){
      this.setState({movie: this.state.popularData});
      this.render("popular");
    }

  }

//.....................................................................................................................................
//...SSSSSSS......CCCCCCC......OOOOOOO.....RRRRRRRRRR...EEEEEEEEEEE......FFFFFFFFFFFIIII.LLLL.....LLTTTTTTTTTTEEEEEEEEEE.EERRRRRRRRR...
//..SSSSSSSSS....CCCCCCCCC....OOOOOOOOOO...RRRRRRRRRRR..EEEEEEEEEEE......FFFFFFFFFFFIIII.LLLL.....LLTTTTTTTTTTEEEEEEEEEE.EERRRRRRRRRR..
//..SSSSSSSSSS..CCCCCCCCCCC..OOOOOOOOOOOO..RRRRRRRRRRR..EEEEEEEEEEE......FFFFFFFFFFFIIII.LLLL.....LLTTTTTTTTTTEEEEEEEEEE.EERRRRRRRRRR..
//.SSSSS..SSSS..CCCC...CCCCC.OOOOO..OOOOO..RRRR...RRRRR.EEEE.............FFFF......FIIII.LLLL.........TTTT...TEEE........EERR....RRRR..
//.SSSSS.......SCCC.....CCC.COOOO....OOOOO.RRRR...RRRRR.EEEE.............FFFF......FIIII.LLLL.........TTTT...TEEE........EERR....RRRR..
//..SSSSSSS....SCCC.........COOO......OOOO.RRRRRRRRRRR..EEEEEEEEEE.......FFFFFFFFF.FIIII.LLLL.........TTTT...TEEEEEEEEEE.EERRRRRRRRRR..
//...SSSSSSSSS.SCCC.........COOO......OOOO.RRRRRRRRRRR..EEEEEEEEEE.......FFFFFFFFF.FIIII.LLLL.........TTTT...TEEEEEEEEEE.EERRRRRRRRR...
//.....SSSSSSS.SCCC.........COOO......OOOO.RRRRRRRR.....EEEEEEEEEE.......FFFFFFFFF.FIIII.LLLL.........TTTT...TEEEEEEEEEE.EERRRRRRR.....
//........SSSSSSCCC.....CCC.COOOO....OOOOO.RRRR.RRRR....EEEE.............FFFF......FIIII.LLLL.........TTTT...TEEE........EERR.RRRRR....
//.SSSS....SSSS.CCCC...CCCCC.OOOOO..OOOOO..RRRR..RRRR...EEEE.............FFFF......FIIII.LLLL.........TTTT...TEEE........EERR..RRRRR...
//.SSSSSSSSSSSS.CCCCCCCCCCC..OOOOOOOOOOOO..RRRR..RRRRR..EEEEEEEEEEE......FFFF......FIIII.LLLLLLLLLL...TTTT...TEEEEEEEEEEEEERR...RRRRR..
//..SSSSSSSSSS...CCCCCCCCCC...OOOOOOOOOO...RRRR...RRRRR.EEEEEEEEEEE......FFFF......FIIII.LLLLLLLLLL...TTTT...TEEEEEEEEEEEEERR....RRRR..
//...SSSSSSSS.....CCCCCCC.......OOOOOO.....RRRR....RRRR.EEEEEEEEEEE......FFFF......FIIII.LLLLLLLLLL...TTTT...TEEEEEEEEEEEEERR.....RRR..
//.....................................................................................................................................

  handleScoreFilter(event) {
    const target = event.target;
    const value = target.value;

    if (value === "All Ratings"){ 
      this.setState({scoreFilter: 0});

    }
    else if (value === "Highly Rated ( > 7.5 )"){

      this.setState({scoreFilter: 7.5});

    }
  }

  //..............................................................................
  //.RRRRRRRRRR...EEEEEEEEEEE.ENNN...NNNN..NDDDDDDDD....DEEEEEEEEEE.ERRRRRRRRR....
  //.RRRRRRRRRRR..EEEEEEEEEEE.ENNNN..NNNN..NDDDDDDDDD...DEEEEEEEEEE.ERRRRRRRRRR...
  //.RRRRRRRRRRR..EEEEEEEEEEE.ENNNN..NNNN..NDDDDDDDDDD..DEEEEEEEEEE.ERRRRRRRRRR...
  //.RRRR...RRRRR.EEEE........ENNNNN.NNNN..NDDD...DDDD..DEEE........ERRR...RRRRR..
  //.RRRR...RRRRR.EEEE........ENNNNN.NNNN..NDDD....DDDD.DEEE........ERRR...RRRRR..
  //.RRRRRRRRRRR..EEEEEEEEEE..ENNNNNNNNNN..NDDD....DDDD.DEEEEEEEEE..ERRRRRRRRRR...
  //.RRRRRRRRRRR..EEEEEEEEEE..ENNNNNNNNNN..NDDD....DDDD.DEEEEEEEEE..ERRRRRRRRRR...
  //.RRRRRRRR.....EEEEEEEEEE..ENNNNNNNNNN..NDDD....DDDD.DEEEEEEEEE..ERRRRRRR......
  //.RRRR.RRRR....EEEE........ENNNNNNNNNN..NDDD....DDDD.DEEE........ERRR.RRRR.....
  //.RRRR..RRRR...EEEE........ENNN.NNNNNN..NDDD...DDDDD.DEEE........ERRR..RRRR....
  //.RRRR..RRRRR..EEEEEEEEEEE.ENNN..NNNNN..NDDDDDDDDDD..DEEEEEEEEEE.ERRR..RRRRR...
  //.RRRR...RRRRR.EEEEEEEEEEE.ENNN..NNNNN..NDDDDDDDDD...DEEEEEEEEEE.ERRR...RRRRR..
  //.RRRR....RRRR.EEEEEEEEEEE.ENNN...NNNN..NDDDDDDDD....DEEEEEEEEEE.ERRR....RRRR..
  //..............................................................................

  render(type) {

      let filteredUpcoming = this.state.upcomingData.filter( m => m.vote_average >= this.state.scoreFilter );
      let filteredNowPlaying = this.state.nowPlayingData.filter( m => m.vote_average >= this.state.scoreFilter );
      let filteredPopular = this.state.popularData.filter( m => m.vote_average >= this.state.scoreFilter );
      let filteredMovie = this.state.movie.filter( m => m.vote_average >= this.state.scoreFilter );

      let output;

      let formattedTitle = filteredUpcoming.map( (m,i) => {
        return (
          <MovieCard key={i} id={m.id} title={m.title} backdrop={m.backdrop} poster={m.poster} overview={m.overview} release_date={m.release_date} vote_average={m.vote_average} vote_count={m.vote_count}/>
        );
      });

      let formattedTitle2 = filteredNowPlaying.map( (m,i) => {
        return (
          <MovieCard key={i} id={m.id} title={m.title} backdrop={m.backdrop} poster={m.poster} overview={m.overview} release_date={m.release_date} vote_average={m.vote_average} vote_count={m.vote_count}/>
        );
      });

      let formattedTitle3 = filteredPopular.map( (m,i) => {
        return (
          <MovieCard key={i} id={m.id} title={m.title} backdrop={m.backdrop} poster={m.poster} overview={m.overview} release_date={m.release_date} vote_average={m.vote_average} vote_count={m.vote_count}/>
        );
      });

      let formattedMovie = filteredMovie.map( (m,i) => {
        return (
          <MovieCard key={i} id={m.id} title={m.title} backdrop={m.backdrop} poster={m.poster} overview={m.overview} release_date={m.release_date} vote_average={m.vote_average} vote_count={m.vote_count}/>
        );
      });

      // THE DEFAULT OUTPUT IS 'FORMATTEDMOVIE'
      output = formattedMovie;

      // THE SELECTED TYPE FROM THE DROPDOWN DETERMINES THE OUTPUT
      if (type === "upcoming"){
        output = formattedTitle;
      }
      else if (type === "nowplay"){
        output = formattedTitle2;
      }
      else if (type === "popular"){
        output = formattedTitle3;
      }

  //..............................................................
  //.PPPPPPPPP.....AAAA.....AAARRRRRRRR....RSSSSSS...SSSEEEEEEEE..
  //.PPPPPPPPPP...AAAAAA....AAARRRRRRRRR..RRSSSSSSS..SSSEEEEEEEE..
  //.PPPPPPPPPPP..AAAAAA....AAARRRRRRRRR.RRRSSSSSSSS.SSSEEEEEEEE..
  //.PPPP...PPPP..AAAAAAA...AAAR....RRRR.RRRS...SSSS.SSSE.........
  //.PPPP...PPPP.PAAAAAAA...AAAR....RRRR.RRRSS.......SSSE.........
  //.PPPPPPPPPPP.PAAAAAAA...AAARRRRRRRRR..RRSSSSS....SSSEEEEEEEE..
  //.PPPPPPPPPP..PAAA.AAAA..AAARRRRRRRR....RSSSSSSS..SSSEEEEEEEE..
  //.PPPPPPPPP..PPAAAAAAAA..AAARRRRRR........SSSSSSS.SSSEEEEEEEE..
  //.PPPP.......PPAAAAAAAAA.AAAR.RRRRR..........SSSSSSSSE.........
  //.PPPP......PPPAAAAAAAAA.AAAR..RRRRR..RRRS...SSSSSSSSE.........
  //.PPPP......PPPA....AAAA.AAAR...RRRRR.RRRSSSSSSSS.SSSEEEEEEEE..
  //.PPPP......PPPA....AAAAAAAAR....RRRR..RRSSSSSSSS.SSSEEEEEEEE..
  //.PPPP.....PPPPA.....AAAAAAAR.....RRRR..RSSSSSS...SSSEEEEEEEE..
  //..............................................................

      // FIRST PART OF YOUTUBE URL
      const youtube_start = 'https://www.youtube-nocookie.com/embed/';

      // THIRD PART OF YOUTUBE URL
      const youtube_end = '?autoplay=1;rel=0&amp;controls=0&amp;showinfo=0';

      // FORMATTING THE SECOND PART OF YOUTUBE URL
      const windowURL = window.location.href;
      const cutURL = windowURL.split("/");
      const cutID = cutURL[cutURL.length - 1];

      // MERGIN ALL PARTS OF YOUTUBE URL
      const youtube_combine = youtube_start + cutID + youtube_end;

    //.............................................................................
    //.RRRRRRRRRR.....OOOOOOO.....UUUU...UUUU..TTTTTTTTTTTEEEEEEEEEEE.RRRRRRRRRR...
    //.RRRRRRRRRRR...OOOOOOOOOO...UUUU...UUUU..TTTTTTTTTTTEEEEEEEEEEE.RRRRRRRRRRR..
    //.RRRRRRRRRRR..OOOOOOOOOOOO..UUUU...UUUU..TTTTTTTTTTTEEEEEEEEEEE.RRRRRRRRRRR..
    //.RRRR...RRRRR.OOOOO..OOOOO..UUUU...UUUU.....TTTT....EEEE........RRRR...RRRR..
    //.RRRR...RRRRRROOOO....OOOOO.UUUU...UUUU.....TTTT....EEEE........RRRR...RRRR..
    //.RRRRRRRRRRR.ROOO......OOOO.UUUU...UUUU.....TTTT....EEEEEEEEEE..RRRRRRRRRRR..
    //.RRRRRRRRRRR.ROOO......OOOO.UUUU...UUUU.....TTTT....EEEEEEEEEE..RRRRRRRRRRR..
    //.RRRRRRRR....ROOO......OOOO.UUUU...UUUU.....TTTT....EEEEEEEEEE..RRRRRRRR.....
    //.RRRR.RRRR...ROOOO....OOOOO.UUUU...UUUU.....TTTT....EEEE........RRRR.RRRR....
    //.RRRR..RRRR...OOOOO..OOOOO..UUUU...UUUU.....TTTT....EEEE........RRRR..RRRR...
    //.RRRR..RRRRR..OOOOOOOOOOOO..UUUUUUUUUUU.....TTTT....EEEEEEEEEEE.RRRR..RRRRR..
    //.RRRR...RRRRR..OOOOOOOOOO....UUUUUUUUU......TTTT....EEEEEEEEEEE.RRRR...RRRR..
    //.RRRR....RRRR....OOOOOO.......UUUUUUU.......TTTT....EEEEEEEEEEE.RRRR....RRR..
    //.............................................................................

      const Home = () => (
        <div className="container">
        <br/><br/><br/>
          {output}
        </div>

      );

      const About = () => (
        <div className="container">
        <center>
          <a href="/"><button className="bottle-buttons">Go Back</button></a>
          <br/><br/>
          <center><iframe width="560" height="315" src={youtube_combine}  title="Trailer" allow="autoplay; encrypted-media"></iframe></center>
        </center>
        </div>
      );
      

    //............................................................................
    //.RRRRRRRRRR...EEEEEEEEEEE.ETTTTTTTTTTUUUU...UUUU..RRRRRRRRRR...NNNN...NNNN..
    //.RRRRRRRRRRR..EEEEEEEEEEE.ETTTTTTTTTTUUUU...UUUU..RRRRRRRRRRR..NNNNN..NNNN..
    //.RRRRRRRRRRR..EEEEEEEEEEE.ETTTTTTTTTTUUUU...UUUU..RRRRRRRRRRR..NNNNN..NNNN..
    //.RRRR...RRRRR.EEEE...........TTTT....UUUU...UUUU..RRRR...RRRRR.NNNNNN.NNNN..
    //.RRRR...RRRRR.EEEE...........TTTT....UUUU...UUUU..RRRR...RRRRR.NNNNNN.NNNN..
    //.RRRRRRRRRRR..EEEEEEEEEE.....TTTT....UUUU...UUUU..RRRRRRRRRRR..NNNNNNNNNNN..
    //.RRRRRRRRRRR..EEEEEEEEEE.....TTTT....UUUU...UUUU..RRRRRRRRRRR..NNNNNNNNNNN..
    //.RRRRRRRR.....EEEEEEEEEE.....TTTT....UUUU...UUUU..RRRRRRRR.....NNNNNNNNNNN..
    //.RRRR.RRRR....EEEE...........TTTT....UUUU...UUUU..RRRR.RRRR....NNNNNNNNNNN..
    //.RRRR..RRRR...EEEE...........TTTT....UUUU...UUUU..RRRR..RRRR...NNNN.NNNNNN..
    //.RRRR..RRRRR..EEEEEEEEEEE....TTTT....UUUUUUUUUUU..RRRR..RRRRR..NNNN..NNNNN..
    //.RRRR...RRRRR.EEEEEEEEEEE....TTTT.....UUUUUUUUU...RRRR...RRRRR.NNNN..NNNNN..
    //.RRRR....RRRR.EEEEEEEEEEE....TTTT......UUUUUUU....RRRR....RRRR.NNNN...NNNN..
    //............................................................................


      return(

          <BrowserRouter>


            <div className="dropdown-formatter">
                <hr/>
                <div className="container">
                  <DropDown className="dropdown" options={['Upcoming', 'Now Playing', 'Popular']} name="movieSelected" handleChange={this.handleChange} selected={this.state.movieSelected}/>
                  <DropDown className="dropdown" options={['All Ratings', 'Highly Rated ( > 7.5 )']} name="scoreSelected" handleChange={this.handleScoreFilter} label="" selected={this.state.scoreSelected} />
                </div>
                <hr/>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </div>

          </BrowserRouter>

      );

  }
}





export default MovieList;