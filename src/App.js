import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import NavBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";

const App = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transAction, setTransAction] = useState([]);

  const addTransAction = (formValues) => {
    if (!formValues.amount || !formValues.desc) {
      return;
    }

    setTransAction([...transAction, { ...formValues, id: Date.now() }]);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transAction.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transAction]);

  return (
    <Flex
      flexDirection={{ base: "column", sm: "row", lg: "row", xl: "row" }}
      alignItems={{ base: "center", sm: "flex-start", lg: "flex-start", xl: "flex-start" }}
    >
      <NavBar />
      <Main transAction={transAction} />
      <RightSideBar
        expense={expense}
        income={income}
        addTransAction={addTransAction}
      />
    </Flex>
  );
};

export default App;
