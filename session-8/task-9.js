function getRecentSearches() {
  const saved = localStorage.getItem('recentSearches');
return saved ? JSON.parse(saved) : [];
} console.log(getRecentSearches());

