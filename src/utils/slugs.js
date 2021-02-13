const labelToSlug = str => str.replace(/[-)(.]/g,'').replace(/ /g,'-').toLowerCase()

module.exports = {
    labelToSlug
}
