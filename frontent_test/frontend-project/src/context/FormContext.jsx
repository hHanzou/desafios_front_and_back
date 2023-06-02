import { createContext, useState } from "react"

export const FormContext = createContext();

export const FormProvider = ({children}) => {
  
  const [formArr, setFormArr] = useState ([]);

  function formSubmit(cadastro) {
    setFormArr((currentState => [... currentState, cadastro]));
  }

  return (
    <FormContext.Provider value={{formSubmit, formArr}}>
      {children}
    </FormContext.Provider>

  )
};
