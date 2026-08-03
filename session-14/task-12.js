function formatFollowers(count) { try { if (count < 0) throw new Error('Negative count'); return count + ' followers'; } catch (e) { return e.message; } }
