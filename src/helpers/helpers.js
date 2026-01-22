module.exports = {
  sum: (a, b) => a + b,
  multiply: (a, b) => a * b,
  toUpperCase: (str) => str.toUpperCase(),
  sortable: (field, sort) => {
    const sortType = field === sort.column ? sort.type : "default"
    const icons = {
      default: "fa-solid fa-sort",
      asc: "fa-solid fa-sort-up",
      desc: "fa-solid fa-sort-down",
    }
    const types = {
      default: "desc",
      desc: "asc",
      asc: "desc",
    }
    const type = types[sortType]
    const icon = icons[sortType]

    return `<a href="?_sort=true&column=${field}&type=${type}"><i class="${icon}"></i></a>`
  },
}
