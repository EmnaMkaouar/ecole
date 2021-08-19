
const Edit = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
    <td> 
        <button className="btn-floating waves-effect waves-light  light-blue lighten-2" type="submit">  <i class="material-icons">check</i></button>
        <button className="btn-floating waves-effect waves-light  deep-orange" type="button" onClick={handleCancelClick}>
        <i class="material-icons">cancel</i>
        </button>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an annee..."
          name="annee"
          value={editFormData.annee}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a  nb..."
          name="nb"
          value={editFormData.nb}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an name..."
          name="nom"
          value={editFormData.nom}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="Niveau"
          value={editFormData.Niveau}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
    </tr>
  );
};

export default Edit;