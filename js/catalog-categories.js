// Add Go to the Languages category
var category = _.find(window.OPENSHIFT_CONSTANTS.CATALOG_CATEGORIES,
{ id: 'languages' });
category.items.splice(2,0,{ // Insert at the third spot
  // Required.  Must be unique
  id: "go",
  // Required
  label: "Go",
  // Optional.  If specified, defines a unique icon for this item
  iconClass: "font-icon icon-go-gopher",
  // Optional.  If specified, enables matching other tag values to this category
  // item
  categoryAliases: [
    "golang"
  ]
});

// Add a Featured category section at the top of the catalog
window.OPENSHIFT_CONSTANTS.CATALOG_CATEGORIES.unshift({
  // Required.  Must be unique
  id: "featured",
  // Required
  label: "Featured",
  // Optional.  If specified, each item in the category will utilize this icon
  // as a default
  iconClassDefault: "fa fa-code",
  items: [
    {
      // Required.  Must be unique
      id: "go",
      // Required
      label: "Go",
      // Optional.  If specified, defines a unique icon for this item
      iconClass: "font-icon icon-go-gopher",
      // Optional.  If specified, enables matching other tag values to this
      // category item
      categoryAliases: [
        "golang"
      ],
      // Optional.  If specified, will display below the item label
      description: "An open source programming language developed at Google in " +
      "2007 by Robert Griesemer, Rob Pike, and Ken Thompson."
    },
    {
      // Required.  Must be unique
      id: "jenkins",
      // Required
      label: "Jenkins",
      // Optional.  If specified, defines a unique icon for this item
      iconClass: "font-icon icon-jenkins",
      // Optional.  If specified, will display below the item label
      description: "An open source continuous integration tool written in Java."
    }
  ]
});