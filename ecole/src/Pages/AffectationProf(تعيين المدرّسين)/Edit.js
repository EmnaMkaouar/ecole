const Edit = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
  }) => {
    return (
      <div style={{backgroundColor:"white" ,borderRadius: "10px",border:'5px solid',borderColor:"pink" , padding:"30px" , marginTop:"20px" ,maxWidth:'500px' ,marginLeft:"auto", marginRight:"auto"}} className="center  z-depth-5 ">
      <div>
      <div>
          <input
            type="text"
            required="required"
            placeholder="Enter a name..."
            name="idProf"
            value={editFormData.idProf}
            onChange={handleEditFormChange}
          ></input>
        </div>
        <div>
          <input
            type="text"
            required="required"
            placeholder="Enter an name..."
            name="idClasse"
            value={editFormData.idClasse}
            onChange={handleEditFormChange}
          ></input>
        </div>
        <div>
          <input
            type="text"
            required="required"
            placeholder="Enter a  idMat..."
            name="idMat"
            value={editFormData.idMat}
            onChange={handleEditFormChange}
          ></input>
        </div>
     
        <div>
          <input
            type="text"
            required="required"
            placeholder="Enter an annee..."
            name="annee"
            value={editFormData.annee}
            onChange={handleEditFormChange}
          ></input>
        </div>
        <div> 
          <button className="btn-floating waves-effect waves-light  light-blue lighten-2" type="submit">  <i class="material-icons">check</i></button>
          <button className="btn-floating waves-effect waves-light  deep-orange" type="button" onClick={handleCancelClick}>
          <i class="material-icons">cancel</i>
          </button>
        </div>
       
        
        
      
        
      </div>
      </div>
    );
  };
  
  export default Edit;