import React from "react";
// import { getMovies} from "../services/fakeMovieservice";
// import Heart from "./heart";


// export default class DataTable extends Component {
    function DataTable({date, employeeList}) {
        console.log("date", date);
    // state= {
    //     getMvs: getMovies(),
    //     liked: false

    // }

    // handleDelete = (movie) => {
    //     // console.log("MM ", movie);
    //     const newMovies = this.state.getMvs.filter(m => m._id !== movie._id)
    //     this.setState({getMvs: newMovies});
    // };

    // handleLike = (movie) =>{
    //     let movies = [...this.state.getMvs];
        
    //     let index = movies.indexOf(movie);
    //     // movie[index] = {...movies[index]};
    //     movies[index].liked = !movies[index].liked;
    //     console.log("index", index)
    //     this.setState({getMvs: movies});
    // }

        console.log("ssssss",employeeList);
        // const getMvs = getMovies();
        // console.log("gg", getMovies());
        // const {length : moviesCount} = this.state.getMvs;
        // if(moviesCount === 0) return <p>There are No Movies</p>
        // let {employeeList}= this.props
        return(
            <React.Fragment>
        {/* <h2 className="m-2 p-2">There are {moviesCount} movies</h2> */}
        <table className={"table table-striped table-dark"} >
            <thead>
                        <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Edit</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {employeeList.map(( movie ) => 
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    {/*<td>
                                     <Heart 
                                    like={movie.liked}
                                    onClick={() => this.handleLike(movie)}
                                    /> 
                                    </td>
                                    {/* <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm rounded">delete</button></td> 
                                </tr>
                            )}  */}
                        
                    </tbody>
                </table>
        </React.Fragment>
        
        )
}

export default DataTable;
