<template>
  <div class="user-admin">
    <b-form>
      <input id="user-id" type="hidden" v-model="user.id"/>
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Nome:" label-for="user-name">
            <b-form-input 
              id="user-name" 
              type="text" 
              v-model="user.name" 
              required 
              placeholder="Informe o Nome do Usuário">
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="E-mail:" label-for="user-email">
            <b-form-input 
              id="user-email" 
              type="text" 
              v-model="user.email" 
              required 
              placeholder="Informe o Email do Usuário">
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-form-checkbox id="user-admin" v-model="user.admin" class="mt-3 mb-3">
        Administrador
      </b-form-checkbox>

       <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Senha:" label-for="user-password">
            <b-form-input 
              id="user-password" 
              type="password" 
              v-model="user.password" 
              required 
              placeholder="Informe a Senha do Usuário">
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="Confirmação de Senha:" label-for="user-confirm-password">
            <b-form-input 
              id="user-confirm-password" 
              type="password" 
              v-model="user.confirmPassword" 
              required 
              placeholder="Confirme a senha do Usuário">
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
      <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
      <b-button variant="danger" @click="reset" class="ml-2">
        Cancelar
      </b-button>
    </b-form>
    <hr>
    <b-table hover striped :items="users" :fields="fields"></b-table>
  </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl, showError } from '@/global'

export default {
  name: 'UserAdmin',
  data: function() {
    return {
      mode: 'save',
      user: {},
      users: [],
      fields: [
        { key: 'id', label: 'Código', sortable: true},
        { key: 'name', label: 'Nome', sortable: true},
        { key: 'email', label: 'E-mail', sortable: true},
        { key: 'admin', 
          label: 'Administrador', 
          sortable: true, 
          formatter: value => value ? 'Sim' : 'Não'
        },
        { key: 'actions', label: 'Ações'},
      ]

    }
  },
  methods: {
    loadUsers() {
      const url = `${baseApiUrl}/users`
      axios.get(url).then(res => {
        this.users = res.data
      })
    },
    reset() {
      this.mode = 'save'
      this.user = {}
      this.loadUsers()
    },
    save() {
      const method = this.user.id ? 'put' : 'post'
      const id = this.user.id ? `/${this.user.id}` : ''
      axios[method](`${baseApiUrl}/users${id}`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess()
          this.reset()
        })
        .catch(showError)
    },
    remove() {
      const id = this.user.id
      axios.delete(`${baseApiUrl}/users/${id}`)
        .then(() => {
            this.$$toasted.global.defaultSuccess()
            this.seret()
        })
        .catch(showError)
    }
  },
  mounted() {
    this.loadUsers();
  }
}
</script>

<style>

</style>
