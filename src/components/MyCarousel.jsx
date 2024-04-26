import { Component } from "react";
import { Container, Spinner } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Alert } from "react-bootstrap";

class MyCarousel extends Component {
  state = {
    movies: [],
    isLoading: false,
    isError: false,
  };
  fetchMovies = () => {
    this.setState({ isLoading: true });
    const movieUrl = `http://www.omdbapi.com/?apikey=86cefc24&s=${this.props.search}`;
    fetch(movieUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .then((data) => {
        data.Search && this.setState({ movies: data.Search });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isError: true });
      })
      .finally(() => this.setState({ isLoading: false }));
  };
  componentDidMount() {
    this.fetchMovies();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 3000,
          settings: {
            slidesToShow: 6,
          },
        },
      ],
    };
    return (
      <Container fluid className="p-5">
        <h2 className="text-white text-start ms-4">{this.props.title}</h2>
        {this.state.isLoading && <Spinner animation="border" variant="primary" />}
        {this.state.movies.length === 0 && !this.state.isLoading && !this.state.isError && (
          <Alert className="w-50 text-center mx-auto" variant="info">
            There's no available movies for this saga
          </Alert>
        )}
        {this.state.isError && (
          <Alert className="w-50 text-center mx-auto" variant="danger">
            Si è verificato un errore, riprova più tardi.
          </Alert>
        )}
        {!this.state.isLoading && this.state.movies.length > 0 && (
          <div className="slider-container">
            <Slider {...settings}>
              {this.state.movies.map((movie) => {
                return (
                  <div key={movie.imdbID}>
                    <img src={movie.Poster} alt={movie.Title} className="img-fluid carousel-img ps-1" />
                  </div>
                );
              })}
            </Slider>
          </div>
        )}
      </Container>
    );
  }
}

export default MyCarousel;
