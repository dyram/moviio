import React, { Component } from "react";
import "../Styles/moviesList.css";
import "../Styles/modal.css";
import { Link } from "react-router-dom";
import Axios from "axios";

import Logo from "../Components/logo";

export class movieslist extends Component {
  state = {
    uid: "",
    isAdmin: "",
    movies: [],
    movieName: "",
    movieDesc: "",
    movieImage: "",
    movieCast: "",
    movieDirector: "",
    movieRating: ""
  };

  componentDidMount() {
    this.getDetails();
  }

  getDetails = async () => {
    let data = JSON.parse(localStorage.getItem("userToken"));
    await this.setState({ uid: data.id });
    this.getMovies(this.state.uid);
    this.getUserType(this.state.uid);
  };

  getUserType = id => {
    let self = this;
    Axios.post("http://localhost:3031/userType", {
      uid: id
    }).then(res => {
      self.setState({ isAdmin: res.data });
    });
  };

  getMovies = id => {
    let self = this;
    Axios.post("http://localhost:3031/moviesLists", {
      uid: id
    }).then(res => {
      self.setState({ movies: res.data });
    });
  };

  signOut = e => {
    localStorage.removeItem("userToken");
  };

  toggleModal = e => {
    let modal = this.modalElement;
    if (modal.style.display === "none") modal.style.display = "block";
    else modal.style.display = "none";
  };

  imageUpload = e => {
    const file = e.target.files[0];
    getBase64(file).then(base64 => {
      this.setState({ movieImage: base64 });
    }, console.log(this.state));
  };

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addMovie = e => {
    let self = this;
    let modal = this.modalCloseElement;
    Axios.post("http://localhost:3031/movieAdd", {
      uid: this.state.uid,
      name: this.state.movieName,
      desc: this.state.movieDesc,
      image: this.state.movieImage,
      cast: this.state.movieCast,
      director: this.state.movieDirector,
      rating: this.state.movieRating
    }).then(res => {
      modal.click();
      alert("Movie added succesfully");
      self.getMovies(this.state.uid);
    });
  };

  render() {
    return (
      <div className="moviesListDiv">
        <div className="moviesListNav">
          <Logo />
          <button
            className="navbarButton"
            style={
              this.state.isAdmin ? { display: "block" } : { display: "none" }
            }
            onClick={e => this.toggleModal(e)}
          >
            add movie
          </button>
          <Link
            to="/login"
            className="navbarButton"
            onClickCapture={e => {
              this.signOut(e);
            }}
          >
            Sign Out
          </Link>
        </div>

        {/* Modal */}
        <div
          ref={modal => (this.modalElement = modal)}
          className="modal"
          id="postModal"
          style={{ display: "none" }}
        >
          <div className="popup">
            <h2>Add New Movie</h2>
            <button
              ref={modalClose => (this.modalCloseElement = modalClose)}
              id="closeButton"
              onClick={e => this.toggleModal(e)}
              className="close"
              style={{ height: "5vh" }}
            >
              &times;
            </button>
            <div className="content">
              <input
                type="text"
                placeholder="Movie Name"
                className="inputs"
                name="movieName"
                value={this.state.movieName}
                onChange={e => this.change(e)}
                style={{ height: "4vh" }}
              ></input>
              <br />
              <br />
              <input
                type="text"
                placeholder="Movie Description"
                className="inputs"
                name="movieDesc"
                value={this.state.movieDesc}
                onChange={e => this.change(e)}
              ></input>
              <br />
              <br />
              <input
                type="text"
                placeholder="Cast"
                className="inputs"
                name="movieCast"
                value={this.state.movieCast}
                onChange={e => this.change(e)}
                style={{ height: "4vh" }}
              ></input>
              <br />
              <br />
              <input
                type="text"
                placeholder="Director"
                className="inputs"
                name="movieDirector"
                value={this.state.movieDirector}
                onChange={e => this.change(e)}
                style={{ height: "4vh" }}
              ></input>
              <br />
              <br />
              <input
                type="text"
                placeholder="Rating (on a scale of 5)"
                className="inputs"
                name="movieRating"
                value={this.state.movieRating}
                onChange={e => this.change(e)}
                style={{ height: "4vh" }}
              ></input>
              <br />
              <br />
              <br />
              <label style={{ color: "black" }}>
                Upload Image ---> &nbsp;&nbsp;
              </label>
              <input
                style={{ width: "60%" }}
                type="file"
                name="movieImage"
                onChange={e => this.imageUpload(e)}
                style={{ color: "black" }}
              ></input>
              <br />
              <br />
              <button onClick={e => this.addMovie(e)} id="modalPostButton">
                Add Movie
              </button>
            </div>
          </div>
        </div>

        <div className="moviesList">
          {this.state.movies.map((movie, index) => (
            <div className="movieContainer" key={index}>
              <img
                src={movie.image}
                alt="noImage"
                style={{ width: "20%", height: "40vh" }}
              ></img>
              <div>
                <h4 className="movieName">{movie.name}</h4>
                <p className="movieDesc">
                  <em>{movie.description}</em>
                </p>
                <p className="movieCast">cast &nbsp;:&nbsp; {movie.cast}</p>
                <p className="movieDirec">
                  directed by &nbsp;:&nbsp; {movie.director}
                </p>
                <br />
                <br />
                <p className="movieRating">
                  <svg width="30" height="30" fill="yellow">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" />
                  </svg>
                  Rating &nbsp;:&nbsp; {movie.rating * 20} %
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const getBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
};

export default movieslist;
