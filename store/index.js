export const state = () => ({
  data: [],
  headers: [
    {
      text: 'Name',
      align: 'start',
      sortable: false,
      value: 'name',
    },
    { text: 'Addressline', value: 'addressline' },
    { text: 'City', value: 'city' },
    { text: 'State/Province/Region', value: 'province' },
    { text: 'Zip/Postal Code', value: 'zip' },
    { text: 'Country', value: 'country' },
    { text: 'Phone number', value: 'phonenumber' },
  ],
})
export const mutations = {
  input(
    state,
    { name, addressline, city, province, zip, country, phonenumber }
  ) {
    state.data.push({
      name,
      addressline,
      city,
      province,
      zip,
      country,
      phonenumber,
    })
  },
}
export const getters = {
  data(state) {
    return state.data
  },
}
