import Feedback from "./Feedback";

export const App = () => {
  const  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  return (
    <div>
      <Feedback state={state}/>
    </div>
  );
};
