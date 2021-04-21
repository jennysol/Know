<template>
  <div class="home">
    <pageTitle icon="fa fa-home" main="Dashboard" sub="Base de Conhecimento"></pageTitle>
    <div class="stats">
      <Stat title="Categorias" :value="stat.categorias" icon="fa fa-folder" color="#d54d50"/>
      <Stat title="Artigos" :value="stat.articles" icon="fa fa-file" color="#3bc480"/>
      <Stat title="Usuários" :value="stat.users" icon="fa fa-users" color="#3282cd"/>
    </div>
  </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import Stat from './Stat'
import axios from 'axios'
import { baseApiUrl} from '@/global'

export default {
  name: 'Home',
  components: { PageTitle, Stat },
  data: function() {
    return {
      stat: {}
    }
  },
  methods: {
    getStatus() {
      axios.get(`${baseApiUrl}/stats`).then(res => this.stat = res.data)
    }
  },
  mounted() {
    this.getStatus();
  }
}
</script>

<style>
  .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
