// Find the Languages category.
var category = _.find(window.OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES,
                      { id: 'languages' });
// Add Go as a new subcategory under Languages.

console.log(category)


category.subCategories.splice(2,0,{ // Insert at the third spot.
  // Required. Must be unique.
  id: "java",
  // Required.
  label: "SEBShift-java",
  // Optional. If specified, defines a unique icon for this item.
  icon: "icon-go-gopher",
  // Required. Items matching any tag will appear in this subcategory.
  tags: [
    "java"
  ]
});

// Add a SEBShift category as the first category tab.
window.OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES.unshift({
  // Required. Must be unique.
  id: "SEBShift",
  // Required
  label: "SEBShift",
  subCategories: [
    {
      // Required. Must be unique.
      id: "java",
      // Required.
      label: "SEBShift-java",
      // Optional. If specified, defines a unique icon for this item.
      icon: "icon-go-gopher",
      // Required. Items matching any tag will appear in this subcategory.
      tags: [
        "java"
      ]
    },
    {
      // Required. Must be unique.
      id: "jenkins",
      // Required.
      label: "JAAS (Jenkins as a service )",
      // Optional. If specified, defines a unique icon for this item.
      icon: "icon-jenkins",
      // Required. Items matching any tag will appear in this subcategory.
      tags: [
        "jenkins"
      ]
    }
  ]
});