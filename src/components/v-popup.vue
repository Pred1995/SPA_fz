<template>
  <v-dialog
    v-model="showPopup"
    width="500"
    @click:outside="closePopup"
  >

    <v-card>
      <v-card-title class="headline grey lighten-2">
        Пакет: {{dataPopup.name}}
      </v-card-title>

      <v-card-text>
        Всего загрузок: {{dataPopup.total}}
      </v-card-text>
      <v-card-text>
        Версия: {{dataPopup.id}}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="closePopup"
        >
          Закрыть
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["showPopup", "dataPopup"],
  methods: {
    closePopup() {
      this.$emit("closePopup");
    }
  }
}
</script>

<style>
</style>
