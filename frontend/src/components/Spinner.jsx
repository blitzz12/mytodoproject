import ClipLoader from 'react-spinners/ClipLoader';
import { CSSProperties } from 'react';


const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  borderColor: "black"
};
function Spinner() {
  return (
    <ClipLoader 
      color='#fff'
      loading={true}
      cssOverride={override}
      size={150}
    />
  )
}
export default Spinner