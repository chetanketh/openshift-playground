// Add Go to the Languages category
var category = _.find(window.OPENSHIFT_CONSTANTS.CATALOG_CATEGORIES,
{ id: 'languages' });
category.items.splice(2,0,{ // Insert at the third spot
  // Required.  Must be unique
  id: "sebshift",
  // Required
  label: "sebshift",
  // Optional.  If specified, defines a unique icon for this item
  iconClass: "font-icon icon-go-gopher",
  // Optional.  If specified, enables matching other tag values to this category
  // item
  categoryAliases: [
    "sebshift"
  ]
});

// Add a Featured category section at the top of the catalog
window.OPENSHIFT_CONSTANTS.CATALOG_CATEGORIES.unshift({
  // Required.  Must be unique
  id: "SEBShift",
  // Required
  label: "SEBShift",
  // Optional.  If specified, each item in the category will utilize this icon
  // as a default
  iconClassDefault: "fa fa-code",
  items: [
    {
      // Required.  Must be unique
      id: "jhp-liberty",
      // Required
      label: "jhp-liberty",
      // Optional.  If specified, defines a unique icon for this item
      iconClass: "font-icon icon-go-gopher",
      // Optional.  If specified, enables matching other tag values to this
      // category item
      categoryAliases: [
        "jhp-liberty"
      ],
      // Optional.  If specified, will display below the item label
      description: "This is a jhp liberty image provided by openshift."
    },
    {
      // Required.  Must be unique
      id: "JAAS",
      // Required
      label: "JAAS",
      // Optional.  If specified, defines a unique icon for this item
      iconClass: "font-icon icon-jenkins",
      // Optional.  If specified, will display below the item label
      description: "Jenkins as a service."
    }
  ]
});