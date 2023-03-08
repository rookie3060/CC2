import axios from "axios";
import { Component } from "react";
import Basketball from "./Basketball";
import './basketball.css';
import { Link } from "react-router-dom";
class NBA extends Component{
    constructor(props){
        super(props)

        this.state ={
            data:[]
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/getvalues')
          .then(response => {
            this.setState({ data: response.data})
        })
    }
    handleDelete(id) {
        axios.delete("http://localhost:8080/del/" + id)
        var data=this.state.data.filter(n=>n.id!==id);
        this.setState({data});  
      }
    render(){
        console.log(this.state.data);
      return (
          <div className="home">
            <div classname="aabb">
                <center>
            <h1>NBA GOAT Debate</h1>
            
                 </center>
                 <br></br>
                         <div className = "ad"><center>
                                <table className = "table table-bordered">
                                        <tr>
                                            <th className='text-center'>Id</th>
                                            <th className='text-center'>Playername</th>
                                            <th className='text-center'>Inthedebate</th>
                                            <th className='text-center'>Rating</th>
                                            
                                        </tr>
                                
                                        {
                                            this.state.data.map((e) => 
                                            
                                                <tr>
                                                <td>{e.id}</td>
                                                     <td >{e.playername} </td>
                                                     <td> {e.inthedebate} </td>   
                                                     <td> {e.rating}</td>
                                                     <button onClick={()=> this.handleDelete(e.id)}>Delete</button>
                                                     <Link to= "/edit"><button>Edit</button></Link>
                                                     
                                                </tr>
                                            
                                            )
                                        }

                                </table></center>
                                <center>

                                        <Link to ="/" ><button >ADD</button></Link>
                                </center>
        
                         </div>
            </div>
            </div>

      )
    }       
}
export default NBA;
