import ExpinsItim from "./compooit/ExpinsItim";
import "./Expins.css";
import card from "./compooit/card";
import Expinse from "./Expins";
import Newexpins from "./compooit/Newexpins";
function App() {
  const expenses = [
    { title: "car inurens", amonut: 265.47, date: new Date(2021, 3, 28) },
    { title: "car inurens", amonut: 265.47, date: new Date(2021, 1, 28) },
    { title: "car iens", amonut: 255.47, date: new Date(2022, 0, 28) },
    { title: "car inurens", amonut: 255.47, date: new Date(2021, 1, 28) },
  ];
  return (
    <div>
      <Newexpins />
      <div className="expins">
        <ExpinsItim
          title={expenses[0].title}
          amonut={expenses[0].amonut}
          date={expenses[0].date}
        ></ExpinsItim>
        <ExpinsItim
          title={expenses[1].title}
          amonut={expenses[1].amonut}
          date={expenses[1].date}
        ></ExpinsItim>
        <ExpinsItim
          title={expenses[2].title}
          amonut={expenses[2].amonut}
          date={expenses[2].date}
        ></ExpinsItim>
        <ExpinsItim
          title={expenses[3].title}
          amonut={expenses[3].amonut}
          date={expenses[3].date}
        ></ExpinsItim>
      </div>
    </div>
  );
}

export default App;
