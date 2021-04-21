<template>
  <div class="admin-pages">
    <pageTitle icon="fa fa-cogs" main="Administração do Sistema" sub="Cadastros & Cia"></pageTitle>
    <div class="admin-pages-tabs">
      <b-cards no-body>
        <b-tabs card>
          <b-tab title="Artigos" active>
             <ArticleAdmin />
          </b-tab>
          <b-tab title="Categorias" active>
             <CategoryAdmin />
          </b-tab>
          <b-tab title="Usuários" active>
            <UserAdmin />
          </b-tab>
        </b-tabs>
      </b-cards>
    </div>
  </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import ArticleAdmin from './ArticleAdmin'
import CategoryAdmin from './CategoryAdmin'
import UserAdmin from './UserAdmin'

export default {
  name: 'AdminPages',
  components: { PageTitle, ArticleAdmin, CategoryAdmin, UserAdmin   }

}
</script>

<style>

</style>
