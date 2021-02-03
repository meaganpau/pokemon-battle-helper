export const labelToSlug = str => str.replace(/[-)(]/g,'').replace(/ /g,'-').toLowerCase()

export const slugToLabel = str => str.replace(/-/g, ' (').concat(')')