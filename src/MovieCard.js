import React from 'react';
import DropDown from './Components/DropDown';

  //.................................................................
  //.PPPPPPPPP...PRRRRRRRRR.....OOOOOOO.....OPPPPPPPP....SSSSSSS.....
  //.PPPPPPPPPP..PRRRRRRRRRR...OOOOOOOOOO...OPPPPPPPPP..PSSSSSSSS....
  //.PPPPPPPPPPP.PRRRRRRRRRR..ROOOOOOOOOOO..OPPPPPPPPPP.PSSSSSSSSS...
  //.PPPP...PPPP.PRRR...RRRRR.ROOOO..OOOOO..OPPP...PPPPPPSSS..SSSS...
  //.PPPP...PPPP.PRRR...RRRRRRROOO....OOOOO.OPPP...PPPPPPSSS.........
  //.PPPPPPPPPPP.PRRRRRRRRRR.RROO......OOOO.OPPPPPPPPPP.PSSSSSS......
  //.PPPPPPPPPP..PRRRRRRRRRR.RROO......OOOO.OPPPPPPPPP...SSSSSSSSS...
  //.PPPPPPPPP...PRRRRRRR....RROO......OOOO.OPPPPPPPP......SSSSSSS...
  //.PPPP........PRRR.RRRR...RROOO....OOOOO.OPPP..............SSSSS..
  //.PPPP........PRRR..RRRR...ROOOO..OOOOO..OPPP.......PPSS....SSSS..
  //.PPPP........PRRR..RRRRR..ROOOOOOOOOOO..OPPP.......PPSSSSSSSSSS..
  //.PPPP........PRRR...RRRRR..OOOOOOOOOO...OPPP........PSSSSSSSSS...
  //.PPPP........PRRR....RRRR....OOOOOO.....OPPP.........SSSSSSSS....
  //.................................................................



class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      trailerHrefData: 'test',
      trailerKey: '',
    };
    this.playTrailer = this.playTrailer.bind(this);
  }

  

  //...............................................................................
  //.TTTTTTTTTTTRRRRRRRRRR......AAAAA....AIIII.LLLL.......EEEEEEEEEEE.RRRRRRRRRR...
  //.TTTTTTTTTTTRRRRRRRRRRR.....AAAAA....AIIII.LLLL.......EEEEEEEEEEE.RRRRRRRRRRR..
  //.TTTTTTTTTTTRRRRRRRRRRR....AAAAAA....AIIII.LLLL.......EEEEEEEEEEE.RRRRRRRRRRR..
  //....TTTT....RRRR...RRRRR...AAAAAAA...AIIII.LLLL.......EEEE........RRRR...RRRR..
  //....TTTT....RRRR...RRRRR..AAAAAAAA...AIIII.LLLL.......EEEE........RRRR...RRRR..
  //....TTTT....RRRRRRRRRRR...AAAAAAAA...AIIII.LLLL.......EEEEEEEEEE..RRRRRRRRRRR..
  //....TTTT....RRRRRRRRRRR...AAAA.AAAA..AIIII.LLLL.......EEEEEEEEEE..RRRRRRRRRRR..
  //....TTTT....RRRRRRRR.....AAAAAAAAAA..AIIII.LLLL.......EEEEEEEEEE..RRRRRRRR.....
  //....TTTT....RRRR.RRRR....AAAAAAAAAAA.AIIII.LLLL.......EEEE........RRRR.RRRR....
  //....TTTT....RRRR..RRRR...AAAAAAAAAAA.AIIII.LLLL.......EEEE........RRRR..RRRR...
  //....TTTT....RRRR..RRRRR.RAAA....AAAA.AIIII.LLLLLLLLLL.EEEEEEEEEEE.RRRR..RRRRR..
  //....TTTT....RRRR...RRRRRRAAA.....AAAAAIIII.LLLLLLLLLL.EEEEEEEEEEE.RRRR...RRRR..
  //....TTTT....RRRR....RRRRRAAA.....AAAAAIIII.LLLLLLLLLL.EEEEEEEEEEE.RRRR....RRR..
  //...............................................................................
  

  playTrailer(ID) {

    //TAKING THE SELECTED MOVIE ID, AND APPENDING IT TO A FETCH URL
    let trailerURL = 'https://api.themoviedb.org/3/movie/' + ID + '/videos?api_key=ea6bf3817358f610e30d1fa5e361922e&language=en-US';
    

    fetch(trailerURL)
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {

        // ASSIGNING THE FETCHED DATA TO THE GLOBAL STATE
        this.setState({trailerHrefData: data.results[0].key});
        console.log(this.state.trailerHrefData);

        // PASSING THE VIDEO KEY INTO THE REDIRECTING URL
        window.location = 'about/' + data.results[0].key;
                      
    })
    .catch(error => {
      console.log(error);
    });

    
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


  bookTickets(ID) {
    const title = ID;
    const list = title.toLowerCase().split(' ');
    let count = 0;
    let extension = '';

    // ADDING EACH 'SPLIT' ELEMENT TO THE 'EXTENSION' VARIABLE
    while (count !== list.length) {
      if (list[count] !== "the"){
        extension = extension + list[count] + '+';
      }
      count++;
    }

    // THE PARSED TITLES ARE FORMATTED INTO A SEARCH QUERY ON CINEWORLD.IE
    window.open('http://www.cineworld.ie/search?query=' + extension);

    
    
  }



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

  render(){
    let url = "http://image.tmdb.org/t/p/w185";
    return (
      // THE SUB DIVS
      <div className="col-md-12 bottle modal-div">
        <div className="col-md-3">
          <img  alt={this.props.title} src={url + this.props.poster}></img>
          
        </div>
        <div className="col-md-9">
          <br/>
          <p className="movieTitle" align="justify"><b>{this.props.title}</b></p>
          <br/>
          <p align="justify">{this.props.overview}</p>
          <p className="text-grey"><i>Released {this.props.release_date}</i></p>
          <p className="text-grey">Scored <b>{this.props.vote_average}</b> based on {this.props.vote_count} votes</p>
        <br/>
          <button className="bottle-buttons col-md-5 modal-button" onClick={() => this.playTrailer(this.props.id)}>Play Trailer</button>
          <button className="bottle-buttons col-md-5" onClick={() => this.bookTickets(this.props.title)}>Find Tickets</button>
        </div>
        <br/><br/>
      </div>
    );



  }

}



export default MovieCard;