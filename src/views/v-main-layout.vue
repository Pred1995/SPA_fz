<template>
  <div>
    <div>
      <v-loader v-if="show"/>
      <v-simple-table v-else height="60vh">
        <template v-if="packages">
          <thead>
          <tr>
            <th class="text-left">
              Имя пакета
            </th>
            <th class="text-left">
              Версия
            </th>
            <th class="text-left">
              Рейтинг
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="item in packages"
            :key="item.id"
            @click="openPopup({...item})"
          >
            <td class="text-left">{{ item.name }}</td>
            <td class="text-left">{{ item.id }}</td>
            <td class="text-left">{{ item.rank }}</td>
          </tr>
          </tbody>
        </template>
        <div v-else class="d-flex justify-md-center justify-center align-center main__body">
          <p>{{ error == null ? 'Введите название пакета': error}}</p>
        </div>

      </v-simple-table>
      <div class="mt-auto">
        <v-pagination
          v-model="currentPage"
          :length="lastPage"
          :total-visible="10"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
    </div>
    <v-popup :key="showPopup" :showPopup="showPopup" :dataPopup="dataPopup" @closePopup="closePopup"/>
  </div>


</template>

<script>
import VLoader from "../components/v-loader";
import VPopup from "../components/v-popup";
export default {
  components: {VPopup, VLoader},
  data: () => ({
    showPopup: false,
    dataPopup: {}
  }),
  methods: {
    closePopup() {
      // открытие модального окна
      this.showPopup = false;
    },
    openPopup(item) {
      // открытие модального окна
      this.dataPopup = item
      this.showPopup = true;
    },
  },
  computed: {
    packages() {
      return this.$store.getters.packages ? this.$store.getters.packages[this.currentPage - 1] : null
    },
    lastPage() {
      return this.$store.getters.lastPage
    },
    error() {
      return this.$store.state.error
    },
    show() {
      return this.$store.state.show
    },
    currentPage: {
      get() {
        return this.$store.state.currentPage + 1
      },
      set(value) {
        this.$store.commit('setCurrentPage', value - 1)
      }
    }
    }
}
</script>

<style>
  th {
    width: 33.333%;
  }
  td {
    width: 33.333%;
  }
  tbody tr {
    cursor: pointer;
  }
  .main__body {
    height: 60vh;
  }
</style>
