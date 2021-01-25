<template>
   <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="5"
          >
            <v-form @submit.prevent="getPackage">
              <v-responsive>
                <v-text-field
                  @input="getPackage"
                  placeholder="Введите название пакета"
                  v-model="package"
                ></v-text-field>
              </v-responsive>
            </v-form>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
            <router-view />
            </v-sheet>
          </v-col>
        </v-row>
 </v-container>
    </v-main>
     <v-footer
       class="footer"
       fixed
     >
       <v-container >
         <v-row no-gutters>
           <v-col
             cols="12"
             lg="5"
             md="7"
           >
             <v-card
             >
               <v-list-item three-line>
                 <v-list-item-content>
                   <div class="overline mb-4">
                     Информация об авторе
                   </div>
                   <v-list-item-title class="headline mb-1">
                     Тихон Щепетков
                   </v-list-item-title>
                   <v-list-item-subtitle>Github: <a href="https://github.com/Pred1995" target="_blank">https://github.com/Pred1995</a> </v-list-item-subtitle>
                 </v-list-item-content>

                 <v-list-item-avatar
                   tile
                   size="80"
                   color="grey"
                 ></v-list-item-avatar>
               </v-list-item>
             </v-card>
           </v-col>
         </v-row>
       </v-container>
     </v-footer>
  </v-app>
</template>

<script>
import {  mapActions } from 'vuex'
import _ from 'lodash'

export default {
  name: 'App',
  data: () => ({
    package: null
  }),
  methods: {
    ...mapActions(['getPackages']),
    getPackage: _.debounce(async function () {
      const packages = await this.getPackages(this.package)
    }, 500)
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@media (max-width: 600px) {
  .footer {
    display: none;
  }
}
</style>
