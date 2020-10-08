<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="namein" label="Fullname" required />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="addressline"
            :counter="25"
            label="Address line"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="cityin" label="City" required />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="statein"
            label="State/Province/Region"
            required
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="zipin" label="Zip/Postal Code" required />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="countryin" label="Country" required />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="phonein" label="Phone number" required />
        </v-col>
      </v-row>
    </v-container>

    <v-btn color="success" class="mr-4" @click="validate"> submit </v-btn>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      namein: '',
      addressin: '',
      cityin: '',
      statein: '',
      zipin: '',
      countryin: '',
      phonein: '',
    }
  },
  computed: {
    ...mapGetters(['data']),
  },
  methods: {
    validate() {
      const name = this.namein
      const addressline = this.addressline
      const city = this.cityin
      const province = this.statein
      const zip = this.zipin
      const country = this.countryin
      const phonenumber = this.phonein
      this.$store.commit('input', {
        name,
        addressline,
        city,
        province,
        zip,
        country,
        phonenumber,
      })
    },
  },
}
</script>
<style>
.theme--dark.v-application {
  background-image: url(https://i.pinimg.com/originals/10/da/c1/10dac177e7b22cd1f368ecb50f5dd9ef.gif);
  background-size: cover;
  max-width: 1920px;
  max-height: 1080px;
}
</style>
