import React from 'react'
import { TextField, Button } from "@material-ui/core";

class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        no_of_polls: 0
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({no_of_polls: event.target.value});
    }
  
    handleSubmit(event) {
     // alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="bg-img">
        <form onSubmit={this.handleSubmit} className="container">
          <label>
            Enter Students' Details:
            <input type="file" />
          </label>
          <TextField
                        id="outlined-basic"
                        label="NumberOfPolls"
                        variant="outlined"
                        type="noOfPolls"
                        onChange={this.handleChange}
           />

            {
            const iterate= [...Array(this.state.no_of_polls).keys()] 
            iterate.map((poll) => {
                return (
                    <div className="container">
                     <label>
                         Question {i+1}
                         <TextField id="outlined-basic" label="Question" variant="outlined" type="question" />
                     </label>
                     <label>
                         Options 
                         <TextField id="outlined-basic" label="Option" variant="outlined" type="Option" />
                         <TextField id="outlined-basic" label="Option" variant="outlined" type="Option" />
                         <TextField id="outlined-basic" label="Option" variant="outlined" type="Option" />
                         <TextField id="outlined-basic" label="Option" variant="outlined" type="Option" />
                     </label>
                     <label>
                         Answer {i+1}
                         <TextField id="outlined-basic" label="Answer" variant="outlined" type="Answer" />
                     </label>
                     </div>
                )
                
            })
           
            }

            <Button variant="contained" color="primary">
                Primary
            </Button>

            </ form>
            </div>

            
              
      );
    }
  }

// function TeacherForm() {


//     return (
//         <div>
            
//             <div class="bg-img">
//                 <form  class="container">
//                     <h1>CREATE ZOOM MEETING</h1>

//                     <TextField
//                         id="outlined-basic"
//                         label="Submit Students' Details"
//                         variant="outlined"
//                         type="email"
//                      />
                    
//                     <TextField
//                         id="outlined-basic"
//                         label="Email"
//                         variant="outlined"
//                         type="email"
//                     />

//                     <button type="submit" class="btn">Login</button>
//                 </form>
//             </div>

            
//         </div>
//     )
// }

// export default TeacherForm
