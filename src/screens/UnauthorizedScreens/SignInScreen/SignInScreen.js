import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppWrapper from "../../../components/app-wrapper";
import AppInput from "../../../components/app-input";
import AppButton from "../../../components/app-button";
import { globalStyles } from "../../../theme/globalStyles";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../../store/actions/user_token";
import { setUserData } from "../../../store/actions/user_data";

const SignInScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  function validation() {
    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    if (password.length <= 5) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }
    if (emailRegex.test(email) && password.length > 5) {
      dispatch(setUserData([{email: email}]))
      dispatch(setUserToken(true));
    }
  }

  return (
    <AppWrapper screenTitle={"Авторизоваться!"} keyboardView>
      <View style={styles.input_box}>
        <AppInput
          placeholder={"Email"}
          value={email}
          onChangeText={setEmail}
        />
        {emailError && <Text style={globalStyles.errorMessage}>Неверная почта!</Text>}
      </View>
      <View style={styles.input_box}>
        <AppInput
          placeholder={"Пароль"}
          value={password}
          onChangeText={setPassword}
        />
        {passwordError && <Text style={globalStyles.errorMessage}>Неверный пароль!</Text>}
      </View>
      <View style={styles.input_box}>
        <AppButton onPress={validation} title={"Войти"} />
      </View>
    </AppWrapper>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input_box: {
    marginBottom: 12,
  },
});
