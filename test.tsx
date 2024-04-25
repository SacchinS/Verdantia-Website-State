const unsubscribe= onSnapshot(doc(db, "selectedFilters", "selected"), (doc) => {
    const data = doc.data();
    if (data) {
      setSelectedFilters(data.roles);
    } else {
      setSelectedFilters([]);
    }
  });