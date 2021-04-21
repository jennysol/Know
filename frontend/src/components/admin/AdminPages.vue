<template>
  <div class="admin-pages">
    <pageTitle icon="fa fa-cogs" main="Administração do Sistema" sub="Cadastros & Cia"></pageTitle>
    <div class="admin-pages-tabs">
      <b-cards no-body>
        <b-tabs card>
          <b-tab title="Artigos" active>
            <h1>Artigo</h1>
          </b-tab>
          <b-tab title="Categorias" active>
            <h1>Categorias</h1>
          </b-tab>
          <b-tab title="Usuários" active>
            <h1>Usuário</h1>
          </b-tab>
        </b-tabs>
      </b-cards>
    </div>
  </div>
</template>

<script>
import PageTitle from '../template/PageTitle'

export default {
  name: 'AdminPages',
  components: { PageTitle }

}
</script>

<style>

</style>
