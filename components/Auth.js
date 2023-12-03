import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [login, setLogin] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('login').then((savedLogin) => {
      if (savedLogin) {
        // Если есть сохраненный логин, входим в учетную запись автоматически
        // Например, перенаправляем на главный экран приложения
         navigation.navigate('Домашняя страница');
      }
    });
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch('https://samakonalocal.ru/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login }),
      });

      const data = await response.json();

      if (data.status === 'ok') {
        // Если аутентификация успешна, сохраняем логин в AsyncStorage
        await AsyncStorage.setItem('login', login);
        // Например, перенаправляем на главный экран приложения
         navigation.navigate('Домашняя страница');
      } else {
        // Выводим сообщение об ошибке аутентификации
        console.error('Ошибка аутентификации:', data.message);
      }
    } catch (error) {
      // Обработка ошибок сети или других проблем
      console.error('Ошибка:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Введите логин"
        value={login}
        onChangeText={setLogin}
      />
      <Button title="Войти" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
