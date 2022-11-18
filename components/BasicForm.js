import useInput from "./hook/use-Input";
const BasicForm = () => {


  const {
    value: enterdFirstName,
    isValid: enterdFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandlerHandler: firstNameBlurHandler,
    reset: resetFirstNameInput

  } = useInput(value => value.trim() !== '')


  const {
    value: enterdLastName,
    isValid: enterdLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandlerHandler: lastNameBlurHandler,
    reset: resetLastNameInput

  } = useInput(value => value.trim() !== '')


  const {
    value: enteredEmail,
    isValid: enterdEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandlerHandler: emailBlurHandler,
    reset: resetemailInput

  } = useInput(value => value.includes('@'))

  let formIsValid = false

  if (enterdFirstNameIsValid && enterdEmailIsValid && enterdLastNameIsValid) {
    formIsValid = true
  }

  const formSumbmissionHandler = event => {
    event.preventDefault()
    if (!enterdFirstNameIsValid) {
      return
    }
    resetFirstNameInput()
    resetemailInput()
    resetLastNameInput()
  }

  const firstNameInputClasses = firstNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const lastNameInputClasses = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSumbmissionHandler}>
      <div className='control-group' >

        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            value={enterdFirstName}
          />

          {firstNameInputHasError && (<p className="error-text">Please enter first name </p>)}
        </div>

        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            value={enterdLastName}
          />
          {lastNameInputHasError && (<p className="error-text">Please enter last name </p>)}

        </div>

      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='email'
          id='name'
          onBlur={emailBlurHandler}
          onChange={emailChangedHandler}
          value={enteredEmail}
        />

        {emailInputHasError && (<p className="error-text">Please enter correct Email</p>)}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}
export default BasicForm;