import './LoginPage.css';
import { useContext, useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { ProductsContext } from '../../contexts/ProductsContext';
import TextError from '../../componets/TextError/TextError';

const Login = () => {
  const { users, createUser, setAcount } = useContext(ProductsContext);
  const [userValue, setUserValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [verEmailValue, setVerEmailValue] = useState('');
  const [userError, setUserError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [goHome, setGoHome] = useState(false);
  const [isUnregistred, setIsUnregistred] = useState(false);

  const goToHome = () => {
    setGoHome(true);
  };
  const userValueChange = e => {
    setUserValue(e.target.value);
  };
  const emailValueChange = e => {
    setEmailValue(e.target.value);
  };
  const verEmailValueChange = e => {
    setVerEmailValue(e.target.value);
  };

  const isMail = email => {
    return email.includes('@') && email.length > 5;
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    if (isUnregistred) {
      verUnregister();
    } else {
      verUser();
    }
  };

  const verUnregister = () => {
    if (unregisterValid(userValue, emailValue, verEmailValue)) {
      createUser({ name: userValue, email: emailValue });
    } else {
      getError(userValue, emailValue, verEmailValue);
    }
  };

  const verUser = () => {
    console.log();

    if (UserExists(userValue, emailValue)) {
      setAcount({
        name: userValue,
        email: emailValue
      });
      goToHome();
    } else {
      getError(userValue, emailValue, null);
    }
  };

  const unregisterValid = (userLogin, mailLogin, verMailLogin) => {
    if (
      userLogin.length < 3 &&
      users.some(userData => {
        return userLogin === userData.name || mailLogin === userData.email;
      }) &&
      !isMail(mailLogin) &&
      mailLogin !== verMailLogin
    ) {
      return false;
    }
    return true;
  };

  const userValid = (userLogin, mailLogin) => {
    return userLogin && mailLogin && userLogin.length > 2 && isMail(mailLogin);
  };

  const UserExists = (userLogin, mailLogin) => {
    if (userValid(userLogin, mailLogin)) {
      return users.some(userData => {
        return userLogin === userData.name && mailLogin === userData.email;
      });
    }
    return false;
  };

  const getError = (userLogin, mailLogin, verMailLogin) => {
    if (!userLogin) {
      setUserError('Rellene esta casilla');
    } else if (userLogin.length < 3) {
      setUserError('Ingrese un nombre de usuario valido');
    } else if (verMailLogin && UserExists(userLogin, mailLogin)) {
      setUserError('Este nombre de usuario ya existe');
    } else if (!verMailLogin && !UserExists(userLogin, mailLogin)) {
      setUserError('Este nombre de usuario o mail no existe');
    } else {
      setUserError('');
    }
    if (!mailLogin) {
      setEmailError('Rellene esta casilla');
    } else if (!isMail(mailLogin)) {
      setEmailError('Ingrese un nombre una direccion de mail valida');
    } else if (
      verMailLogin &&
      isUnregistred &&
      UserExists(userLogin, mailLogin)
    ) {
      setEmailError('Este mail ya existe');
    } else {
      setEmailError('');
    }
    if (!isUnregistred) {
      return;
    }
    if (!verMailLogin) {
      setEmailError('Rellene esta casilla');
    } else if (!isMail(mailLogin)) {
      setEmailError('Ingrese un nombre una direccion de mail valida');
    } else if (mailLogin !== verMailLogin) {
      setEmailError('la direcciones de mail no coinciden');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginFields">
        <div className="field">
          <TextField
            id="user-input"
            label="User"
            autoComplete="off"
            variant="standard"
            color="grey"
            value={userValue}
            onChange={userValueChange}
            className="textField"
          />
          <TextError error={userError} />
        </div>
        <div className="field">
          <TextField
            id="input"
            label="Email"
            autoComplete="off"
            variant="standard"
            color="grey"
            value={emailValue}
            onChange={emailValueChange}
            className="textField"
          />
          <TextError error={emailError} />
        </div>
        {isUnregistred && (
          <div className="field">
            <TextField
              id="input"
              label="verifica email"
              autoComplete="off"
              variant="standard"
              color="grey"
              value={verEmailValue}
              onChange={verEmailValueChange}
              className="textField"
            />
            <TextError error={emailError} />
          </div>
        )}

        <div className="field">
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            onClick={handleOnSubmit}
          >
            Login
          </Button>
        </div>
        {!isUnregistred && (
          <div className="field">
            <button
              className="toRegister"
              onClick={() => {
                setIsUnregistred(true);
              }}
            >
              ¿No tienes cuenta?
            </button>
          </div>
        )}
      </div>
      {goHome && <Navigate to="/" />}
    </div>
  );
};

export default Login;
