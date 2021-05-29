<template>
  <div class="auth-content">
    <div class="auth-modal">
      <img src="@/assets/logo.png"  alt="Logo">
      <div class="auth-title">{{ showSignup ? 'Cadastro' : 'Login'}}</div>

      <input class="mb-4" v-if="showSignup" v-model="user.name" type="text" name="name" placeholder="Nome">
      <input class="mb-4" v-model="user.email" type="email" name="email" placeholder="E-mail">
      <input class="mb-4" v-model="user.password" type="password" name="password" placeholder="Senha">
      <input 
        v-if="showSignup" 
        v-model="user.confirmPassword"  
        type="password" 
        name="confirmPassword" 
        placeholder="Confirme a Senha">
      
      <button class="mt-3" v-if="showSignup" @click="signup">Registrar</button>
      <button class="mt-3" v-else @click="signin">Entrar</button>

      <a style="text-decoration: none" href @click.prevent="showSignup = !showSignup">
        <span style="color: #A3A3A3;" v-if="showSignup">Já tem cadastro ? Acesse o Login!</span>
        <span style="color: #A3A3A3;" v-else>Não tem cadastro ? Registre-se aqui!</span>
      </a>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, showError, userKey } from '@/global'
import axios from 'axios'

export default {
  name: 'Auth',
  data: function() {
    return {
      showSignup: false,
      user: {}
    }
  },
  methods: {
    signin() {
      axios.post(`${baseApiUrl}/signin`, this.user)
        .then(res => {
          this.$store.commit('setUser', res.data)
          localStorage.setItem(userKey, JSON.stringify(res.data))
          this.$router.path({ name: 'home' })
        })
        .catch(showError)
    },
    signup() {
      axios.post(`${baseApiUrl}/signup`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess()
          this.user = {}
          this.showSignup = false
        })
        .catch(showError) 
    }
  }
}
</script>

<style>
.auth-content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-modal {
  background-color: white;
  width: 350px;
  padding: 35px;
  box-shadow: 0 1px 5px rgb(0,0,0, 0.15);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-title {
  font-size: 1.2rem;
  font-weight: 500;
  color: #0f80aa;
  margin-top: 10px;
  margin-bottom: 15px;
}

.auth-modal input {
  border: 1px solid #BBB;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 15px;
  padding: 3px 8px;
  /* outline:  */
}

.auth-modal button {
  align-self: flex-end;
  background: #16679a;
  padding: 5px 15px;
  color: white;
  border-radius: 4px;
  border: none;
}

.auth-modal a {
  margin-top: 35px;
}

.auth-modal hr {
  border: 0;
  width: 100%;
  height: 12px;
  background-image: linear-gradient(to right,
    rgba(120, 120, 120, 0),
    rgba(120, 120, 120, 0.75),
    rgba(120, 120, 120, 0)
  ),
}

</style>
