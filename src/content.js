import Faker from 'faker';

function Semantic(){
    return(
    <>
     <div className="ui cards" >
      <div className="card">
        <div className="content">
        <img style={{width:"70px"}} alt="" className="right floated mini ui image" src={Faker.image.image()} />
        <div className="header">
         Ellen
        </div>
        <div className="meta">
          Friends of Veronika
        </div>
        <div className="description">
          Elliot requested permission to view your contact details
          <br></br><br></br>
        </div></div></div></div>
      </>
     
   
  )
  }

  export default Semantic;