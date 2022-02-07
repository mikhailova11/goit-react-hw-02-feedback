import Feedback from "./Feedback";

const  state = {
  good: 0,
  neutral: 0,
  bad: 0
}




export const App = () => {

  
  return (
    <div>
      <Feedback state={state}/>
    </div>
  );
};
